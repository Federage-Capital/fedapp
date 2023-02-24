import { DrupalNode } from "next-drupal"

import { useTranslation } from "next-i18next"

interface NodePageProps {
  node: DrupalNode
}

export function NodePage({ node }: NodePageProps) {
  const { t } = useTranslation()

  return (
    <div className="container">

      <article className="px-6 max-w-4xl text-4xl text-left md:text-5xl lg:text-4xl">
        <h1 className="text-4xl leading-tight lg:text-4xl">
          {node.title}
        </h1>
        <div className="mt-4 mb-4 prose prose-a:text-link max-w-none text-text">
        {node.body?.processed && (
          <div
            dangerouslySetInnerHTML={{ __html: node.body?.processed }}
            className="mt-6 text-lg leading-loose prose"
          />
        )}
        </div>
      </article>
    </div>
  )
}
