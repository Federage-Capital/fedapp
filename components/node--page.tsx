import { DrupalNode } from "next-drupal"

import { useTranslation } from "next-i18next"

interface NodePageProps {
  node: DrupalNode
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
      </article>
    </div>
  )
}
