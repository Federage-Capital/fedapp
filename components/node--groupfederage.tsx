import Image from "next/image"
import { DrupalNode } from "next-drupal"
import Link from "next/link";
import useSWR from 'swr'
import { useRouter } from "next/router"
import { getSession, useSession, signOut } from "next-auth/react";
import * as React from "react";

import { absoluteUrl, formatDate } from "lib/utils"

interface NodeGroupFinancement {
  node: DrupalNode,
  groupe_types: DrupalNode,

}

const fetcher = (...args) => fetch(...args).then((res) => res.json())


export function NodeGroupFinancement({ node,   ...props }: NodeGroupFinancementProps) {
  const [openTab, setOpenTab] = React.useState(1);

  const router = useRouter()
  const session = getSession()

  const { data: users, error } = useSWR('https://fed.septembre.io/jsonapi/group_content/federage-group_membership?filter[gid.id]='+ node.id,  fetcher)


         const { data: financementsdugroupe, error2 } = useSWR('https:/fed.septembre.io/group_node_financement_rest/'+ node.id,  fetcher)

         if (error) return <div>Failed to load</div>
         if (!users) return <div>Loading ...</div>
                if (error2) return <div>Failed to load</div>
                if (!financementsdugroupe) return <div>Loading financement ...</div>


  return (
    <sep {...props}>




<div className="articles">

  <h1 class="text-xl">{node.label}</h1>
  {node.path.alias}
  {node.field_description?.value && (
    <div
      dangerouslySetInnerHTML={{ __html: node.field_description?.value }}
      className="mt-6 text-xl leading-loose prose"
    />
  )}
<p>Projet créé le  {formatDate(node.created)}</p>
{session.accessToken}









  {node.field_categorie?.name && (
    <div
      dangerouslySetInnerHTML={{ __html: node.field_categorie?.name }}
      className="mt-6 text-xl leading-loose prose"
    />
  )}







</div>


<div className="flex flex-wrap">
        <div className="w-full">
        <span
          className="px-5 py-3"
        >   </span>
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-left text-center">
              <a
                className={
                  "text-xs font-bold  px-5 py-3 rounded-md leading-normal " +
                  (openTab === 1
                    ? "bg-" + "-900"
                    : "text-" + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
            Apports
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-left text-center">
              <a
                className={
                  "text-xs font-bold  px-5 py-3 rounded-md leading-normal " +
                  (openTab === 2
                    ? "bg-" + "-900"
                    : "text-" + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
Membres
              </a>
            </li>

          </ul>
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 ">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">



                  <Link href={`/financement/new?gid=${encodeURIComponent(node.id)}`}>
                  <a className="px-3 py-1 fedblue text-white transition-colors rounded-xl lg:text-xl lg:px-4 lg:py-2 bg-secondary hover:bg-white hover:text-black border-secondary">
                      Nouveau financement dans ce groupe
                    </a>
                  </Link>


                {financementsdugroupe?.length ? (

                <p>
                    {financementsdugroupe.map((financementdugroupe) => (

                    <div className="asset-card">
                    <Link href={financementdugroupe.view_node}>
{financementdugroupe.label_1}

                    </Link>

                    <p> {financementdugroupe.body}</p>
<p>Ajouté par : {financementdugroupe.uid}</p>
<Link href={financementdugroupe.view_node}>
<div className="button-fin">

Détail du financement
</div>
</Link>

                    </div>

                                          ))}



                </p>
                                                              ) : (
                                                                <p className="text-2xl cadre text-center p-20 mb-10">
                                                                  <p className="inline-block">  <svg width="38" height="30" viewBox="0 0 38 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <path d="M13 17H25H13ZM19 11V23V11ZM1 25V5C1 3.93913 1.42143 2.92172 2.17157 2.17157C2.92172 1.42143 3.93913 1 5 1H17L21 5H33C34.0609 5 35.0783 5.42143 35.8284 6.17157C36.5786 6.92172 37 7.93913 37 9V25C37 26.0609 36.5786 27.0783 35.8284 27.8284C35.0783 28.5786 34.0609 29 33 29H5C3.93913 29 2.92172 28.5786 2.17157 27.8284C1.42143 27.0783 1 26.0609 1 25Z" stroke="#9CA3AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                   </svg></p>

                                                                      <p>   Ajouter un financement</p>
                                                      
                                                                </p>
                                                              )}

                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <Link href={`/membre/new?gid=${encodeURIComponent(node.id)}`}>
                <a className="px-3 py-1 fedblue text-white transition-colors rounded-xl lg:text-xl lg:px-4 lg:py-2 bg-secondary hover:bg-white hover:text-black border-secondary">
                    Nouveaux membres dans ce groupe
                  </a>
                </Link>

                <p>

                  {users.data.map((user) => (

                  <div>{user.attributes.label}

<p>{user.attributes.path.alias}</p>
                  </div>

                                        ))}

                  </p>
                </div>

              </div></div>
              </div></div></div>
    </sep>
  )

}
