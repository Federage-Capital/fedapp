import { GetStaticPropsContext, GetStaticPropsResult } from "next"
import { useTranslation } from "next-i18next"

import { getGlobalElements } from "lib/get-global-elements"
import { Layout, LayoutProps } from "components/layout"
import { PageHeader } from "components/page-header"
import { FormMembre } from "components/form--membre"
import { FormInvite } from "components/form--inviteuser"


interface NewMembrePageProps extends LayoutProps {}

export default function NewMembrePage({
  menus,
  blocks,
}: NewMembrePageProps) {
  const { t } = useTranslation()

  return (
    <Layout meta={{ title: t("add-members") }} menus={menus} blocks={blocks}>


      <PageHeader
      heading={t("Inviter les partenaires")}





      />
        <div className="container pb-10">

      <FormInvite className="max-w-xl mx-auto" />
      </div>

      <div className="container pb-10">

        <FormMembre className="max-w-2xl mx-auto" />
      </div>
    </Layout>
  )
}

export async function getStaticProps(
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<NewMembrePageProps>> {
  return {
    props: {
      ...(await getGlobalElements(context)),
    },
  }
}
