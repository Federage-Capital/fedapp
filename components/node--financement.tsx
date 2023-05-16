import * as React from "react";
import Image from "next/image"
import useSWR from 'swr'
import { useRouter } from "next/router"
import { getSession, useSession, signOut } from "next-auth/react";
import { absoluteURL, formatDate } from "lib/utils"
import { useTranslation } from "next-i18next"
import { NodeFinancementRow } from "components/node--financement--row"

import classNames from "classnames"

interface NodeFinancementProps extends React.HTMLProps<HTMLFormElement> {}



const fetcher = (url) => fetch(url).then((res) => res.json());



export function NodeFinancement({ node, ...props }: NodeFinancementProps) {

  const { t } = useTranslation()

  const { data: revisionhistory, error } = useSWR('https://fed.septembre.io/revisionhistory/'+ node.id,  fetcher)
  if (error) return <div>Failed to load</div>
  if (!revisionhistory) return <div>Loading ...</div>



  const router = useRouter()
  const session = getSession()



  return (
    <article {...props}>


      <div>




                                               <p
                                                 dangerouslySetInnerHTML={{ __html: node.title }}
                                                 className="text-3xl font-bold"
                                               />


Publié par :
<span
  dangerouslySetInnerHTML={{ __html: node.uid.display_name }}
  className="pl-1 text-lg font-semibold fedblueblue"
/>



<div class="grid grid-cols-12 gap-4">
<div className="col-span-1 text-right"><NodeFinancementRow key={node.id} node={node} /></div>

  <div className="col-span-11 text-xl font-bold">Détail de l'apport</div>


  <div>{node.field_statut.name}</div>
</div>


<p className="text-base font-medium">Prix négocié</p>
<p className="text-base font-medium text-slate-500">{node.field_estimation_du_prix}€</p>

<p className="text-base font-medium">Délai de livraison</p>
<p className="text-base font-medium text-slate-500">{formatDate(node.field_date_de_livraison)}</p>


  <button class="fedblue text-white w-full p-5">Edit</button>

 
  {revisionhistory?.length ? (

  <p>

      {revisionhistory.map((rev) => (

      <div key={rev.id}>





  <p>

{rev.changed}
{rev.revision_log}
<br/>revision id{rev.vid}  </p>

      </div>

                            ))}



  </p>
                                                ) : (
  <p>   Participer à la conversation</p>
                                                )}


                                                {node.field_document_s_annexe_s_.map((doc) => (

                                                <div key={doc.id}>





                                            <p>
                                            <div className="col-span-11 text-xl font-bold">Ressources</div>

                                            {doc.field_media_document.uri.url}
 </p>

                                                </div>

                                                                      ))}
</div>


    </article>
  )
}
