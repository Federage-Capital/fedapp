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
      "file--file":
        "uri",
  },
  filter: {},
  include: "user_picture,field_type_de_structure",


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
    <Layout meta={{ title: t("Explorer") }} menus={menus} blocks={blocks}>


<h1 class="px-6 max-w-4xl mb-4 text-4xl text-left md:text-5xl lg:text-4xl">Explorer</h1>

    <p className="px-6 mb-3 ">Parcourez la liste des membres, faites une proposition et intégrez des projets.
        </p>

        <form onSubmit={handleSubmit} className="px-6 space-y-2 mb-4">
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


          <div className="px-6 pt-4">

            <div className="grid gap-6 mt-8 md:grid-cols-1">
              {results.map((node) => (
                <div key={node.id}>
                  <article
                    className="grid grid-cols-12 gap-4"
                    data-cy="search-result"
                  >



<div>





{node.user_picture?.uri && (
  <div className="overflow-hidden h-10 w-10 rounded-xl">
<Link href=    {node.name.replaceAll(' ', '-')} passHref>
  <Image
    src={`${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}${node.user_picture?.uri.url}`}
    width={10}
    height={10}
    layout="responsive"
    objectFit="cover"
    alt={node.drupal_internal__uid}
  />
  </Link>
  </div>
)}


{!node.user_picture?.uri && (
  <span className="inline-block h-10 w-10 overflow-hidden rounded-xl bg-gray-100">
        <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      </span>
)}

</div>

<div className="col-span-5">


<Link href={`user/${node.drupal_internal__uid}`} passHref>{node.display_name}</Link><br/>
{node.field_description?.value && (
  <div
    dangerouslySetInnerHTML={{ __html: node.field_description?.value }}
    className="mt-6 text-xl leading-loose prose"
  />
)}

</div>
<hr className="col-span-6 my-10"/>


                  </article>
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
