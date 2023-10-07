import { NextApiRequest, NextApiResponse } from "next"
import { Formidable, PersistentFile } from "formidable"
import { getSession } from "next-auth/react"
import { promises as fs } from "fs"
import { DrupalJsonApiParams } from "drupal-jsonapi-params"
import { DrupalFile, DrupalMedia, DrupalNode, JsonApiErrors } from "next-drupal"
import { drupal } from "lib/drupal"
import * as yup from "yup"



type FormBodyFields = {
  title: string
  body: string
  field_estimation_du_prix: string
  field_date_de_livraison: date
  field_choisir_une_categorie: string
  revision_log: string
  document: PersistentFile
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
    // // Only accept DELETE requests.
    // if (req.method !== "DELETE") {
    //   return res.status(405).end()
    // }

    // Check if the user is authenticated.
    const session = await getSession({ req })
    if (!session) {
      return res.status(403).end()
    }

    const id = req.query.id as string

    // Delete the article.
    if (req.method == "DELETE") {
      const deleted = await drupal.deleteResource("node--financement", id, {
        withAuth: session.accessToken,
      })

      if (!deleted) {
        throw new Error()
      }
    }

    // Edit the article.
    if (req.method == "PATCH") {

      const session = await getSession({ req })
      if (!session) {
        return res.status(403).end()
      }
      const form = new Formidable({
        keepExtensions: true,
      })


      const fields = await new Promise<FormBodyFields>((resolve) => {
        form.parse(req, async (error, fields, files) => {


          resolve({
            title: fields.title,
            body: fields.body[0],
            document: files["document"][0],

            field_estimation_du_prix: fields.field_estimation_du_prix[0],
            field_date_de_livraison: fields.field_date_de_livraison,
            field_choisir_une_categorie: fields["field_choisir_une_categorie"][0],

               revision_log: fields.revision_log,

          })
        })
      })

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
      const edit = await drupal.updateResource(
        "node--financement",
        id,
        {
          data: {
            attributes: {
              title: fields.title,

              body: {
                value: fields.body,
                format: "basic_html",
              },
              field_estimation_du_prix: fields.field_estimation_du_prix,
              field_date_de_livraison: fields.field_date_de_livraison,

              revision_log: fields.revision_log,
              langcode: fields.langcode,
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
        }

      )


      if (!edit) {
        throw new Error()
      }
    }

    res.end()
  } catch (error) {
    if (error instanceof JsonApiErrors) {
      return res.status(error.statusCode).json(error.errors)
    }

    res.status(500).json({ message: "Something went wrong. truc Please try again." })
  }
}
