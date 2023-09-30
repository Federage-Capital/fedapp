import * as React from "react"
import classNames from "classnames"
import { useTranslation } from "next-i18next"
import { useRouter } from "next/router"
import { Folder } from "./foldersvg"
import { useState, useEffect } from "react";
import useSWR from 'swr'
import { DatePicker } from "components/datepickercomp"

interface FormGroupfineditProps extends React.HTMLProps<HTMLFormElement> {}
const fetcher = (url) => fetch(url).then((r) => r.json());



export function FormGroupfinedit({ className, ...props }: FormGroupfineditProps) {
  const [formStatus, setFormStatus] = React.useState<FormStatus>(null)
  const { t } = useTranslation()
  const router = useRouter()
  const query = router.query;


  const { data: financements2dugroupe, error: financementError } = useSWR(() =>`https://fed.septembre.io/jsonapi/group/federage/`+ query.gid, fetcher)

  if (financementError) return <div>Failed to load 23</div>
  if (!financements2dugroupe) return <div>Loading financement ...</div>


  const onSubmit = async (event) => {
    event.preventDefault()
    const data = new FormData(event.target)

    setFormStatus({ status: "fetching" })

    const response = await fetch(`/api/groupfederage/${query.gid}`, {
      method: "PUT",
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
    <div className="inline-block text-center text-sm text-slate-500"> En tant qu’initiateur, vous fixez les objectifs de l’opération.</div>

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
      <div className="grid gap-2">
        <label htmlFor="title" className="font-medium text-sm">
          {t("Objet du financement")} <span className="text-sm text-red-500">*</span>
        </label>
        <input
          id="label"
          name="label"
          maxLength={255}
          defaultValue={financements2dugroupe.data.attributes.label}

          required
          className="px-2 py-3 rounded-md border-2 border-gray focus:outline-dotted focus:outline-offset-2 focus:ring-0 focus:outline-link focus:border-gray"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="descritption" className="font-medium text-sm">
          {t("Description du financement")} <span className="text-sm text-red-500">*</span>
        </label>
        <textarea
          id="field_description"
          name="field_description"
          placeholder={financements2dugroupe.data.attributes.field_description.value}
          defaultValue={financements2dugroupe.data.attributes.field_description.value}

          className="h-48 px-2 py-3 rounded-md border-2 border-gray focus:ring-0 focus:outline-dotted focus:outline-offset-2 focus:border-gray focus:outline-link"
        ></textarea>
      </div>


      <div className="grid gap-2">


      </div>
      <div className="grid gap-2">
            <label className="blofont-semibold text-text" htmlFor="grid-state">
  {t("categorie")} <span className="text-sm text-red-500">*</span>
   </label>
            <div className="relative">
              <select
              id="field_categorie"
              name="field_categorie"
              className="px-2 py-3 rounded-md border-2 border-gray focus:ring-0 focus:outline-dotted focus:outline-offset-2 focus:border-gray focus:outline-link"
            >
  <option value="29876849-c910-4ee3-8453-51dbe9d55bf2">cat 1</option>
    <option value="e49e869f-22d7-4edd-9017-f134106ff86d">cat 2</option>
      <option value="e963aabd-a8e3-4ecd-a573-796915b4a336">cat 3</option>
              </select>

            </div>
          </div>


          <div className="grid gap-2">
          <DatePicker />

          </div>





      <div>




        <input
          type="submit"
          className="px-3 fedblue py-2 text-md text-white w-full transition-colors rounded-xl cursor-pointer bg-link hover:bg-white hover:text-whote border-link"
          disabled={formStatus?.status === "fetching"}
          value={
            formStatus?.status === "fetching" ? t("please-wait") : t("Création d'un nouveau groupe de financement")
          }
        />
      </div>
    </form>
  )
}
