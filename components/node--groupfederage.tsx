import Image from "next/image"
import { DrupalNode } from "next-drupal"
import Link from "next/link";

import { absoluteUrl, formatDate } from "lib/utils"

interface NodeGroupFinancement {
  node: DrupalNode,
  groupe_types: DrupalNode,
  listefinancements: DrupalNode,
}

export function NodeGroupFinancement({ node, groupe_types, listefinancements, ...props }: NodeArticleProps) {
  return (
    <article {...props}>
<p>{node.id}</p>
<p>{node.created}</p>
<p>Proprio : {node.uid.display_name}</p>
<p>{node.group_type.id}</p>
<p>{node.group_type.type}</p>

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



  <Link href={`group/${encodeURIComponent(node.drupal_internal__id)}/content/create/group_node%3Afinancement`}>
  <a className="px-3 py-1 fedblue text-white transition-colors rounded-xl lg:text-xl lg:px-4 lg:py-2 bg-secondary hover:bg-white hover:text-black border-secondary">
      Nouveau financement dans ce groupe
    </a>
  </Link>
</div>



    </article>
  )
}
