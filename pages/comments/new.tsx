import { GetStaticPropsContext, GetStaticPropsResult } from "next"
import { useTranslation } from "next-i18next"

import { getGlobalElements } from "lib/get-global-elements"
import { Layout, LayoutProps } from "components/layout"
import { PageHeader } from "components/page-header"
import { Formcomment } from "components/form--comment"

interface NewArticlesPageProps extends LayoutProps {}

export default function NewArticlesPage({
  menus,
  blocks,
}: NewcommentPageProps) {
  const { t } = useTranslation()

  return (
    <Layout meta={{ title: t("new-comment") }} menus={menus} blocks={blocks}>
      <PageHeader
        heading={t("new-comment")}
        breadcrumbs={[
          {
            title: t("my-account"),
            url: "/account",
          },
          {
            title: t("new-comment"),
          },
        ]}
      />
      <div className="container pb-10">
        <Formcomment className="max-w-2xl mx-auto" />
      </div>
    </Layout>
  )
}

export async function getStaticProps(
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<NewArticlesPageProps>> {
  return {
    props: {
      ...(await getGlobalElements(context)),
    },
  }
}
