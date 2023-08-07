import { GetStaticPropsContext, GetStaticPropsResult } from "next"
import { useTranslation } from "next-i18next"
import { getSession, useSession, signOut } from "next-auth/react";

import { useRouter } from "next/router"
import { DrupalJsonApiParams } from "drupal-jsonapi-params"

import { getGlobalElements } from "lib/get-global-elements"
import { Layout, LayoutProps } from "components/layout"
import { PageHeader } from "components/page-header"
import { FormFinancementedit } from "components/form--financementdit"
import { Folder } from "public/foldersvg"
import { drupal } from "lib/drupal"

interface EditFinancementPageProps extends LayoutProps {}

export default function EditFinancementPage({
  menus,
  blocks,
  categorieprj,
  gid,
  fin,

}: EditFinancementPageProps) {
  const { t } = useTranslation()




  return (
    <Layout meta={{ title: t("new-groupfederage") }} menus={menus} blocks={blocks}>
    <div className="container text-center">
    <div className="inline-block">  <Folder /> </div>
    </div>
      <PageHeader
        heading={t("modifier-le-financement")}

      />
      <div className="container pb-10">


        <FormFinancementedit className="max-w-2xl mx-auto mt-10 p-2" categorieprj={categorieprj}  fin={fin}/>
      </div>


    </Layout>
  )
}



export async function getServerSideProps(
  context: GetServerSidePropsContext,
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
    "node--financement",
    context,
    {
      params: new DrupalJsonApiParams()
        .addInclude(["field_document_s_annexe_s_.field_media_document", "uid.user_picture"])
        .addFields("node--financement", [
          "title",
          "path",
          "langcode",
          "content_translation_source",
          "body",
          "field_document_s_annexe_s_",
          "status",
          "created",
          "uid",
          "revision_log",
          "body",
        ])
        .addFilter("id", gid)

        .addFields("media--document", ["field_media_document"])
        .addFields("file--file", ["uri", "resourceIdObjMeta"])
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
gid,
fin,
    },
  }
}
