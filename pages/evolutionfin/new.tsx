import { GetStaticPropsContext, GetStaticPropsResult } from "next"
import { useTranslation } from "next-i18next"
import { getSession, useSession, signOut } from "next-auth/react";

import { useRouter } from "next/router"

import { getGlobalElements } from "lib/get-global-elements"
import { Layout, LayoutProps } from "components/layout"
import { PageHeader } from "components/page-header"
import { FormAddfinancement } from "components/form--addfinancement"
import { drupal } from "lib/drupal"
import { DrupalJsonApiParams } from "drupal-jsonapi-params";

interface NewFinancementPageProps extends LayoutProps {}

export default function NewFinancementPagePage({
  menus,
  blocks,
    categorieprj,
    assogroup,
}: NewFinancementPageProps) {
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

        <FormAddfinancement className="max-w-2xl mx-auto mt-10 p-2" categorieprj={categorieprj} assogroup={assogroup}/>
      </div>
    </Layout>
  )
}

export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<NewFinancementPageProps>> {

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

  const assogroup = await drupal.getResourceCollectionFromContext<DrupalNode>(
    "group_content--federage-group_membership",
    context,
    {
      params: new DrupalJsonApiParams()
      .addInclude(["gid"])

        .addFilter("uid.meta.drupal_internal__target_id", session.user.userId)
        .getQueryObject(),
      withAuth: session.accessToken,
    }

  )

  return {
    props: {
      ...(await getGlobalElements(context)),
        categorieprj,
        assogroup,
    },
  }
}
