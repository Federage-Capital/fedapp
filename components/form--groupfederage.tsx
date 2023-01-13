import * as React from "react"
import classNames from "classnames"
import { useTranslation } from "next-i18next"
import { signIn } from "next-auth/react"
import { useRouter } from "next/router"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

import { useForm } from "react-hook-form"
import { groupfederageFormSchema } from "../validations/groupe_federage"

type FormData = yup.TypeOf<typeof groupfederageFormSchema>


interface FormArticleProps extends React.HTMLProps<HTMLFormElement> {}


interface FormStatus {
  status: "success" | "error" | "fetching"
  message?: string | string[]
}

export function FormArticle({ className, ...props }: FormArticleProps) {
  const { t } = useTranslation()
  const router = useRouter()
  const [status, setStatus] = React.useState<"error" | "success">()
  const { register, handleSubmit, formState, reset } = useForm<FormData>({
    resolver: yupResolver(groupfederageFormSchema),

  })



  const basicAuthCredential = 'clementz' + ":" + 'cemoicemoi';
  const bace64 = Buffer.from(basicAuthCredential).toString("base64");

  async function onSubmit(formData: any) {
    event.preventDefault()
    const myRegData = {
      label: [
        {
          value: formData.label,
        },
      ],
      type: [
        {
          target_id: "projets_federage",
        },
      ],
    };

    const response = await fetch("https://fed.septembre.io/entity/group?_format=json", {
        method: "POST",
        body: JSON.stringify(myRegData),
              headers: {
                "Content-Type": "application/json",
                "access-control-allow-origin": "http://localhost:3000/",
                "X-CSRF-Token": "TVHi0LZf6AXgAyai_vqE_z-eyJfrpm9G2io3v186vLo",
                Authorization: `Basic ${bace64}`,
              },
    })
    if (response.ok) {
      reset()
      return setStatus("success")
    }

    return setStatus("error")
    }


  return (
    <form className="space-y-6 inputWithButton" onSubmit={handleSubmit(onSubmit)}>
      <div>

      </div>
      <div>
        <label
          htmlFor="label"
          className="block text-sm font-medium text-gray-700"
        >


        </label>
        <input
          id="label"
          name="label"
          type="text"
          className="relative block w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
          {...register("label")}
        />

        <button
          type="submit"
          data-cy="btn-submit"
          className="px-3 fedblue py-2 text-md text-white w-full transition-colors rounded-xl cursor-pointer bg-link hover:bg-white hover:text-whote border-link"
        >
          Enregistrement
        </button>
      </div>
      <div>

      </div>
      <div>

      </div>
      <div>

      </div>

    </form>
  )
}
