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

interface NodeFinUserRow {
  node: DrupalNode,


}


export function NodeFinUserRow({ node,   ...props }: NodeFinUserRowProps) {
const { t } = useTranslation()





  return (
    <article {...props} className="asset-card-2 mb-3">



 {node.name}


 {node.uid}

Role

 <div className="font-medium text-gray-700">


 {node.user_picture ? (



     <Image
       src={absoluteURL(node.user_picture)}
       alt={node.name}
       title={node.name}
       width={50}
       height={50}
       className='h-8 w-8 rounded-full'
     />

   ) : (
     <div className="px-6">
       <div className="md:grid-cols-1">
       <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
<path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"></path>
</svg>

       </div>
     </div>
   )}
 </div>

 <Link href={`user/${node.uid}`}>

 truc
 </Link>


    </article>
  )

}
