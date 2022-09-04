import { DrupalClient } from "next-drupal"

export const drupal = new DrupalClient(
  process.env.NEXT_PUBLIC_DRUPAL_BASE_URL,
  {
    frontPage: "/home",
    previewSecret: process.env.DRUPAL_PREVIEW_SECRET,
    auth: {
      clientId: '54334bf1-55c3-4fe4-b739-5cfb41cd56d7',
      clientSecret: 'secret',
    },
  }
)
