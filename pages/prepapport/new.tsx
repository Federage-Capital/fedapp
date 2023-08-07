import { GetStaticPropsContext, GetStaticPropsResult } from "next"
import { useTranslation } from "next-i18next"
import { getSession, useSession, signOut } from "next-auth/react";

import { useRouter } from "next/router"

import { getGlobalElements } from "lib/get-global-elements"
import { Layout, LayoutProps } from "components/layout"
import { PageHeader } from "components/page-header"
import { FormPreapport } from "components/form--preapport"


import { drupal } from "lib/drupal"

interface NewPreapportPageProps extends LayoutProps {}

export default function NewPreapportPagePage({
  menus,
  blocks,
    categorieprj,
}: NewPreapportPageProps) {
  const { t } = useTranslation()
  const router = useRouter()
  const { data } = useSession();
  const { status } = useSession()
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
            title: t("Demander-des-apports"),
          },
        ]}
      />
      </div>

      <div className="self-stretch flex flex-row items-center justify-between">
        <div className="w-[167px] flex flex-row items-center justify-start gap-[11px]">
          <div className="rounded-lg bg-gray-100 w-[38px] h-[38px] flex flex-row p-1.5 box-border items-center justify-center">
          <button type="button" onClick={() => router.back()}>
          <img className="relative w-1.5 h-2.5" alt="Click here to go back" src="/icon21.svg"  />

      </button>
          </div>
          <b className="flex-1 relative leading-[24px]">Créer un projet</b>
        </div>
        <div className="rounded-3xs flex flex-row py-0.5 px-2.5 items-center justify-center text-right text-xs">
          <div className="relative leading-[16px] font-medium">

            {t("Étape 3 sur 3")}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-0 pb-10">

  <div className="col-span-8 ">

</div>



      </div>

      <p className="text-3xl font-bold">

    {t("Demander des apports")}</p><br/>
      <p className="text-slate-500">
      {t("Publiez vos besoins afin de recevoir des offres de partenariats. Vous pouvez également")}      <span className="font-semibold text-mediumblue-100">
              passer cette étape
            </span>


    </p>
    <div className="self-stretch flex-1 bg-whitesmoke-100 flex flex-col py-6 px-4 items-center justify-start gap-[48px]">
      <div className="self-stretch flex flex-col items-center justify-start">
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
          <b className="self-stretch relative leading-[20px] text-gray-700">
            De quels apports avez-vous besoin ?
          </b>
          <div className="self-stretch rounded-lg bg-white flex flex-col py-[18px] px-0 items-center justify-center gap-[12px] text-xs border-[3px] border-solid border-mediumblue-100">


            <div className="self-stretch flex flex-row py-0 px-3.5 items-start justify-start text-lg text-gray-900">
              <div className="flex-1 relative leading-[24px] font-semibold">
                Ajouter un apport
              </div>
            </div>
            <FormPreapport  categorieprj={categorieprj} />


          </div>

        </div>
      </div>
      <div className="self-stretch flex flex-col pt-0 px-0 pb-6 items-center justify-start text-center text-white">
        <div className="self-stretch flex flex-col items-center justify-center gap-[24px]">
          <div className="self-stretch bg-gray-200" />
          <div className="self-stretch rounded-lg bg-mediumblue-100 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] flex flex-row py-4 px-[18px] items-center justify-center">
            <div className="flex-1 relative leading-[20px] font-semibold">
              Créer un projet
            </div>
          </div>
        </div>
      </div>
    </div>

    </Layout>
  )
}

export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<NewPreapportPageProps>> {

  const session = await getSession({ ctx: context });
  if (!session) {
    return {
      redirect: {
        destination: "/register",
        permanent: false,
      },
    };
  }

  const categorieprj = await drupal.getResourceCollectionFromContext<DrupalTaxonomyTerm>(
    "taxonomy_term--categorie",
    context,
    {
      params: {
        "fields[taxonomy_term--categorie]": "id,name",
                sort: "-name",
      },
    }
  )




  return {
    props: {
      ...(await getGlobalElements(context)),
        categorieprj,
    },
  }
}
