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
  image: PersistentFile
  gid: string
  field_estimation_du_prix: string
  field_date_de_livraison: date
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
          image: files["image"][0],
          gid: fields.gid[0],
          field_estimation_du_prix: fields.field_estimation_du_prix[0],
          field_date_de_livraison: fields.field_date_de_livraison,
          field_choisir_une_categorie: fields["field_choisir_une_categorie"][0],

        })
      })
    })

    // To create the node--article resource, we need to create the referenced entities first.

    // 1. Create file--file resource from the image.
    // createMediaFileResource is a helper to create file binaries for media.
    // See https://www.drupal.org/node/3024331.

    const taxonomy_term2 = await drupal.createResource<DrupalMedia>(
      "taxonomy_term--categorie",
      {
        data: {
          attributes: {
            name: fields.field_choisir_une_categorie,
          },

        },
      },
      {
        withAuth: session.accessToken,
      }
    )


    const file = await drupal.createFileResource<DrupalFile>(
      "file--file",
      {
        data: {
          attributes: {
            type: "media--image",
            field: "field_media_image",
            filename: fields.image.newFilename,
            file: await fs.readFile(fields.image.filepath),
          },
        },
      },
      {
        withAuth: session.accessToken,
      }
    )

    // 2. Create the media--image resource from the file--file.
    const media = await drupal.createResource<DrupalMedia>(
      "media--image",
      {
        data: {
          attributes: {
            name: fields.image.newFilename,
          },
          relationships: {
            field_media_image: {
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

    // Create the node--article resource with the media--image relationship.
    const article = await drupal.createResource<DrupalNode>(
      "node--financement",
      {
        data: {
          attributes: {
            title: fields.title,
            field_date_de_livraison: fields.field_date_de_livraison,

            body: {
              value: fields.body,
              format: "basic_html",
            },
          field_estimation_du_prix: fields.field_estimation_du_prix,
          },
          relationships: {
            field_media_image: {
              data: {
                type: "media--image",
                id: media.id,
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
