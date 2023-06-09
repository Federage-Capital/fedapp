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
interface FormCreateProps extends React.HTMLProps<HTMLFormElement> {}


export function FormCreate({ className, ...props}: FormCreateProps) {

  const [status, setStatus] = React.useState<"error" | "success">()
  const { t } = useTranslation()

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

<div>

    <form className={classNames("grid gap-4","inputWithButton", className)}

        onSubmit={handleSubmit(onSubmit)}>


        <div className="grid">


      <div className="relative">
        <select
        id="categorie_d_entreprise"
        name="categorie_d_entreprise"
        placeholder="Type de structure"
        className="relative block w-full px-3 py-2 mb-2  text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"

      >
      <option value="9f599b2e-2e4c-4f68-b215-4f3dff4ce84f">Type de structure</option>
    <option value="9f599b2e-2e4c-4f68-b215-4f3dff4ce84f">Entreprise</option>
    <option value="dce93ed5-9f2c-4012-bc59-740601bd3165">ONG</option>
    <option value="08b9bdbe-9e4b-465f-820c-c5e70771019c">Association</option>
    <option value="3e070dcb-1637-442a-beaa-50a5f1001159">Commun</option>
    <option value="682283e2-29dc-422a-bd92-c5a1db95861b">Institution</option>

        </select>

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

        <div className="grid grid-cols-6 gap-4 max-width-create">

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
<div className="col-span-5">
           En cochant cette case, vous acceptez notre <a href="/propos" className="fedblueblue">
Politique de confidentialité.</a>
           </div>
</div>
        <button
          type="submit"
          data-cy="btn-submit"
          className="px-3 fedblue py-2 text-md mt-4 mb-4 text-white w-full transition-colors rounded-xl cursor-pointer bg-link hover:bg-white hover:text-whote border-link"
          disabled={status?.status === "fetching"}
          value={
            status?.status === "fetching" ? t("Patientez") : t("Connexion")
          }
        >
          Créer un compte
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
