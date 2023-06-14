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
import { AiOutlineSearch } from 'react-icons/ai'


const params = {
  fields: {
    "file--file":
      "uri",
  },
  filter: {},
  include: "user_picture, field_type_de_structure",


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


        <h1 className="max-w-4xl mb-1 text-4xl text-left md:text-5xl lg:text-4xl">Explorer</h1>

        <p className="mb-3 text-zinc-500">Vous pouvez répondre à une demande de partenariat, effectuer une offre d’apport et intégrer plusieurs projets à la fois.</p>

        <form onSubmit={handleSubmit} className="px-2 space-y-2 mb-4">
          <div className="flex xs:hidden items-start w-100 pb-4">
            <div className="w-full -ml-3">
              <div className="mt-2 flex rounded-md shadow-sm">
                <div className="relative flex flex-grow items-stretch focus-within:z-10">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <AiOutlineSearch className="h-4 w-4 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    type="search"
                    name="fulltext"
                    className="block w-full rounded-none rounded-l-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Recherche"
                  />
                </div>
                <button
                  type="button"
                  className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 -mr-5"
                >
                  <BarsArrowUpIcon className="-ml-0.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                  A-Z
                </button>
              </div>
            </div>

          </div>
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
          <div className="px-6">
            <div className="md:grid-cols-1">
              {results.map((node) => (
                <div key={node.id}>
                  <BoxUserList key={node.id} node={node} />
                </div>
              ))}
            </div>
          </div>
        )}
      </Layout>
    </div>
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
