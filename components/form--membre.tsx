import { GetStaticPropsContext, GetStaticPropsResult } from "next"
import { drupal } from "lib/drupal"
import { DrupalUser } from "next-drupal"
import { getGlobalElements } from "lib/get-global-elements"
import { absoluteURL } from "lib/utils"
import Image, { ImageProps } from "next/image"

import * as React from "react"
import classNames from "classnames"
import { useTranslation } from "next-i18next"
import { useRouter } from "next/router"
import useSWR from 'swr'


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



     const { data: users, error2 } = useSWR('https://fed.septembre.io/user_in_group_not_in'+ `/`+ query.gid, fetcher)
     const { data: usersnotin, error3 } = useSWR('https://fed.septembre.io/user_not_in_2'+ `/`+ '5,4,1', fetcher)


  const [formStatus, setFormStatus] = React.useState<FormStatus>(null)


       if (error2, error3) return <div>Failed to load</div>
       if (!users, !usersnotin) return <div>Loading...</div>


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
        message: errors?.map((error) => error.detail),
      })
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


             <div className="grid gap-2">

             <fieldset className="border-t border-b border-gray-200">


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
                    value={usernotin.id}
                    type="radio"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                </div>
              </div>


            </div>
              ))}


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
                                           className=""
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
----------------------------------------


<fieldset className="border-t border-b border-gray-200">


{users.map((user) => (
<div key={user.id} className="divide-y divide-gray-200">
 <div className="relative flex items-start py-4">
   <div className="min-w-0 flex-1 text-sm">

   {user.user_picture && (


       <Image
         src={absoluteURL(user.user_picture)}
         alt={user.name}
         title={user.name}
         width={50}
         height={50}
         className='h-8 w-8 rounded-full'
       />

   )}
     <label htmlFor="comments" className="font-medium text-gray-700">
{user.name}
     </label>

  -> delete this user


   </div>








 </div>


</div>
 ))}


                    </fieldset>


                  </div>





    </form>
  )
}
