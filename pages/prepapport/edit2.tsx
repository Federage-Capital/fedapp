import { GetStaticPropsContext, GetStaticPropsResult } from "next"
import { useTranslation } from "next-i18next"
import { getSession, useSession, signOut } from "next-auth/react";

import { useRouter } from "next/router"
import { DrupalJsonApiParams } from "drupal-jsonapi-params"

import { getGlobalElements } from "lib/get-global-elements"
import { Layout, LayoutProps } from "components/layout"
import { PageHeader } from "components/page-header"
import { FormPreFinancementEdit } from "components/form--prefinancement-edit"
import { Folder } from "public/foldersvg"
import { drupal } from "lib/drupal"

interface EditFinancementPageProps extends LayoutProps {}

export default function EditFinancementPage({
  menus,
  blocks,
categorieprj,
gid,
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

{gid}


        <FormPreFinancementEdit className="max-w-2xl mx-auto" categorieprj={categorieprj}/>
      </div>


    </Layout>
  )
}

export async function getServerSideProps(

  context: GetServerSidePropsContext,
): Promise<GetServerSidePropsResult<EditFinancementPageProps>> {
  const session = await getSession({ ctx: context });


    const gid = context.query.gid // Get ID from slug `/book/1`
       // If routing to `/book/1?name=some-book`
       console.log(context.query) // Outputs: `{ id: '1', name: 'some-book' }`
    // Fetch all articles sorted by the user.puts: `{ id: '1', name: 'some-book' }`


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
    },
  }
}
