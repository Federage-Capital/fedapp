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

interface NodeCardUserRow {
  node: DrupalNode,


}
const fetcher = (url) => fetch(url).then((r) => r.json());


export function NodeCardUserRow({ node,   ...props }: NodeCardUserRowProps) {
const { t } = useTranslation()

const { data: users, error: userError } = useSWR('https://fed.septembre.io/users_in_group/'+ node.id, fetcher)


         if (userError) return <div>Failed to load user</div>
         if (!users) return <div>Loading ...</div>


  return (
    <article {...props} className="box-content p-4 border-2 rounded-lg mb-8 grid grid-cols-12 gap-4">


    <div className="col-span-2 text-center">
    <span className="inline-block mx-auto">
    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="38" height="38" rx="8" fill="#EEF2FF"/>
    <path d="M16.2998 12.7002C15.8027 12.7002 15.3998 13.1031 15.3998 13.6002C15.3998 14.0973 15.8027 14.5002 16.2998 14.5002H21.6998C22.1969 14.5002 22.5998 14.0973 22.5998 13.6002C22.5998 13.1031 22.1969 12.7002 21.6998 12.7002H16.2998Z" fill="#012BDD"/>
    <path d="M13.5998 16.3002C13.5998 15.8031 14.0027 15.4002 14.4998 15.4002H23.4998C23.9969 15.4002 24.3998 15.8031 24.3998 16.3002C24.3998 16.7973 23.9969 17.2002 23.4998 17.2002H14.4998C14.0027 17.2002 13.5998 16.7973 13.5998 16.3002Z" fill="#012BDD"/>
    <path d="M11.7998 19.9002C11.7998 18.9061 12.6057 18.1002 13.5998 18.1002H24.3998C25.3939 18.1002 26.1998 18.9061 26.1998 19.9002V23.5002C26.1998 24.4943 25.3939 25.3002 24.3998 25.3002H13.5998C12.6057 25.3002 11.7998 24.4943 11.7998 23.5002V19.9002Z" fill="#012BDD"/>
    </svg>
    </span><br/>
    <span className="text-2xl font-bold">{users.length}  </span><br/>
    <span className="text-sm text-gray-400 ">Membres actifs</span>
    </div>
                      {node.id && (
                        <div className="col-span-10 text-right">
                      <Link href={`/membre/new?gid=${encodeURIComponent(node.id)}`}>
                      <a >
              <div className="inline-block px-3 py-1 fedblue text-white transition-colors rounded-xl text-sm text-center font-semibold lg:py-2 bg-secondary hover:bg-white hover:text-black border-secondary">
                          Ajouter un membre
                          </div>
                        </a>
                      </Link>
                      </div>
                      )}


                  
    </article>
  )

}
