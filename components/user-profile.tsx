import Image from "next/image"
import { DrupalNode } from "next-drupal"

import { absoluteUrl, formatDate } from "lib/utils"

interface UserProfileProps {
  node: DrupalNode
}

export function UserProfile({ node, ...props }: UserProfileProps) {
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
      {node.field_image && (
        <figure>
          <Image
            src={absoluteUrl(node.field_image.uri.url)}
            width={768}
            height={400}
            layout="responsive"
            objectFit="cover"
            alt={node.field_image.resourceIdObjMeta.alt}
            priority
          />
          {node.field_image.resourceIdObjMeta.title && (
            <figcaption className="py-2 text-sm text-center text-gray-600">
              {node.field_image.resourceIdObjMeta.title}
            </figcaption>
          )}
        </figure>
      )}
      {node.body?.processed && (
        <div
          dangerouslySetInnerHTML={{ __html: node.body?.processed }}
          className="mt-6 text-xl leading-loose prose"
        />
      )}
    </article>
  )
}
