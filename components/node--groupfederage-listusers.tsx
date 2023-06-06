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


 <div className="font-medium text-gray-700">
 {node.user_picture && (


     <Image
       src={absoluteURL(node.user_picture)}
       alt={node.name}
       title={node.name}
       width={50}
       height={50}
       className='h-8 w-8 rounded-full'
     />

 )}

 </div>

 <Link href={`user/${node.uid}`}>

 truc
 </Link>


    </article>
  )

}
