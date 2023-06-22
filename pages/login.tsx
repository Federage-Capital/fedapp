import { GetStaticPropsContext, GetStaticPropsResult } from "next"
import { useSession } from "next-auth/react"
import { useTranslation } from "next-i18next"
import { useRouter } from "next/router"

import { getGlobalElements } from "lib/get-global-elements"
import { Layout, LayoutProps } from "components/layout"
import { FormLogin } from "components/form--login"
import { FormCreate } from "components/form--createaccount"
import { FormResetpassword } from "components/form--resetpassword"
import { WhoIs } from "components/whois"
import Link from 'next/link'
import React from "react";


import { PageHeader } from "components/page-header"
interface LoginPageProps extends LayoutProps { }

export default function LoginPage({ menus, blocks }: LoginPageProps) {
  const { t } = useTranslation()
  const router = useRouter()
  const { status } = useSession()
  const [openTab, setOpenTab] = React.useState(1);

  if (status === "authenticated") {
    router.push("/account")
    return null
  }


  return (
    // <Layout meta={{ title: t("Connexion") }} menus={menus} blocks={blocks}>
    <div className="flex flex-col h-screen bg-slate-100">
      <div className="flex flex-col justify-center items-center flex-1">
        <PageHeader heading={t("Accéder à mon compte")} className="text-semibold" />
        <div className="text-sm text-slate-500 -mt-10 mb-5">
          Connectez-vous à federage.
          <div className="text-sm">
            Jamais inscrit ?
            <Link href={{
              pathname: '/register',
              query: {
                tab: 3,
                toggleValue: false
              }
            }}>
              <button className="ml-2 fedblueblue text-sm" onClick={() => router.push("/register")}>Cliquez-ici</button>
            </Link>
          </div>
        </div>
        {status === "unauthenticated" && (
          <div className="container pb-1">
            <div className="items-center">
              <div className="grid gap-4 max-lg mx-auto">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6">
                  <div className="px-4 py-5 flex-auto">
                    <div className="tab-content tab-space">
                      <FormLogin className="max-w-xl mx-auto" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    // </Layout >
  );
}

export async function getStaticProps(
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<LoginPageProps>> {
  return {
    props: {
      ...(await getGlobalElements(context)),
    },
  }
}
