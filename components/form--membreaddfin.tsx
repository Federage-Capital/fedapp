import { GetStaticPropsContext, GetStaticPropsResult } from "next"
import { drupal } from "lib/drupal"
import { DrupalUser } from "next-drupal"
import { getGlobalElements } from "lib/get-global-elements"
import { absoluteURL } from "lib/utils"
import Image, { ImageProps } from "next/image"
import { useState, useEffect } from 'react';
import * as React from "react"
import classNames from "classnames"
import { useTranslation } from "next-i18next"
import { useRouter } from "next/router"
import useSWR from 'swr'
import Link from "next/link";


interface FormAddFinMembreProps extends React.HTMLProps<HTMLFormElement> {

  users: DrupalUser,
    nodes: DrupalNode,
    group: DrupalGroup,
}



const fetcher = (url) => fetch(url).then((res) => res.json());

export function FormAddFinMembre({ nodes, group, articles, users, className, ...props }: FormAddFinMembreProps) {
  const [formStatus, setFormStatus] = React.useState<FormStatus>(null)
      const { t } = useTranslation()
  const router = useRouter()
  const query = router.query;



  const { data: userstoinvit, error4 } = useSWR('https://fed.septembre.io/feduserlist/', fetcher)
  const { data: alreadyinvit, error } = useSWR('https://fed.septembre.io/invitfintest234/', fetcher)


  //const newNumbers = usersingroup && usersingroup .map( number => number.uid);                      // newNumbers will be equal to ['4', '6', '8', '10']
  //const { data: usersnotin, error3 } = useSWR('https://fed.septembre.io/user_not_in_2'+ `/`+ newNumbers, fetcher)

 if ( error, error4) return <div>Failed to load</div>
 if (!alreadyinvit, !userstoinvit) return <div>Loading...</div>






  const onSubmit = async (event) => {
    event.preventDefault()
    const data = new FormData(event.target)

    setFormStatus({ status: "fetching" })

    const response = await fetch("/api/membre", {
      method: "POST",
      body: data,
    })


    if (!response.ok) {
      const errors = await response.json()
      return setFormStatus({
        status: "error",
        message: errors.message,
      })

    }

    router.push("/account")


  }

  return (



<>
  Titre du financement :   {articles.label}<br/>

co contractants :<br/>




   {articles.entity_id.field_co_author.map(user => (
                  <div key={user.name}>
                      <p>{user.name}</p>
                      <p>{user.id}</p>
                  </div>
              ))}

---

    <form
      className={classNames("grid gap-4", className)}
      onSubmit={onSubmit}
      {...props}
    >
      {(formStatus?.status === "success" || formStatus?.status === "error") && (
        <div
          className={classNames("py-3 px-4 border", {
            "border-link bg-link/10 text-link": formStatus.status === "success",
            "border-error bg-error/10 text-error":
              formStatus.status === "error",
          })}
        >
          {Array.isArray(formStatus.message) ? (
            <ul className="list-disc list-inside list">
              {formStatus.message.map((message, index) => (
                <li key={index}>{message}</li>
              ))}
            </ul>
          ) : (
            formStatus.message
          )}
        </div>
      )}


<b>  Personnes invitables
</b>
<b>


{articles.entity_id.field_co_author.map(user => (
               <div key={user.name}>

                   <p>{user.id}</p>
               </div>
           ))}


{userstoinvit &&
							userstoinvit
								.filter((userin) => !userin.uuid.includes(articles.entity_id.field_co_author.id) )

								.map((filterUser, index) => (
									<div key={filterUser.id} className={`relative ${index != 0 ? '-ml-2' : ''}`}>


{filterUser.uuid} {filterUser.name}

									</div>
								))}


</b>




             <div className="grid gap-2">




                                       <div className="grid gap-2">
                                         <label htmlFor="gid" className="font-semibold hidden text-text">
                                           {t("gid_du_groupe")} <span className="text-sm text-red-500">*</span>
                                         </label>

                                         <textarea
                                           id="gid"
                                           name="gid"
                                           defaultValue={query.gid}
                                           maxLength={255}
                                           className="hidden"
                                         ></textarea>
                                       </div>
                                       <div>
                                         <input
                                           type="submit"
                                           className="px-6 py-3 text-xl text-white transition-colors border-2 rounded-sm cursor-pointer bg-link hover:bg-white hover:text-black border-link"
                                           disabled={formStatus?.status === "fetching"}
                                           value={
                                             formStatus?.status === "fetching"
                                               ? t("please-wait")
                                               : t("add-user")
                                           }
                                         />
                                       </div>



Déjà partagés
co contractants :<br/>
  {articles.entity_id.field_co_author.id}<br/>
      {articles.entity_id.field_co_author.name}








                  </div>





    </form>
    </>
  )
}
