import { NextApiRequest, NextApiResponse } from "next"
import { Formidable, PersistentFile } from "formidable"
import { getSession } from "next-auth/react"
import { promises as fs } from "fs"
import { DrupalJsonApiParams } from "drupal-jsonapi-params"
import { DrupalFile, DrupalMedia, DrupalNode, JsonApiErrors } from "next-drupal"
import { drupal } from "lib/drupal"

type FormBodyFields = {
  select_users: string
  gid: string

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
          select_users: fields.select_users[0],
          gid: fields.gid[0],
        })
      })
    })





    // Create the node--article resource with the media--image relationship.
    const article = await drupal.createResource<DrupalNode>(
      "group_content--federage-group_membership",
      {
        data: {
          attributes: {
            title: fields.title,
            body: {
              value: fields.body,
              format: "basic_html",
            },
          },
          relationships: {
            gid: {
              data:
               {
                 type: "group--federage",
                 id: fields.gid,
               }
            },
            uid: {
        data: {
            type: "user--user",
            id: fields.select_users,

            }
        },
        entity_id: {
            data:
            {
              type: "user--user",
              id: fields.select_users
            }
                    }
                  },
                  group_type: {
                  data: {
                      type: "group_type--group_type",
                      id: "25744af9-3e45-462e-b389-cd16df5dfd16",
                  
                  },
          },
        },
      },
      {
        withAuth: session.accessToken,
        params: new DrupalJsonApiParams()
          .addFields("node--article", ["title"])
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
