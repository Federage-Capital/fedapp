import { NextApiRequest, NextApiResponse } from "next"
import { getSession } from "next-auth/react"
import { JsonApiErrors } from "next-drupal"

import { drupal } from "lib/drupal"

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
    if (req.method == "PUT") {
      const edit = await drupal.updateResource("node--financement", id, {
        data: {
          attributes: {

          },
          relationships: {
            field_statut: {
              data: {
                type: "taxonomy_term--statut",
                id: "add21795-b0ad-45ab-ba10-a16859dcaf05",
              },
            },
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

    res.status(500).json({ message: "Something went wrong. Please try again." })
  }
}
