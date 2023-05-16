import { DrupalNode } from "next-drupal"
import React, { useState, useRef } from "react"

import { useTranslation } from "next-i18next"

import { NodeCommentRow } from "components/node--comment-row"

interface NodeCommentProps {
  node: DrupalNode
}

type AccordionProps = {
  title: string
  content: string
}

export function NodeComment({ node }: NodeCommentProps) {
  const { t } = useTranslation()



  return (


      <article className="px-6 text-left">


        <div className="col-span-1 text-right">
        <h1 className="text-xl">

          {node.attributes.subject && (
            <div
              dangerouslySetInnerHTML={{ __html: node.attributes.subject }}
            />
          )}

        </h1>
        </div>

        <div className="col-span-1 text-right">          <NodeCommentRow key={node.id} node={node} />
</div>

        <div className="mt-4 mb-4 text-text">
        {node.attributes.comment_body?.processed && (
          <div
            dangerouslySetInnerHTML={{ __html: node.attributes.comment_body?.processed }}
            className="mt-6 text-lg mx-auto max-w-screen-lg leading-loose prose"
          />
        )}
        </div>

<p>





Répondre





</p>
      </article>

  )
}
