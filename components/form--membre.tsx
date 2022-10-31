import * as React from "react"
import classNames from "classnames"
import { useTranslation } from "next-i18next"
import { useRouter } from "next/router"
import { useState } from "react";
import useSWR from 'swr'


interface FormMembreProps extends React.HTMLProps<HTMLFormElement> {}

interface FormStatus {
  status: "success" | "error" | "fetching"
  message?: string | string[]
  node: DrupalNode
}

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export function FormMembre({ className, node, groupe_types, data, ...props }: FormArticleProps) {

  const [formStatus, setFormStatus] = React.useState<FormStatus>(null)
  const { t } = useTranslation()
  const router = useRouter()

   const query = router.query;
   const { data: nodefinancement, error } = useSWR('https://fed.septembre.io/jsonapi/group/federage', fetcher)

     if (error) return <div>Failed to load</div>
     if (!nodefinancement) return <div>Loading...</div>



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
      <p>{node}</p>

      <div className="form-group">
               <label
               htmlFor="select2"
               className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
               >
               User select
               </label>
               <select
               id="field_categorie"
               name="field_categorie"
               className="rounded-md border-2 border-gray focus:ring-0 focus:outline-dotted focus:outline-offset-2 focus:border-gray focus:outline-link"
             >



              <option>1</option>
                 <option>cat 1</option>
                 <option>29876849-c910-4ee3-8453-51dbe9d55bf2</option>
               </select>



           </div>
      <div className="grid gap-2">
        <label htmlFor="title" className="font-semibold text-text">
          {t("nom du membre")} <span className="text-sm text-red-500">*</span>
        </label>
        <input
          id="nom_du_membre"
          name="nom_du_membre"
          maxLength={255}
          required
          className="px-2 py-3 border-2 border-gray focus:outline-dotted focus:outline-offset-2 focus:ring-0 focus:outline-link focus:border-gray"
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="field_choisir_une_categorie" className="font-semibold text-text">
          {t("Choisir une catégorie")} <span className="text-sm text-red-500">*</span>
        </label>
        <input
          id="field_choisir_une_categorie"
          name="field_choisir_une_categorie"
          maxLength={255}

          className="px-2 py-3 border-2 border-gray focus:outline-dotted focus:outline-offset-2 focus:ring-0 focus:outline-link focus:border-gray"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="gid" className="font-semibold text-text">
          {t("gid_du groupe")} <span className="text-sm text-red-500">*</span>
        </label>

        <textarea
          id="gid"
          name="gid"
          defaultInputValue={query.gid}
          className="h-48 px-2 py-3 border-2 border-gray focus:ring-0 focus:outline-dotted focus:outline-offset-2 focus:border-gray focus:outline-link"
        ></textarea>
      </div>
      <div className="grid gap-2">
        <label htmlFor="group_roles" className="font-semibold text-text">
          {t("group_roles")} <span className="text-sm text-red-500">*</span>
        </label>
        <input
          id="group_roles"
          name="group_roles"
          maxLength={255}

          className="px-2 py-3 border-2 border-gray focus:outline-dotted focus:outline-offset-2 focus:ring-0 focus:outline-link focus:border-gray"
        />
      </div>



      <div>
        <input
          type="submit"
          className="px-6 py-3 text-xl text-white transition-colors border-2 rounded-sm cursor-pointer bg-link hover:bg-white hover:text-black border-link"
          disabled={formStatus?.status === "fetching"}
          value={
            formStatus?.status === "fetching"
              ? t("please-wait")
              : t("create-article")
          }
        />
      </div>
    </form>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<FormMembreProps>> {

const users = await drupal.getResourceCollection("user--user")


return {
  props: {
    users,

  },
  revalidate: 60,
}
}
