import * as React from "react"
import classNames from "classnames"
import { useTranslation } from "next-i18next"
import { useRouter } from "next/router"
import { Folder } from "./foldersvg"
import { useState, useEffect } from "react";
import useSWR from 'swr'
import { absoluteURL, formatDate } from "lib/utils"
import { DatePicker } from "components/datepickercomp"


interface FormFinancementeditProps extends React.HTMLProps<HTMLFormElement> {}
const fetcher = (url) => fetch(url).then((r) => r.json());


interface FormStatus {
  status: "success" | "error" | "fetching"
  message?: string | string[]
}

export function FormFinancementedit({ className, node, fin, categorieprj, ...props }: FormFinancementeditProps) {
  const [formStatus, setFormStatus] = React.useState<FormStatus>(null)
  const { t } = useTranslation()
  const router = useRouter()
  const query = router.query;




  const { data: revision, error: revisionError } = useSWR(() =>`https://fed.septembre.io/revision_history/`+ query.gid, fetcher)

  if (revisionError) return <div>Failed to load revision</div>
  if (!revision) return <div>Loading financement ...</div>


  const onSubmit = async (event) => {
    event.preventDefault()
    const data = new FormData(event.target)

    setFormStatus({ status: "fetching" })

    const response = await fetch(`/api/financementsedit/${query.gid}`, {
      method: "PUT",
      body: data,
    })



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

{query.gid}

============ Print revision --------
          {revision
          .map((print_revision) => (
            <span key={print_revision.id} value={print_revision.id}>

                  {print_revision.title}
        {print_revision.title.revision_log}
            </span>
            ))}
!============ Print revision --------

        <div className="grid gap-2">

          <label htmlFor="title" className="font-semibold text-text">
            {t("title")} <span className="text-sm text-red-500">*</span>
          </label>



          <input
            id="title"
            name="title"
            maxLength={255}
            defaultValue={node.title}
            className="px-2 py-3 border-2 border-gray focus:outline-dotted focus:outline-offset-2 focus:ring-0 focus:outline-link focus:border-gray"
          />
        </div>



        <div className="grid gap-2">
          <label htmlFor="body" className="font-semibold text-text">
            {t("Objet de l’apport")} <span className="text-sm text-red-500">*</span>
          </label>
          <textarea
            id="body"
            name="body"
            defaultValue={node.body.value}
            className="h-48 px-2 py-3 rounded-md border border-gray focus:ring-0 focus:outline-dotted focus:outline-offset-2 focus:border-gray focus:outline-link"
          ></textarea>
        </div>



        <div className="grid gap-2">
          <label htmlFor="field_estimation_du_prix" className="font-semibold text-text">
            {t("Montant de l’apport")} <span className="text-sm text-red-500">*</span>
          </label>
          <input
            id="field_estimation_du_prix"
            name="field_estimation_du_prix"
            maxLength={255}
            defaultValue={node.field_estimation_du_prix}


            className="px-2 py-3 rounded-md border border-gray focus:outline-dotted focus:outline-offset-2 focus:ring-0 focus:outline-link focus:border-gray"
          />
        </div>
{node.field_choisir_une_categorie.name}

        <div className="grid gap-2">
              <label className="font-semibold text-text" htmlFor="grid-state">
              {t("Type d’apport")} <span className="text-sm text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                id="field_choisir_une_categorie"
                name="field_choisir_une_categorie"
                  defaultValue="29876849-c910-4ee3-8453-51dbe9d55bf2"
                className="px-2 py-3 rounded-md border w-full border-gray focus:ring-0 focus:outline-dotted focus:outline-offset-2 focus:border-gray focus:outline-link"
              >
              <option  >is any default</option>
                           {

                               categorieprj.map(cat => {

                                   return <option key={cat.id} value={cat.id} defaultValue={node.field_choisir_une_categorie.id}  >{cat.name}</option>
                               })
                           }


              {categorieprj
              .map((cat) => (
                <option key={cat.id} value={cat.id} defaultValue={node.field_choisir_une_categorie.id} >

                      {cat.name}

                </option>
                ))}
                </select>

              </div>
            </div>


            <div className="grid gap-2">
              <label htmlFor="date" className="font-semibold text-text">
                {t("Selectionner une date d'achevement")} <span className="text-sm text-red-500">*</span>
              </label>
              <DatePicker />


            </div>

            <div className="grid gap-2">
              <label htmlFor="document" className="font-semibold text-text">
                {t("Devis ou facture proforma")} <span className="text-sm text-red-500">*</span>
              </label>
              <input
                type="file"
                id="document"
                name="document"

                className="px-2 py-3 bg-white rounded-md border border-gray focus:outline-dotted focus:outline-offset-2 focus:outline-link focus:ring-0 focus:border-gray"
              />


            </div>




      <div>

      <div className="grid gap-2">
        <label htmlFor="Revision" className="font-semibold text-text">
          {t("Revision")} <span className="text-sm text-red-500">*</span>
        </label>
        <textarea
          id="revision_log"
          name="revision_log"

          className="h-48 px-2 py-3 rounded-md border border-gray focus:ring-0 focus:outline-dotted focus:outline-offset-2 focus:border-gray focus:outline-link"
        ></textarea>
      </div>




        <input
          type="submit"
          className="px-3 fedblue py-2 text-md text-white w-full transition-colors rounded-xl cursor-pointer bg-link hover:bg-white hover:text-whote border-link"
          disabled={formStatus?.status === "fetching"}
          value={
            formStatus?.status === "fetching" ? t("please-wait") : t("Modifier le financement")
          }
        />
      </div>
    </form>
  )
}
