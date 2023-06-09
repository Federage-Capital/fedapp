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
    <div className="grid grid-cols-12 gap-4">
    <button class="col-span-3 inline-block px-1 skyfed textskyfed transition-colors rounded-lg font-xsxs text-center font-semibold lg:py-2 bg-secondary hover:bg-white hover:text-black border-secondary">
   {node.field_statut}
   </button>


   <div class="col-span-9 text-right font-semibold font-xsxs">
   En attente
   </div>
</div>

<div class="text-lg font-bold ">
 {node.title}
</div>



 {node.body && (
      <div
        dangerouslySetInnerHTML={{ __html: node.body }}
        className="text-prose gray-700 leading-loose"
      />
    )}
     <div className="grid grid-cols-12 gap-4">

     <div className="col-span-9 text-left font-xsxs">
     Ajouté par



     {node.uid && (

       <Link href={`user/${node.uid_1}`} passHref>


      <span
      dangerouslySetInnerHTML={{ __html: node.uid }}
      className="ml-1 textskyfed"
      />

        </Link>
              )}


 </div>
 <div className="col-span-1 font-xsxs">

 </div>

 <div className="col-span-2">


 <div className="inline-block">  <NodeFinRow key={node.uuid} node={node} /></div>

 </div>
 </div>


 

    </article>
  )

}
