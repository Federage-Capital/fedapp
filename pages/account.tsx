import { GetServerSidePropsContext, GetServerSidePropsResult } from "next"
import { DrupalNode } from "next-drupal"
import { useTranslation } from "next-i18next"
import Link from "next/link"
import { DrupalJsonApiParams } from "drupal-jsonapi-params"
import {  getSession, useSession } from "next-auth/react"
import classNames from "classnames"
import _ from 'lodash'

import { drupal } from "lib/drupal"
import { getGlobalElements } from "lib/get-global-elements"
import { Layout, LayoutProps } from "components/layout"
import { PageHeader } from "components/page-header"
import { NodeArticleRow } from "components/node--article--row"
import { BoxProjetsEncours } from "components/box-groupes-encours"

interface AccountPageProps extends LayoutProps {
  articles: DrupalNode[]
}

export default function AccountsPage({
  menus,
  blocks,
  financementsdansgr,
  financementsacceptedansgroupe,
  users,

}: AccountPageProps) {

  const { data, status } = useSession()
  const { t } = useTranslation()
  const regroupement = _.groupBy(financementsacceptedansgroupe, 'gid.id')

  if (status === "loading") {
    return null
  }

  if (status === "unauthenticated") {
    return (
      <Link href="/login" passHref>
        <a className="text-text hover:underline">{t("login")}</a>
      </Link>
    )
  }
  if (status === "authenticated") {
  return (
    <Layout
      menus={menus}
      meta={{
        title: t("my-account"),
      }}
    >
      <PageHeader
        heading={t("my-account")}
        breadcrumbs={[
          {
            title: t("my-account"),
          },
        ]}
      >
        <Link href="/articles/new" passHref>
          <a className="px-3 py-1 font-serif text-lg text-white transition-colors border-2 rounded-md lg:text-xl lg:px-4 lg:py-2 bg-secondary hover:bg-white hover:text-black border-secondary">
            New Article
          </a>
        </Link>
      </PageHeader>

      <div className="container">




      {_.map(regroupement,(value, key) => (
      			<>
            {key?.length ? (
            			<>
            {financementsdansgr.filter(titredugroupe => titredugroupe.id.includes(key)).map(filteredtitredugroupe => {
            					return (
            								 <div key={filteredtitredugroupe.id} className="relative flex items-center ">
            								{filteredtitredugroupe.label}<br />
            								admin :{filteredtitredugroupe.uid.display_name}<br/>
            								 </div>)
            				})}
            			</>
            		) : (
            			< >
            NAaN
            			</>
            		)}
                	{value.slice(0,1).map((e) => (
        <BoxProjetsEncours value={value} key={e.id} />
	))}

              <br/>
      			</>
      		))}

      </div>
    </Layout>
  )
}

}

export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<AccountPageProps>> {
  // Check if user is authenticated.
  const session = await getSession({ ctx: context })

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    }
  }

  const params = new DrupalJsonApiParams()
    .addInclude(["uid.user_picture"])
    .addSort("created", "ASC")


  const financementsdansgr = await drupal.getResourceCollection(
    "group--federage",
    {
      params: new DrupalJsonApiParams()
        .addInclude(["uid", "group_type", "revision_user"])
        .addFields("group_content--federage-group_node-financement", ["id", "type", "meta"])
        .addFields("group_type--group_type", ["id", "type", "meta"])

        .addFields("user--user", ["display_name", "user_picture"])

        .addSort("created", "DESC")
        .getQueryObject(),

      withAuth: session.accessToken,

    }

  )

  const financementsacceptedansgroupe = await drupal.getResourceCollection(
    "group_content--federage-group_node-financement",
    {
      params: new DrupalJsonApiParams()
        .addInclude(["uid", "group_content_type", "gid", "entity_id"])
        .addFields("entity_id", ["title"])


        .addFilter("uid.meta.drupal_internal__target_id", session.user.userId)

        .addSort("created", "DESC")
        .getQueryObject(),

      withAuth: session.accessToken,

    }

  )



  // Fetch user info
  const users = await drupal.getResourceCollectionFromContext<DrupalUser[]>(
    "user--user",
    context,
    {
      params: new DrupalJsonApiParams()
        .addInclude(["user_picture"])
        .addFields("user--user", [
          "display_name",
          "drupal_internal__uid",
          "user_picture",
        ])
        .addFields("file--file", ["uri", "resourceIdObjMeta"])

        .addFilter("drupal_internal__uid", session.user.userId)
        .getQueryObject(),
      withAuth: session.accessToken,
    }
  );
  // Fetch all articles sorted by the user.


  return {
    props: {
      ...(await getGlobalElements(context)),
      financementsdansgr,
      users,
      financementsacceptedansgroupe,

    },
  }
}
