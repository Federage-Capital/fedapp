import Image from "next/image"
import { DrupalNode } from "next-drupal"

import { absoluteUrl, formatDate } from "lib/utils"

interface NodeGroupFinancement {
  node: DrupalNode,
  groupe_types: DrupalNode,
}

export function NodeGroupFinancement({ node, groupe_types, ...props }: NodeArticleProps) {
  return (
    <article {...props}>
<p>{node.label}</p>
<p>{node.id}</p>
<p>{node.created}</p>
<p>Proprio : {node.uid.display_name}</p>
<p>{node.group_type.id}</p>
<p>{node.group_type.type}</p>




    </article>
  )
}
