import * as React from "react"
import classNames from "classnames"
import { useTranslation } from "next-i18next"
import { useRouter } from "next/router"

interface FormArticleProps extends React.HTMLProps<HTMLFormElement> {}

interface FormStatus {
  status: "success" | "error" | "fetching"
  message?: string | string[]
}

export function FormGroupfin({ className, ...props }: FormArticleProps) {
  const [formStatus, setFormStatus] = React.useState<FormStatus>(null)
  const { t } = useTranslation()
  const router = useRouter()

  const onSubmit = async (event) => {
    event.preventDefault()
    const data = new FormData(event.target)

    setFormStatus({ status: "fetching" })

    const response = await fetch("/api/groupfin", {
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
      <div className="grid gap-2">
        <label htmlFor="title" className="font-semibold text-text">
          {t("Objet du financement")} <span className="text-sm text-red-500">*</span>
        </label>
        <input
          id="label"
          name="label"
          maxLength={255}
          required
          className="px-2 py-3 border-2 border-gray focus:outline-dotted focus:outline-offset-2 focus:ring-0 focus:outline-link focus:border-gray"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="descritption" className="font-semibold text-text">
          {t("Description")} <span className="text-sm text-red-500">*</span>
        </label>
        <textarea
          id="field_description"
          name="field_description"
          className="h-48 px-2 py-3 border-2 border-gray focus:ring-0 focus:outline-dotted focus:outline-offset-2 focus:border-gray focus:outline-link"
        ></textarea>
      </div>

      <div className="grid gap-2">
        <label htmlFor="description" className="font-semibold text-text">
          {t("field_estimation_du_prix")} <span className="text-sm text-red-500">*</span>
        </label>
        <textarea
          id="field_estimation_du_prix"
          name="field_estimation_du_prix"
          className="h-48 px-2 py-3 border-2 border-gray focus:ring-0 focus:outline-dotted focus:outline-offset-2 focus:border-gray focus:outline-link"
        ></textarea>
      </div>
      <div className="grid gap-2">
        <label htmlFor="field_date_de_livraison" className="font-semibold text-text">
          {t("field_date_de_livraison")} <span className="text-sm text-red-500">*</span>
        </label>
        <textarea
          id="field_date_de_livraison"
          name="field_date_de_livraison"
          className="h-48 px-2 py-3 border-2 border-gray focus:ring-0 focus:outline-dotted focus:outline-offset-2 focus:border-gray focus:outline-link"
        ></textarea>
      </div>
      <div class="grid gap-2">
            <label className="blofont-semibold text-text" htmlFor="grid-state">
  {t("categorie")} <span className="text-sm text-red-500">*</span>
   </label>
            <div class="relative">
              <select
              id="field_categorie"
              name="field_categorie"
              className="h-48 px-2 py-3 border-2 border-gray focus:ring-0 focus:outline-dotted focus:outline-offset-2 focus:border-gray focus:outline-link"
            >
                <option>1</option>
                <option>cat 1</option>
                <option>29876849-c910-4ee3-8453-51dbe9d55bf2</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>

      <div>
        <input
          type="submit"
          className="px-6 py-3 font-serif text-xl text-white transition-colors border-2 rounded-sm cursor-pointer bg-link hover:bg-white hover:text-black border-link"
          disabled={formStatus?.status === "fetching"}
          value={
            formStatus?.status === "fetching"
              ? t("please-wait")
              : t("create-new-sep")
          }
        />
      </div>
    </form>
  )
}
