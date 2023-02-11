import * as React from "react"
import Head from "next/head"
import { GetStaticPropsResult } from "next"
import { DrupalNode } from "next-drupal"
import Link from "next/link"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { getGlobalElements } from "lib/get-global-elements"
import { Meta, MetaProps } from "components/meta"
import { useTranslation } from "next-i18next"
import Image from "next/image"

import { drupal } from "lib/drupal"
import { Layout, LayoutProps } from "components/layout"
import { NodeArticleTeaser } from "components/node--article--teaser"
import siteConfig from "site.config"
import { useForm } from "react-hook-form"
import { contactFormSchema } from "../validations/contact"

type FormData = yup.TypeOf<typeof contactFormSchema>

interface IndexPageProps {
  nodes: DrupalNode[]
}

interface WebformPageProps {
  teams: DrupalTaxonomyTerm[]
}



export default function IndexPage({ nodes, menus, blocks, teams, }: IndexPageProps, WebformPageProps) {
  const { t } = useTranslation()

    const [status, setStatus] = React.useState<"error" | "success">()
    const { register, handleSubmit, formState, reset } = useForm<FormData>({
      resolver: yupResolver(contactFormSchema),
    })

    // This makes a POST to a custom API route.
    // The Drupal base URL and the webform_id are NOT exposed.
    async function onSubmit(data: FormData) {
      const response = await fetch(`/api/contact`, {
        method: "POST",
        body: JSON.stringify(data),
      })

      if (response.ok) {
        reset()
        return setStatus("success")
      }

      return setStatus("error")
    }
  return (
    <Layout meta={{ title: t("Federage") }} menus={menus} blocks={blocks}>



      <div className="max-w-screen-lg px-6 mx-auto">


<div className="container pt-25 pb-25">


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



<h3 className="mb-2 text-lg font-black text-gray-500 text-left">SECTIONS</h3>

<hr class="mb-10"/>
<div class="grid grid-cols-6 gap-4">
<div>01</div>
<div class="col-span-5"><h2 class="text-xl">Démarrer</h2>
<p> <span class="text-gray-500">Piloter ses financements d’entreprise</span> </p>

        <h1 className="mb-3 text-4xl font-black text-center"><p>Tous acteurs de </p> <span className="fedtextblue">l'économie réelle.</span></h1>
        <h2 className="mb-10 text-2xl text-gray-400 text-center">Solution de financement-capital pour entreprise</h2>

</div>


<h3 className="mb-2 text-lg font-black text-gray-400 text-left">SECTIONS</h3>
<hr className="mb-10"/>
<div className="grid grid-cols-6 gap-4">
  <div>01</div>
<div className="col-span-5"><h2 className="text-xl">Démarrer</h2>
<p>Piloter ses financements d’entreprise</p>
</div>
<div className="col-span-5">
<Link href="./login" passHref>
  <a className="no-underline hover:text-blue-800">
  <h2 className="text-xl">Démarrer</h2>
  <p>Piloter des financements pour son entreprise.</p>  </a>
</Link>

  <hr class="col-span-6 my-10"/>
  <div>02</div>
  <div className="col-span-5">
  <h2 className="text-xl">Explorer</h2>
  <p>Parcourir des opportunités de partenariats.</p>
  </div>

    <hr class="col-span-6 my-10"/>
    <div>03</div>
    <div className="col-span-5">
    <h2 className="text-xl">Blog</h2>
    <p>En savoir plus sur le financement-capital</p>
    </div>

      <hr class="col-span-6 my-10"/>
      <div>04</div>
      <div class="col-span-5">
      <h2 class="text-xl">Documentation</h2>
      <p> <span class="text-gray-500">Supports techniques de l’application</span> </p>
      </div>

        <hr class="col-span-6 my-10"/>

            </div>


<h3 className="mb-2 text-lg font-black text-gray-400 text-left"> <span className="fedtextblue"><a href="mailto:bonjour@federage.com">Vous avez une question ?</a></span> </h3>
<span className="fedtextblue"> </span>

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
