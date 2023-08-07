import { GetStaticPropsContext, GetStaticPropsResult } from "next"
import { useTranslation } from "next-i18next"
import { getSession, useSession, signOut } from "next-auth/react";

import { getGlobalElements } from "lib/get-global-elements"
import { Layout, LayoutProps } from "components/layout"
import { PageHeader } from "components/page-header"
import { FormGroupfin } from "components/form--groupfin"
import { useState, useEffect } from "react";
import {
	DrupalNode,
	DrupalTaxonomyTerm,
} from "next-drupal";
import { drupal } from "lib/drupal"

interface NewArticlesPageProps extends LayoutProps {}

export default function NewArticlesPage({
  menus,
  blocks,
  categorieprj,
}: NewArticlesPageProps) {
  const { t } = useTranslation()
  const { data } = useSession();
  const { status } = useSession()

  return (
    <Layout meta={{ title: t("new-groupfederage") }} menus={menus} blocks={blocks}>

      <PageHeader
        heading={t("démarrer-le-projet")}

      />
      <div className="container pb-10">

        <FormGroupfin className="max-w-2xl mx-auto" categorieprj={categorieprj} />
      </div>


    </Layout>
  )
}

export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<NewArticlesPageProps>> {

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
