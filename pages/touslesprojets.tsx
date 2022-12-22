import * as React from "react";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { DrupalNode } from "next-drupal";
import Link from "next/link";
import { DrupalJsonApiParams } from "drupal-jsonapi-params";
import { getSession, useSession, signOut } from "next-auth/react";
import { useTranslation } from "next-i18next"
import { useRouter } from "next/router"
import { useEffect } from "react";
import {useState} from 'react';

import { getGlobalElements } from "lib/get-global-elements"
import { Layout, LayoutProps } from "components/layout"
import { drupal } from "lib/drupal";



import { PageHeader } from "components/page-header"
interface AlluserlistPageProps extends LayoutProps {
  user: DrupalNode[];
}

export default function AlluserlistPage({ menus, blocks, users, allfederages, allfinancements, }: AlluserlistPageProps) {
  const { t } = useTranslation()
  const router = useRouter()
  const { status } = useSession()

  return (
    <Layout meta={{ title: t("Tous les projets") }} menus={menus} blocks={blocks}>
      <PageHeader
        heading={t("Tous les projets")}
        breadcrumbs={[
          {
            title: t("Tous les projets"),
          },
        ]}
      />


    <p>  Tous les federages </p>
    {allfederages.map((onefederage) => (
             <li key={onefederage.id}>
              <p> Nom : {onefederage.label}</p>
<p>lang : {onefederage.langcode}</p>
<p>révision le : {onefederage.revision_created}</p>
<p>créé le : {onefederage.created}</p>
<p>Proprio : {onefederage.uid.display_name}</p>


<Link href={onefederage.path.alias} passHref>
  <a className="inline-flex items-center px-6 py-2 border border-gray-600 rounded-full hover:bg-gray-100">
chemin : {onefederage.path.alias}
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
             </li>
           ))}

tous les all financements :
{allfinancements.map((onefinancement) => (
         <li key={onefinancement.id}>
        <p>Quel projet ? : {onefinancement.gid.id}</p>
        {onefinancement.label}
        {onefinancement.label}

          <p> Nom : {onefinancement.label}</p>
<p>lang : {onefinancement.langcode}</p>
<p>révision le : {onefinancement.revision_created}</p>
<p>créé le : {onefinancement.created}</p>
<p>Id du financement : {onefinancement.entity_id.id}</p>
<p>Id du node financement : node/{onefinancement.entity_id.resourceIdObjMeta.drupal_internal__target_id}</p>
<a href={onefinancement.entity_id.id} className="inline-flex items-center px-6 py-2 border border-gray-600 rounded-full hover:bg-gray-100">
chemin : {onefinancement.entity_id.resourceIdObjMeta.drupal_internal__target_id}
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
    </svg></a>

         </li>
       ))}
    </Layout>
  )
}

<<<<<<< Updated upstream
export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<AccountPageProps>> {
  // Check if user is authenticated.
=======
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


>>>>>>> Stashed changes






const allfederages = await drupal.getResourceCollectionFromContext<DrupalNode[]>(
  "group--federage",
  context,
  {
    params: new DrupalJsonApiParams()
      .addInclude(["uid"])

      .addSort("created", "DESC")
      .getQueryObject(),
  }
);

const allfinancements = await drupal.getResourceCollectionFromContext<DrupalNode[]>(
  "group_content--federage-group_node-financement",
  {
    params: new DrupalJsonApiParams()
      .addInclude(["uid", "group_relationship_type", "group--projets_federage", "entity_id", "meta","gid"])
      .addFields("group_relationship_type--group_relationship_type", ["id", "type","meta"])
      .addFields("group--projets_federage", ["id", "type","meta2"])

      .addSort("created", "DESC")
      .getQueryObject(),
  }
);




  return {
     props: {
       ...(await getGlobalElements(context)),
       allfederages,
       allfinancements,
     },
   };
 }
