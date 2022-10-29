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
import React from "react";


import { PageHeader } from "components/page-header"
interface LoginPageProps extends LayoutProps {}

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
    <Layout meta={{ title: t("Connexion") }} menus={menus} blocks={blocks}>
      <PageHeader
        heading={t("Connexion")}
        breadcrumbs={[
          {
            title: t("Connexion"),
          },
        ]}
      />
      {status === "unauthenticated" && (
        <div className="container pb-10">
        <h3 className="mb-10 text-1xl font-grey text-center">Saisir les identifiants du compte pour se connecter</h3>

<div className="flex flex-wrap">
        <div className="grid gap-4 max-w-xl mx-auto">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-left text-center">
              <a
                className={
                  "text-xs font-bold  px-5 py-3 rounded-md leading-normal " +
                  (openTab === 1
                    ? "bg-" + "-900"
                    : "text-" + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Connexion
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-left text-center">
              <a
                className={
                  "text-xs font-bold  px-5 py-3 rounded-md leading-normal " +
                  (openTab === 2
                    ? "bg-" + "-900"
                    : "text-" + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                 Mot de passe oublié
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-left text-center">
              <a
                className={
                  "text-xs font-bold  px-5 py-3 rounded-md leading-normal " +
                  (openTab === 3
                    ? "bg-" + "-900"
                    : "text-" + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                 Inscription
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 ">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <p>
                  <FormLogin className="max-w-xl mx-auto" />

                  </p>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <p>
                  <FormResetpassword className="max-w-xl mx-auto" />

                  </p>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <p>
                  <FormCreate className="max-w-xl mx-auto" />

                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>

      )}


    </Layout>
  )
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
