import { GetStaticPropsContext, GetStaticPropsResult } from "next"
import { useTranslation } from "next-i18next"
import { getSession, useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router"
import { DrupalFile, DrupalMedia, DrupalNode, DrupalUser, JsonApiErrors } from "next-drupal"

import { getGlobalElements } from "lib/get-global-elements"
import { Layout, LayoutProps } from "components/layout"
import { PageHeader } from "components/page-header"
import { FormAddFinMembre } from "components/form--membreaddfin.tsx"
import { FormInvite } from "components/form--inviteuser"
import { drupal } from "lib/drupal"
import { DrupalJsonApiParams } from "drupal-jsonapi-params";

interface NewMembrePageProps {
  equipe: DrupalUser[]
}

interface NewMembrePageProps extends LayoutProps {}

export default function NewMembrePage({
  menus,
  blocks,
  articles,
  users,
}: NewMembrePageProps) {
  const { t } = useTranslation()
  const router = useRouter()
  const { data } = useSession();
  const { status } = useSession()
  const query = router.query;
  return (
    <Layout meta={{ title: t("Ajouter un membre") }} menus={menus} blocks={blocks}>


      <PageHeader
      heading={t("Inviter les partenaires")}





      />
        <div className="container pb-10">
        <FormInvite className="max-w-xl mx-auto" />


      </div>

      <div className="container pb-10">
      {articles &&
      							articles

      								.map((article, index) => (
      									<div key={article.id} >


                        <FormAddFinMembre className="max-w-2xl mx-auto" articles={article} users={users}/>


      									</div>
      								))}
      </div>
    </Layout>
  )
}

export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<NewMembrePageProps>> {

    const session = await getSession({ ctx: context });
    if (!session) {
      return {
        redirect: {
          destination: "/register",
          permanent: false,
        },
      };
    }

     const gid = await context.query.gid // Get ID from slug `/book/1`
     const users = await drupal.getResourceCollectionFromContext<DrupalUser>(
       "user--user",
       context,
       {
         params: new DrupalJsonApiParams()


           .addSort("created", "DESC")
           .getQueryObject(),


         withAuth: session.accessToken,
       }

     )
    const articles = await drupal.getResourceCollectionFromContext<DrupalNode>(
      "group_content--federage-group_node-financement",
      context,
      {
        params: new DrupalJsonApiParams()
          .addInclude(["entity_id, entity_id.field_co_author"])
          .addFields("node--financement", [
            "title",
            "path",
            "langcode",
            "content_translation_source",
            "body",
            "field_document_s_annexe_s_",
            "status",
            "created",
            "uid",
            "revision_log",
            "body",
            "field_co_author",
          ])


          .addFilter("id", gid)
          .addSort("created", "DESC")
          .getQueryObject(),


        withAuth: session.accessToken,
      }

    )






  return {
    props: {
      ...(await getGlobalElements(context)),
      articles,
      users,
    },
  }
}
