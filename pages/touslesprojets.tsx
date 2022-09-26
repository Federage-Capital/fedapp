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
          <p> Nom : {onefinancement.label}</p>
<p>lang : {onefinancement.langcode}</p>
<p>révision le : {onefinancement.revision_created}</p>
<p>créé le : {onefinancement.created}</p>
<p>Id du financement : {onefinancement.entity_id.id}</p>
<p>Id du node financement : {onefinancement.entity_id.resourceIdObjMeta.drupal_internal__target_id}</p>
<a href={onefinancement.entity_id.resourceIdObjMeta.drupal_internal__target_id} className="inline-flex items-center px-6 py-2 border border-gray-600 rounded-full hover:bg-gray-100">
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

export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<AccountPageProps>> {
  // Check if user is authenticated.






const allfederages = await drupal.getResourceCollectionFromContext<DrupalNode[]>(
  "group--projets_federage",
  context,
  {
    params: new DrupalJsonApiParams()
      .addInclude(["uid"])

      .addSort("created", "DESC")
      .getQueryObject(),
  }
);

const allfinancements = await drupal.getResourceCollectionFromContext<DrupalNode[]>(
  "group_relationship--projets_federage-b5856fc584d18c4",
  {
    params: new DrupalJsonApiParams()
      .addInclude(["uid", "group_relationship_type", "entity_id", "meta" ])
      .addFields("group_relationship--projets_federage-b5856fc584d18c4", ["id", "type","meta"])

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
