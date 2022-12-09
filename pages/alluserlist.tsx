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
    "user--user":
      "name,type,filename,path,drupal_internal__uid,links",
      "file--file":
        "filename, uri",
  },
  filter: {},
  include: "user_picture, user_picture.uid",


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
      <PageHeader
        heading={t("Explorer")}
        breadcrumbs={[
          {
            title: t("explorer"),
          },
        ]}
      />



        <form onSubmit={handleSubmit} className="mb-4">
          <input
            type="search"
            placeholder="Search properties (min 4 characters)..."
            name="fulltext"
            className="relative block w-full col-span-5 px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
          />
          <div className="grid gap-4 py-4 md:grid-cols-2">
            {facets.map((facet) => (
              <div key={facet.id} className="p-4 border rounded-md">
                <h3 className="mt-0 mb-2 text-base">{facet.label}</h3>
                <div className="grid grid-flow-row gap-2">
                  <label
                    htmlFor={`${facet.id}--any`}
                    className="flex items-center text-base"
                  >
                    <input
                      type="radio"
                      id={`${facet.id}--any`}
                      name={facet.path}
                      className="mr-2"
                      value=""
                      defaultChecked
                    />
                    Any
                  </label>
                  {facet.terms.map((term) => (
                    <label
                      key={term.url}
                      htmlFor={`${facet.id}--${term.values.value}`}
                      className="flex items-center text-sm"
                    >
                      <input
                        type="radio"
                        id={`${facet.id}--${term.values.value}`}
                        name={facet.path}
                        value={term.values.value}
                        className="mr-2"
                        defaultChecked={term.values.active}
                      />
                      {term.values.label}{" "}
                      <span className="flex items-center justify-center w-5 h-5 ml-2 text-xs bg-gray-200 rounded-full">
                        {term.values.count}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
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
              {status === "loading" ? "Please wait..." : "Search"}
            </button>
          </div>
        </form>
        {status === "error" ? (
          <div className="px-4 py-2 text-sm text-red-600 bg-red-100 border-red-200 rounded-md">
            An error occured. Please try again.
          </div>
        ) : null}
        {!results.length ? (
          <p className="text-sm" data-cy="search-no-results">
            No results found.
          </p>
        ) : (
          <div className="pt-4">
            <div className="grid gap-6 md:grid-cols-2">
              {results.map((node) => (
                <div key={node.id}>
                  <article
                    className="grid grid-cols-3 gap-4"
                    data-cy="search-result"
                  >



{node.field_images?.[0]?.field_media_image.uri && (
  <div className="col-span-1 overflow-hidden rounded-md">
    <Image
      src={`${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}${node.field_images?.[0]?.field_media_image.uri.url}`}
      width={200}
      height={200}
      layout="responsive"
      objectFit="cover"
    />
  </div>
)}

                    <div className="col-span-2">
                      <h4 className="mt-0 text-base">{node.name}</h4>
                      <p className="m-0 text-base">For

                      {node.field_description?.value && (
                        <div
                          dangerouslySetInnerHTML={{ __html: node.field_description?.value }}
                          className="mt-6 text-xl leading-loose prose"
                        />
                      )}



                      </p>

                      <p className="m-0 text-base">
                      {node.field_site_internet?.uri && (
                        <div
                          dangerouslySetInnerHTML={{ __html: node.field_site_internet?.uri }}
                          className="mt-6 text-xl leading-loose prose"
                        />
                      )}


{node && (
  <div
    dangerouslySetInnerHTML={{ __html: node }}
    className="mt-6 text-xl leading-loose prose"
  />
)}



{node.user_picture?.id && (
  <div
    dangerouslySetInnerHTML={{ __html: node.user_picture?.id }}
    className="mt-6 text-xl leading-loose prose"
  />
)}

                      {node.user_picture?.id && (
                        <div
                          dangerouslySetInnerHTML={{ __html: node.user_picture?.id }}
                          className="mt-6 text-xl leading-loose prose"
                        />
                      )}

                      </p>
                    </div>
                  </article>
                </div>
              ))}
            </div>
</div>
        )}


-------------------------------------------------------------------------------------------





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
   };
 }
