import * as React from "react"
import classNames from "classnames"
import { useTranslation } from "next-i18next"
import { useRouter } from "next/router"
import { useState, useEffect } from "react";
import { DatePicker } from "components/datepickercomp"

import { absoluteURL, formatDate } from "lib/utils"

interface FormNewFinancementValidationProps extends React.HTMLProps<HTMLFormElement> {}

interface FormStatus {
  status: "success" | "error" | "fetching"
  message?: string | string[]
}

export function FormNewFinancementValidation({ className, categorieprj, node, groupe, ...props }: FormNewFinancementValidationProps) {
  const [formStatus, setFormStatus] = React.useState<FormStatus>(null)
  const { t } = useTranslation()
  const router = useRouter()

   const query = router.query;



  const onSubmit = async (event) => {
    event.preventDefault()
    const data = new FormData(event.target)

    setFormStatus({ status: "fetching" })

    const response = await fetch(`/api/validation/${node.entity_id.id}`, {
      method: "PATCH",
      body: data,
    })



    if (!response.ok) {
      const errors = await response.json()

      return setFormStatus({
        status: "error",
        message: errors?.map((error) => error.detail),
      })
    }

    router.push(`/membreaddfin/new?gid=${encodeURIComponent(node.id)}`)

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
      <div className="grid gap-2">


Valider l&lsquo;apport<br/>
Veuillez vérifier les informations saisies pour transmettre votre proposition.
        <label htmlFor="title" className="font-semibold text-text">
          {t("Nom de l’apport")} <span className="text-sm text-red-500">*</span>
        </label>

  {node.entity_id.title}
      </div>

      <div className="grid gap-2">
        <label htmlFor="body" className="font-semibold text-text">
          {t("Objet de l’apport")} <span className="text-sm text-red-500">*</span>
        </label>
  {node.entity_id.body.value}

      </div>

      <div className="grid gap-2">
            <label className="font-semibold text-text" htmlFor="grid-state">
  {t("Type d’apport")} <span className="text-sm text-red-500">*</span>


   </label>



                           {node.entity_id.field_choisir_une_categorie.name}
          </div>


          <div className="grid gap-2">
            <label htmlFor="field_estimation_du_prix" className="font-semibold text-text">
              {t("Montant de l’apport")} <span className="text-sm text-red-500">*</span>
            </label>
               {node.entity_id.field_estimation_du_prix}

          </div>

          <div className="grid gap-2">
            <label htmlFor="field_estimation_du_prix" className="font-semibold text-text">
              {t("commentaire")} <span className="text-sm text-red-500">*</span>
            </label>
                   {node.entity_id.revision_log}

          </div>



          <div className="grid gap-2">
            <label htmlFor="document" className="font-semibold text-text">
              {t("Devis ou facture proforma")} <span className="text-sm text-red-500">*</span>
            </label>

            {node.entity_id.field_document_s_annexe_s_.map((doc) => (

                                           <div key={doc.id}>




                                       <div className=" text-xl font-bold">Ressources</div>

Devis de l&apos;apport :<br/>

{absoluteURL(doc.field_media_document.uri.url)}




                                           </div>

                                                                 ))}

          </div>

      <div className="grid gap-2 hidden">
        <label htmlFor="gid" className="font-semibold text-text">
          {t("gid")} <span className="text-sm text-red-500">*</span>
        </label>

        <textarea
          id="gid"
          name="gid"
          value={query.gid}
          className="hidden"
        ></textarea>
      </div>
      <div className="grid gap-2">

 {node.entity_id.field_date_de_livraison}

      </div>

<p>
Toute saisie réévalue l&apos;apport. Les données financières doivent être validées par les partenaires pour être comptabilisées.



</p>


<div className="grid gap-2">
  <label htmlFor="field_estimation_du_prix" className="font-semibold text-text">
    {t("Validez-vous ces informations")} <span className="text-sm text-red-500">*</span>
  </label>

            <input
              id="promote"
              aria-describedby="candidates-description"
              name="promote"
              type="checkbox"
              defaultValue='1'
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />

</div>



      <div>

      <div className="block  w-100 text-right">
      <button onClick={() => router.back()} className="bg-white hover:bg-blue-500 text-black font-semibold hover:text-white py-2 px-4  hover:border-transparent rounded">
        Annuler
      </button>

        <input
          type="submit"
          className="ml-10 bg-blue-300 hover:bg-blue-400 text-blue-700 font-bold py-2 px-4  hover:border-blue-500 rounded"
          value={
            formStatus?.status === "fetching"
              ? t("please-wait")
              : t("Suivant")
          }
        />
        </div>
      </div>
    </form>
  )
}
