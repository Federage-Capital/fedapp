import * as React from "react";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { DrupalNode } from "next-drupal";
import Link from "next/link";
import { DrupalJsonApiParams } from "drupal-jsonapi-params";
import { getSession, useSession, signOut } from "next-auth/react";
import { useTranslation } from "next-i18next"
import { useRouter } from "next/router"

import { getGlobalElements } from "lib/get-global-elements"
import { Layout, LayoutProps } from "components/layout"
import { drupal } from "lib/drupal";



import { PageHeader } from "components/page-header"
interface AlluserlistPageProps extends LayoutProps {
  user: DrupalNode[];
 groups: DrupalNode[];
 grouprelatioshiptype: DrupalNode[];
}

export default function AlluserlistPage({ menus, blocks, users, groups, members, greltypes }: AlluserlistPageProps) {
  const { t } = useTranslation()
  const router = useRouter()
  const { status } = useSession()


  return (
    <Layout meta={{ title: t("All user list") }} menus={menus} blocks={blocks}>
      <PageHeader
        heading={t("All user list")}
        breadcrumbs={[
          {
            title: t("All user list"),
          },
        ]}
      />

      <p>  group relatioship type : ????</p>
      {greltypes.map((greltype) => (
               <li key={greltypes.id}>
                   <a className="text-sm font-semibold transition-colors hover:bg-black hover:underline">
                <p>   {greltypes}</p>

                   </a>
               </li>
             ))}






             <p>  Tous les Projets </p>
             <p>  Tous les Projets </p>

    <p>  Tous les Projets </p>
    {groups.map((group) => (
             <li key={group.id}>
                 <a className="text-sm font-semibold transition-colors hover:bg-black hover:underline">
              <p>   {group.label}</p>
<p> {group.langcode}</p>
<p>révision le  {group.revision_created}</p>
<p>créé le   {group.created}</p>
<p>Proprio  du projet {group.uid.display_name}</p>
<Link href="1" passHref>
  <a className="inline-flex items-center px-6 py-2 border border-gray-600 rounded-full hover:bg-gray-100">
chemin : {group.path.alias}
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
                 </a>
             </li>
           ))}


<p>  Membres : toutes les participations dans tous les groupes</p>
{members.map((member) => (
         <li key={member.id}>
             <a className="text-sm font-semibold transition-colors hover:bg-black hover:underline">

            <p> Type de groupe  {member.type}</p>
            <p> Id user dans le  groupe  {member.id}</p>
              <p> Id user dans le  groupe Drupal Internat ID  {member.drupal_internal__id}</p>
              <p>   {member.label}</p>
<p> {member.path.alias}</p>
<p> {member.revision_created}</p>
<p> {member.uid.type}</p>
             </a>
         </li>
       ))}



    </Layout>
  )
}

export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<AccountPageProps>> {
  // Check if user is authenticated.
  const session = await getSession({ ctx: context });
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  const params = new DrupalJsonApiParams()
      .addInclude(["uid.user_picture"])
      .addSort("created", "ASC")



const groups = await drupal.getResourceCollection<DrupalNode[]>(
  "group_content--federage-group_membership",
  {
    params: new DrupalJsonApiParams()
      .addInclude(["uid", "gid"])
      .addFields("group_relationship--projets_federage-b5856fc584d18c4", ["id", "group_content_type","meta"])

      .addSort("created", "DESC")
      .getQueryObject(),

    withAuth: session.accessToken,

  }

)

const greltypes = await drupal.getResourceCollection<DrupalNode[]>(
  "group_content_type--group_content_type",
  {

    withAuth: session.accessToken,

  }

)
const members = await drupal.getResourceCollection<DrupalNode[]>(
  "group_content--federage-group_node-financement",
  {
    params: new DrupalJsonApiParams()
      .addInclude(["uid" ])
      .addFields("group_content--federage-group_node-financement", ["id", "gid","meta"])

      .addSort("created", "DESC")
      .getQueryObject(),
      params: {

      },
    withAuth: session.accessToken,

  }

)






  return {
     props: {
       ...(await getGlobalElements(context)),
       groups,
       members,
       greltypes,
     },
   };
 }
