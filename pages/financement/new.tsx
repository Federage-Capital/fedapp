import { GetStaticPropsContext, GetStaticPropsResult } from "next"
import { useTranslation } from "next-i18next"
import { useRouter } from "next/router"

import { getGlobalElements } from "lib/get-global-elements"
import { Layout, LayoutProps } from "components/layout"
import { PageHeader } from "components/page-header"
import { FormFinancement } from "components/form--financement"

interface NewArticlesPageProps extends LayoutProps {}

export default function NewArticlesPage({
  menus,
  blocks,
}: NewFinancementPageProps) {
  const { t } = useTranslation()
  const router = useRouter()

  return (
    <Layout meta={{ title: t("new-financement") }} menus={menus} blocks={blocks}>
      <PageHeader

        breadcrumbs={[
          {
            title: t("Projet"),
            url: "/group/federage/",

          },

          {
            title: t("Nouvel apport"),
          },
        ]}
      />

      <div className="grid grid-cols-12 gap-4">
      <div className="col-span-2">
      <button type="button" onClick={() => router.back()}>
    Click here to go back
  </button>
  </div>
  <div className="col-span-8 text-center">

{t("Proposer un apport")}<br/>
{t("Veuillez fournir des informations pour enregistrer votre participation au projet.")}

</div>


<div className="col-span-2">

{t("Étape 1 sur 2")}
</div>
      </div>

      <div className="container pb-10">

        <FormFinancement className="max-w-2xl mx-auto" />
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
