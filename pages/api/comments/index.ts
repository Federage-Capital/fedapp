import { NextApiRequest, NextApiResponse } from "next"
import { Formidable, PersistentFile } from "formidable"
import { getSession } from "next-auth/react"
import { promises as fs } from "fs"
import { DrupalJsonApiParams } from "drupal-jsonapi-params"
import { DrupalFile, DrupalMedia, DrupalNode, DrupalComment, JsonApiErrors } from "next-drupal"
import { drupal } from "lib/drupal"

type FormBodyFields = {
  subject: string
  comment: string
  nodeid: string

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
      form.parse(req, async (error, fields) => {
        if (error) {
          reject(error)
          return
        }

        resolve({
          subject: fields.subject[0],
          comment: fields.comment[0],
          nodeid: fields.nodeid[0]
        })
      })
    })

    // To create the node--article resource, we need to create the referenced entities first.

    // 1. Create file--file resource from the image.
    // createMediaFileResource is a helper to create file binaries for media.
    // See https://www.drupal.org/node/3024331.




    // Create the node--article resource with the media--image relationship.
    const comment = await drupal.createResource<DrupalNode>(
      "comment--comment",
      {
        data: {
          attributes: {
            subject: fields.subject,
            comment_body: {
              value: fields.comment,
              format: "basic_html",
            },
            entity_type:"node",
            field_name: "comment",
          },
          relationships: {


                 pid: {
                     data: null,

                 },
            entity_id: {
              data: {
                type: "node--financement",
                id: fields.nodeid,
              },
            },
          },
        },
      },
      {
        withAuth: session.accessToken,
        params: new DrupalJsonApiParams()
          .addFields("comment-comment", ["subject"])
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
