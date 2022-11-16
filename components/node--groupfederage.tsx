import Image from "next/image"
import { DrupalNode } from "next-drupal"
import Link from "next/link";
import useSWR from 'swr'

import { absoluteUrl, formatDate } from "lib/utils"

interface NodeGroupFinancement {
  node: DrupalNode,
  groupe_types: DrupalNode,

}

const fetcher = (...args) => fetch(...args).then((res) => res.json())


export function NodeGroupFinancement({ node, groupe_types, data, ...props }: NodeGroupFinancementProps) {
  const { data: nodefinancement, error } = useSWR('https://fed.septembre.io/jsonapi/group/federage', fetcher)

    if (error) return <div>Failed to load</div>
    if (!nodefinancement) return <div>Loading...</div>


  return (
    <sep {...props}>







<div className="articles">
  <h1>label : {node.label}</h1>
description
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


page user

ee
    </sep>
  )
}
