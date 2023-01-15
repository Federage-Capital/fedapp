import { NextApiRequest, NextApiResponse } from "next"
import { Formidable, PersistentFile } from "formidable"
import { getSession } from "next-auth/react"
import { promises as fs } from "fs"
import { DrupalJsonApiParams } from "drupal-jsonapi-params"
import { DrupalFile, DrupalMedia, DrupalNode, JsonApiErrors } from "next-drupal"
import { drupal } from "lib/drupal"

type FormBodyFields = {
  label: string
description: string
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
          label: fields.label,
          field_description: fields.field_description[0],
          field_date_de_livraison: fields.field_date_de_livraison,
          field_categorie: fields["field_categorie"][0],

        })
      })
    })

    // To create the node--article resource, we need to create the referenced entities first.

    // 1. Create file--file resource from the image.
    // createMediaFileResource is a helper to create file binaries for media.
    // See https://www.drupal.org/node/3024331.

    // 2. Create the media--image resource from the file--file.

    const taxonomy_term2 = await drupal.createResource<DrupalMedia>(
      "taxonomy_term--categorie",
      {
        data: {
          attributes: {
            name: fields.field_categorie,
          },

        },
      },
      {
        withAuth: session.accessToken,
      }
    )
    // Create the node--article resource with the media--image relationship.
    const projetfederage = await drupal.createResource<DrupalNode>(
      "group--federage",
      {
        data: {
          attributes: {
            label: fields.label,
            field_description: {
                value: fields.field_description,
                format: "basic_html",
              },
              field_date_de_livraison: fields.field_date_de_livraison,
          },
          relationships:{
            field_categorie: {
              data: {
              type: "taxonomy_term--categorie",
              id: fields.field_categorie,
                    },
                            },
                          },

        },
      },
      {
        withAuth: session.accessToken,
        params: new DrupalJsonApiParams()
        .addInclude([
          "field_categorie",
        ])
          .addFields("group--projets_federage", ["label"])
          .addFields("taxonomy_term--categorie", ["name"])
          .getQueryObject(),
      }
    )

    // The article has been created.
    // Return the article resource.
    res.json(projetfederage)
  } catch (error) {
    if (error instanceof JsonApiErrors) {
      return res.status(error.statusCode).json(error.errors)
    }

    res.status(500).json({ message: "Something went wrong. Please try again." })
  }
}
