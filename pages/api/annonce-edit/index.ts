import { NextApiRequest, NextApiResponse } from "next"
import { Formidable, PersistentFile } from "formidable"
import { getSession } from "next-auth/react"
import { promises as fs } from "fs"
import { DrupalJsonApiParams } from "drupal-jsonapi-params"
import { DrupalFile, DrupalMedia, DrupalNode, JsonApiErrors } from "next-drupal"
import { drupal } from "lib/drupal"

type FormBodyFields = {
  title: string
  body: string
  document: PersistentFile
  gid: string
  field_estimation_du_prix: string
  field_choisir_une_categorie: string
}

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Only accept POST requests.
    if (req.method !== "POST") {
      return res.status(405).end()
    }

    // Check if the user is authenticated.
    const session = await getSession({ req })
    if (!session) {
      return res.status(403).end()
    }

    // Retrieve form fields from request.
    // We're using Formidable to parse the request and format our fields.
    const form = new Formidable({
      keepExtensions: true,
    })

    const fields = await new Promise<FormBodyFields>((resolve, reject) => {
      form.parse(req, async (error, fields, files) => {
        if (error) {
          reject(error)
          return
        }

        resolve({
          title: fields.title[0],
          body: fields.body[0],
          document: files["document"][0],
          gid: fields.gid[0],
          field_estimation_du_prix: fields.field_estimation_du_prix[0],
          field_choisir_une_categorie: fields["field_choisir_une_categorie"][0],
          revision_log: fields.revision_log[0],
        })
      })
    })

    // To create the node--article resource, we need to create the referenced entities first.

    // 1. Create file--file resource from the image.
    // createMediaFileResource is a helper to create file binaries for media.
    // See https://www.drupal.org/node/3024331.


    const file = await drupal.createFileResource<DrupalFile>(
      "file--file",
      {
        data: {
          attributes: {
            type: "media--document",
            field: "field_media_document",
            filename: fields.document.newFilename,
            file: await fs.readFile(fields.document.filepath),
          },
        },
      },
      {
        withAuth: session.accessToken,
      }
    )

    // 2. Create the media-document image resource from the file--file.
    const media = await drupal.createResource<DrupalMedia>(
      "media--document",
      {
        data: {
          attributes: {
            name: fields.document.newFilename,
          },
          relationships: {
            field_media_document: {
              data: {
                type: "file--file",
                id: file.id,
              },
            },
          },
        },
      },
      {
        withAuth: session.accessToken,
      }
    )

    // Create the node--article resource with the media--document relationship.
    const article = await drupal.createResource<DrupalNode>(
      "node--financement",
      {
        data: {
          attributes: {
            title: fields.title,
            revision_log: fields.revision_log,
            body: {
              value: fields.body,
              format: "basic_html",
            },
          field_estimation_du_prix: fields.field_estimation_du_prix,
          },
          relationships: {
            field_document_s_annexe_s_: {
              data: {
                type: "media--document",
                id: media.id,
              },
            },

            field_choisir_une_categorie: {
                data: {
                    type: "taxonomy_term--categorie",
                    id: fields.field_choisir_une_categorie,

            },
            },





          },
        },
      },
      {
        withAuth: session.accessToken,
        params: new DrupalJsonApiParams()
        .addInclude([
          "field_choisir_une_categorie",
        ])
          .addFields("node--financement", ["title"])
          .addFields("taxonomy_term--categorie", ["name"])

          .getQueryObject(),
      }
    )


    const group = await await drupal.createResource<DrupalNode>(
      "group_content--federage-group_node-financement",
      {
        data: {
          type: "group_content--federage-group_node-financement",
          attributes: {
            label: article.title,
            created: article.created,
            changed: article.changed,

            default_langcode: true
          },
          relationships: {
            gid: {
              data: {
                  type: "group--federage",
                  id: fields.gid,

                    },

  },
            entity_id: {
              data: {
                type: "node--financement",
                id: article.id,
                meta: {
                    drupal_internal__target_id: article.drupal_internal__nid
                },
              },
            },
          },
        },
      },
      {
        withAuth: session.accessToken,
        params: new DrupalJsonApiParams()
          .addFields("node--financement", ["title"], ["body"])
          .getQueryObject(),
      }
    )


    // The article has been created.
    // Return the article resource.
    res.json(article)
  } catch (error) {
    if (error instanceof JsonApiErrors) {
      return res.status(error.statusCode).json(error.errors)
    }

    res.status(500).json({ message: "Something went wrong. Please try again." })
  }
}
