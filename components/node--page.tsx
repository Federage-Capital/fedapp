import { DrupalNode } from "next-drupal"
import React, { useState, useRef } from "react"

import { useTranslation } from "next-i18next"

interface NodePageProps {
  node: DrupalNode
}

type AccordionProps = {
  title: string
  content: string
}

export function NodePage({ node }: NodePageProps) {
  const { t } = useTranslation()



  return (
    <div className="container pt-15 pb-10">

      <article className="px-6 text-4xl text-left">
        <h1 className="text-4xl">
          {node.title}
        </h1>
        <div className="mt-4 mb-4 text-text">
        {node.body?.processed && (
          <div
            dangerouslySetInnerHTML={{ __html: node.body?.processed }}
            className="mt-6 text-lg mx-auto max-w-screen-lg leading-loose prose"
          />
        )}
        </div>

<p>






          {node.field_paragraphs?.length ? (
            <p>
                                       {node.field_paragraphs?.map((paragraphe) => (





                                           <p key={paragraphe.id} className="w-100">



                                                               <details className="mb-5 shadow sm:rounded-lg px-4 py-5 sm:p-6">

                                                                   <summary className="text-lg">
                                                                  {paragraphe.field_title}
                                                                   </summary>
                                                                   <p className="mt-2  text-sm text-gray-500">
                                                                   <div
                                                                     dangerouslySetInnerHTML={{ __html: paragraphe.field_body?.processed }}
                                                                     className="mt-6 text-lg mx-auto max-w-screen-lg leading-loose prose"
                                                                   />
                                                                   </p>
                                                               </details>



                                               </p>



                                       ))}
                                  </p>
                                   ) : null}



</p>
      </article>
    </div>
  )
}
