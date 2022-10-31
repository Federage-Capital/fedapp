import { GetStaticPropsContext, GetStaticPropsResult } from "next"
import { useTranslation } from "next-i18next"

import { getGlobalElements } from "lib/get-global-elements"
import { Layout, LayoutProps } from "components/layout"
import { PageHeader } from "components/page-header"
import { FormMembre } from "components/form--membre"

interface NewArticlesPageProps extends LayoutProps {}

export default function NewArticlesPage({
  menus,
  blocks,
}: NewMembrePageProps) {
  const { t } = useTranslation()

  return (
    <Layout meta={{ title: t("add-members") }} menus={menus} blocks={blocks}>
      <PageHeader
        heading={t("add-members")}
        breadcrumbs={[
          {
            title: t("my-account"),
            url: "/account",
          },
          {
            title: t("add-members"),
          },
        ]}
      />
      <div className="container pb-10">
        <FormMembre className="max-w-2xl mx-auto" />
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
