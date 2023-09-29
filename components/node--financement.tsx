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
  const { data: session, status } = useSession()

  const [showMenu, setShowMenu] = React.useState<boolean>(false)

	const changeState = () => {
		setShowMenu(!showMenu);
	}


  const { t } = useTranslation()

  const { data: revisionhistory, error } = useSWR('https://fed.septembre.io/revision_history/'+ node.id,  fetcher)








  return (
    <article {...props}>


      <div>




      <div
        dangerouslySetInnerHTML={{ __html: node.title }}
        className="text-2xl font-bold"
      />

      Publié par :   <span
        dangerouslySetInnerHTML={{ __html: node.uid.display_name }}
        className="pl-1 text-lg font-semibold fedblueblue"
      />

<div className="card shadow-md rounded-md p-5 text-center mb-12">
      {showMenu ? (
      <>	Afficher plus		<span className="inline-block ml-2" onClick={changeState}>
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M13.5899 8.78996C13.0432 9.3367 12.1568 9.3367 11.6101 8.78996L7 4.1799L2.38995 8.78996C1.84322 9.3367 0.956784 9.3367 0.410051 8.78996C-0.136684 8.24323 -0.136684 7.35679 0.410051 6.81006L6.01005 1.21005C6.55678 0.663316 7.44322 0.663316 7.98995 1.21005L13.5899 6.81006C14.1367 7.35679 14.1367 8.24323 13.5899 8.78996Z" fill="#012BDD" />
          </svg>
        </span>
        </>
      ) : (
           <>	Afficher plus	<span className="inline-block ml-2" onClick={changeState}>
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0.410051 1.2101C0.956784 0.663365 1.84322 0.663365 2.38995 1.2101L7 5.82016L11.6101 1.2101C12.1568 0.663365 13.0432 0.663365 13.5899 1.2101C14.1367 1.75683 14.1367 2.64327 13.5899 3.19L7.98995 8.79001C7.44322 9.33675 6.55678 9.33675 6.01005 8.79001L0.410051 3.19C-0.136683 2.64327 -0.136683 1.75683 0.410051 1.2101Z" fill="#012BDD" />
          </svg>
        </span>
        </>
      )}


          {showMenu && (
            <>
            {node.body?.processed && (
              <div
                dangerouslySetInnerHTML={{ __html: node.body?.value }}
                className="text-2xl text-left font-bold"
              />
            )}
              </>
            )
            }
</div>



<div className="card shadow-md rounded-md p-5  mb-12">

<div className="grid grid-cols-12 gap-4 pb-10">

  <div className="col-span-10 text-lg font-semibold text-left">

Statut de l’apport

</div>


  <div className="col-span-2 text-right">


  <button  className=" bg-blue-300 text-xs hover:bg-blue-400 text-blue-700  py-2 px-4  hover:border-blue-500 rounded">
      {node.field_statut?.name}

  </button>
</div>




</div>


<p className="text-base ">Prix proposé</p>
<p className="text-base font-medium text-slate-500 pb-5">{node.field_estimation_du_prix}€</p>

<p className="text-base ">Délai de livraison</p>
<p className="text-base font-medium text-slate-500 pb-5">{formatDate(node.field_date_de_livraison)}</p>

{status === "authenticated" ? (
         <>
         <div className="self-stretch rounded-lg bg-indigo-600 text-white shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] h-[47px] overflow-hidden shrink-0 flex flex-row py-2.5 px-[18px] box-border items-center justify-center text-dimgray">
          <div className="relative leading-[20px] font-semibold">
         <a
           href={`/financement/edit?gid=${encodeURIComponent(node.id)}`}

         >

           Modifier
         </a>
         </div>
         </div>
         </>
       ) : (



         <div className="self-stretch rounded-lg bg-zinc-200  shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] h-[47px] overflow-hidden shrink-0 flex flex-row py-2.5 px-[18px] box-border items-center justify-center text-dimgray">
          <div className="relative leading-[20px] font-semibold">
          <a
            href={`/financement/edit?gid=${encodeURIComponent(node.id)}`}

          >

        Modifier
          </a>
          </div>
        </div>
       )}



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
