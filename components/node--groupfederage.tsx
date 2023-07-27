import Image from "next/image"
import { DrupalNode } from "next-drupal"
import Link from "next/link";
import useSWR from 'swr'
import { useRouter } from "next/router"
import { getSession, useSession, signOut } from "next-auth/react";
import * as React from "react";
import { useTranslation } from "next-i18next"
import { NodeCardUserRow } from "components/groupfederage-card-users"
import { NodeCardEstimRow } from "components/groupfederage-card-valeur"

import { NodeFin2Row } from "components/node--groupfederage-listfin"
import { NodeGroupfinRow } from "components/node--groupfin--row"

import { absoluteURL, formatDate } from "lib/utils"

interface NodeGroupFinancement {
  node: DrupalNode,
  groupe_types: DrupalNode,

}

const fetcher = (url) => fetch(url).then((r) => r.json());

export function NodeGroupFinancement({ node, ...props }: NodeGroupFinancementProps) {
  const [openTab, setOpenTab] = React.useState(1);
  const { t } = useTranslation()
  const router = useRouter()



  const { data: financementsdugroupe, error: financementError } = useSWR(() => 'https://fed.septembre.io/groupfederagewithoutcountersorprice/' + node.id, fetcher)


  if (financementError) return <div>Failed to load 23</div>
  if (!financementsdugroupe) return <div>Loading financement ...</div>





  const session = getSession()


  return (
    <article {...props}>










      <div>




        <div className="box-content p-4 border-2 rounded-lg mb-8">
          <div className="mb-4 grid grid-cols-12 gap-4">

            <div className="col-span-11"> <h1 className="text-3xl font-black leading-tight">{node.label}</h1><br />

              <div className="grid grid-cols-12 gap-0">

                <div>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clip-rule="evenodd" d="M6 2C5.44772 2 5 2.44772 5 3V4H4C2.89543 4 2 4.89543 2 6V16C2 17.1046 2.89543 18 4 18H16C17.1046 18 18 17.1046 18 16V6C18 4.89543 17.1046 4 16 4H15V3C15 2.44772 14.5523 2 14 2C13.4477 2 13 2.44772 13 3V4H7V3C7 2.44772 6.55228 2 6 2ZM6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9H14C14.5523 9 15 8.55228 15 8C15 7.44772 14.5523 7 14 7H6Z" fill="#9CA3AF" />
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
        <div className="box-content p-4 border-2 rounded-lg mb-8 grid grid-cols-12 gap-4">
          <div className="col-span-2 text-center">
            <span className="inline-block mx-auto">
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="38" height="38" rx="8" fill="#EEF2FF" />
                <path d="M16.2998 12.7002C15.8027 12.7002 15.3998 13.1031 15.3998 13.6002C15.3998 14.0973 15.8027 14.5002 16.2998 14.5002H21.6998C22.1969 14.5002 22.5998 14.0973 22.5998 13.6002C22.5998 13.1031 22.1969 12.7002 21.6998 12.7002H16.2998Z" fill="#012BDD" />
                <path d="M13.5998 16.3002C13.5998 15.8031 14.0027 15.4002 14.4998 15.4002H23.4998C23.9969 15.4002 24.3998 15.8031 24.3998 16.3002C24.3998 16.7973 23.9969 17.2002 23.4998 17.2002H14.4998C14.0027 17.2002 13.5998 16.7973 13.5998 16.3002Z" fill="#012BDD" />
                <path d="M11.7998 19.9002C11.7998 18.9061 12.6057 18.1002 13.5998 18.1002H24.3998C25.3939 18.1002 26.1998 18.9061 26.1998 19.9002V23.5002C26.1998 24.4943 25.3939 25.3002 24.3998 25.3002H13.5998C12.6057 25.3002 11.7998 24.4943 11.7998 23.5002V19.9002Z" fill="#012BDD" />
              </svg>
            </span><br />
            <span className="text-2xl font-bold">{financementsdugroupe.length} </span><br />
            <span className="text-sm text-gray-400 ">Apports enregistrés</span>
          </div>
          {node.id && (
            <div className="col-span-10 text-right">
              <Link href={`/financement/new?gid=${encodeURIComponent(node.id)}`}>
                <a >
                  <div className="inline-block px-3 py-1 fedblue text-white transition-colors rounded-xl text-sm text-center font-semibold lg:py-2 bg-secondary hover:bg-white hover:text-black border-secondary">
                    Nouvel apport
                  </div>
                </a>
              </Link>
            </div>
          )}

        </div>



        {financementsdugroupe?.length ? (


          <p>
            {financementsdugroupe.map((financementdugroupe, index) => (


              <NodeFin2Row key={financementdugroupe.uuid} node={financementdugroupe} />

            ))}



          </p>
        ) : (
          <p className="text-2xl cadre text-center p-20 mb-10">
            <p className="inline-block">  <svg width="38" height="30" viewBox="0 0 38 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 17H25H13ZM19 11V23V11ZM1 25V5C1 3.93913 1.42143 2.92172 2.17157 2.17157C2.92172 1.42143 3.93913 1 5 1H17L21 5H33C34.0609 5 35.0783 5.42143 35.8284 6.17157C36.5786 6.92172 37 7.93913 37 9V25C37 26.0609 36.5786 27.0783 35.8284 27.8284C35.0783 28.5786 34.0609 29 33 29H5C3.93913 29 2.92172 28.5786 2.17157 27.8284C1.42143 27.0783 1 26.0609 1 25Z" stroke="#9CA3AF" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg></p>

            <p>   Ajouter un financement</p>

          </p>
        )}


        <NodeCardEstimRow key={node.id} node={node} />






      </div>
      <NodeCardUserRow key={node.id} node={node} />




    </article>
  )

}
