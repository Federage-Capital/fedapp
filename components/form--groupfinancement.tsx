import * as React from "react"
import classNames from "classnames"
import { useTranslation } from "next-i18next"
import { useRouter } from "next/router"

interface FormGroupfinancementProps extends React.HTMLProps<HTMLFormElement> {}

interface FormStatus {
  status: "success" | "error" | "fetching"
  message?: string | string[]
}

export function FormGroupfinancement({ className, ...props }: FormGroupfinancementProps) {
  const [formStatus, setFormStatus] = React.useState<FormStatus>(null)
  const { t } = useTranslation()
  const router = useRouter()

  const onSubmit = async (event) => {
    event.preventDefault()
    const data = new FormData(event.target)

    setFormStatus({ status: "fetching" })

    const response = await fetch("/api/groupfinancement", {
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
          {t("title")} <span className="text-sm text-red-500">*</span>
        </label>
        <input
          id="title"
          name="title"
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
        <label htmlFor="body" className="font-semibold text-text">
          {t("description")} <span className="text-sm text-red-500">*</span>
        </label>
        <textarea
          id="body"
          name="body"
          className="h-48 px-2 py-3 border-2 border-gray focus:ring-0 focus:outline-dotted focus:outline-offset-2 focus:border-gray focus:outline-link"
        ></textarea>
      </div>
      <div className="grid gap-2">
        <label htmlFor="field_date_de_livraison" className="font-semibold text-text">
          {t("field_date_de_livraison")} <span className="text-sm text-red-500">*</span>
        </label>
        <input
          id="field_date_de_livraison"
          name="field_date_de_livraison"
          maxLength={255}

          className="px-2 py-3 border-2 border-gray focus:outline-dotted focus:outline-offset-2 focus:ring-0 focus:outline-link focus:border-gray"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="field_estimation_du_prix" className="font-semibold text-text">
          {t("field_estimation_du_prix")} <span className="text-sm text-red-500">*</span>
        </label>
        <input
          id="field_estimation_du_prix"
          name="field_estimation_du_prix"
          maxLength={255}

          className="px-2 py-3 border-2 border-gray focus:outline-dotted focus:outline-offset-2 focus:ring-0 focus:outline-link focus:border-gray"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="field_objet_du_financement" className="font-semibold text-text">
          {t("field_objet_du_financement")} <span className="text-sm text-red-500">*</span>
        </label>
        <input
          id="field_objet_du_financement"
          name="field_objet_du_financement"
          maxLength={255}

          className="px-2 py-3 border-2 border-gray focus:outline-dotted focus:outline-offset-2 focus:ring-0 focus:outline-link focus:border-gray"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="field_tags" className="font-semibold text-text">
          {t("field_tags")} <span className="text-sm text-red-500">*</span>
        </label>
        <input
          id="field_tags"
          name="field_tags"
          maxLength={255}

          className="px-2 py-3 border-2 border-gray focus:outline-dotted focus:outline-offset-2 focus:ring-0 focus:outline-link focus:border-gray"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="field_type_de_financement" className="font-semibold text-text">
          {t("field_type_de_financement")} <span className="text-sm text-red-500">*</span>
        </label>
        <input
          id="field_type_de_financement"
          name="field_type_de_financement"
          maxLength={255}

          className="px-2 py-3 border-2 border-gray focus:outline-dotted focus:outline-offset-2 focus:ring-0 focus:outline-link focus:border-gray"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="mail" className="font-semibold text-text">
          {t("image")} <span className="text-sm text-red-500">*</span>
        </label>
        <input
          type="file"
          id="image"
          name="image"
          required
          className="px-2 py-3 bg-white border-2 border-gray focus:outline-dotted focus:outline-offset-2 focus:outline-link focus:ring-0 focus:border-gray"
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
