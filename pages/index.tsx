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
    <Layout meta={{ title: t("Federage") }} menus={menus} blocks={blocks}>



      <div className="max-w-screen-lg px-6 mx-auto">


<div className="container pt-25 pb-25">


        <h1 className="mb-3 text-4xl font-black text-center"><p>Tous acteurs de </p> <span class="fedbluetext">l'économie réelle.</span> </h1>
        <h2 className="mb-10 text-2xl text-gray-500 text-center">Solution de financement-capital pour entreprise</h2>
</div>



<h3 className="mb-2 text-lg font-black text-gray-500 text-left">SECTIONS</h3>

<hr class="mb-10"/>
<div class="grid grid-cols-6 gap-4">
<div>01</div>
<div class="col-span-5"><h2 class="text-xl">Démarrer</h2>
<p> <span class="text-gray-500">Piloter ses financements d’entreprise</span> </p>
</div>

  <hr class="col-span-6 my-10"/>  
  <div>02</div>
  <div class="col-span-5">
  <h2 class="text-xl">Explorer</h2>
  <p> <span class="text-gray-500">Répondre aux besoins des professionnels</span> </p>
  </div>
   
    <hr class="col-span-6 my-10"/>
    <div>03</div>
    <div class="col-span-5">
    <h2 class="text-xl">Blog</h2>
    <p> <span class="text-gray-500">En savoir plus sur le financement-capital</span> </p>
    </div>
      
      <hr class="col-span-6 my-10"/>
      <div>04</div>
      <div class="col-span-5">
      <h2 class="text-xl">Documentation</h2>
      <p> <span class="text-gray-500">Supports techniques de l’application</span> </p>
      </div>
        
        <hr class="col-span-6 my-10"/>
         
            </div>


<h3 className="mb-2 text-lg font-black text-gray-400 text-left fedbluetext"><a href="mailto:bonjour@federage.com">Vous avez une question ?</a></h3>




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