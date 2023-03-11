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
    <Layout meta={{ title: t("Accueil") }} menus={menus} blocks={blocks}>



      <div className="max-w-screen-lg px-6 mx-auto">


<div className="container pt-15 pb-10">

<div className="grid xs:grid-cols-1 sm:grid-cols-1 md:py-10 md:mb-5 md:grid-cols-2 gap-12">
<div>
        <h1 className="mb-4 text-3xl font-bold text-black">Le meilleur moyen de mesurer sa valeur.</h1>
        <h2 className="mb-10 text-lg text-black">Federage construit un réseau économique coopératif pour les entreprises et les organisations. Financez vos opérations, intégrez des partenaires, libérez de la valeur. En quelques clics seulement. </h2>

        <p className="flex mt-4 text-lm font-bold">Inscrivez-vous pour rejoindre la liste d&#39;attente.
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

        <form className="space-y-2 inputWithButton" onSubmit={handleSubmit(onSubmit)}>
          <div>

          </div>
          <div className="flex xs:hidden items-start w-100">

            <input
              id="email"
              name="email"
              type="email"
              placeholder="mon@entreprise.com"
              className="d-inline-flex content-start flex-auto mr-1 px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
              {...register("email")}
            />
            <button
              type="submit"
              data-cy="btn-submit"
              className="hidden sm:block justify-center content-end w-fit px-5 py-2 sm:text-sm d-inline-block font-medium text-white bg-black border border-transparent rounded-md shadow-sm hover:bg-black"
            >
              Inscription
            </button>


          </div>
          <button
            type="submit"
            data-cy="btn-submit"
            className="hiddedesk xs:block w-full justify-center  px-3 py-2 sm:text-sm font-medium text-white bg-black border border-transparent rounded-md shadow-sm hover:bg-black"
          >
            Inscription
          </button>
          <div>

          </div>
          <div>

          </div>
          <div>

          </div>

        </form>
</div>
<div className="hidden md:block">

<Image src="https://fed.septembre.io/photo-1521737852567-6949f3f9f2b5.jpg" height={550} width={800}   class="mx-auto rounded-md"
  objectFit="cover" alt="demarrer" />

</div>
</div>

</div>
<h3 className="mb-2 text-lm font-black text-gray-400 text-left">SECTIONS</h3>
<hr className="mb-10"/>


<div className="flex items-start w-100">
  <div className="content-start w-20 min-w-fit">
  <Link href="./login" passHref><a>
    <Image src="/demarrer.svg" height={60} width={60} alt="demarrer" />
  </a>
</Link>


</div>
<div className="ml-3 content-end">
<Link href="./login" passHref>
  <a className="no-underline hover:text-blue-600">
  <h2 className="text-xl">Démarrer</h2>
  <p>Financer le développement de son entreprise.</p>  </a>
</Link>
</div>
</div>

  <hr className="flex w-100 my-10"/>
  <div className="flex items-start w-100">
  <div className="content-start w-20 min-w-fit">

    <Image src="/explorer.svg" height={60} width={60}  alt="explorer" />



  </div>
  <div className="ml-3 content-end">
  <Link href="./alluserlist" passHref>
    <a className="no-underline hover:text-blue-600">
    <h2 className="text-xl">Explorer</h2>
    <p>Parcourir des opportunités de partenariats.</p> </a>
  </Link>
  </div>
  </div>
    <hr className="flex w-100 my-10"/>
    <div className="flex items-start w-100">

    <div className="content-start w-20 min-w-fit">

      <Link href="./articles" passHref><a>
      <Image src="/blog.svg" height={60} width={60}  alt="blog" />
    </a>
 </Link>

  </div>
  <div className="ml-3 content-end">
  <Link href="./articles" passHref>
    <a className="no-underline hover:text-blue-600">
    <h2 className="text-xl">Blog</h2>
    <p>En savoir plus sur les avantages du service.</p> </a>
  </Link>
  </div>
  </div>
    <hr className="flex w-100 my-10 my-10"/>
    <div className="flex items-start w-100">

    <div className="content-start w-20 min-w-fit">

      <Image src="/documentation.svg" height={60} width={60}  alt="documentation" />
      </div>
        <div className="ml-3 content-end">
          <Link href="https://github.com/Federage-Capital" passHref>

          <a className="no-underline hover:text-blue-600">
          <h2 className="text-xl">Documentation</h2>
          <p>Support technique et code source de l’application.</p> </a>
          </Link>

          </div>

            </div>
            <hr className="col-span-6 my-10"/>


            </div>
           <div className="px-6 pt-5 mb-20 text-lg fedblueblue font-bold" >
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
