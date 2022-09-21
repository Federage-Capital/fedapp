import Image from "next/image"
import { DrupalNode } from "next-drupal"

import { absoluteUrl, formatDate } from "lib/utils"

interface NodeFinancementProps {
  node: DrupalNode
}

export function NodeFinancement({ node, ...props }: NodeArticleProps) {
  return (
    <article {...props}>
      <h1 className="mb-4 text-6xl font-black leading-tight">{node.title}</h1>
      <div className="mb-4 text-gray-600">
        {node.uid?.display_name ? (
          <span>
            Posted by{" "}
            <span className="font-semibold">{node.uid?.display_name}</span>
          </span>
        ) : null}
        <span> - {formatDate(node.created)}</span>
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
    <p>  {node.field_choisir_une_categorie.name}</p>
        <p>  {node.field_date_de_livraison}</p>
        <p>  {node.field_estimation_du_prix}</p>
        <p>  {node.field_objet_du_financement.name}</p>
        <p>  {node.field_tags.name}</p>
        <p>  {node.field_type_de_financement.name} </p>
    </article>
  )
}
