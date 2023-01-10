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

      breadcrumbs={[
        {
          title: t("my-account"),
          url: "/account",
        },
        {
          title: t("Inviter les partenaires"),
        },
      ]}




      />
    Ajouter des partenaires

      <svg width="42" height="34" viewBox="0 0 42 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M31 33H41V29C40.9999 27.7531 40.6113 26.5371 39.8883 25.5213C39.1652 24.5054 38.1436 23.74 36.9655 23.3315C35.7874 22.923 34.5112 22.8918 33.3145 23.242C32.1178 23.5923 31.0599 24.3067 30.288 25.286M31 33L30.288 25.286M31 33H11M31 33V29C31.0018 27.7279 30.7601 26.4672 30.288 25.286M30.288 25.286C28.813 21.602 25.21 19 21 19C19.0011 19 17.0481 19.5988 15.3928 20.7192C13.7374 21.8396 12.4558 23.4303 11.713 25.286M11 33H1V29C0.999828 27.7528 1.3883 26.5366 2.11141 25.5204C2.83451 24.5043 3.85629 23.7387 5.03467 23.3302C6.21304 22.9217 7.48943 22.8905 8.68633 23.241C9.88324 23.5915 10.9412 24.3063 11.713 25.286M11 33L11.713 25.286M11 33V29C11 27.687 11.253 26.434 11.713 25.286M27 7C27 8.5913 26.3679 10.1174 25.2426 11.2426C24.1174 12.3679 22.5913 13 21 13C19.4087 13 17.8826 12.3679 16.7574 11.2426C15.6321 10.1174 15 8.5913 15 7C15 5.4087 15.6321 3.88258 16.7574 2.75736C17.8826 1.63214 19.4087 1 21 1C22.5913 1 24.1174 1.63214 25.2426 2.75736C26.3679 3.88258 27 5.4087 27 7ZM39 13C39 14.0609 38.5786 15.0783 37.8284 15.8284C37.0783 16.5786 36.0609 17 35 17C33.9391 17 32.9217 16.5786 32.1716 15.8284C31.4214 15.0783 31 14.0609 31 13C31 11.9391 31.4214 10.9217 32.1716 10.1716C32.9217 9.42143 33.9391 9 35 9C36.0609 9 37.0783 9.42143 37.8284 10.1716C38.5786 10.9217 39 11.9391 39 13ZM11 13C11 14.0609 10.5786 15.0783 9.82843 15.8284C9.07828 16.5786 8.06087 17 7 17C5.93913 17 4.92172 16.5786 4.17157 15.8284C3.42143 15.0783 3 14.0609 3 13C3 11.9391 3.42143 10.9217 4.17157 10.1716C4.92172 9.42143 5.93913 9 7 9C8.06087 9 9.07828 9.42143 9.82843 10.1716C10.5786 10.9217 11 11.9391 11 13Z" stroke="#9CA3AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
En tant que gérant du projet, vous gérez les membres de l'équipe.
      <div className="container pb-10">
      <FormInvite className="max-w-xl mx-auto" />
      </div>
PARTENAIRES DE L’OPÉRATION
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
