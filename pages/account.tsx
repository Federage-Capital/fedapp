import * as React from "react";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { DrupalNode, DrupalUser } from "next-drupal";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import Image, { ImageProps } from "next/image"
import _ from 'lodash'

import { absoluteURL,formatDate } from "lib/utils"
import { DrupalJsonApiParams } from "drupal-jsonapi-params";
import { getSession, useSession, signOut } from "next-auth/react";
import { drupal } from "lib/drupal";
import { getGlobalElements } from "lib/get-global-elements";
import { Layout, LayoutProps } from "components/layout";
import { PageHeader } from "components/page-header";


import classNames from "classnames"

import { NodeGroupRow } from "components/node--group--row"


import { BoxProjetsOffre } from "components/box-projets-offre"
import { BoxTransactions } from "components/box-tableau-transactions"

import { BoxProjetAccount } from "components/box-projet--account"

import { useState } from "react";






interface AccountPageProps extends LayoutProps {
  user: DrupalUser[];
  node: DrupalNode[];

}





export default function AccountsPage({
  user,
  menus,
  financementsacceptedansgroupe,
  memberships,
  groupe,
  tousfinancementsacceptedugroupe,
  ...props
}: AccountPageProps) {








  const [openTab, setOpenTab] = React.useState(1);
  const [shouldFetch, setShouldFetch] = useState(false)







  const { data, status } = useSession()
  const { t } = useTranslation()
  const regroupement = _.groupBy(financementsacceptedansgroupe, 'gid.id')
  const regrmesparticipations = _.groupBy(memberships, 'gid.id')


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
    <div className="bg-slate-100">

    <Layout
      menus={menus}
      meta={{
        title: t("Portefeuille"),
      }}
    >



      <div className="container" id="account">

        <div className="title mb-4 py-3">

            <div className="grid grid-cols-4 gap-4">



              {user[0].user_picture ? (
                <Image
                  src={absoluteURL(user[0].user_picture.uri.url)}
                  alt={user[0].user_picture.resourceIdObjMeta.alt || "Image"}
                  title={user[0].user_picture.resourceIdObjMeta.title}
                  width={130}
                  height={130}
                  priority={true}
                  className='rounded-lg shadow-sm ml-3  object-cover h-48 w-96'
                />
              ) : (
                <div className="px-6">
                  <div className="md:grid-cols-1">
                    <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>

                  </div>
                </div>
              )}

      {user[0].display_name}


           {financementsacceptedansgroupe
           	.filter(valide => valide.entity_id.field_statut.id.includes('add21795-b0ad-45ab-ba10-a16859dcaf05'))
           	.reduce((total, currentValue) => total = total + +currentValue.entity_id.field_estimation_du_prix,0)
            }
            </div>




        </div>
        <div className="actions">



          <p className="text-lg mb-12">
            <Link href="/groupfederage/new" passHref>
              <a className="px-4 py-2 fedbutton text-white font-bold transition-colors rounded-xl text-base lg:px-4 lg:py-2 bg-secondary hover:bg-white hover:text-black border-secondary">
                Nouveau projet

                {user.id
                }

              </a>
            </Link>
          </p>
          <p className="text-lg mb-12">
            <Link href="/evolutionfin/new" passHref>
              <a className="px-4 py-2 fedbutton text-white font-bold transition-colors rounded-xl text-base lg:px-4 lg:py-2 bg-secondary hover:bg-white hover:text-black border-secondary">
                nouvelle action dans 1 projet

                {user.id}

              </a>
            </Link>
          </p>
        </div>




        <div className="flex flex-wrap">
          <div className="w-full">

            <span
              className="px-5 py-3 p-4 text-xl font-semibold"
            >  Opérations

            </span>
            <ul
              className="flex mb-0 mt-4 list-none flex-wrap pt-3 pb-4 flex-row"
              role="tablist"
              aria-label="liste des taches"
            >
              <li className="-mb-px mr-2 last:mr-0 flex-left text-center">
                <a
                  className={
                    "text-xs font-bold  px-5 py-3 rounded-md leading-normal " +
                    (openTab === 1
                      ? "bg-gray" + "-100"
                      : "text-" + "gray-700")
                  }


                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                  aria-label="tab 1"

                >
                  En cours
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-left text-center">
                <a
                  className={
                    "text-xs font-bold  px-5 py-3 rounded-md leading-normal " +
                    (openTab === 2
                      ? "bg-gray" + "-100"
                      : "text-" + "gray-700")
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                  aria-label="offres"

                >
                  Offres
                </a>
              </li>

              <li className="-mb-px mr-2 last:mr-0 flex-left text-center">
                <a
                  className={
                    "text-xs font-bold  px-5 py-3 rounded-md leading-normal " +
                    (openTab === 3
                      ? "bg-gray" + "-100"
                      : "text-" + "gray-700")
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(3);
                  }}
                  data-toggle="tab"
                  href="#link4"
                  role="tablist"
                  aria-label="transactions"

                >
                  Transactions
                </a>
              </li>
            </ul>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 ">
              <div className="px-4 py-5 flex-auto">
                <div className="tab-content tab-space">


                  <div className={openTab === 1 ? "block" : "hidden"} id="link1">







                  <BoxProjetAccount node={groupe} financements={tousfinancementsacceptedugroupe} membres={memberships} user={user} />






</div>


                  <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <BoxProjetsOffre key={groupe.id} user={user}
                  propositions={groupe}
                  />
                  </div>


                  <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <BoxTransactions key={user[0].id} user={user}
                  financementsdansgr={groupe}
                  />
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>




      </div>

    </Layout>
    </div>
  );
}  }

export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<AccountPageProps>> {
  // Check if user is authenticated.
  const session = await getSession({ ctx: context });
  if (!session) {
    return {
      redirect: {
        destination: "/register",
        permanent: false,
      },
    };
  }

  const params = new DrupalJsonApiParams()
    .addInclude(["uid.user_picture"])
    .addSort("created", "ASC")

    const groupe = await drupal.getResourceCollection(
      "group--federage",
      {
        params: new DrupalJsonApiParams()
          .addInclude(["uid, uid.user_picture"])

          .addFields("user--user", ["display_name, user_picture"])
          .addFields("group--federage", ["uid", "path", "label"])
          .addFields("file--file", ["uri", "resourceIdObjMeta"])

          .addSort("created", "DESC")
          .getQueryObject(),

        withAuth: session.accessToken,

      }

    )

  const tousfinancementsacceptedugroupe = await drupal.getResourceCollection(
    "group_content--federage-group_node-financement",
    {
      params: new DrupalJsonApiParams()
        .addInclude(["uid", "gid", "entity_id"])
        .addFields("node--financement", ["field_estimation_du_prix", "id", "field_statut","uid","title"])
        .addFields("group--federage", ["id"])
        .addFields("user--user", ["meta","display_name","id", "name"])
        .addFields("group_content--federage-group_node-financement", ["entity_id","uid","gid"])


        .addSort("created", "DESC")
        .getQueryObject(),

      withAuth: session.accessToken,

    }

  )
  const financementsacceptedansgroupe = await drupal.getResourceCollection(
    "group_content--federage-group_node-financement",
    {
      params: new DrupalJsonApiParams()
        .addInclude(["uid", "gid", "entity_id"])
        .addFields("node--financement", ["field_estimation_du_prix","field_statut"])
        .addFields("group--federage", ["id"])
        .addFields("user--user", ["meta"])
        .addFields("group_content--federage-group_node-financement", ["entity_id","uid","gid"])

        .addFilter("uid.meta.drupal_internal__target_id", session.user.userId)

        .addSort("created", "DESC")
        .getQueryObject(),

      withAuth: session.accessToken,

    }

  )

  const memberships = await drupal.getResourceCollection(
    "group_content--federage-group_membership",
    {
      params: new DrupalJsonApiParams()
        .addInclude(["uid","gid", "uid.user_picture"])

        .addFields("user--user", ["drupal_internal__uid, display_name, user_picture"])
        .addFields("file--file", ["uri", "resourceIdObjMeta"])
          .addFilter("uid.meta.drupal_internal__target_id", session.user.userId)


        .addSort("created", "DESC")
        .getQueryObject(),

      withAuth: session.accessToken,

    }

  )



  // Fetch user info
  const user = await drupal.getResourceCollectionFromContext<DrupalUser[]>(
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

  // Fetch user info




  return {
    props: {
      ...(await getGlobalElements(context)),
      user,
      financementsacceptedansgroupe,
      tousfinancementsacceptedugroupe,
      memberships,
      groupe,
    },
  };
}
