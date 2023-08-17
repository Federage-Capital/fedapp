import { NextApiRequest, NextApiResponse } from "next"
import { getSession } from "next-auth/react"
import { JsonApiErrors } from "next-drupal"
import { Formidable, PersistentFile } from "formidable"

import { drupal } from "lib/drupal"


type FormBodyFields = {
title:string
  promote: string
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


      const fields = await new Promise<FormBodyFields>((resolve, reject) => {
        form.parse(req, async (error, fields, files) => {
          if (error) {
            reject(error)
            return
          }

          resolve({
      
            promote: fields.promote[0],

          })
        })
      })
      const edit = await drupal.updateResource("node--financement", id, {
        data: {
          attributes: {

            promote: fields.promote,
               },
        },
      },
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
