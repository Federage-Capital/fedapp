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
    <div className="newformfin">
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
      </div>


      <div className="grid grid-cols-12 gap-0 pb-10">
      <div className="col-span-2 text-sm text-slate-400 font-semibold">
      <button type="button" onClick={() => router.back()}>
    Click here to go back
  </button>
  </div>
  <div className="col-span-8 ">

</div>


<div className="col-span-2 text-sm text-slate-400 font-semibold">

{t("Étape 1 sur 2")}
</div>
      </div>

      <p className="text-3xl font-bold">

    {t("Proposer un apport")}</p><br/>
      <p className="text-slate-500">
      {t("Veuillez fournir des informations pour enregistrer votre participation au projet.")}
    </p>
      <div className=" bg-slate-50  pb-10">

        <FormFinancement className="max-w-2xl mx-auto mt-10 p-2 " />
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
