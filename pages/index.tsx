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
    <Layout meta={{ title: t("Tous acteurs de l'économie réelle") }} menus={menus} blocks={blocks}>



      <div className="max-w-screen-lg px-6 mx-auto">


<div className="container pt-25 pb-25">


        <h1 className="mb-3 text-5xl font-black text-center"><p>Tous acteurs de </p> <span className="text-blue-800">l&#39;économie réelle.</span></h1>
        <h2 className="mb-10 text-2xl text-gray-400 text-center">Améliorez la santé financière de votre entreprise. Financez vos opérations, intégrez des partenaires, libérez de la valeur. En quelques clics seulement. </h2>

        {status === "error" ? (
          <div className="px-4 py-2 text-sm text-red-600 bg-red-100 border-red-200 rounded-md">
            Il y a une erreur. Veuillez recommencer.
          </div>
        ) : null}
        {status === "success" ? (
          <div className="px-4 py-2 text-sm text-green-600 bg-green-100 border-green-200 rounded-md">
            Votre message a été envoyé. Merci.
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
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >


            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="mon@entreprise.com"
              className="d-inline-block w-4/6 px-3 py-2 mr-1 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
              {...register("email")}
            />
            <button
              type="submit"
              data-cy="btn-submit"
              className="justify-center px-4 py-2 text-sm d-inline-block font-medium text-white bg-black border border-transparent rounded-md shadow-sm hover:bg-black"
            >
              Participer à la version bêta
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
<div className="grid grid-cols-6 gap-4">
  <div>        <Image src="/federage-logo.svg" height={100} width={200}  alt="Logo federage" />
</div>
<div className="col-span-5">
<Link href="./login" passHref>
  <a className="no-underline hover:text-blue-600">
  <h2 className="text-xl">Démarrer</h2>
  <p>S&#39;inscrire pour commencer un financement</p>  </a>
</Link>

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


    <Link href="./articles" passHref>
      <a className="no-underline hover:text-blue-600">
      <h2 className="text-xl">Blog</h2>
      <p>Apprendre sur le financement-capital</p> </a>
    </Link>
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
