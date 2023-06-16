import Image from "next/image"
import { DrupalNode } from "next-drupal"
import useSWR from 'swr'
import { UserCardProject } from "components/user-card-projects"
import Link from 'next/link'

import { absoluteURL, formatDate } from "lib/utils"
import { UserListCard } from "components/card-user-profile"

interface UserProfileProps {
  node: DrupalNode
}

const fetcher = (url) => fetch(url).then((r) => r.json());

export function UserProfile({ node, ...props }: UserProfileProps) {



  const { data: userprojects, error: userprojectsError } = useSWR(() => 'https://fed.septembre.io/user-s-projects-rest/' + node.id, fetcher)


  if (!userprojects) return <div>Loading User's project ...</div>

  return (
    <article {...props}>
      <h1 className="mb-4 text-6xl font-black leading-tight">  {node.display_name}</h1>
      <div className="mb-4 text-gray-600">
        {node.field_description?.processed && (
          <div
            dangerouslySetInnerHTML={{ __html: node.field_description?.processed }}
            className="mt-6 text-xl leading-loose prose"
          />
        )}
      </div>

      <UserListCard key={node.id} node={node} />
      {userprojects?.length ? (
        <p>
          {userprojects.map((sesprojets, index) => (
            <p>
              {sesprojets.label}
            </p>
          ))}
        </p>
      ) : (
        <p>   Ajouter un financement</p>
      )}
    </article>
  )
}
