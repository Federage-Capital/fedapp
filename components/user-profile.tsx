import Image from "next/image"
import { DrupalUser } from "next-drupal"

import { absoluteUrl, formatDate } from "lib/utils"

interface UserProfileProps {
  user: DrupalUser
}




export function UserProfile({ users, ...props }: UserProfileProps) {
  return (
    <user {...props}>
  page user

  {users?.length ? (
    users.map((user) => (
      <div key={user.uid}>
      {user.uid}
        <div className="my-10" />
        <div className="my-10" />
      </div>
    ))
  ) : (
    <p className="py-4">No nodes found</p>
  )}
    </user>
  )
}

export async function getStaticProps(
  context
): Promise<GetStaticPropsResult<IndexPageProps>> {

const users = await drupal.getResourceCollection("user--user")


return {
  props: {
    users,

  },
  revalidate: 60,
}
}
