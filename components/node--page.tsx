import { DrupalNode } from "next-drupal"
import React, { useState, useRef } from "react"
import { getGlobalElements } from "lib/get-global-elements"
import { GetStaticPropsResult } from "next"

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
  const [status, setStatus] = React.useState<"error" | "success" | "loading">()


  return (
    <div className="container pt-15 pb-10">
      <article className="px-6 text-4xl text-left">
        <h1 className="text-4xl grandtitre">
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
        <div>


        {node.field_paragraphs?.length ? (
            <span>
            {node.field_paragraphs.filter(entityref2 => entityref2.type.includes("paragraph--integrer_nodes")).map(filteredEntityref2 => {
            return (
            <div key={filteredEntityref2.id}>
                 {filteredEntityref2.field_node_ref.map((legals) => (


           <details key={legals.id} className="mb-5 shadow sm:rounded-lg px-4 py-5 sm:p-6" >
  <summary className="text-lg">
  {legals.title}
  </summary>

{legals.body?.processed && (
  <div
    dangerouslySetInnerHTML={{ __html: legals.body?.processed }}
    className="mt-8 text-sm mx-auto max-w-screen-lg text-gray-500 leading-loose prose"
  />
)}

           </details>


                                    ))}
            </div>)
            })}
            </span>
          ) : null}




        </div>
      </article>
    </div>
  )
}
