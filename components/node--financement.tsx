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
  const router = useRouter()
  const session = getSession()


  const { t } = useTranslation()

  const { data: revisionhistory, error } = useSWR('https://fed.septembre.io/revision_history/'+ node.id,  fetcher)








  return (
    <article {...props}>


      <div>



                                               <p
                                                 dangerouslySetInnerHTML={{ __html: node.title }}
                                                 className="text-3xl font-bold"
                                               />

  ===  {node.body?.value} ===
Publié par :
<span
  dangerouslySetInnerHTML={{ __html: node.uid.display_name }}
  className="pl-1 text-lg font-semibold fedblueblue"
/>


<div className="card shadow-md p-5">

<div className="grid grid-cols-12 gap-4 pb-10">
  <div className="col-span-10 text-xl font-bold">Détail de l&apos;apport</div>
  <div className="col-span-2 text-right">


  <button  className=" bg-blue-300 text-xs hover:bg-blue-400 text-blue-700  py-2 px-4  hover:border-blue-500 rounded">
      {node.field_statut?.name}

  </button>
</div>




</div>


<span className="text-base ">Prix négocié</span>
<span className="text-base font-medium text-slate-500 pb-5">{node.field_estimation_du_prix}€</span>

<span className="text-base ">Délai de livraison</span>
<span className="text-base font-medium text-slate-500 pb-5">{formatDate(node.field_date_de_livraison)}</span>

<a
  href={`/financement/edit?gid=${encodeURIComponent(node.id)}`}

>

  <button className="fedblue text-white w-full rounded p-1">Modifier</button>
</a>
</div>
<div className="card shadow-md p-5">

  {revisionhistory?.length ? (

  <span>

      {revisionhistory.map((rev) => (

      <div key={rev.vid} className="grid grid-cols-12 gap-4">



<div className="col-span-1 text-xs text-slate-400">icone </div>
<div className="col-span-10"><span className="font-semibold">{rev.revision_log} revison logs</span>

<br/><span className="text-xs text-slate-400">{rev.changed}</span></div>
<div className="col-span-1 text-xs text-slate-400"><br/>revision id : {rev.vid}  </div>


      </div>

                            ))}



  </span>
                                                ) : (
  <span>   Participer à la conversation</span>
                                                )}

</div>

<div className="card shadow-md p-5">

                                                {node.field_document_s_annexe_s_.map((doc) => (

                                                <div key={doc.id}>





                                            <span>
                                            <div className=" text-xl font-bold">Ressources</div>

Devis de l&apos;apport :<br/>

{absoluteURL(doc.field_media_document.uri.url)}

 </span>

                                                </div>

                                                                      ))}

                                                                      </div>
</div>


    </article>
  )
}
