import Image from "next/image"
import { DrupalNode } from "next-drupal"
import Link from "next/link";
import { getSession, useSession, signOut } from "next-auth/react";
import * as React from "react";



import { absoluteURL, formatDate } from "lib/utils"

interface UserCardProject {
  node: DrupalNode,


}


export function UserCardProject({ node, ...props }: UserCardProjectProps) {


  return (
    <article {...props} className="box-content p-4 border-2 rounded-lg mb-8 grid grid-cols-12 gap-4">
      <div className="col-span-12 text-xl font-semibold leading-tight">{node.label}</div>
      <div className="col-span-12  font-semibold leading-tight text-center">   Prix et dates indicatives</div>
      <div className="col-span-4 leading-tight"> {formatDate(node.field_date_de_livraison)} </div>
      <div className="col-span-4 eading-tight">{node.field_prix_estimatif}  </div>

      <div className="col-span-4 leading-tight"> {node.field_categorie} </div>



      <details className="mb-5 col-span-12 shadow sm:rounded-lg px-4 py-5 sm:p-6">

        <summary className="text-lg">
          Détails de l’offre
        </summary>
        <p className="mt-8  text-sm text-gray-500">

          {node.field_description && (
            <div dangerouslySetInnerHTML={{ __html: node.field_description }} className="  leading-normal prose text-slate-600 sm:text-base md:text-lg lg:text-xl" />
          )}

        </p>
      </details>



      <Link href={`/financement/new?gid=${encodeURIComponent(node.uuid_1)}`}>
        <a >
          <div className="inline-block px-3 py-1 fedblue text-white transition-colors rounded-xl text-sm text-center font-semibold lg:py-2 bg-secondary hover:bg-white hover:text-black border-secondary">
            Contribuer
          </div>
        </a>
      </Link>


    </article>
  )

}
