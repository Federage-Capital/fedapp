import * as React from "react"
import classNames from "classnames"
import { useTranslation } from "next-i18next"
import { signIn } from "next-auth/react"
import { useRouter } from "next/router"

interface FormLoginProps extends React.HTMLProps<HTMLFormElement> {}

interface FormStatus {
  status: "success" | "error" | "fetching"
  message?: string
}

export function FormLogin({ className, ...props }: FormLoginProps) {
  const [formStatus, setFormStatus] = React.useState<FormStatus>(null)
  const { t } = useTranslation()
  const router = useRouter()

  React.useEffect(() => {
    if (router.query.error === "CredentialsSignin") {
      return setFormStatus({
        status: "error",
        message: t("unrecognized-username-or-password-please-try-again"),
      })
    }

    return setFormStatus(null)
  }, [router, t])

  const onSubmit = async (event) => {
    event.preventDefault()
    const data = new FormData(event.target)

    setFormStatus({ status: "fetching" })

    await signIn("credentials", {
      username: data.get("username"),
      password: data.get("password"),
    })

    return setFormStatus({
      status: "success",
    })
  }

  return (
    <form
      className={classNames("grid gap-4", className)}
      onSubmit={onSubmit}
      {...props}
    >
      {formStatus?.message && (
        <p
          className={classNames("py-3 px-4 border", {
            "border-link bg-link/10 text-link":
              formStatus?.status === "success",
            "border-error bg-error/10 text-error":
              formStatus?.status === "error",
          })}
        >
          {formStatus.message}
        </p>
      )}

      <div className="grid">

        <input
          id="username"
          name="username"
          maxLength={255}
          placeholder="Adresse mail"
          required
          className="relative block w-full px-3 py-2 mb-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
        />

        <input
          type="password"
          id="password"
          name="password"
          placeholder="Mot de passe"
          required
          className="relative block w-full px-3 py-2 mb-4 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
        />



        <input
          type="submit"
          className="px-3 fedblue py-2 text-md text-white w-full transition-colors rounded-xl cursor-pointer bg-link hover:bg-white hover:text-whote border-link"
          disabled={formStatus?.status === "fetching"}
          value={
            formStatus?.status === "fetching" ? t("Patientez") : t("Connexion")
          }
        />
      </div>
    </form>
  )
}
