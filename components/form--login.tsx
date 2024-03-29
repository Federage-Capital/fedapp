import * as React from "react"
import classNames from "classnames"
import { useTranslation } from "next-i18next"
import { signIn } from "next-auth/react"
import { useRouter } from "next/router"
import Link from "next/link"

interface FormLoginProps extends React.HTMLProps<HTMLFormElement> { }

interface FormStatus {
  status: "success" | "error" | "fetching"
  message?: string
}

export function FormLogin({ className, ...props }: FormLoginProps) {
  const [formStatus, setFormStatus] = React.useState<FormStatus>(null)
  const { t } = useTranslation()
  const router = useRouter()

  const redirectButton = () => {
    router.push({
      pathname: '/register',
      query: {
        tab: 2,
        toggleValue: false
      }
    });
  }

  React.useEffect(() => {
    if (router.query.error === "CredentialsSignin") {
      return setFormStatus({
        status: "error",
        message: t("Nom d'utilisateur ou mot de passe non reconnu. Veuillez réessayer."),
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
    <div>
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
          <div className="flex h-6 items-center mb-5">
            <input
              id="comments"
              aria-describedby="comments-description"
              name="comments"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-blue-700 focus:ring-blue-700"
            />
            <p className="ml-2 text-sm">
              Rester connecté
            </p>
            <button className="ml-auto fedblueblue font-medium text-sm" onClick={redirectButton}>Mot de passe oublié ?</button>
          </div>




          <input
            type="submit"
            className="px-3 py-2 text-md mt-4 mb-4 text-white bg-black w-full rounded-md cursor-pointer bg-link hover:bg-black hover:text-white border-link"
            disabled={formStatus?.status === "fetching"}
            value={
              formStatus?.status === "fetching" ? t("Patientez") : t("Connexion")
            }
          />
        </div>
        <div>
        </div>
        <div>
        </div>
        <div>
        </div>
        <div>
        </div>
      </form>
    </div>
  )
}
