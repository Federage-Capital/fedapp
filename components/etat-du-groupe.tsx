import Link from "next/link";
import { NodeGroupRow } from "components/node--group--row"
import { absoluteURL,formatDate } from "lib/utils"
import Image, { ImageProps } from "next/image"

import { useTranslation } from "next-i18next"
import { useRouter } from "next/router"

export function EtatDuGroupe({ node
 }: EtatDuGroupeProps) {
  const { t } = useTranslation()
  const router = useRouter()

   async function handlePublish() {
     if (!window?.confirm(t("are-you-use-you-want-to-make-this-groupe-public"))) {
       return
     }

     const response = await fetch(`/api/moderate_state/public/groupfin/${node.id}`, {
       method: "PUT",

         })

         if (response?.ok) {
        router.push(`/prepapport/new?gid=${encodeURIComponent(node.id)}`)
         }
   }

   async function handleUnpublish() {
     if (!window?.confirm(t("are-you-use-you-want-to-make-this-groupe-private"))) {
       return
     }



     const response = await fetch(`/api/moderate_state/prive/groupfin/${node.id}`, {
       method: "PUT",

         })

     if (response?.ok) {
    router.push(`/membre/new?gid=${encodeURIComponent(node.id)}`)
     }
   }
	return (

    <div className="w-full mb-8">












             {node.moderation_state == 'draft' &&
               <div>
                   <a onClick={() => handlePublish()}>
                   <div className="self-stretch relative h-[86px] mb-8 text-mediumblue-100">
                     <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg bg-white box-border border-[2px] border-solid border-mediumblue-100" />
                     <div className="absolute h-[23.26%] w-[4.62%] top-[19.77%] right-[5.2%] bottom-[56.98%] left-[90.17%] rounded-lg flex flex-row items-center justify-center">
                       <img
                         className="relative rounded-lg w-4 h-4 overflow-hidden shrink-0"
                         alt=""
                         src="/form-fieldsradio-input.svg"
                       />
                     </div>
                     <div className="absolute h-[65.12%] w-[81.5%] top-[17.44%] right-[13.58%] bottom-[17.44%] left-[4.91%]">
                       <div className="absolute top-[0%] left-[0%] leading-[20px] font-semibold">
                         Tout le monde peut participer
                       </div>
                       <div className="absolute w-full top-[42.86%] left-[0%] text-xs leading-[16px] font-medium text-gray-500 flex items-center">
                         Le projet est ouvert. Quiconque fait une proposition pourra
                         participer au projet.
                       </div>
                     </div>
                   </div>
                   </a>

                   <a onClick={() => handleUnpublish()}>
                   <div className="self-stretch relative h-[86px] text-gray-500">
                     <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg bg-white box-border border-[2px] border-solid border-gray-200" />
                     <div className="absolute h-[23.26%] w-[4.62%] top-[19.77%] right-[5.2%] bottom-[56.98%] left-[90.17%] rounded-lg flex flex-row items-center justify-center">
                       <div className="relative rounded-lg bg-white box-border w-4 h-4 overflow-hidden shrink-0 border-[2px] border-solid border-gray-500" />
                     </div>
                     <div className="absolute h-[65.12%] w-[81.5%] top-[17.44%] right-[13.58%] bottom-[17.44%] left-[4.91%]">
                       <div className="absolute top-[0%] left-[0%] leading-[20px] font-semibold">
                         Seulement les invités participent
                       </div>
                       <div className="absolute w-full top-[42.86%] left-[0%] text-xs leading-[16px] font-medium flex items-center">
                         Le projet est fermé. Seuls les partenaires invités et
                         sélectionnés participent au projet.
                       </div>
                     </div>
                   </div>

                   </a>
               </div>
       }


                    {node.moderation_state == 'public' &&
                      <div>
                          <a onClick={() => handleUnpublish()}>
                          Privé
                          </a>
                      </div>
              }


                                  {node.moderation_state == 'prive' &&
                                    <div>
                                        <a onClick={() => handlePublish()}>
                                        Public
                                        </a>
                                    </div>
                            }





       </div>

	);
}
