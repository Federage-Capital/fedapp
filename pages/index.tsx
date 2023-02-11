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


<<<<<<< Updated upstream
<<<<<<< Updated upstream
        <h1 className="mb-3 text-4xl font-black text-center"><p>Tous acteurs de </p> <span class="fedbluetext">l'économie réelle.</span> </h1>
        <h2 className="mb-10 text-2xl text-gray-500 text-center">Solution de financement-capital pour entreprise</h2>
</div>
=======
        <h1 className="mb-3 text-5xl font-black text-center"><p>Tous acteurs de </p> <span className="fedblueblue">l&#39;économie réelle.</span></h1>
        <h2 className="mb-10 text-2xl text-gray-400 text-center">Améliorez la santé financière de votre entreprise. Financez vos opérations, intégrez des partenaires, libérez de la valeur. En quelques clics seulement. </h2>

        {status === "error" ? (
          <div className="px-4 py-2 text-sm text-red-600 bg-red-100 border-red-200 rounded-md">
            Il y a une erreur. Veuillez recommencer.
          </div>
        ) : null}
        {status === "success" ? (
          <div className="px-4 py-2 text-sm text-green-600 bg-green-100 border-green-200 rounded-md">
            Votre inscription a été prise en compte. Merci.
          </div>
        ) : null}
        {Object.values(formState.errors)?.length ? (
          <div className="px-4 py-2 text-sm text-red-600 bg-red-100 border-red-200 rounded-md">
            {Object.values(formState.errors).map((error, index) => (
              <p key={index}>{error.message}</p>
            ))}
          </div>
        ) : null}

        <form className="space-y-6 text-center inputWithButton" onSubmit={handleSubmit(onSubmit)}>
          <div>

          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
>>>>>>> Stashed changes



<h3 className="mb-2 text-lg font-black text-gray-500 text-left">SECTIONS</h3>

<hr class="mb-10"/>
<div class="grid grid-cols-6 gap-4">
<div>01</div>
<div class="col-span-5"><h2 class="text-xl">Démarrer</h2>
<p> <span class="text-gray-500">Piloter ses financements d’entreprise</span> </p>
=======
        <h1 className="mb-3 text-4xl font-black text-center"><p>Tous acteurs de </p> <span className="fedtextblue">l'économie réelle.</span></h1>
        <h2 className="mb-10 text-2xl text-gray-400 text-center">Solution de financement-capital pour entreprise</h2>

</div>


<h3 className="mb-2 text-lg font-black text-gray-400 text-left">SECTIONS</h3>
<hr className="mb-10"/>
<div className="grid grid-cols-6 gap-4">
  <div>01</div>
<div className="col-span-5"><h2 className="text-xl">Démarrer</h2>
<p>Piloter ses financements d’entreprise</p>
>>>>>>> Stashed changes
</div>
<<<<<<< Updated upstream
=======
<div className="col-span-5">
<Link href="./login" passHref>
  <a className="no-underline hover:text-blue-800">
  <h2 className="text-xl">Démarrer</h2>
  <p>Piloter des financements pour son entreprise.</p>  </a>
</Link>
>>>>>>> Stashed changes

  <hr class="col-span-6 my-10"/>  
  <div>02</div>
<<<<<<< Updated upstream
  <div class="col-span-5">
  <h2 class="text-xl">Explorer</h2>
  <p> <span class="text-gray-500">Répondre aux besoins des professionnels</span> </p>
=======
  <div className="col-span-5">
  <h2 className="text-xl">Explorer</h2>
<<<<<<< Updated upstream
  <p>Répondre aux besoins des professionnels</p>
>>>>>>> Stashed changes
=======
  <p>Parcourir des opportunités de partenariats.</p>
>>>>>>> Stashed changes
  </div>
   
    <hr class="col-span-6 my-10"/>
    <div>03</div>
<<<<<<< Updated upstream
    <div class="col-span-5">
    <h2 class="text-xl">Blog</h2>
    <p> <span class="text-gray-500">En savoir plus sur le financement-capital</span> </p>
=======
    <div className="col-span-5">
    <h2 className="text-xl">Blog</h2>
    <p>En savoir plus sur le financement-capital</p>
>>>>>>> Stashed changes
    </div>
      
      <hr class="col-span-6 my-10"/>
      <div>04</div>
      <div class="col-span-5">
      <h2 class="text-xl">Documentation</h2>
      <p> <span class="text-gray-500">Supports techniques de l’application</span> </p>
      </div>
        
        <hr class="col-span-6 my-10"/>
         
            </div>


<<<<<<< Updated upstream
<<<<<<< Updated upstream
<h3 className="mb-2 text-lg font-black text-gray-400 text-left fedbluetext"><a href="mailto:bonjour@federage.com">Vous avez une question ?</a></h3>



=======
<h3 className="mb-2 text-lg font-black text-gray-400 text-left"> <span className="fedtextblue"><a href="mailto:bonjour@federage.com">Vous avez une question ?</a></span> </h3>
<span className="fedtextblue"> </span>
>>>>>>> Stashed changes

=======
>>>>>>> Stashed changes
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