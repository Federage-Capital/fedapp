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
}

export default function AlluserlistPage({ menus, blocks, users, groups, members, }: AlluserlistPageProps) {
  const { t } = useTranslation()
  const router = useRouter()
  const { status } = useSession()


  return (
    <Layout meta={{ title: t("Connexion") }} menus={menus} blocks={blocks}>
      <PageHeader
        heading={t("Connexion")}
        breadcrumbs={[
          {
            title: t("Connexion"),
          },
        ]}
      />

    <p>  Groupes : group--contracteur : - role admin = Mes groupes admin - tous les groupes publiés visibles </p>
    {groups.map((group) => (
             <li key={group.id}>
                 <a className="text-sm font-semibold transition-colors hover:bg-black hover:underline">
              <p>   {group.label}</p>
<p> {group.langcode}</p>
<p>révision le  {group.revision_created}</p>
<p>créé le   {group.created}</p>
                 </a>
             </li>
           ))}


<p>  Membres : group_content--contracteur-group_membership : toutes les participations dans tous les groupes</p>
{members.map((member) => (
         <li key={member.id}>
             <a className="text-sm font-semibold transition-colors hover:bg-black hover:underline">
          <p>   {member.label}</p>
<p> {member.path.alias}</p>
<p> {member.revision_created}</p>
<p> {member.created}</p>
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
  "group--contracteur",
  {
    withAuth: session.accessToken,

  }

)

const members = await drupal.getResourceCollection<DrupalNode[]>(
  "group_content--contracteur-group_membership",
  {
    withAuth: session.accessToken,

  }

)



  return {
     props: {
       ...(await getGlobalElements(context)),
       groups,
       members,
     },
   };
 }
