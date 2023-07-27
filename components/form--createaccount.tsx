import * as React from "react"
import classNames from "classnames"
import { useTranslation } from "next-i18next"
import { signIn } from "next-auth/react"
import { useRouter } from "next/router"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

import { useForm } from "react-hook-form"
import { createFormSchema } from "../validations/create_account"

import { useState } from 'react'
import { Switch } from '@headlessui/react'



type FormData = yup.TypeOf<typeof createFormSchema>



function classNamess(...classes) {
  return classes.filter(Boolean).join(' ')
}
interface FormCreateProps extends React.HTMLProps<HTMLFormElement> { }


export function FormCreate({ className, ...props }: FormCreateProps) {

  const [status, setStatus] = React.useState<"error" | "success">()
  const { register, handleSubmit, formState, reset } = useForm<FormData>({
    resolver: yupResolver(createFormSchema),

  })
  const [enabled, setEnabled] = useState(false)


  async function onSubmit(formData: any) {
    const myRegData = {
      name: {
        value: formData.name,
      },
      mail: {
        value: formData.mail,
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

    <form className={classNames("flex flex-col gap-4", "inputWithButton", className)} onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col">
        <div className="relative">
          <select
            id="categorie_d_entreprise"
            name="categorie_d_entreprise"
            placeholder="Type de structure"
            className="relative block w-full px-3 py-2 mb-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md leading-tight focus:outline-none focus:ring-black focus:border-black sm:text-sm bg-white appearance-none"
          >
            <option value=" disabled selected hidden caret-slate-600">Type de structure</option>
            <option value="9f599b2e-2e4c-4f68-b215-4f3dff4ce84f">Entreprise</option>
            <option value="dce93ed5-9f2c-4012-bc59-740601bd3165">ONG</option>
            <option value="08b9bdbe-9e4b-465f-820c-c5e70771019c">Association</option>
            <option value="3e070dcb-1637-442a-beaa-50a5f1001159">Commun</option>
            <option value="682283e2-29dc-422a-bd92-c5a1db95861b">Institution</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4 mb-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
          </div>
        </div>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Nom ou dénomination sociale"
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
        <div className="flex items-center">
          <div className="pb-5">

            <Switch
              checked={enabled}
              onChange={setEnabled}
              className={classNames(
                enabled ? 'fedblue' : 'bg-gray-200',
                'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-fedblue focus:ring-offset-2'
              )}
            >
              <span className="sr-only">Use setting</span>
              <span
                aria-hidden="true"
                className={classNames(
                  enabled ? 'translate-x-5' : 'translate-x-0',
                  'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                )}
              />
            </Switch>
          </div>
          <div className="text-base ml-2">
            En cochant cette case, vous acceptez notre <a href="https://www.federage.com/fr/confidentialite" className="fedblueblue">Politique de confidentialité.</a>
          </div>
        </div>
        <button
          type="submit"
          data-cy="btn-submit"
          className="px-3 fedblue py-2 text-md mt-4 mb-4 text-white w-full transition-colors rounded-xl cursor-pointer bg-link hover:bg-white hover:text-whote border-link"
        >
          Créer un compte
        </button>
        <div>
        </div>
        <div>
        </div>
        <div>
        </div>
      </div>
    </form >
  )
}