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


interface FormMembreProps extends React.HTMLProps<HTMLFormElement> {

  users: DrupalUser,
    nodes: DrupalNode,
    group: DrupalGroup,
}



const fetcher = (url) => fetch(url).then((res) => res.json());

export function FormMembre({ nodes, group, listedef, className, ...props }: FormMembreProps) {
  const router = useRouter()
  const query = router.query;
  const { t } = useTranslation()





     const { data: users, error2 } = useSWR('https://fed.septembre.io/nest_user_in/'+ query.gid, fetcher)


                           const newNumbers = users && users.map( number => number.uid);
                           // newNumbers will be equal to ['4', '6', '8', '10']


     const { data: usersnotin, error3 } = useSWR('https://fed.septembre.io/user_not_in_2'+ `/`+ newNumbers, fetcher)

     const { data: usersingroup, error4 } = useSWR('https://fed.septembre.io/users_in_group/'+ query.gid, fetcher)


  const [formStatus, setFormStatus] = React.useState<FormStatus>(null)


       if (error2, error3, error4) return <div>Failed to load</div>
       if (!users, !usersnotin, !usersingroup) return <div>Loading...</div>


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


    }

    router.push("/account")


  }

  return (
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


      PARTENAIRES DE L’OPÉRATION


             <div className="grid gap-2"><fieldset className="border-t border-b border-gray-200">




                                 </fieldset>

             <fieldset className="border-t border-b border-gray-200">


             {usersnotin?.length ? (

  <p>

             {usersnotin.map((usernotin) => (
            <div key={usernotin.id} className="divide-y divide-gray-200">
              <div className="relative flex items-start py-4">
                <div className="min-w-0 flex-1 text-sm">

                {usernotin.user_picture && (


                    <Image
                      src={absoluteURL(usernotin.user_picture)}
                      alt={usernotin.name}
                      title={usernotin.name}
                      width={50}
                      height={50}
                      className='h-8 w-8 rounded-full'
                    />

                )}
                  <label htmlFor="comments" className="font-medium text-gray-700">
            {usernotin.name}

                  </label>



                </div>






                <div className="ml-3 flex h-5 items-center">
                  <input
                  id="select_users"
                  name="select_users"
                    aria-describedby="comments-description"
                    value={usernotin.uuid}
                    type="radio"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                </div>
              </div>


            </div>
              ))}

</p>
) : (
  <p className="text-2xl cadre text-center p-20 mb-10">
    <p className="inline-block">  <svg width="38" height="30" viewBox="0 0 38 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 17H25H13ZM19 11V23V11ZM1 25V5C1 3.93913 1.42143 2.92172 2.17157 2.17157C2.92172 1.42143 3.93913 1 5 1H17L21 5H33C34.0609 5 35.0783 5.42143 35.8284 6.17157C36.5786 6.92172 37 7.93913 37 9V25C37 26.0609 36.5786 27.0783 35.8284 27.8284C35.0783 28.5786 34.0609 29 33 29H5C3.93913 29 2.92172 28.5786 2.17157 27.8284C1.42143 27.0783 1 26.0609 1 25Z" stroke="#9CA3AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></p>

        <p>   Ajouter un financement</p>

  </p>
)}


                                 </fieldset>

                                       <div className="grid gap-2">
                                         <label htmlFor="gid" className="font-semibold hidden text-text">
                                           {t("gid_du_groupe")} <span className="text-sm text-red-500">*</span>
                                         </label>

                                         <textarea
                                           id="gid"
                                           name="gid"
                                           value={query.gid}
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


<fieldset className="border-t border-b border-gray-200">
PARTICIPANTS AU GROUPE
{usersingroup.map((userin) => (
                                      <div key={userin.uid} className="divide-y divide-gray-200">
                                        <div className="relative flex items-start py-4">
                                          <div className="min-w-0 flex-1 text-sm">
                                          <Link href={`user/${userin.uid}`}>
                                          <a className="grid grid-cols-4 gap-4">

                                            <label htmlFor="comments" className="font-medium text-gray-700">
                                            {userin.user_picture && (


                                                <Image
                                                  src={absoluteURL(userin.user_picture)}
                                                  alt={userin.name}
                                                  title={userin.name}
                                                  width={50}
                                                  height={50}
                                                  className='h-8 w-8 rounded-full'
                                                />

                                            )}
                                            {userin.name}
                                            </label>
                                            <p id="comments-description" className="text-gray-500">
                                              {userin.group_roles}



                                            </p>
</a>
</Link>

                                          </div>








                                        </div>


                                      </div>
    ))}

                    </fieldset>


                  </div>





    </form>
  )
}
