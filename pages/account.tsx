import * as React from "react";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { DrupalNode, DrupalUser } from "next-drupal";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { DrupalJsonApiParams } from "drupal-jsonapi-params";
import { getSession, useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { drupal } from "lib/drupal";
import { getGlobalElements } from "lib/get-global-elements";
import { Layout, LayoutProps } from "components/layout";
import { PageHeader } from "components/page-header";
import { NodeGroupRow } from "components/node--group--row"

import useSWR from 'swr'

import Modal from "../components/modal";
import Image, { ImageProps } from "next/image"
import { absoluteURL } from "lib/utils"

import { Fragment } from 'react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import { formatDate } from "lib/utils"


interface AccountPageProps extends LayoutProps {
  user: DrupalUser[];
  node: DrupalNode[];
  objectFit,
  priority,
  financementsdansgr,
}


interface FormGroupfinProps extends React.HTMLProps<HTMLFormElement> {}

const fetcher = (url) => fetch(url).then((r) => r.json());


export default function AccountsPage({
  user,
  node,
  menus,
  article,
  objectFit,
  priority,
  financementsdansgr,
  membersdugroupe,
  filteredPerson1,
  className,
  ...props
}: AccountPageProps) {

  const [formStatus, setFormStatus] = React.useState<FormStatus>(null)



  const { t } = useTranslation();
  const { data } = useSession();
  const router = useRouter();


  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const { status } = useSession()
  const [openTab, setOpenTab] = React.useState(1);


  const { data: financements2dugroupe, error: financementError } = useSWR(() =>`https://fed.septembre.io/group_node_financement_rest_nested_3`+ `/`+ user[0].id, fetcher)
  const { data: financementsd1groupe, error: financement1Error } = useSWR(() =>`https://fed.septembre.io/group_node_financement_rest_nested_4`+ `/`+ user[0].id, fetcher)
  const { data: tableau, error: tableauError } = useSWR(() =>`https://fed.septembre.io/group_node_financement_rest_nested_5`+ `/`+ user[0].id, fetcher)
  const { data: propositions, error: propositionsError } = useSWR(() =>`https://fed.septembre.io/propositions_nested`+ `/`+ user[0].id, fetcher)
  const { data: totaldugroupe, error: totaldugroupeError } = useSWR(() =>`https://fed.septembre.io/group_node_financement_rest_nested_6`, fetcher)
  const { data: totaldugroupeprop, error: totaldugroupepropError } = useSWR(() =>`https://fed.septembre.io/group_node_financement_rest_nested_7`, fetcher)

  if (totaldugroupepropError) return <div>Failed to load total du groupe</div>
if (!totaldugroupeprop) return <div>Loading  total du groupe ...</div>

  if (totaldugroupeError) return <div>Failed to load total du groupe</div>
if (!totaldugroupe) return <div>Loading  total du groupe ...</div>

  if (propositionsError) return <div>Failed to propositionsError 23</div>
if (!propositions) return <div>Loading Propositions ...</div>
if (tableauError) return <div>Failed to load 23</div>
if (!tableau) return <div>Loading financement ...</div>

  if (financement1Error) return <div>Failed to load 23</div>
  if (!financementsd1groupe) return <div>Loading financement ...</div>

  if (financementError) return <div>Failed to load 23</div>
  if (!financements2dugroupe) return <div>Loading financement ...</div>

const getTotFin2 = (financements2dugroupe) => {
        let sum = 0
        for (let i = 0; i < financements2dugroupe.length; i++) {
          sum += financements2dugroupe[i].field_estimation_du_prix
        }
        return sum

      }








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






                          {user[0].user_picture && (


                              <Image
                                src={absoluteURL(user[0].user_picture.uri.url)}
                                objectFit={objectFit}
                                alt={user[0].user_picture.resourceIdObjMeta.alt || "Image"}
                                title={user[0].user_picture.resourceIdObjMeta.title}
                                priority={priority}
                                width={130}
                                height={130}
                                className='rounded-lg shadow-sm ml-3  object-cover h-48 w-96'
                              />

                          )}



             <div className="px-5 py-3 text-base font-semibold">
             Portefeuille<br/>

             <span className="font-semibold text-2xl">  {getTotFin2(financements2dugroupe)} €</span>
             </div>

          </div>

</div>


        </div>
        <div className="actions">



          <p className="text-lg mb-12">
          <Link href="/groupfederage/new" passHref>
          <a className="px-4 py-2 fedbutton text-white font-bold transition-colors rounded-xl text-base lg:px-4 lg:py-2 bg-secondary hover:bg-white hover:text-black border-secondary">
             Nouveau financement
            </a>
          </Link>
          </p>

        </div>

        <div className="flex flex-wrap">
                <div className="w-full">
                <br/>
                <span
                  className="px-5 py-3 p-4 text-xl font-semibold"
                >  Opérations

                </span>
                  <ul
                    className="flex mb-0 mt-4 list-none flex-wrap pt-3 pb-4 flex-row"
                    role="tablist"
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
                      >
                        Mes propositions
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
                        href="#link32"
                        role="tablist"
                      >
                        Demandes
                      </a>
                    </li>
                    <li className="-mb-px mr-2 last:mr-0 flex-left text-center">
                      <a
                        className={
                          "text-xs font-bold  px-5 py-3 rounded-md leading-normal " +
                          (openTab === 4
                            ? "bg-gray" + "-100"
                            : "text-" + "gray-700")
                        }
                        onClick={e => {
                          e.preventDefault();
                          setOpenTab(4);
                        }}
                        data-toggle="tab"
                        href="#link4"
                        role="tablist"
                      >
                         Transactions
                      </a>
                    </li>
                  </ul>
                  <div className="relative flex flex-col min-w-0 break-words w-full mb-6 ">
                    <div className="px-4 py-5 flex-auto">
                      <div className="tab-content tab-space">
                        <div className={openTab === 1 ? "block" : "hidden"} id="link1">







                        <p>

                        {membersdugroupe?.length ? (

                          <div>

                                              {membersdugroupe.map((membre) => (



                                                          <div
                                                            key={membre.id}
                                                          >




                        {financementsdansgr?.length ? (
                        <p>

                        {financementsdansgr.filter(person1 => person1.id.includes(membre.gid.id)).map(filteredPerson1 => {

                        return (

                        <div key={filteredPerson1.id} className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 mb-5 shadow-sm focus-within:ring-2 focus-within:ring-fedblueblue focus-within:ring-offset-2 hover:border-gray-400">
                        <div className="flex-shrink-0">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 21.0714H23M11 25.3571V14.6429C11 14.0745 11.2107 13.5295 11.5858 13.1276C11.9609 12.7258 12.4696 12.5 13 12.5H19L21 14.6429H27C27.5304 14.6429 28.0391 14.8686 28.4142 15.2705C28.7893 15.6723 29 16.2174 29 16.7857V25.3571C29 25.9255 28.7893 26.4705 28.4142 26.8724C28.0391 27.2742 27.5304 27.5 27 27.5H13C12.4696 27.5 11.9609 27.2742 11.5858 26.8724C11.2107 26.4705 11 25.9255 11 25.3571Z" stroke="#012BDD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <rect x="1.25" y="1.25" width="37.5" height="37.5" rx="18.75" stroke="#D1D5DB" stroke-width="2.5" stroke-dasharray="5 5"/>
                        </svg>
                        </div>

                          <div className="min-w-0 flex-1">
                             {filteredPerson1.label}<br/>
admin : {filteredPerson1.uid.display_name}
                             <span >
                             {totaldugroupe?.length ? (
                             <div>
                             {totaldugroupe.filter(person6 => person6.uuid.includes(filteredPerson1.id)).map(filteredPerson6 => {

                             return (

                             <div className="flex-container card" key={filteredPerson6.uuid}>

                               <div className="content">
                               {filteredPerson6.uuid}
                                Montant total des apports validés (tous):     <span className="text-2xl font-semibold">{filteredPerson6.field_estimation_du_prix} €</span>

                                 <div>

                             </div>
                               </div>


                             </div>)
                             })}



                             </div>
                             ) : (
                             <p >



                             </p>


                             )}

                             {totaldugroupeprop?.length ? (
                             <div>
                             {totaldugroupeprop.filter(person7 => person7.uuid.includes(filteredPerson1.id)).map(filteredPerson7 => {

                             return (

                             <div className="flex-container card" key={filteredPerson7.uuid}>

                               <div className="content">
                                Montant total des apports non-validés:     <span className="text-2xl font-semibold">{filteredPerson7.field_estimation_du_prix} €</span>

                                 <div>

                             </div>
                               </div>


                             </div>)
                             })}



                             </div>
                             ) : (
                             <p >



                             </p>


                             )}


                             {financements2dugroupe?.length ? (
                             <div>

                             {financements2dugroupe.filter(person5 => person5.uuid.includes(membre.gid.id)).map(filteredPerson5 => {

                             return (

                             <div className="flex-container card" key={filteredPerson5.uuid}>

                               <div className="content">
                                Montant de mon apport dans le projet :   <span className="text-2xl font-semibold">{filteredPerson5.field_estimation_du_prix} €</span>
                                 <div>

                             </div>
                               </div>


                             </div>)
                             })}



                             </div>
                             ) : (
                             <p >



                             </p>


                             )}
                             </span>
                            <div>







                        </div>
                          </div>
                          <div className="flex-shrink-2">
                          <NodeGroupRow key={filteredPerson1.id} node={filteredPerson1} />


                          {filteredPerson1.moderation_state == 'published' &&
                                  <h2>
                                  <Link href={filteredPerson1.path.alias} passHref>

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




                          }






                        </div>

                        </div>)
                        })}



                        </p>

                        ) : (
                        <p >



                        </p>


                        )}





                                                          </div>

                                                     ))}
                                                     </div>
                                                   ) : (
                                                     <p className="text-2xl cadre text-center p-20 mb-10">
                                                       <p className="inline-block">  <svg width="38" height="30" viewBox="0 0 38 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                               <path d="M13 17H25H13ZM19 11V23V11ZM1 25V5C1 3.93913 1.42143 2.92172 2.17157 2.17157C2.92172 1.42143 3.93913 1 5 1H17L21 5H33C34.0609 5 35.0783 5.42143 35.8284 6.17157C36.5786 6.92172 37 7.93913 37 9V25C37 26.0609 36.5786 27.0783 35.8284 27.8284C35.0783 28.5786 34.0609 29 33 29H5C3.93913 29 2.92172 28.5786 2.17157 27.8284C1.42143 27.0783 1 26.0609 1 25Z" stroke="#9CA3AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                               </svg></p>

                                                     <p>  Aucun projet</p>
                                                           <p>   Commencez par créer un projet</p>
                                                     <Link href="/groupfederage/new" passHref>
                                                     <a className="px-3 py-1 cadre text-white transition-colors rounded-xl lg:text-xl lg:px-4 lg:py-2 bg-secondary hover:bg-white hover:text-black border-secondary">
                                                    + démarrez un projet
                                                       </a>
                                                     </Link>
                                                     </p>
                                                   )}
                        </p>

                        </div>





                        <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                          <p>

                          {financementsd1groupe?.length ? (

                            <div>



                            <h3 className="mb-2 text-lg font-black text-gray-400 text-left">Propositions dans les groupes</h3>


                                                {financementsd1groupe.map((demandes) => (



                                                            <div
                                                              key={demandes.id}
                                                              className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 mb-5 shadow-sm focus-within:ring-2 focus-within:ring-fedblueblue focus-within:ring-offset-2 hover:border-gray-400"
                                                            >
                                                              <div className="flex-shrink-0">
                                                              <Image
                                                                src={absoluteURL(demandes.user_picture)}
                                                                width={30}
                                                                height={30}
                                                                className='flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ring-8 ring-white'
                                                                objectFit="cover"
                                                                alt={demandes.title}
                                                                priority
                                                              />
                                                                                                </div>
                                                              <div className="min-w-0 flex-1">
                                                  <Link href={demandes.view_node} passHref>
                                                              <a>
                                                  <h2 className="text-sm gray-700">{demandes.title}</h2>
                                              <h2 className="text-sm gray-700">{demandes.label}</h2>
                                                  <span className="text-2xl font-semibold">

                                                  {demandes.field_estimation_du_prix} €

statut : {demandes.status}


                                                  </span>

                                                  </a>
                                                  </Link>



                                                              </div>
                                                              <div className="flex-shrink-2">


                          </div>
                                                            </div>

                                                       ))}
                                                       </div>
                                                     ) : (
                                                       <p className="text-2xl cadre text-center p-20 mb-10">

                                                       </p>
                                                     )}
                          </p>
                        </div>
                        <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                        <p>
                        {propositions?.length ? (

                          <div>




                          <h3 className="mb-2 text-lg font-black text-gray-400 text-left">Propositions dans les groupes</h3>

                          {propositions.filter(offre1 => !offre1.uuid_2.includes(user[0].id)).map(filteredOffre1 => {

                          return (

                          <div key={filteredOffre1.uuid} className="flex-container card" >
                          <div className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 mb-5 shadow-sm focus-within:ring-2 focus-within:ring-fedblueblue focus-within:ring-offset-2 hover:border-gray-400"
                          >

                            <div className="flex-shrink-0">
                            <Image
                              src={absoluteURL(filteredOffre1.user_picture)}
                              width={30}
                              height={30}
                              className='flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ring-8 ring-white'
                              objectFit="cover"
                              alt={filteredOffre1.title}
                              priority
                            />
                                                              </div>
                            <div className="min-w-0 flex-1">
                <Link href={filteredOffre1.view_group} passHref>
                            <a>
                <h2 className="text-sm gray-700">{filteredOffre1.title}</h2>
            <h2 className="text-sm gray-700">{filteredOffre1.label}</h2>
                <span className="text-2xl font-semibold">
                   {filteredOffre1.field_estimation_du_prix} €

                Nom du contributeur: {filteredOffre1.uid_1}<br/>
                statut: {filteredOffre1.status}<br/>





                </span>

                </a>
                </Link>



                            </div>
                            <div className="flex-shrink-2">


          </div>
                          </div>




                              <div>


                            </div>





                          </div>





                          )
                          })}


                                                     </div>
                                                   ) : (
                                                     <p>

                                                     </p>
                                                   )}
                        </p>
                        </div>

                        <div className={openTab === 4 ? "block" : "hidden"} id="link3">
                          <p>


{financementsdansgr?.length ? (

  <div>





                      {financementsdansgr.map((findetails) => (



                                  <div
                                    key={findetails.id}
                                    className="grid grid-cols-6 gap-4"
                                  >


                                    {findetails.label}


                                    <div>Intitulé de l&apos;apport</div>
                                    <div>Type d&apos;apport</div>
                                    <div>    {financements2dugroupe?.length ? (

<span>
                                        {financements2dugroupe.filter(person5 => person5.uuid.includes(findetails.id)).map(filteredPerson5 => {

                                        return (

                                        <div className="flex-container card" key={filteredPerson5.uuid}>

                                          <div className="content">

                                             {filteredPerson5.field_estimation_du_prix} €
                                            <div>

                                        </div>
                                          </div>





                                        </div>





                                      )
                                        })}


</span>
                                        ) : (
                                        <p >

                                        00000 €

                                        </p>


                                        )}</div>
      <div>Comptabilisé</div>
                                    <div>Accepté</div>
                                  </div>

                             ))}
                             </div>
                           ) : (
                             <p>

                             </p>
                           )}




                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>




      </div>

    </Layout>
  );
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

      const financementsdansgr = await drupal.getResourceCollection(
        "group--federage",
        {
          params: new DrupalJsonApiParams()
            .addInclude(["uid", "group_type", "revision_user"])
            .addFields("group_content--federage-group_node-financement", ["id", "type","meta"])
            .addFields("group_type--group_type", ["id", "type","meta"])

            .addFields("user--user", ["display_name", "user_picture"])

            .addSort("created", "DESC")
            .getQueryObject(),

          withAuth: session.accessToken,

        }

      )

      const membersdugroupe = await drupal.getResourceCollection(
        "group_content--federage-group_membership",
        {
          params: new DrupalJsonApiParams()
            .addInclude(["uid", "group_content_type", "gid", "entity_id", "group_roles"])


            .addFields("user--user", ["display_name", "user_picture"])
            .addFilter("entity_id.meta.drupal_internal__target_id", session.user.userId)

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
          "mail",
          "drupal_internal__uid",
          "field_description",
          "field_site_internet",
          "field_user_slogan",
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
      membersdugroupe,
      user,
    },
  };
}
