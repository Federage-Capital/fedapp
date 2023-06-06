import Image from "next/image"
import { DrupalNode } from "next-drupal"
import Link from "next/link";
import useSWR from 'swr'
import { useRouter } from "next/router"
import { getSession, useSession, signOut } from "next-auth/react";
import * as React from "react";
import { useTranslation } from "next-i18next"
import { NodeFinRow } from "components/node--fin--row"


import { absoluteURL, formatDate } from "lib/utils"

interface NodeFin2Row {
  node: DrupalNode,


}


export function NodeFin2Row({ node,   ...props }: NodeFin2RowProps) {
const { t } = useTranslation()





  return (
    <article {...props} className="asset-card-2 mb-3">



 {node.title}

     <div className="grid grid-cols-12 gap-4">

     <div className="col-span-1 text-right">
 <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
 <path d="M14.0336 4.64123C14.8404 3.83443 16.1485 3.83443 16.9553 4.64123C17.7621 5.44803 17.7621 6.75611 16.9553 7.5629L16.1363 8.38194L13.2146 5.46026L14.0336 4.64123Z" fill="#9CA3AF"/>
 <path d="M11.7538 6.9211L3.09888 15.576V18.4977H6.02055L14.6754 9.84277L11.7538 6.9211Z" fill="#9CA3AF"/>
 </svg>
 </div>
 <div className="col-span-9">

 {node.view_user && (
 <p>
 Ajouté par : <Link href={node.view_user}>
 {node.uid}


       </Link>
       </p>

 )}
 </div>

 <div className="col-span-2">

  <button class="inline-block px-3 py-1 fedblue text-white transition-colors rounded-xl text-sm text-center font-semibold lg:py-2 bg-secondary hover:bg-white hover:text-black border-secondary">
 {node.field_statut}
 </button>
 <div className="inline-block">  <NodeFinRow key={node.uuid} node={node} /></div>

 </div>
 </div>

 <div class="grid grid-cols-12 gap-4">
   <div className="col-span-9">

   <h1>

{node.view_user && (

   <Link href={node.view_node}>

 <div
 dangerouslySetInnerHTML={{ __html: node.label_1 }}
 className="mb-4 text-3xl font-black leading-tight"
 />

   </Link>
         )}
   </h1>


   </div>
   <div className="col-span-3">

Estimation : {node.field_estimation_du_prix} €
   </div>
 </div>

 <div
   dangerouslySetInnerHTML={{ __html: node.body }}
   className="text-prose gray-700 leading-loose"
 />

 <div className="button-fin w-100 text-center mx-auto">


 {node.view_node && (
 <Link href={node.view_node}>

 Détail du financement

 </Link>
 )}

 {node.view_node && (

 <Link href={node.view_node}>

 Détail du financement

 </Link>
             )}
 </div>


    </article>
  )

}
