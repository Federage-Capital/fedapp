import * as React from "react"
import classNames from "classnames"
import { useTranslation } from "next-i18next"
import { signIn } from "next-auth/react"
import { useRouter } from "next/router"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

import { useForm } from "react-hook-form"
import { createFormSchema } from "../validations/create_account"
import useSWR from 'swr'
import { useState } from 'react'
import { Switch } from '@headlessui/react'



type FormData = yup.TypeOf<typeof createFormSchema>



function classNamess(...classes) {
  return classes.filter(Boolean).join(' ')
}
interface FormCreateProps extends React.HTMLProps<HTMLFormElement> {}

const fetcher = (url) => fetch(url).then((res) => res.json());

export function FormCreate({ className, ...props}: FormCreateProps) {

  const [status, setStatus] = React.useState<"error" | "success">()
  const { register, handleSubmit, formState, reset } = useForm<FormData>({
    resolver: yupResolver(createFormSchema),

  })
  const [enabled, setEnabled] = useState(false)

  const { data: termscat, error2 } = useSWR('https://fed.septembre.io/jsonapi/taxonomy_term/categorie_d_entreprise', fetcher)
  if (error2) return <div>Failed to load</div>
         if (!termscat) return <div>Loading...</div>


  async function onSubmit(formData: any) {
    const myRegData = {
      name: {
        value: formData.name,
      },
      mail: {
        value: formData.mail,
      },
      field_type_de_structure: {
        value: formData.field_categorie,
      },
    };


const response = await fetch(`https://fed.septembre.io/user/register?_format=json`, {
    method: "POST",
    body: JSON.stringify(myRegData),
    headers: {
    'Content-Type': 'application/json',
  },

})



if (response.ok) {
  reset()
  return setStatus("success")
}

return setStatus("error")
}


  return (

<div>

    <form className={classNames("grid gap-4","inputWithButton", className)}

        onSubmit={handleSubmit(onSubmit)}>


        <div className="grid">



      <div className="grid gap-2">






            <div className="relative">
              <select
              id="field_categorie"
              name="field_categorie"
              placeholder="Type de structure"

              className="relative block w-full px-3 py-2 mb-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
            >
            {termscat.data.map((item) => (


                <option key={item.id} value={item.id}>    {item.attributes.name}</option>

              ))}
              </select>

            </div>
          </div>

      <input
        id="siren"
        name="siren"
        type="text"
        placeholder="Numéro SIREN"
        className="relative block w-full px-3 py-2 mb-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
        {...register("siren")}
      />

      <input
        id="name"
        name="name"
        type="text"
        placeholder="Dénomination sociale"
        className="relative block w-full px-3 py-2 mb-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
        {...register("name")}
      />



        <input
          id="mail"
          name="mail"
          type="mail"
          placeholder="Adresse mail"
          className="relative block w-full px-3 py-2 mb-4  text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
          {...register("mail")}
        />



        <button
          type="submit"
          data-cy="btn-submit"
          className="px-3 fedblue py-2 text-md mt-4 mb-4 text-white w-full transition-colors rounded-xl cursor-pointer bg-link hover:bg-white hover:text-whote border-link"
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
    </div>
  )
}
