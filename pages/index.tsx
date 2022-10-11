import Head from "next/head"
import { GetStaticPropsResult } from "next"
import { DrupalNode } from "next-drupal"

import { getGlobalElements } from "lib/get-global-elements"
import { Meta, MetaProps } from "components/meta"
import { useTranslation } from "next-i18next"
import { Footer, FooterProps } from "components/footer"

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
    <Layout meta={{ title: t("The open source company") }} menus={menus} blocks={blocks}>



      <div>





        <h1 className="mb-10 text-5xl font-black text-center"><p>Tous acteurs de </p> <p>l'économie réelle.</p></h1>
        <h2 className="mb-10 text-3xl font-grey text-center">Solution de financement-capital  pour entreprises</h2>

<h3 className="mb-10 text-1xl font-grey text-left">SECTIONS</h3>
<h4>
<p>Démarrer</p>
<p>S'inscrire pour commencer un financement</p>
<br/>
<p>Explorer</p>
<p>Découvrir les besoins des entreprises</p>
<br/>

<p>Blog</p>
<p>Apprendre sur le financement-capital</p>
<br/>

<p>Documentation</p>
<p>Supports techniques de l’application</p>
</h4>
        {nodes?.length ? (
          nodes.map((node) => (
            <div key={node.id}>
              <NodeArticleTeaser node={node} />
              <hr className="my-20" />
            </div>
          ))
        ) : (
          <p className="py-4">No nodes found</p>
        )}
      </div>
      <Footer menus={{ footer: menus.footer }} blocks={blocks} />

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
