import { GetStaticPropsContext, GetStaticPropsResult } from "next"
import { useTranslation } from "next-i18next"

import { getGlobalElements } from "lib/get-global-elements"
import { Layout, LayoutProps } from "components/layout"
import { PageHeader } from "components/page-header"
import { FormFinancementedit } from "components/form--financementdit"
import { useState, useEffect } from "react";
import { Folder } from "public/foldersvg"

interface EditArticlesPageProps extends LayoutProps { }

export default function EditArticlesPage({
  menus,
  blocks,
  articles,

}: EditArticlesPageProps) {
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

        <FormFinancementedit className="max-w-2xl mx-auto" />
      </div>


    </Layout>
  )
}

export async function getStaticProps(
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<EditArticlesPageProps>> {
  return {
    props: {
      ...(await getGlobalElements(context)),
    },
  }
}
