import { GetStaticPropsContext, GetStaticPropsResult } from "next"
import { DrupalNode } from "next-drupal"
import { useTranslation } from "next-i18next"

import { drupal } from "lib/drupal"
import { getGlobalElements } from "lib/get-global-elements"
import { getParams } from "lib/get-params"
import { Layout, LayoutProps } from "components/layout"
import { NodeFinancementCard } from "components/node--financement--card"
import { PageHeader } from "components/page-header"

interface FinancementPageProps extends LayoutProps {
  articles: DrupalNode[]
}

export default function FinancementPage({
  financements,
  menus,
  blocks,
}: FincanementPageProps) {
  const { t } = useTranslation()

  return (
    <Layout
      menus={menus}
      blocks={blocks}
      meta={{
        title: t("financements"),
      }}
    >
      <PageHeader
        heading={t("financements")}
        breadcrumbs={[
          {
            title: t("financements"),
          },
        ]}
      />
      <div className="container">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {financements.map((financement) => (
            <NodeFinancementCard key={financement.id} node={financement} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps(
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<ArticlePageProps>> {
  // Fetch all published articles sorted by date.
  const financements = await drupal.getResourceCollectionFromContext<DrupalNode[]>(
    "node--financement",
    context,
    {
      params: getParams("node--financement", "card")
    }
  )

  return {
    props: {
      ...(await getGlobalElements(context)),
      financements,
    },
  }
}
