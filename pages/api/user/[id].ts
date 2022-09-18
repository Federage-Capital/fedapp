import { NextApiRequest, NextApiResponse } from "next"
import { getSession } from "next-auth/react"
import { JsonApiErrors } from "next-drupal"
import { drupal } from "lib/drupal"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {

    // Check if the user is authenticated.
    const session = await getSession({ req })

    if (!session) {
      return res.status(403).end()
    }

    // Get the user.
    if (req.method == "GET") {
      const edit = await drupal.getResource("user--user", "51204d9c-332f-4310-9af0-8c6b4e29db12", {
      })

      if (!edit) {
        throw new Error()
      }

      return
    }

    // Edit the user.
    if (req.method == "PATCH") {
      const edit = await drupal.updateResource("user--user", "51204d9c-332f-4310-9af0-8c6b4e29db12", {
        data: {
          attributes: {
            display_name: "Clementz23",
          },
        },
      })

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
