import { GetStaticPropsContext, GetStaticPropsResult } from "next"
import { useTranslation } from "next-i18next"

import { getGlobalElements } from "lib/get-global-elements"
import { Layout, LayoutProps } from "components/layout"
import { PageHeader } from "components/page-header"
import { FormGroupfin } from "components/form--groupfin"

interface NewArticlesPageProps extends LayoutProps {}

export default function NewArticlesPage({
  menus,
  blocks,
}: NewArticlesPageProps) {
  const { t } = useTranslation()

  return (
    <Layout meta={{ title: t("new-groupfederage") }} menus={menus} blocks={blocks}>
      <PageHeader
        heading={t("new-groupfederage")}
        breadcrumbs={[
          {
            title: t("my-account"),
            url: "/account",
          },
          {
            title: t("new-groupfederage"),
          },
        ]}
      />
      <div className="container pb-10">
        <FormGroupfin className="max-w-2xl mx-auto" />
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
