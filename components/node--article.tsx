import Image from "next/image"
import { DrupalNode } from "next-drupal"

import { absoluteURL, formatDate } from "lib/utils"

interface NodeArticleProps {
  node: DrupalNode
}

export function NodeArticle({ node, ...props }: NodeArticleProps) {
  return (
    <article {...props}>
      <div className="max-w-screen-md px-6 pb-6 mx-auto">

        <h1 className="mb-4 text-2xl font-black leading-tight">{node.title}</h1>
        <div className="text-m text-gray-600">
          {node.uid?.display_name ? (
            <span>
              Publié par{" "}
              <span className="mb-2 text-lg font-semibold">{node.uid?.display_name}</span>
            </span>
          ) : null}
          <span> - {formatDate(node.created)}</span>
        </div>
        {node.field_image && (
          <figure>
            <Image
              src={absoluteURL(node.field_image.uri.url)}
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
            className="text-lg leading-loose prose"

          />
        )}
      </div>
    </article>
  )
}
