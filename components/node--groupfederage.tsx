import Image from "next/image"
import { DrupalNode } from "next-drupal"
import Link from "next/link";
import useSWR from 'swr'
import { useRouter } from "next/router"
import { getSession, useSession, signOut } from "next-auth/react";
import * as React from "react";
import { useTranslation } from "next-i18next"
import { PageHeader } from "components/page-header"

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
    <>
      <div className="bg-white pt-5 mt-auto">
        <div className="flex items-center justify-between pb-5">
          <div className="flex items-center">
            <button className="bg-grey-500 p-2 rounded-full mr-3 ml-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M5.70711 0.292893C6.09763 0.683416 6.09763 1.31658 5.70711 1.7071L2.41421 4.99999L5.70711 8.29288C6.09763 8.6834 6.09763 9.31657 5.70711 9.70709C5.31658 10.0976 4.68342 10.0976 4.29289 9.70709L0.292893 5.7071C-0.0976309 5.31657 -0.0976309 4.68341 0.292893 4.29289L4.29289 0.292893C4.68342 -0.0976309 5.31658 -0.0976309 5.70711 0.292893Z" fill="#52606D" />
              </svg>
            </button>
            Nouvel Apport
          </div>
          <p className="sm:text-sm text-sm text-slate-600 lg:text-sm">
            Étape 1 sur 2
          </p>
        </div>
        <div className="px-4">
          <h1 className="font-semibold">
            Proposer un Apport
          </h1>
          <p className="leading-normal pb-5 text-slate-600 text-base sm:text-base lg:text-lg">
            Veuillez fournir des informations pour enregistrer votre participation au projet.
          </p>
        </div>
      </div >
      <div className="pt-5">
        <p className="text-gray-700	font-semibold pb-2">
          Titre de l'apport
        </p>
        <input
          id="username"
          name="username"
          maxLength={255}
          placeholder="Titre de l'apport"
          required
          className="relative block w-full px-3 py-2 mb-2 bg-slate-200 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
        />
        <p className="pt-3 text-gray-700	font-semibold pb-2">
          Descriptif de l'apport
        </p>
        <textarea
          id="username"
          name="username"
          maxLength={255}
          placeholder="Descriptif de l'apport"
          required
          className="relative block w-full px-3 py-2 mb-2 bg-white text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
          rows={3}
        />
        <p className="pt-3 text-gray-700 font-semibold">
          Montant de l'apport
        </p>
        <div className="relative mt-2 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm">€</span>
          </div>
          <input
            type="text"
            name="price"
            id="price"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="0.00"
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <span className="text-gray-500 sm:text-sm mr-3">EUR</span>
          </div>
        </div>
        <p className="pt-3 text-gray-700 font-semibold pb-2">
          Type d'apport
        </p>
        <select
          id="categorie_d_entreprise"
          name="categorie_d_entreprise"
          placeholder="Industrie"
          className="relative block w-full px-3 py-3 mb-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md leading-tight focus:outline-none focus:ring-black focus:border-black sm:text-sm bg-white"
        >
          <option value=" disabled selected hidden caret-slate-600">Industrie</option>
          {/* <option value="9f599b2e-2e4c-4f68-b215-4f3dff4ce84f">Entreprise</option>
          <option value="dce93ed5-9f2c-4012-bc59-740601bd3165">ONG</option>
          <option value="08b9bdbe-9e4b-465f-820c-c5e70771019c">Association</option>
          <option value="3e070dcb-1637-442a-beaa-50a5f1001159">Commun</option>
          <option value="682283e2-29dc-422a-bd92-c5a1db95861b">Institution</option> */}
        </select>
        <p className="pt-3 text-gray-700 font-semibold pb-3">
          Devis ou pièce-jointe
        </p>
        <input
          type="text"
          name="price"
          id="price"
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="En cours"
        />
        <p className="pt-3 text-gray-700 font-semibold pb-3">
          Durée du projet
        </p>
        <div className="relative mt-2 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 5.83333C2.5 4.91286 3.24619 4.16667 4.16667 4.16667H15.8333C16.7538 4.16667 17.5 4.91286 17.5 5.83333V15.8333C17.5 16.7538 16.7538 17.5 15.8333 17.5H4.16667C3.24619 17.5 2.5 16.7538 2.5 15.8333V5.83333Z" fill="white" />
                <path d="M6.66667 5.83333V2.5M13.3333 5.83333V2.5M5.83333 9.16667H14.1667M4.16667 17.5H15.8333C16.7538 17.5 17.5 16.7538 17.5 15.8333V5.83333C17.5 4.91286 16.7538 4.16667 15.8333 4.16667H4.16667C3.24619 4.16667 2.5 4.91286 2.5 5.83333V15.8333C2.5 16.7538 3.24619 17.5 4.16667 17.5Z" stroke="#012BDD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
          </div>
          <input
            type="text"
            name="price"
            id="price"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Saisir une date"
          />
        </div>
      </div>
    </>
    // <article {...props}>
    //   <div>
    //     <div className="box-content p-4 border-2 rounded-lg mb-8">
    //       <div className="mb-4 grid grid-cols-12 gap-4">
    //         <div className="col-span-11"> <h1 className="text-3xl font-black leading-tight">{node.label}</h1><br />
    //           <div className="grid grid-cols-12 gap-0">
    //             <div>
    //               <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    //                 <path fillRule="evenodd" clip-rule="evenodd" d="M6 2C5.44772 2 5 2.44772 5 3V4H4C2.89543 4 2 4.89543 2 6V16C2 17.1046 2.89543 18 4 18H16C17.1046 18 18 17.1046 18 16V6C18 4.89543 17.1046 4 16 4H15V3C15 2.44772 14.5523 2 14 2C13.4477 2 13 2.44772 13 3V4H7V3C7 2.44772 6.55228 2 6 2ZM6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9H14C14.5523 9 15 8.55228 15 8C15 7.44772 14.5523 7 14 7H6Z" fill="#9CA3AF" />
    //               </svg>
    //             </div>
    //             <div className="col-span-11">
    //               <span className="text-sm">Projet créé le  {formatDate(node.created)}</span>
    //             </div>
    //           </div></div>
    //         <div className="col-span-1 text-right"><NodeGroupfinRow key={node.id} node={node} /></div>
    //       </div>
    //       <div className="mb-4">
    //         {node.field_description?.value && (
    //           <div
    //             dangerouslySetInnerHTML={{ __html: node.field_description?.value }}
    //             className="text-sm text-gray-400 "
    //           />
    //         )}
    //         <div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="box-content p-4 border-2 rounded-lg mb-8 grid grid-cols-12 gap-4">
    //       <div className="col-span-2 text-center">
    //         <span className="inline-block mx-auto">
    //           <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
    //             <rect width="38" height="38" rx="8" fill="#EEF2FF" />
    //             <path d="M16.2998 12.7002C15.8027 12.7002 15.3998 13.1031 15.3998 13.6002C15.3998 14.0973 15.8027 14.5002 16.2998 14.5002H21.6998C22.1969 14.5002 22.5998 14.0973 22.5998 13.6002C22.5998 13.1031 22.1969 12.7002 21.6998 12.7002H16.2998Z" fill="#012BDD" />
    //             <path d="M13.5998 16.3002C13.5998 15.8031 14.0027 15.4002 14.4998 15.4002H23.4998C23.9969 15.4002 24.3998 15.8031 24.3998 16.3002C24.3998 16.7973 23.9969 17.2002 23.4998 17.2002H14.4998C14.0027 17.2002 13.5998 16.7973 13.5998 16.3002Z" fill="#012BDD" />
    //             <path d="M11.7998 19.9002C11.7998 18.9061 12.6057 18.1002 13.5998 18.1002H24.3998C25.3939 18.1002 26.1998 18.9061 26.1998 19.9002V23.5002C26.1998 24.4943 25.3939 25.3002 24.3998 25.3002H13.5998C12.6057 25.3002 11.7998 24.4943 11.7998 23.5002V19.9002Z" fill="#012BDD" />
    //           </svg>
    //         </span><br />
    //         <span className="text-2xl font-bold">{financementsdugroupe.length} </span><br />
    //         <span className="text-sm text-gray-400 ">Apports enregistrés</span>
    //       </div>
    //       {node.id && (
    //         <div className="col-span-10 text-right">
    //           <Link href={`/financement/new?gid=${encodeURIComponent(node.id)}`}>
    //             <a >
    //               <div className="inline-block px-3 py-1 fedblue text-white transition-colors rounded-xl text-sm text-center font-semibold lg:py-2 bg-secondary hover:bg-white hover:text-black border-secondary">
    //                 Nouvel apport
    //               </div>
    //             </a>
    //           </Link>
    //         </div>
    //       )}
    //     </div>
    //     {financementsdugroupe?.length ? (
    //       <p>
    //         {financementsdugroupe.map((financementdugroupe, index) => (
    //           <NodeFin2Row key={financementdugroupe.uuid} node={financementdugroupe} />
    //         ))}
    //       </p>
    //     ) : (
    //       <p className="text-2xl cadre text-center p-20 mb-10">
    //         <p className="inline-block">  <svg width="38" height="30" viewBox="0 0 38 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    //           <path d="M13 17H25H13ZM19 11V23V11ZM1 25V5C1 3.93913 1.42143 2.92172 2.17157 2.17157C2.92172 1.42143 3.93913 1 5 1H17L21 5H33C34.0609 5 35.0783 5.42143 35.8284 6.17157C36.5786 6.92172 37 7.93913 37 9V25C37 26.0609 36.5786 27.0783 35.8284 27.8284C35.0783 28.5786 34.0609 29 33 29H5C3.93913 29 2.92172 28.5786 2.17157 27.8284C1.42143 27.0783 1 26.0609 1 25Z" stroke="#9CA3AF" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
    //         </svg></p>
    //         <p>   Ajouter un financement</p>
    //       </p>
    //     )}
    //     <NodeCardEstimRow key={node.id} node={node} />
    //   </div>
    //   <NodeCardUserRow key={node.id} node={node} />
    // </article>
  )
}
