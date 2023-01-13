import Head from "next/head"
import { GetStaticPropsResult } from "next"
import { DrupalNode } from "next-drupal"

import { getGlobalElements } from "lib/get-global-elements"
import { Meta, MetaProps } from "components/meta"
import { useTranslation } from "next-i18next"

import { drupal } from "lib/drupal"
import { Layout, LayoutProps } from "components/layout"
import { NodeArticleTeaser } from "components/node--article--teaser"
import siteConfig from "site.config"

interface IndexPageProps {
  nodes: DrupalNode[]
}



export default function IndexPage({ nodes, menus, blocks, }: IndexPageProps) {
  const { t } = useTranslation()

  return (
    <Layout meta={{ title: t("Tous acteurs de l'économie réelle") }} menus={menus} blocks={blocks}>



      <div className="max-w-screen-lg px-6 mx-auto">


<div className="container pt-25 pb-25">


        <h1 className="mb-3 text-5xl font-black text-center"><p>Tous acteurs de </p> <span className="text-blue-800">l&#39;économie réelle.</span></h1>
        <h2 className="mb-10 text-2xl text-gray-400 text-center">Solution de financement-capital  pour entreprises</h2>

</div>


<h3 className="mb-2 text-lg font-black text-gray-400 text-left">SECTIONS</h3>
<hr className="mb-10"/>
<div className="grid grid-cols-6 gap-4">
  <div>01</div>
<div className="col-span-5"><h2 className="text-xl">Démarrer</h2>
<p>S&#39;inscrire pour commencer un financement</p>
</div>
  <hr className="col-span-6 my-10"/>
  <div>02</div>
  <div className="col-span-5">
  <h2 className="text-xl">Explorer</h2>
  <p>Découvrir les besoins des entreprises</p>
  </div>
    <hr className="col-span-6 my-10"/>

    <div>03</div>
    <div className="col-span-5">
    <h2 className="text-xl">Blog</h2>
    <p>Apprendre sur le financement-capital</p>
    </div>
      <hr className="col-span-6 my-10"/>


          <div>04</div>
          <div className="col-span-5">
          <h2 className="text-xl">Documentation</h2>
          <p>Supports techniques de l’application</p>
                    </div>
            <hr className="col-span-6 my-10"/>
            </div>








      </div>

    </Layout>
  )
}

export async function getStaticProps(
  context
): Promise<GetStaticPropsResult<IndexPageProps>> {
  const nodes = await drupal.getResourceCollectionFromContext<DrupalNode[]>(
    "node--article",
    context,
    {
      params: {
        "filter[status]": 1,
        "fields[node--article]": "title,path,field_image,uid,created",
        include: "field_media_image,uid",
        sort: "-created",
      },
    }
  )

  return {
    props: {
      ...(await getGlobalElements(context)),

      nodes,
    },
  }
}
