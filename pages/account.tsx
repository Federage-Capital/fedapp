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
import { useRouter } from "next/router";
import { drupal } from "lib/drupal";
import { getGlobalElements } from "lib/get-global-elements";
import { Layout, LayoutProps } from "components/layout";
import { PageHeader } from "components/page-header";
import { NextApiRequest, NextApiResponse } from "next"

import classNames from "classnames"

import { NodeGroupRow } from "components/node--group--row"

import { BoxProjetsEncours } from "components/box-groupes-encours"
import { BoxParticipationsEncours } from "components/box-participations-encours"
import { BoxProjetsOffre } from "components/box-projets-offre"
import { BoxTransactions } from "components/box-tableau-transactions"

import { useState } from "react";

import useSWR from 'swr'





interface AccountPageProps extends LayoutProps {
  user: DrupalUser[];
  node: DrupalNode[];

}



const fetcher = (url) => fetch(url).then((r) => r.json());


export default function AccountsPage({
  user,
  menus,
  financementsdansgr,
  financementsacceptedansgroupe,
  memberships,
  ...props
}: AccountPageProps) {




    const router = useRouter();




  const [openTab, setOpenTab] = React.useState(1);
  const [shouldFetch, setShouldFetch] = useState(false)





  const { data: propositions, error: propositionsError } = useSWR(() => `https://fed.septembre.io/propositions_nested` + `/` + user[0].id, fetcher)


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
    <Layout
      menus={menus}
      meta={{
        title: t("Portefeuille"),
      }}
    >



      <div className="container" id="account">

        <div className="title">
          <div className="mb-4 py-3">
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

        </div>

        <div className="flex flex-wrap">
          <div className="w-full">
            <br />
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

                  {_.map(regrmesparticipations,(value, key) => (
                                    <>
                                    <div className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 mb-5 shadow-sm focus-within:ring-2 focus-within:ring-fedblueblue focus-within:ring-offset-2 hover:border-gray-400" key={key}>

                                    <div className="flex-shrink-0">
                                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17 21.0714H23M11 25.3571V14.6429C11 14.0745 11.2107 13.5295 11.5858 13.1276C11.9609 12.7258 12.4696 12.5 13 12.5H19L21 14.6429H27C27.5304 14.6429 28.0391 14.8686 28.4142 15.2705C28.7893 15.6723 29 16.2174 29 16.7857V25.3571C29 25.9255 28.7893 26.4705 28.4142 26.8724C28.0391 27.2742 27.5304 27.5 27 27.5H13C12.4696 27.5 11.9609 27.2742 11.5858 26.8724C11.2107 26.4705 11 25.9255 11 25.3571Z" stroke="#012BDD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <rect x="1.25" y="1.25" width="37.5" height="37.5" rx="18.75" stroke="#D1D5DB" strokeWidth="2.5" strokeDasharray="5 5" />
                                      </svg>
                                    </div>

                                    <div className="min-w-0 flex-1">

                                    {key?.length ? (
                                          <>
                                    {financementsdansgr.filter(titredugroupe => titredugroupe.id.includes(key)).map(filteredtitredugroupe => {
                                              return (
                                                     <div key={filteredtitredugroupe.id} className="relative flex items-center ">
                                                    {filteredtitredugroupe.label}<br />
                                                    <p className="font-semibold">admin :{filteredtitredugroupe.uid.display_name}</p>


                                                    <div className="flex-shrink-2">
                                                    <h2>    <NodeGroupRow key={filteredtitredugroupe.id} node={filteredtitredugroupe} />

                                                      <Link href={filteredtitredugroupe.path.alias} passHref>

                                                        <a>
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
                                                    </h2>
                                                    </div>
                                                     </div>
                                                   )
                                            })}
                                          </>
                                        ) : (
                                          < >
                                    NAaN
                                          </>
                                        )}



Non validés:

{financementsacceptedansgroupe
.filter(nonvalide => nonvalide.gid.id.includes(key) && nonvalide.entity_id.field_statut.id.includes('6e6f83ed-b882-4b24-9a1b-897ab1f2e37c'))
.reduce((total, currentValue) => total = total + +currentValue.entity_id.field_estimation_du_prix,0)
}
<br/>
Mes apports non validés :

                  {financementsacceptedansgroupe
                  .filter(nonvalide => nonvalide.gid.id.includes(key) && nonvalide.entity_id.field_statut.id.includes('6e6f83ed-b882-4b24-9a1b-897ab1f2e37c') && nonvalide.uid.id.includes(user[0].id))
                  .reduce((total, currentValue) => total = total + +currentValue.entity_id.field_estimation_du_prix,0)
                  }



<br/>
Montants validés:
{financementsacceptedansgroupe
.filter(nonvalide => nonvalide.gid.id.includes(key) && nonvalide.entity_id.field_statut.id.includes('add21795-b0ad-45ab-ba10-a16859dcaf05'))
.reduce((total, currentValue) => total = total + +currentValue.entity_id.field_estimation_du_prix,0)
}
<br/>
Mes apports validés :

                  {financementsacceptedansgroupe
                  .filter(nonvalide => nonvalide.gid.id.includes(key) && nonvalide.entity_id.field_statut.id.includes('add21795-b0ad-45ab-ba10-a16859dcaf05') && nonvalide.uid.id.includes(user[0].id))
                  .reduce((total, currentValue) => total = total + +currentValue.entity_id.field_estimation_du_prix,0)
                  }






                                      <br/>
                                      </div>
                                      </div>

                                    </>
                                  ))}







</div>


                  <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <BoxProjetsOffre key={financementsdansgr.id} user={user}
                  propositions={propositions}
                  financementsdansgr={financementsdansgr}
                  />
                  </div>


                  <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <BoxTransactions key={user[0].id} user={user}
                  financementsdansgr={financementsdansgr}
                  />
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>




      </div>

    </Layout>
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

  const financementsdansgr = await drupal.getResourceCollection(
    "group--federage",
    {
      params: new DrupalJsonApiParams()
        .addInclude(["uid"])

        .addFields("user--user", ["display_name"])
        .addFields("group--federage", ["uid", "path", "label"])

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
        .addFields("entity_id", ["field_estimation_du_prix"])
        .addFields("gid", ["id"])
        .addFields("uid", ["meta"])
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
        .addInclude(["uid","gid"])

        .addFields("uid", ["drupal_internal__uid, display_name"])
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
      financementsdansgr,
      user,
      financementsacceptedansgroupe,
      memberships,
    },
  };
}
