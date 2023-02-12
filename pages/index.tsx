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


<div className="container pt-15 pb-10">


        <h1 className="mb-3 text-5xl font-black">Tous acteurs de <span className="fedblueblue">l&#39;économie réelle</span>.</h1>
        <h2 className="mb-10 text-xl text-gray-400">Améliorez la santé financière de votre entreprise. Financez vos opérations, intégrez des partenaires, libérez de la valeur. En quelques clics seulement. </h2>

        <p className="flex mt-4 text-xl font-bold">Inscrivez-vous pour rejoindre la liste d&#39;attente.
        </p>

        {status === "error" ? (
          <div className="px-4 py-2 text-sm text-red-600 bg-red-100 border-red-200 rounded-md">
            Il y a une erreur. Veuillez recommencer.
          </div>
        ) : null}
        {status === "success" ? (
          <div className="px-4 py-2 text-sm text-green-600 bg-green-100 border-green-200 rounded-md">
            Votre inscription est prise en compte !
          </div>
        ) : null}
        {Object.values(formState.errors)?.length ? (
          <div className="px-4 py-2 text-sm text-red-600 bg-red-100 border-red-200 rounded-md">
            {Object.values(formState.errors).map((error, index) => (
              <p key={index}>{error.message}</p>
            ))}
          </div>
        ) : null}

        <form className="space-y-6 inputWithButton" onSubmit={handleSubmit(onSubmit)}>
          <div>

          </div>
          <div className="flex items-start w-100">

            <input
              id="email"
              name="email"
              type="email"
              placeholder="mon@entreprise.com"
              className="d-inline-flex content-start flex-auto px-3 py-2 mr-1 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
              {...register("email")}
            />
            <button
              type="submit"
              data-cy="btn-submit"
              className="justify-center content-end w-fit px-3 py-2 sm:text-sm d-inline-block font-medium text-white bg-black border border-transparent rounded-md shadow-sm hover:bg-black"
            >
              Inscription
            </button>
          </div>
          <div>

          </div>
          <div>

          </div>
          <div>

          </div>

        </form>

</div>


<h3 className="mb-2 text-lg font-black text-gray-400 text-left">SECTIONS</h3>
<hr className="mb-10"/>


<div className="flex items-start w-100">
  <div className="content-start w-24 min-w-fit">
  <Link href="./login" passHref><a>
    <Image src="/demarrer.svg" height={70} width={70} alt="demarrer" />
  </a>
</Link>


</div>
<div className="content-end">
<Link href="./login" passHref>
  <a className="no-underline hover:text-blue-600">
  <h2 className="text-xl">Démarrer</h2>
  <p>Piloter des financements pour son entreprise.</p>  </a>
</Link>
</div>
</div>

  <hr className="flex w-100 my-10"/>
  <div className="flex items-start w-100">
  <div className="content-start w-24 min-w-fit">
    
    <Image src="/explorer.svg" height={70} width={70}  alt="explorer" />
  

  </div>
  <div className="content-end">
  <Link href="./alluserlist" passHref>
    <a className="no-underline hover:text-blue-600">
    <h2 className="text-xl">Explorer</h2>
    <p>Parcourir des opportunités de partenariats.</p> </a>
  </Link>
  </div>
  </div>
    <hr className="flex w-100 my-10"/>
    <div className="flex items-start w-100">

    <div className="content-start w-24 min-w-fit">

      <Link href="./articles" passHref><a>    <Image src="/blog.svg" height={70} width={70}  alt="blog" />
    </a>
 </Link>
    </div>
    <div className="content-end">


    <Link href="./articles" passHref>
      <a className="no-underline hover:text-blue-600">
      <h2 className="text-xl">Blog</h2>
      <p>En savoir plus sur les avantages du service.</p> </a>
    </Link>
    </div>
    </div>
      <hr className="flex w-100 my-10 my-10"/>
      <div className="flex items-start w-100">

      <div className="content-start w-24 min-w-fit">
 <Image src="/documentation.svg" height={70} width={70}  alt="documentation" />
      </div>
        <div className="col-span-5">
          <Link href="https://github.com/Federage-Capital" passHref> 
          <a className="no-underline hover:text-blue-600">
          <h2 className="text-xl">Documentation</h2>
          <p>Support technique et code source de l’application.</p> </a>
          </Link>
          
          </div>

            </div>
            <hr className="col-span-6 my-10"/>


            </div>
           <div className="px-6 pt-5 mb-5 text-lg fedblueblue font-bold" >
           <a href="mailto:bonjour@federage.com">Vous avez une question ?</a>
           <a className="no-underline hover:text-blue-600"> </a>
        

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
