import * as React from "react"
import Head from "next/head"
import { GetStaticPropsResult } from "next"
import { DrupalNode } from "next-drupal"
<<<<<<< Updated upstream
import Link from "next/link"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { getGlobalElements } from "lib/get-global-elements"
import { Meta, MetaProps } from "components/meta"
import { useTranslation } from "next-i18next"
import Image from "next/image"
=======
import Image from "next/image"
import Link from "next/link"
import classNames from "classnames"
import { DrupalFile, DrupalMedia, DrupalNode, JsonApiErrors } from "next-drupal"
import { drupal } from "lib/drupal"

import { getGlobalElements } from "lib/get-global-elements"
import { Meta, MetaProps } from "components/meta"
import { useTranslation } from "next-i18next"
import { absoluteURL, formatDate } from "lib/utils"
import cn from 'classnames'
>>>>>>> Stashed changes

import { Layout, LayoutProps } from "components/layout"
import { NodeArticleTeaser } from "components/node--article--teaser"
import siteConfig from "site.config"
<<<<<<< Updated upstream
import { useForm } from "react-hook-form"
import { contactFormSchema } from "../validations/contact"

type FormData = yup.TypeOf<typeof contactFormSchema>
=======
import CoverImage from 'components/cover-image'
>>>>>>> Stashed changes

interface IndexPageProps {
  nodes: DrupalNode[]
}

interface WebformPageProps {
  teams: DrupalTaxonomyTerm[]
}


<<<<<<< Updated upstream

export default function IndexPage({ nodes, menus, blocks, teams, }: IndexPageProps, WebformPageProps) {
=======
export default function IndexPage({ nodes, menus, coverImage, slug, blocks, }: IndexPageProps) {
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    <Layout meta={{ title: t("Accueil") }} menus={menus} blocks={blocks}>
=======
    <Layout meta={{ title: t("Comité d'histoire de la politique de la ville") }} menus={menus} blocks={blocks}>
>>>>>>> Stashed changes



      <div className="max-w-screen-2xl mx-auto container orange-500 p-10 ">


<<<<<<< Updated upstream
<div className="container pt-15 pb-10">


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
              className="hidden sm:block justify-center content-end w-fit px-3 py-2 sm:text-sm d-inline-block font-medium text-white bg-black border border-transparent rounded-md shadow-sm hover:bg-black"
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
=======

<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
{nodes?.length ? (
  nodes.map((node) => (
    <div key={node.id}
    className=" space-x-3  border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
>
    <div className="">




<Link href={node.path.alias} passHref>
  <a
    className={classNames(
      "text-2xl font-medium hover:text-gray-900 w-100",

    )}
  >
{node.title}
  </a>
</Link>

{node.field_media_image && (
  <figure className="mb-10">
    <Image
      src={absoluteURL(
        node.field_media_image.field_media_image.uri.url
      )}
      alt={
        node.field_media_image.field_media_image.resourceIdObjMeta.alt
      }
      width={785}
      height={525}
      layout="responsive"
      objectFit="cover"
    />
  </figure>
)}

{node.body.summary}

    </div>
        </div>
  ))
) : (
  <p className="py-4"></p>
)}
>>>>>>> Stashed changes

    <div className="content-start w-20 min-w-fit">

<<<<<<< Updated upstream
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
=======
</div>
>>>>>>> Stashed changes


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
        "filter[promote]": 1,
        "filter[status]": 1,
        include: "field_media_image.field_media_image,uid",
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
