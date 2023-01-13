import Image from "next/image"
import { DrupalNode } from "next-drupal"
import Link from "next/link";
import useSWR from 'swr'
import { useRouter } from "next/router"
import { getSession, useSession, signOut } from "next-auth/react";
import * as React from "react";

import { absoluteURL, formatDate } from "lib/utils"

interface NodeGroupFinancementProps {
  node: DrupalNode
}

const fetcher = (url) => fetch(url).then((res) => res.json());


export function NodeGroupFinancement({ node,   ...props }: NodeGroupFinancementProps) {
  const [openTab, setOpenTab] = React.useState(1);

  const router = useRouter()
  const session = getSession()

  const { data: users, error } = useSWR('https://fed.septembre.io/jsonapi/group_content/federage-group_membership?filter[gid.id]='+ node.id,  fetcher)


         const { data: financementsdugroupe } = useSWR('https:/fed.septembre.io/group_node_financement_rest/'+ node.id,  fetcher)

         if (error) return <div>Failed to load</div>
         if (!users) return <div>Loading ...</div>
                if (!financementsdugroupe) return <div>Loading financement ...</div>


  return (
    <article {...props}>
    {node.uid?.display_name ? (

      <div className="grid grid-cols-12 gap-4">

      <div>
      <Image
        src={absoluteURL(node.uid?.user_picture.uri.url)}
        width={100}
        height={100}
        className="rounded-full"
        objectFit="cover"
        alt={node.uid.display_name}
        priority
      />
      </div>
      <div className="text-base font-bold col-span-11 align-middle">
    {node.uid?.display_name}
    </div>
      </div>
    ) : null}



<div className="articles pl-4">

<div className="grid grid-cols-12 gap-4">

<div>

</div>
</div>

<div className="box-content p-4 border-2 rounded-lg mb-8">

  <h1 className="text-xl font-bold">{node.label}</h1>


  {node.field_categorie?.name && (
    <div
      dangerouslySetInnerHTML={{ __html: node.field_categorie?.name }}
      className="text-sm leading-loose prose"
    />
  )}


<span className="text-base">
  {node.field_description?.value && (
    <div
      dangerouslySetInnerHTML={{ __html: node.field_description?.value }}
      className="mt-6 text-xl leading-loose prose"
    />
  )}
  </span>





<div className="grid grid-cols-12 gap-4">

<div>
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 2C5.44772 2 5 2.44772 5 3V4H4C2.89543 4 2 4.89543 2 6V16C2 17.1046 2.89543 18 4 18H16C17.1046 18 18 17.1046 18 16V6C18 4.89543 17.1046 4 16 4H15V3C15 2.44772 14.5523 2 14 2C13.4477 2 13 2.44772 13 3V4H7V3C7 2.44772 6.55228 2 6 2ZM6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9H14C14.5523 9 15 8.55228 15 8C15 7.44772 14.5523 7 14 7H6Z" fill="#9CA3AF"/>
</svg>
</div>
<div className="col-span-11">

<span className="text-sm">Projet créé le  {formatDate(node.created)}</span>
</div>
  </div>






</div>








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


                <div className="box-content p-4 border-2 rounded-lg mb-8">


                <Link href={`/financement/new?gid=${encodeURIComponent(node.id)}`}>
                <a className="grid grid-cols-4 gap-4">

                <div>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M20 11.25C20.6904 11.25 21.25 11.8096 21.25 12.5V18.75H27.5C28.1904 18.75 28.75 19.3096 28.75 20C28.75 20.6904 28.1904 21.25 27.5 21.25H21.25V27.5C21.25 28.1904 20.6904 28.75 20 28.75C19.3096 28.75 18.75 28.1904 18.75 27.5V21.25H12.5C11.8096 21.25 11.25 20.6904 11.25 20C11.25 19.3096 11.8096 18.75 12.5 18.75L18.75 18.75V12.5C18.75 11.8096 19.3096 11.25 20 11.25Z" fill="#012BDD"/>
        <rect x="1.25" y="1.25" width="37.5" height="37.5" rx="18.75" stroke="#D1D5DB" stroke-width="2.5" stroke-dasharray="5 5"/>
        </svg>
        </div>
        <div className="col-span-2">
        </div>
        <div className="col-span-1 px-3 py-1 fedblue text-white transition-colors rounded-xl text-sm text-center font-semibold lg:py-2 bg-secondary hover:bg-white hover:text-black border-secondary">
                    Nouvel apport
                    </div>
                  </a>
                </Link>
                </div>







                {financementsdugroupe?.length ? (

                <p>
                    {financementsdugroupe.map((financementdugroupe) => (

                    <div key={financementdugroupe.id} className="asset-card mb-3">
                    <Link href={financementdugroupe.view_node}>

<div
  dangerouslySetInnerHTML={{ __html: financementdugroupe.label_1 }}
  className="font-medium text-lg leading-loose"
/>

                    </Link>
                    <div
                      dangerouslySetInnerHTML={{ __html: financementdugroupe.body }}
                      className="text-sm gray-700 leading-loose"
                    />

                    <div className="grid grid-cols-12 gap-4">

                    <div>
<svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.0336 4.64123C14.8404 3.83443 16.1485 3.83443 16.9553 4.64123C17.7621 5.44803 17.7621 6.75611 16.9553 7.5629L16.1363 8.38194L13.2146 5.46026L14.0336 4.64123Z" fill="#9CA3AF"/>
<path d="M11.7538 6.9211L3.09888 15.576V18.4977H6.02055L14.6754 9.84277L11.7538 6.9211Z" fill="#9CA3AF"/>
</svg>
</div>
<div className="col-span-11">
Ajouté par : <Link href={financementdugroupe.view_user}>
{financementdugroupe.uid}


                    </Link></div>
</div>
<div className="button-fin mx-auto">
<Link href={financementdugroupe.view_node}>

Détail du financement

</Link>
</div>
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

                  <div key={user.id}>{user.attributes.label}

<p>{user.attributes.path.alias}</p>
                  </div>

                                        ))}

                  </p>
                </div>

              </div></div>
              </div></div></div>


              <div className="box-content p-4 border-2 rounded-lg mb-8">
                <Link href={`/membre/new?gid=${encodeURIComponent(node.id)}`}>
                <a className="grid grid-cols-4 gap-4">

                <div>
                <svg width="51" height="41" viewBox="0 0 51 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_1079_796)">
                <path d="M20.3947 22.5655V28.4688H12.5C12.4998 27.5384 12.7202 26.6203 13.1444 25.7849C13.5687 24.9494 14.1855 24.2188 14.9475 23.649C15.7096 23.0791 16.5967 22.6852 17.5409 22.4974C18.4851 22.3096 19.4613 22.3329 20.3947 22.5655V22.5655ZM18.8158 21.6116C16.1987 21.6116 14.0789 19.5659 14.0789 17.0402C14.0789 14.5145 16.1987 12.4688 18.8158 12.4688C21.4329 12.4688 23.5526 14.5145 23.5526 17.0402C23.5526 19.5659 21.4329 21.6116 18.8158 21.6116ZM23.5526 24.6592V22.3735H25.1316V24.6592H27.5V26.183H25.1316V28.4688H23.5526V26.183H21.1842V24.6592H23.5526Z" fill="#012BDD"/>
                <rect x="1.25" y="1.71875" width="37.5" height="37.5" rx="18.75" stroke="#D1D5DB" stroke-width="2.5" stroke-dasharray="5 5"/>
                </g>
                <defs>
                <filter id="filter0_d_1079_796" x="-10.5" y="-10.0312" width="61" height="61" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feMorphology radius="10.5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_1079_796"/>
                <feOffset/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1079_796"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1079_796" result="shape"/>
                </filter>
                </defs>
                </svg>
              </div>
              <div className="col-span-1">
              </div>
              <div className="col-span-2 px-3 py-1 fedblue text-white transition-colors rounded-xl text-sm text-center font-semibold lg:py-2 bg-secondary hover:bg-white hover:text-black border-secondary">
                                    Ajouter un nouveau partenaire
                                    </div>
                  </a>
                </Link>
                </div>
    </article>
  )

}
