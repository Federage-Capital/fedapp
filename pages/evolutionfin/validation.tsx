import { GetStaticPropsContext, GetStaticPropsResult } from "next"
import { useTranslation } from "next-i18next"
import { getSession, useSession, signOut } from "next-auth/react";

import { useRouter } from "next/router"
import { DrupalJsonApiParams } from "drupal-jsonapi-params";

import { getGlobalElements } from "lib/get-global-elements"
import { Layout, LayoutProps } from "components/layout"
import { PageHeader } from "components/page-header"
import { FormNewFinancementValidation } from "components/form--newfinancement-validation.tsx"
import { drupal } from "lib/drupal"

interface NewFinancementPageProps extends LayoutProps {}

export default function NewFinancementPagePage({
  menus,
  blocks,
  categorieprj,
  fin,
  group,
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

{t("Étape 2 sur 2")}
</div>
      </div>

      <p className="text-3xl font-bold">


    {t("Proposer un apport")}</p><br/>
      <p className="text-slate-500">
      {t("Veuillez fournir des informations pour enregistrer votre participation au projet.")}
    </p>
      <div className=" bg-slate-50  pb-10">
      {fin
        .slice(0,1)
      .map((finn) => (
        <div key={finn.id} >


        {group.map((grouppath) => (

                                       <div key={grouppath.id}>




{grouppath.path.alias}



              <FormNewFinancementValidation className="max-w-2xl mx-auto mt-10 p-2" categorieprj={categorieprj} node={finn} groupe={grouppath} />
              </div>

                                    ))}
        </div>
        ))}
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


  const gid = context.query.gid // Get ID from slug `/book/1`
       // If routing to `/book/1?name=some-book`
       console.log(context.query) // Outputs: `{ id: '1', name: 'some-book' }`
    // Fetch all articles sorted by the user.
    const fin = await drupal.getResourceCollectionFromContext<DrupalNode[]>(
      "group_content--federage-group_node-financement",
      context,
      {
        params: new DrupalJsonApiParams()
          .addInclude(["entity_id", "entity_id.field_choisir_une_categorie", "entity_id.field_document_s_annexe_s_.field_media_document"])
          .addFields("node--financement", [
            "title",
            "field_estimation_du_prix",
            "body",
            "field_document_s_annexe_s_",
            "uid",
            "revision_log",
            "field_date_de_livraison",
            "gid",
            "field_choisir_une_categorie",
          ])

          .addFields("taxonomy_term--categorie", [
        "id",
        "name",
          ])

          .addFilter("gid.id", gid)
          .addFilter("uid.meta.drupal_internal__target_id", session.user.userId)
          .addFields("taxonomy_term--categorie", ["id,name"])
          .addFields("media--document", ["field_media_document"])
          .addFields("file--file", ["uri", "resourceIdObjMeta"])
          .addSort("created", "DESC")

          .getQueryObject(),
        withAuth: session.accessToken,
      }
    );

    const group = await drupal.getResourceCollectionFromContext<DrupalNode[]>(
      "group--federage",
      context,
      {
        params: new DrupalJsonApiParams()
          .addFields("group--federage", [
            "path",
          ])
          .addFilter("id", gid)
          .addSort("created", "DESC")
          .getQueryObject(),
        withAuth: session.accessToken,
      }
    );

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
        fin,
        group,
    },
  }
}
