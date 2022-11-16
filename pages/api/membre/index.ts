import { NextApiRequest, NextApiResponse } from "next"
import { Formidable, PersistentFile } from "formidable"
import { getSession } from "next-auth/react"
import { promises as fs } from "fs"
import { DrupalJsonApiParams } from "drupal-jsonapi-params"
import { DrupalFile, DrupalMedia, DrupalNode, JsonApiErrors } from "next-drupal"
import { drupal } from "lib/drupal"

type FormBodyFields = {
  select_users: string
  group_roles: string
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
          group_roles: fields.group_roles[0],
          gid: fields.gid[0],
        })
      })
    })

    // To create the node--article resource, we need to create the referenced entities first.

    // 1. Create file--file resource from the image.
    // createMediaFileResource is a helper to create file binaries for media.
    // See https://www.drupal.org/node/3024331.




    // Create the node--article resource with the media--image relationship.


    const group = await await drupal.createResource<DrupalNode>(
      "group_content--federage-group_membership",
      {
        data: {
          type: "group_content--federage-group_membership",

          relationships: {
            gid: {
                data:
                         {
                           type: "group--federage",
                           id: fields.gid,
                         }
                      },
                    entity_id: {
                                          data: {
                                              type: "user--user",
                                              id: fields.select_users,

                                              }
                                          },
                  group_roles: {
                    data: [
                        {
                            type: "group_role--group_role",
                            id: fields.group_roles,

                        }
                    ]
                    }
          },
        },
      },
      {
        withAuth: session.accessToken,
        params: new DrupalJsonApiParams()
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
