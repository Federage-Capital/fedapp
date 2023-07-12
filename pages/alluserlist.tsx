import * as React from "react";
import Image from "next/image"
import {
  DrupalNode,
  getSearchIndexFromContext,
  deserialize,
  JsonApiSearchApiResponse,
} from "next-drupal";
import { useTranslation } from "next-i18next"
import { GetStaticPropsResult } from "next"
import { useRouter } from "next/router"
import { getGlobalElements } from "lib/get-global-elements"
import { Layout } from "components/layout"
import { BoxUserList } from "components/box-alluserlist"
import { BoxProjectList } from "components/box-project-alluserlist";
import { useSession } from "next-auth/react"


import { usePaginatedSearch } from "../hooks/use-paginated-search"

function formatDate(input: string): string {
  const date = new Date(input)
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

import useSWR from 'swr'


const fetcher = (url) => fetch(url).then((r) => r.json());

const params = {
  fields: {
    "group--federage": "label",
    "user--user": "name,display_name,field_nom_affiche,field_description,field_type_de_structure",

  },
  filter: {

  },
}



export default function AlluserlistPage
  ({ menus, blocks, users, nodes,
    facets: initialFacets,
  }: AlluserlistPageProps) {
  const { t } = useTranslation()
  const router = useRouter()

  const { data: session, status } = useSession()


  const { data: useringroup, error: useringroupError } = useSWR(() => `https://fed.septembre.io/explorer-user-in-group`, fetcher)


  const [state, setStatus] = React.useState<"error" | "success" | "loading">()
  const [results, setResults] = React.useState<DrupalNode[]>(nodes)
  const [openTab, setOpenTab] = React.useState(1);
  const [facets, setFacets] =
    React.useState<DrupalSearchApiFacet[]>(initialFacets)

  const { data, hasNextPage, isFetching, fetchNextPage, isError } =
    usePaginatedSearch()

  function onSubmit(event) {
    event.preventDefault()

    router.push({
      pathname: "/alluserlist",
      query: `keywords=${event.target.keywords.value}`,
    })
  }

  return (
    <div className="bg-slate-100">
      <Layout meta={{ title: t("Explorer") }} menus={menus} blocks={blocks}>
        <div className="px-6">
          <h1 className="max-w-4xl mb-3 text-4xl text-left md:text-5xl lg:text-4xl">Explorer</h1>

          <p className="mb-3 text-zinc-500">Vous pouvez répondre à une demande de partenariat, faire une offre d'apport et intégrer plusieurs projets.</p>


          <form onSubmit={onSubmit} className="mb-4">
            <div className="items-center gap-4 sm:grid sm:grid-cols-7">
              <input
                type="search"
                placeholder="Rechercher un projet"
                name="keywords"
                required
                className="relative block w-full col-span-5 px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
              />
              <button
                type="submit"
                data-cy="btn-submit"
                className="flex justify-center w-full px-4 py-2 mt-4 text-sm font-medium text-white bg-black border border-transparent rounded-md shadow-sm sm:col-span-2 sm:mt-0 hover:bg-black"
              >
                {isFetching ? "Recherche en cours" : "Recherche"}
              </button>
            </div>
          </form>
          {isError ? (
            <div className="px-4 py-2 text-sm text-red-600 bg-red-100 border-red-200 rounded-md">
              An error occured. Please try again.
            </div>
          ) : null}
          {!data?.pages?.length ? (
            <div className="text-sm" data-cy="search-no-results">
              Aucun résultat
              <ul className="flex justify-center items-center">
                <li className="-mb-px mr-2 last:mr-0 flex-left text-center">
                  <a
                    className={"text-xs font-bold px-2 py-3 rounded-md leading-normal " + (openTab === 1 ? "fedblueblue" + "" : "text-" + "bg-white")}
                    onClick={e => {
                      e.preventDefault();
                      setOpenTab(1);
                    }}
                    data-toggle="tab"
                    href="#link1"
                    role="tablist"
                  >
                    Projet
                  </a>
                </li>
                <li className="-mb-px mr-2 last:mr-0 flex-left text-center">
                  <a
                    className={"text-xs font-bold px-2 py-3 rounded-md leading-normal " + (openTab === 2 ? "fedblueblue" + "" : "text-" + "bg-white")}
                    onClick={e => {
                      e.preventDefault();
                      setOpenTab(2);
                    }}
                    data-toggle="tab"
                    href="#link1"
                    role="tablist"
                  >
                    Entreprise
                  </a>
                </li>
              </ul>
              <div className="pb-10" />
              {state === "error" ? (
                <div className="px-4 py-2 text-sm text-red-600 bg-red-100 border-red-200 rounded-md">
                  Une erreur s&#39;est produite. Veuillez réessayer.
                </div>
              ) : null}
              <div className={openTab === 2 ? "block" : "hidden"}>
                {!results.length ? (
                  <p className="text-sm" data-cy="search-no-results">
                    Aucun résultat.
                  </p>
                ) : (
                  <div className="md:grid-cols-1">
                    {results
                      .filter(results_users => results_users.type.includes("user--user"))
                      .map((node) => (
                        <div key={node.id}>
                          <BoxUserList key={node.id} node={node} useringroup={useringroup} />
                        </div>
                      ))}
                  </div>
                )}
              </div>
              <div className={openTab === 1 ? "block" : "hidden"}>
                {!results.length ? (
                  <p className="text-sm" data-cy="search-no-results">
                    Aucun résultat.
                  </p>
                ) : (
                  <div className="md:grid-cols-1">
                    {results
                      .filter(results_projets => results_projets.type.includes("group--federage"))
                      .map((filterNode) => (
                        <div key={filterNode.id}>
                          <BoxProjectList key={filterNode.id} node={filterNode} useringroup={useringroup} status={status} />
                        </div>
                      ))}
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="pt-4">
              <h3 className="mt-0" data-cy="search-results">
                Found {data?.pages[0]?.total} result(s).
              </h3>
              {data?.pages.map((page, index) => (
                <div key={index}>
                  {page.items?.map((node) => (
                    <div key={node.id} className="pb-4 mb-4 bg-white rounded-lg flex">
                      <article
                        className="grid-cols-3 gap-4 sm:grid"
                        data-cy="search-result"
                      >
                        {node.label}
                        {node.field_image?.uri && (
                          <div className="col-span-1 mb-4 sm:mb-0">
                            <Image
                              src={`${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}${node.field_image.uri.url}`}
                              width={200}
                              height={110}
                              layout="responsive"
                              objectFit="cover"
                              alt="ok"
                            />
                          </div>
                        )}
                        <div className="col-span-2 not-prose">
                          <h4 className="font-semibold text-black leading-normal ml-3 mt-3">
                            {node.name}
                          </h4>
                          <p className="mb-0 ml-3">
                            <small>{formatDate(node.created)}</small>
                          </p>
                        </div>
                      </article>
                    </div>
                  ))}
                </div>
              ))}
              {hasNextPage && (
                <button
                  onClick={() => fetchNextPage()}
                  disabled={isFetching}
                  className="flex justify-center px-4 py-2 mt-4 text-sm font-medium text-black bg-slate-200 border border-slate-200 rounded-md shadow-sm sm:col-span-2 sm:mt-0"
                >
                  {isFetching ? "Loading..." : "Show more"}
                </button>
              )}
            </div>
          )}
        </div>
      </Layout >
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
