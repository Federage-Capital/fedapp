import * as React from "react";
import Link from "next/link";
import Image from "next/image"
import {
  DrupalNode,
  getSearchIndexFromContext,
  deserialize,
  JsonApiSearchApiResponse,
  DrupalSearchApiFacet,
} from "next-drupal";
import { useTranslation } from "next-i18next"
import { GetStaticPropsResult } from "next"
import { useRouter } from "next/router"
import { getGlobalElements } from "lib/get-global-elements"
import { Layout, LayoutProps } from "components/layout"
import { PageHeader } from "components/page-header"
import { DrupalJsonApiParams } from "drupal-jsonapi-params";
import { BoxUserList } from "components/box-alluserlist"
import { BarsArrowUpIcon, UsersIcon } from '@heroicons/react/20/solid'


const params = {
  fields: {
    "file--file": "uri",
  },
  filter: {

  },
  include: "user_picture,field_type_de_structure,roles",


}


export default function AlluserlistPage
  ({ menus, blocks, users, nodes,
    facets: initialFacets,
  }: AlluserlistPageProps) {
  const { t } = useTranslation()
  const router = useRouter()



  const [status, setStatus] = React.useState<"error" | "success" | "loading">()
  const [results, setResults] = React.useState<DrupalNode[]>(nodes)
  const [facets, setFacets] =
    React.useState<DrupalSearchApiFacet[]>(initialFacets)

  async function handleSubmit(event) {
    event.preventDefault()

    for (const filter of ["fulltext", "name", "field_status"]) {
      if (event.target[filter]?.value != "") {
        params["filter"][filter] = event.target[filter]?.value
      }
    }


    setStatus("loading")
    const response = await fetch("/api/search/default_index", {
      method: "POST",
      body: JSON.stringify({
        deserialize: false,
        params,
      }),
    })

    if (!response.ok) {
      return setStatus("error")
    }

    setStatus("success")

    const json = await response.json()
    const results = deserialize(json) as DrupalNode[]

    setResults(results)

    if (results?.length) {
      setFacets(json.meta.facets)
    }
  }



  return (
    <div className="bg-slate-100">
      <Layout meta={{ title: t("Explorer") }} menus={menus} blocks={blocks}>
        <div className="px-6">
          <h1 className="max-w-4xl mb-1 text-4xl text-left md:text-5xl lg:text-4xl">Explorer</h1>

          <p className="mb-3 text-zinc-500">Vous pouvez répondre à une demande de partenariat, effectuer une offre d’apport et intégrer plusieurs projets à la fois.</p>

          <form onSubmit={handleSubmit} className="space-y-2 mb-4">
            <div className="flex xs:hidden items-start w-100">
              <input
                type="search"
                placeholder="Rechercher un membre"
                name="fulltext"
                className="d-inline-flex content-start flex-auto  px-3 py-2 mr-1 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
              />
              <div className="grid gap-4 py-4 md:grid-cols-1">
              </div>
              <div className="flex">
                <button
                  type="submit"
                  data-cy="btn-submit"
                  className="hidden sm:block justify-center content-end w-fit px-3 py-2 sm:text-sm d-inline-block font-medium text-white bg-black border border-transparent rounded-md shadow-sm hover:bg-black"
                >
                  {status === "Chargement" ? "Attendez..." : "Recherche"}
                </button>
              </div>
            </div>
            <button
              type="submit"
              data-cy="btn-submit"
              className="hiddedesk xs:block w-full justify-center  px-3 py-2 sm:text-sm font-medium text-white bg-black border border-transparent rounded-md shadow-sm hover:bg-black"
            >
              {status === "Chargement" ? "Attendez..." : "Recherche"}
            </button>
          </form>
          {status === "error" ? (
            <div className="px-4 py-2 text-sm text-red-600 bg-red-100 border-red-200 rounded-md">
              Une erreur s&#39;est produite. Veuillez réessayer.
            </div>
          ) : null}
          {!results.length ? (
            <p className="text-sm" data-cy="search-no-results">
              Aucun résultat.
            </p>
          ) : (
            <div className="md:grid-cols-1">
              {results.map((node) => (
                <div key={node.id}>
                  <BoxUserList key={node.id} node={node} />
                </div>
              ))}
            </div>
          )}
        </div>
      </Layout>

    </div >

  )
}

export async function getStaticProps(
  context
): Promise<GetStaticPropsResult<AccountPageProps>> {

  const results = await getSearchIndexFromContext<JsonApiSearchApiResponse>(
    "default_index",
    context,
    {
      deserialize: false,
      params,
    }
  )





  return {
    props: {
      ...(await getGlobalElements(context)),

      nodes: deserialize(results) as DrupalNode[],
      facets: results.meta.facets,
    },
    revalidate: 5,

  };
}
