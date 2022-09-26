import { GetStaticPropsContext, GetStaticPropsResult } from "next"
import { useTranslation } from "next-i18next"

import { getGlobalElements } from "lib/get-global-elements"
import { Layout, LayoutProps } from "components/layout"
import { PageHeader } from "components/page-header"
import { FormGroupfinancement } from "components/form--groupfinancement"

interface NewGroupfinancementPageProps extends LayoutProps {}

export default function NewArticlesPage({
  menus,
  blocks,
}: NewGroupfinancementPageProps) {
  const { t } = useTranslation()

  return (
    <Layout meta={{ title: t("new-financement") }} menus={menus} blocks={blocks}>
      <PageHeader
        heading={t("new-financement")}
        breadcrumbs={[
          {
            title: t("my-account"),
            url: "/account",
          },
          {
            title: t("new-financement"),
          },
        ]}
      />
      <div className="container pb-10">
        <FormGroupfinancement className="max-w-2xl mx-auto" />
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
