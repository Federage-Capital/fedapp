import Image from "next/image"
import { DrupalNode } from "next-drupal"
import Link from "next/link";
import useSWR from 'swr'
import { useRouter } from "next/router"
import { getSession, useSession, signOut } from "next-auth/react";
import * as React from "react";
import { useTranslation } from "next-i18next"
import { NodeFinRow } from "components/node--fin--row"
import { NodeFinUserRow } from "components/node--groupfederage-listusers"


import { absoluteURL, formatDate } from "lib/utils"

interface NodeCardEstimRow {
  node: DrupalNode,


}
const fetcher = (url) => fetch(url).then((r) => r.json());


export function NodeCardEstimRow({ node, ...props }: NodeCardEstimRowProps) {
  const { t } = useTranslation()

  const { data: total, error: totalError } = useSWR(() => 'https://fed.septembre.io/groupfederageestimation/' + node.id, fetcher)



  if (totalError) return <div>Failed to load 23</div>
  if (!total) return <div>Loading financement ...</div>


  return (
    <article {...props} className="box-content p-4 border-2 rounded-lg mb-8 grid grid-cols-12 gap-4">


      <div className="col-span-2 text-center">
        <span className="inline-block mx-auto">
          <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="38" height="38" rx="8" fill="#EEF2FF" />
            <path fillRule="evenodd" clipRule="evenodd" d="M13 13C11.8954 13 11 13.8954 11 15V19C11 20.1046 11.8954 21 13 21L13 15H23C23 13.8954 22.1046 13 21 13H13ZM15 19C15 17.8954 15.8954 17 17 17H25C26.1046 17 27 17.8954 27 19V23C27 24.1046 26.1046 25 25 25H17C15.8954 25 15 24.1046 15 23V19ZM21 23C22.1046 23 23 22.1046 23 21C23 19.8954 22.1046 19 21 19C19.8954 19 19 19.8954 19 21C19 22.1046 19.8954 23 21 23Z" fill="#012BDD" />
          </svg>

        </span><br />
        <span className="text-2xl font-bold">  {total.length ? (
          <span className="font-semibold text-2xl">                   {total.map((totaux) => (

            <p key={totaux.field_estimation_du_prix}>
              {totaux.field_estimation_du_prix} €
            </p>

          ))}
          </span>
        ) : (
          <p className="py-6">No Portefeuille found</p>
        )}  </span><br />
        <span className="text-sm text-gray-400 ">Total du capital</span>
      </div>
      {node.id && (
        <div className="col-span-10 text-right">
          <Link href={`/membre/new?gid=${encodeURIComponent(node.id)}`}>
            <a >
              <div className="inline-block px-3 py-1 fedblue text-white transition-colors rounded-xl text-sm text-center font-semibold lg:py-2 bg-secondary hover:bg-white hover:text-black border-secondary">
                Edition du contrat
              </div>
            </a>
          </Link>
        </div>
      )}




    </article>
  )

}
