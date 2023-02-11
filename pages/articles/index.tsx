import * as React from "react";
import Link from "next/link";
import Image from "next/image"
import { DrupalNode,
  getSearchIndexFromContext,
  deserialize,
  JsonApiSearchApiResponse,
  DrupalSearchApiFacet, } from "next-drupal";
import { useTranslation } from "next-i18next"
import { GetStaticPropsResult } from "next"
import { useRouter } from "next/router"
import { getGlobalElements } from "lib/get-global-elements"
import { Layout, LayoutProps } from "components/layout"
import { PageHeader } from "components/page-header"
import { DrupalJsonApiParams } from "drupal-jsonapi-params";


const params = {

  fields: {
    "attributes":
      "id,title,status,body,blog_body",
      "blog_body":"",
      "blog":"",
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
    const response = await fetch("/api/search/blog", {
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
    <Layout meta={{ title: t("Blog") }} menus={menus} blocks={blocks}>



      <p className="mb-3">Vous trouverez ici des tutoriels, des exemples et des explications sur le fonctionnement du réseau.
        </p>

        <form onSubmit={handleSubmit} className="mb-4">
          <input
            type="search"
            placeholder="Tapez au moins 4 caractères"
            name="fulltext"
            className="relative block w-full col-span-5 px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
          />
          <div className="grid gap-4 py-4 md:grid-cols-1">

          </div>
          <div className="flex">
            <button
              type="button"
              className="flex justify-center w-24 px-4 py-2 mr-4 text-sm font-medium text-gray-500 bg-white border border-gray-500 rounded-md shadow-sm hover:bg-gray-200"
              onClick={() => {
                router.reload()
              }}
            >
              Reset
            </button>
            <button
              type="submit"
              data-cy="btn-submit"
              className="flex justify-center w-48 px-4 py-2 text-sm font-medium text-white bg-black border border-transparent rounded-md shadow-sm hover:bg-black"
            >
              {status === "Chargement" ? "Attendez..." : "Recherche"}
            </button>
          </div>
        </form>
        {status === "error" ? (
          <div className="px-4 py-2 text-sm text-red-600 bg-red-100 border-red-200 rounded-md">
            Une erreur s'est produite. Veuillez réessayer.
          </div>
        ) : null}
        {!results.length ? (
          <p className="text-sm" data-cy="search-no-results">
            Aucun résultat.
          </p>
        ) : (


          <div className="pt-4">

            <div className="grid gap-6 md:grid-cols-1">
              {results.map((node) => (
                <div key={node.id}>



                  <article
                    className="grid grid-cols-1 gap-4"
                    data-cy="search-result"
                  >

                    <div className="col-span-2">
                    <Link href={`node/${node.drupal_internal__nid}`} passHref>
                      <a className="no-underline hover:text-blue-600">
                        <h2 className="mb-4 text-lg font-bold">{node.title}</h2>
                      </a>
                    </Link>                      <p className="m-0 text-base">{node.body.summary}</p>
                      <Link href={`node/${node.drupal_internal__nid}`} passHref>
                        <a className="flex items-center mt-4 text-sm hover:text-blue-500">
                          Lire la suite
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-4 h-4 ml-2"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </a>
                      </Link>
                    </div>
                  </article>
                  <hr className="my-10" />




                </div>
              ))}
            </div>
</div>
        )}








    </Layout>
  )
}

export async function getStaticProps(
  context
): Promise<GetStaticPropsResult<AccountPageProps>> {

const results = await getSearchIndexFromContext<JsonApiSearchApiResponse>(
  "blog",
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
   };
 }
