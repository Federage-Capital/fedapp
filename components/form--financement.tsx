import * as React from "react"
import classNames from "classnames"
import { useTranslation } from "next-i18next"
import { useRouter } from "next/router"
import { useState, useEffect } from "react";
import { DatePicker } from "components/datepickercomp"


interface FormFinancementProps extends React.HTMLProps<HTMLFormElement> {}

interface FormStatus {
  status: "success" | "error" | "fetching"
  message?: string | string[]
}

export function FormFinancement({ className, categorieprj, ...props }: FormFinancementProps) {
  const [formStatus, setFormStatus] = React.useState<FormStatus>(null)
  const { t } = useTranslation()
  const router = useRouter()

   const query = router.query;



  const onSubmit = async (event) => {
    event.preventDefault()
    const data = new FormData(event.target)

    setFormStatus({ status: "fetching" })

    const response = await fetch("/api/financements", {
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

    router.push("/financement/validation")
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
        <label htmlFor="title" className="font-semibold text-text">
          {t("Nom de l’apport")} <span className="text-sm text-red-500">*</span>
        </label>
          {query.gid}
        <input
          id="title"
          name="title"
          maxLength={255}
          required
          className="px-2 py-3 rounded-md border border-gray focus:outline-dotted focus:outline-offset-2 focus:ring-0 focus:outline-link focus:border-gray"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="body" className="font-semibold text-text">
          {t("Objet de l’apport")} <span className="text-sm text-red-500">*</span>
        </label>
        <textarea
          id="body"
          name="body"
          className="h-48 px-2 py-3 rounded-md border border-gray focus:ring-0 focus:outline-dotted focus:outline-offset-2 focus:border-gray focus:outline-link"
        ></textarea>
      </div>


      <div className="grid gap-2">
        <label htmlFor="revision" className="font-semibold text-text">
          {t("Commentaire obligatoire")} <span className="text-sm text-red-500">*</span>
        </label>
        <textarea
          id="revision_log"
          name="revision_log"
          className="h-48 px-2 py-3 rounded-md border border-gray focus:ring-0 focus:outline-dotted focus:outline-offset-2 focus:border-gray focus:outline-link"
        ></textarea>
      </div>

      <div className="grid gap-2">
            <label className="font-semibold text-text" htmlFor="grid-state">
  {t("Type d’apport")} <span className="text-sm text-red-500">*</span>
   </label>
            <div className="relative">
              <select
              id="field_choisir_une_categorie"
              name="field_choisir_une_categorie"
              className="px-2 py-3 rounded-md border w-full border-gray focus:ring-0 focus:outline-dotted focus:outline-offset-2 focus:border-gray focus:outline-link"
            >
            {categorieprj
            .map((cat) => (
              <option key={cat.id} value={cat.id}>

                    {cat.name}

              </option>
              ))}
              </select>

            </div>
          </div>


          <div className="grid gap-2">
            <label htmlFor="field_estimation_du_prix" className="font-semibold text-text">
              {t("Montant de l’apport")} <span className="text-sm text-red-500">*</span>
            </label>
            <input
              id="field_estimation_du_prix"
              name="field_estimation_du_prix"
              maxLength={255}

              className="px-2 py-3 rounded-md border border-gray focus:outline-dotted focus:outline-offset-2 focus:ring-0 focus:outline-link focus:border-gray"
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="document" className="font-semibold text-text">
              {t("Devis ou facture proforma")} <span className="text-sm text-red-500">*</span>
            </label>
            <input
              type="file"
              id="document"
              name="document"
              required
              className="px-2 py-3 bg-white rounded-md border border-gray focus:outline-dotted focus:outline-offset-2 focus:outline-link focus:ring-0 focus:border-gray"
            />
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
      <DatePicker />


      </div>

<p>
Toute saisie réévalue l&apos;apport. Les données financières doivent être validées par les partenaires pour être comptabilisées.



</p>






      <div>

      <div className="block  w-100 text-right">
      <button onClick={() => router.back()} class="bg-white hover:bg-blue-500 text-black font-semibold hover:text-white py-2 px-4  hover:border-transparent rounded">
        Annuler
      </button>

        <input
          type="submit"
          class="ml-10 bg-blue-300 hover:bg-blue-400 text-blue-700 font-bold py-2 px-4  hover:border-blue-500 rounded"
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
