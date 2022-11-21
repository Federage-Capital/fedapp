import Image from "next/image"
import { DrupalNode } from "next-drupal"
import Link from "next/link";
import useSWR from 'swr'
import { useRouter } from "next/router"
import { getSession, useSession, signOut } from "next-auth/react";

import { absoluteUrl, formatDate } from "lib/utils"

interface NodeGroupFinancement {
  node: DrupalNode,
  groupe_types: DrupalNode,

}

const fetcher = (...args) => fetch(...args).then((res) => res.json())


export function NodeGroupFinancement({ node,   ...props }: NodeGroupFinancementProps) {

  const router = useRouter()
  const session = getSession()

  const { data: users, error } = useSWR('https://fed.septembre.io/jsonapi/group_content/federage-group_membership?filter[gid.id]='+ node.id,  fetcher)


         const { data: financementsdugroupe, error2 } = useSWR('https://fed.septembre.io/jsonapi/group_content/federage-group_node-financement?filter[gid.id]='+ node.id,  fetcher)

         if (error) return <div>Failed to load</div>
         if (!users) return <div>Loading ...</div>
                if (error2) return <div>Failed to load</div>
                if (!financementsdugroupe) return <div>Loading financement ...</div>


  return (
    <sep {...props}>




<div className="articles">
{session.accessToken}
{users.data.map((user) => (

<div>{user.attributes.label} <p> {user.id}</p></div>

                      ))}

                      {financementsdugroupe.data.map((financementdugroupe) => (

                      <div>{financementdugroupe.attributes.label} <p> {financementdugroupe.id}</p></div>

                                            ))}


  <h1>label : {node.label}</h1>

  {node.field_description?.value && (
    <div
      dangerouslySetInnerHTML={{ __html: node.field_description?.value }}
      className="mt-6 text-xl leading-loose prose"
    />
  )}

  rpix :
  {node.field_estimation_du_prix}
  {node.field_date_de_livraison}

  {node.field_categorie?.name && (
    <div
      dangerouslySetInnerHTML={{ __html: node.field_categorie?.name }}
      className="mt-6 text-xl leading-loose prose"
    />
  )}

Membres de ce groupe<br/>


Offres de ce groupe<br/>


  <Link href={`/financement/new?gid=${encodeURIComponent(node.id)}`}>
  <a className="px-3 py-1 fedblue text-white transition-colors rounded-xl lg:text-xl lg:px-4 lg:py-2 bg-secondary hover:bg-white hover:text-black border-secondary">
      Nouveau financement dans ce groupe
    </a>
  </Link>


    <Link href={`/membre/new?gid=${encodeURIComponent(node.id)}`}>
    <a className="px-3 py-1 fedblue text-white transition-colors rounded-xl lg:text-xl lg:px-4 lg:py-2 bg-secondary hover:bg-white hover:text-black border-secondary">
        Nouveaux membres de ce groupe
      </a>
    </Link>



</div>

    </sep>
  )

}
