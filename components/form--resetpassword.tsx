import * as React from "react"
import classNames from "classnames"
import { useTranslation } from "next-i18next"
import { signIn } from "next-auth/react"
import { useRouter } from "next/router"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

import { useForm } from "react-hook-form"
import { contactFormSchema2 } from "../validations/resetaccount"

type FormData = yup.TypeOf<typeof contactFormSchema2>


interface FormCreateProps extends React.HTMLProps<HTMLFormElement> {}


export function FormResetpassword({ className, ...props }: FormCreateProps) {
  const [status, setStatus] = React.useState<"error" | "success">()
  const { register, handleSubmit, formState, reset } = useForm<FormData>({
    resolver: yupResolver(contactFormSchema2),
  })

  // This makes a POST to a custom API route.
  // The Drupal base URL and the webform_id are NOT exposed.
  async function onSubmit(data: FormData) {
    const response2 = await fetch(`https://fed.septembre.io/user/lost-password?_format=json`, {
        method: "POST",
        body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },

    })

    if (response2.ok) {
      reset()
      return setStatus("success")
    }

    return setStatus("error")
  }

  return (

<div>
    {status === "error" ? (
      <div className="px-4 py-2 text-sm text-red-600 bg-red-100 border-red-200 rounded-md">
        Il y a une erreur. Veuillez recommencer.
      </div>
    ) : null}
    {status === "success" ? (
      <div className="px-4 py-2 text-sm text-green-600 bg-green-100 border-green-200 rounded-md">
        Votre message a été envoyé. Merci.
      </div>
    ) : null}
    {Object.values(formState.errors)?.length ? (
      <div className="px-4 py-2 text-sm text-red-600 bg-red-100 border-red-200 rounded-md">
        {Object.values(formState.errors).map((error, index) => (
          <p key={index}>{error.message}</p>
        ))}
      </div>
    ) : null}

    <form className={classNames("grid gap-4","inputWithButton", className)}

        onSubmit={handleSubmit(onSubmit)}>


        <div className="grid">

        <input
          id="mail"
          name="mail"
          type="mail"
          placeholder="Adresse mail"
          className="relative block w-full px-3 py-2 mb-4 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
          {...register("mail")}
        />
        <button
          type="submit"
          data-cy="btn-submit"
          className="px-3 py-2 text-md mt-4 mb-4 text-white bg-black w-full rounded-md cursor-pointer bg-link hover:bg-black hover:text-white border-link"
        >
          Réinitialiser
        </button>
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
