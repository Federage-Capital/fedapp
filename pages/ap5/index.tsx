import { GetStaticPropsContext, GetStaticPropsResult } from "next"
import { DrupalNode } from "next-drupal"
import { useTranslation } from "next-i18next"

import { drupal } from "lib/drupal"
import { getGlobalElements } from "lib/get-global-elements"
import { getParams } from "lib/get-params"
import { Layout, LayoutProps } from "components/layout"
import { NodeArticleCard } from "components/node--article--card"
import { PageHeader } from "components/page-header"

interface ArticlePageProps extends LayoutProps {
  articles: DrupalNode[]
}

export default function ArticlesPage({
  articles,
  nodes,
  menus,
  blocks,
}: ArticlePageProps) {
  const { t } = useTranslation()

  return (
    <Layout
      menus={menus}
      blocks={blocks}
      meta={{
        title: t("AP5"),
      }}
    >

      <div className="container">
  <div className="container">Projets</div>

        <div className="grid gap-1 sm:grid-cols-2 lg:grid-cols-2">
          {articles.map((article) => (


            <NodeArticleCard key={article.id} node={article} />
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

  const articles = await drupal.getResourceCollectionFromContext<DrupalNode[]>(
    "node--ap5",
    context,
    {
      params: {
        "filter[status]": 1,
        "fields[node--ap5]": "title,path,field_image,uid,created",
        include: "field_image,uid",
        sort: "-created",
      },
    }
  )

  return {
    props: {
      ...(await getGlobalElements(context)),
      articles,
    },
  }
}
