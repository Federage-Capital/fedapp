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
      "field_categorie":
        "id, meta",
  },
  filter: {
"entity_type":'group',

  },

  include: "field_categorie",
}

interface AlluserlistPageProps {
  nodes: DrupalNode[]

}

export default function AlluserlistPage
({ menus, blocks, users, nodes,

}: AlluserlistPageProps) {
  const { t } = useTranslation()
  const router = useRouter()

  const [status, setStatus] = React.useState<"error" | "success" | "loading">()
  const [results, setResults] = React.useState<DrupalNode[]>(nodes)


  async function handleSubmit(event) {
    event.preventDefault()

    for (const filter of ["fulltext", "type", "field_status"]) {
      if (event.target[filter]?.value != "") {
        params["filter"][filter] = event.target[filter]?.value
      }
    }


    setStatus("loading")
    const response = await fetch("/api/search/group_search", {
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
            <div className="grid gap-6 md:grid-cols-1">
              {results.map((node) => (
                <div key={node.id}>
                  <article
                    className="grid grid-cols-6 gap-4"
                    data-cy="search-result"
                  >


<div>

{node.user_picture?.uri && (
  <div className="overflow-hidden rounded-xl">
<Link href={node.path.alias} passHref>
  <Image
    src={`${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}${node.user_picture?.uri.url}`}
    width={100}
    height={100}
    layout="responsive"
    objectFit="cover"
    alt={node.drupal_internal__uid}
  />
  </Link>
  </div>
)}

</div>

<div className="col-span-4">

<Link href={node.path.alias} passHref>
<div     className="text-xl leading-loose prose">
{node.label}
</div>
</Link>

<br/>


{node.field_description?.value && (
  <div
    dangerouslySetInnerHTML={{ __html: node.field_description?.value }}
    className="text-xl  prose"
  />
)}


{node.field_categorie.name}




</div>

<div>

<Link href={node.path.alias} passHref>

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

</Link>

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

export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<AccountPageProps>> {
  // Check if user is authenticated.

        <form onSubmit={handleSubmit} className="mb-4">
          <input
            type="search"
            placeholder="Search properties (min 4 characters)..."
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
            <div className="grid gap-6 md:grid-cols-1">
              {results.map((node) => (
                <div key={node.id}>
                  <article
                    className="grid grid-cols-6 gap-4"
                    data-cy="search-result"
                  >


<div>

{node.user_picture?.uri && (
  <div className="overflow-hidden rounded-xl">
<Link href="https://lemonde.fr" passHref>
  <Image
    src={`${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}${node.user_picture?.uri.url}`}
    width={100}
    height={100}
    alt="truc"
    layout="responsive"
    objectFit="cover"
  />
  </Link>
  </div>
)}

</div>

<div className="col-span-5">


<h1> {node.type}</h1>
<Link href={node.path.alias} passHref>1</Link><br/>
 {node.type}<br/>
 {node.label}<br/>

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




const results = await getSearchIndexFromContext<JsonApiSearchApiResponse>(
  "group_search",
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

     },
     revalidate: 5,

   };
 }
