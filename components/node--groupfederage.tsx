import Image from "next/image"
import { DrupalNode } from "next-drupal"
import Link from "next/link";
import useSWR from 'swr'
import { useRouter } from "next/router"
import { getSession, useSession, signOut } from "next-auth/react";
import * as React from "react";
import { useTranslation } from "next-i18next"
import { NodeFinUserRow } from "components/node--groupfederage-listusers"

import { NodeFin2Row } from "components/node--groupfederage-listfin"
import { NodeGroupfinRow } from "components/node--groupfin--row"

import { absoluteURL, formatDate } from "lib/utils"

interface NodeGroupFinancement {
  node: DrupalNode,
  groupe_types: DrupalNode,

}

const fetcher = (url) => fetch(url).then((r) => r.json());

export function NodeGroupFinancement({ node,   ...props }: NodeGroupFinancementProps) {
const [openTab, setOpenTab] = React.useState(1);
const { t } = useTranslation()
const router = useRouter()



const { data: users, error: userError } = useSWR('https://fed.septembre.io/users_in_group/'+ node.id, fetcher)
const { data: financementsdugroupe, error: financementError } = useSWR(() =>'https://fed.septembre.io/groupfederagewithoutcountersorprice/'+ node.id, fetcher)
const { data: total, error: totalError } = useSWR(() =>'https://fed.septembre.io/groupfederageestimation/'+ node.id, fetcher)



         if (userError) return <div>Failed to load user</div>
         if (!users) return <div>Loading ...</div>
                if (financementError) return <div>Failed to load 23</div>
                if (!financementsdugroupe) return <div>Loading financement ...</div>

                if (totalError) return <div>Failed to load 23</div>
                if (!total) return <div>Loading financement ...</div>




                const session = getSession()


  return (
    <article {...props}>



{node.id}








<div>




<div className="box-content p-4 border-2 rounded-lg mb-8">
<div className="mb-4 grid grid-cols-12 gap-4">

<div className="col-span-11"> <h1 className="text-3xl font-black leading-tight">{node.label}</h1><br/>

<div className="grid grid-cols-12 gap-0">

<div>
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 2C5.44772 2 5 2.44772 5 3V4H4C2.89543 4 2 4.89543 2 6V16C2 17.1046 2.89543 18 4 18H16C17.1046 18 18 17.1046 18 16V6C18 4.89543 17.1046 4 16 4H15V3C15 2.44772 14.5523 2 14 2C13.4477 2 13 2.44772 13 3V4H7V3C7 2.44772 6.55228 2 6 2ZM6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9H14C14.5523 9 15 8.55228 15 8C15 7.44772 14.5523 7 14 7H6Z" fill="#9CA3AF"/>
</svg>
</div>
<div className="col-span-11">

<span className="text-sm">Projet créé le  {formatDate(node.created)}</span>

</div>
  </div></div>
 <div className="col-span-1 text-right"><NodeGroupfinRow key={node.id} node={node} /></div>
</div>

<div className="mb-4">



  {node.field_description?.value && (
    <div
      dangerouslySetInnerHTML={{ __html: node.field_description?.value }}
      className="text-sm text-gray-400 "
    />
  )}




<div>


</div>
</div>








</div>


<div className="box-content p-4 border-2 rounded-lg mb-8">

<div className="col-span-1 text-right">   {financementsdugroupe.length} projects </div>
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.29999 2.7002C5.80293 2.7002 5.39999 3.10314 5.39999 3.6002C5.39999 4.09725 5.80293 4.5002 6.29999 4.5002H11.7C12.197 4.5002 12.6 4.09725 12.6 3.6002C12.6 3.10314 12.197 2.7002 11.7 2.7002H6.29999Z" fill="#012BDD"/>
<path d="M3.59999 6.3002C3.59999 5.80314 4.00293 5.4002 4.49999 5.4002H13.5C13.997 5.4002 14.4 5.80314 14.4 6.3002C14.4 6.79725 13.997 7.2002 13.5 7.2002H4.49999C4.00293 7.2002 3.59999 6.79725 3.59999 6.3002Z" fill="#012BDD"/>
<path d="M1.79999 9.9002C1.79999 8.90608 2.60588 8.10019 3.59999 8.10019H14.4C15.3941 8.10019 16.2 8.90608 16.2 9.9002V13.5002C16.2 14.4943 15.3941 15.3002 14.4 15.3002H3.59999C2.60588 15.3002 1.79999 14.4943 1.79999 13.5002V9.9002Z" fill="#012BDD"/>
</svg>


  {node.field_categorie?.name && (
    <div
      dangerouslySetInnerHTML={{ __html: node.field_categorie?.name }}
      className="text-sm leading-loose prose"
    />
  )}

                  {node.id && (

                  <Link href={`/financement/new?gid=${encodeURIComponent(node.id)}`}>
                  <a className="grid grid-cols-4 gap-4">

                  <div>
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M20 11.25C20.6904 11.25 21.25 11.8096 21.25 12.5V18.75H27.5C28.1904 18.75 28.75 19.3096 28.75 20C28.75 20.6904 28.1904 21.25 27.5 21.25H21.25V27.5C21.25 28.1904 20.6904 28.75 20 28.75C19.3096 28.75 18.75 28.1904 18.75 27.5V21.25H12.5C11.8096 21.25 11.25 20.6904 11.25 20C11.25 19.3096 11.8096 18.75 12.5 18.75L18.75 18.75V12.5C18.75 11.8096 19.3096 11.25 20 11.25Z" fill="#012BDD"/>
          <rect x="1.25" y="1.25" width="37.5" height="37.5" rx="18.75" stroke="#D1D5DB" strokeWidth="2.5" stroke-dasharray="5 5"/>
          </svg>
          </div>
          <div className="col-span-2">
          </div>
          <div className="col-span-1 px-3 py-1 fedblue text-white transition-colors rounded-xl text-sm text-center font-semibold lg:py-2 bg-secondary hover:bg-white hover:text-black border-secondary">
                      Nouvel apport
                      </div>
                    </a>
                  </Link>

                  )}

</div>

{financementsdugroupe?.length ? (


<p>
    {financementsdugroupe.map((financementdugroupe,index) => (


<NodeFin2Row key={financementdugroupe.uuid} node={financementdugroupe} />

                          ))}



</p>
                                              ) : (
                                                <p className="text-2xl cadre text-center p-20 mb-10">
                                                  <p className="inline-block">  <svg width="38" height="30" viewBox="0 0 38 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M13 17H25H13ZM19 11V23V11ZM1 25V5C1 3.93913 1.42143 2.92172 2.17157 2.17157C2.92172 1.42143 3.93913 1 5 1H17L21 5H33C34.0609 5 35.0783 5.42143 35.8284 6.17157C36.5786 6.92172 37 7.93913 37 9V25C37 26.0609 36.5786 27.0783 35.8284 27.8284C35.0783 28.5786 34.0609 29 33 29H5C3.93913 29 2.92172 28.5786 2.17157 27.8284C1.42143 27.0783 1 26.0609 1 25Z" stroke="#9CA3AF" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"/>
                   </svg></p>

                                                      <p>   Ajouter un financement</p>

                                                </p>
                                              )}


                                        

<div className="box-content p-4 border-2 rounded-lg mb-8">
<svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="38" height="38" rx="8" fill="#EEF2FF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 13C11.8954 13 11 13.8954 11 15V19C11 20.1046 11.8954 21 13 21L13 15H23C23 13.8954 22.1046 13 21 13H13ZM15 19C15 17.8954 15.8954 17 17 17H25C26.1046 17 27 17.8954 27 19V23C27 24.1046 26.1046 25 25 25H17C15.8954 25 15 24.1046 15 23V19ZM21 23C22.1046 23 23 22.1046 23 21C23 19.8954 22.1046 19 21 19C19.8954 19 19 19.8954 19 21C19 22.1046 19.8954 23 21 23Z" fill="#012BDD"/>
</svg>

Estimation de la valeur :
{total.length ? (
<span className="font-semibold text-2xl">                   {total.map((totaux) => (

<p key={totaux.field_estimation_du_prix}>
{totaux.field_estimation_du_prix} €
</p>

      ))}
   </span>
  ) : (
    <p className="py-6">No Portefeuille found</p>
  )}

Edition du contrat

</div>


<div className="box-content p-4 border-2 rounded-lg mb-8">






<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.7 5.4002C11.7 6.89136 10.4912 8.1002 8.99999 8.1002C7.50883 8.1002 6.29999 6.89136 6.29999 5.4002C6.29999 3.90903 7.50883 2.7002 8.99999 2.7002C10.4912 2.7002 11.7 3.90903 11.7 5.4002Z" fill="#012BDD"/>
<path d="M16.2 7.2002C16.2 8.19431 15.3941 9.0002 14.4 9.0002C13.4059 9.0002 12.6 8.19431 12.6 7.2002C12.6 6.20608 13.4059 5.4002 14.4 5.4002C15.3941 5.4002 16.2 6.20608 16.2 7.2002Z" fill="#012BDD"/>
<path d="M12.6 13.5002C12.6 11.512 10.9882 9.9002 8.99999 9.9002C7.01177 9.9002 5.39999 11.512 5.39999 13.5002V16.2002H12.6V13.5002Z" fill="#012BDD"/>
<path d="M5.39999 7.2002C5.39999 8.19431 4.59411 9.0002 3.59999 9.0002C2.60588 9.0002 1.79999 8.19431 1.79999 7.2002C1.79999 6.20608 2.60588 5.4002 3.59999 5.4002C4.59411 5.4002 5.39999 6.20608 5.39999 7.2002Z" fill="#012BDD"/>
<path d="M14.4 16.2002V13.5002C14.4 12.5515 14.1553 11.6599 13.7257 10.8851C13.9412 10.8297 14.1672 10.8002 14.4 10.8002C15.8912 10.8002 17.1 12.009 17.1 13.5002V16.2002H14.4Z" fill="#012BDD"/>
<path d="M4.27433 10.8851C3.84466 11.6599 3.59999 12.5515 3.59999 13.5002V16.2002H0.899994V13.5002C0.899994 12.009 2.10883 10.8002 3.59999 10.8002C3.83283 10.8002 4.05879 10.8297 4.27433 10.8851Z" fill="#012BDD"/>
</svg>

{users.length} Membres actifs

<Link href={`/membre/new?gid=${encodeURIComponent(node.id)}`}>
<a className="grid grid-cols-4 gap-4">

<div>
<svg width="51" height="41" viewBox="0 0 51 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_1079_796)">
<path d="M20.3947 22.5655V28.4688H12.5C12.4998 27.5384 12.7202 26.6203 13.1444 25.7849C13.5687 24.9494 14.1855 24.2188 14.9475 23.649C15.7096 23.0791 16.5967 22.6852 17.5409 22.4974C18.4851 22.3096 19.4613 22.3329 20.3947 22.5655V22.5655ZM18.8158 21.6116C16.1987 21.6116 14.0789 19.5659 14.0789 17.0402C14.0789 14.5145 16.1987 12.4688 18.8158 12.4688C21.4329 12.4688 23.5526 14.5145 23.5526 17.0402C23.5526 19.5659 21.4329 21.6116 18.8158 21.6116ZM23.5526 24.6592V22.3735H25.1316V24.6592H27.5V26.183H25.1316V28.4688H23.5526V26.183H21.1842V24.6592H23.5526Z" fill="#012BDD"/>
<rect x="1.25" y="1.71875" width="37.5" height="37.5" rx="18.75" stroke="#D1D5DB" strokeWidth="2.5" stroke-dasharray="5 5"/>
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
                    Ajouter un membre
                    </div>
  </a>
</Link>


</div>

</div>


                  <fieldset className="border-t border-b border-gray-200">



  {users.map((user) => (



    <NodeFinUserRow key={user.uuid} node={user} />


      ))}
                                      </fieldset>

    </article>
  )

}
