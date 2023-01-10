import * as React from "react"
import classNames from "classnames"
import { useTranslation } from "next-i18next"
import { signIn } from "next-auth/react"
import { useRouter } from "next/router"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useState } from 'react'
import { Switch } from '@headlessui/react'




import { useForm } from "react-hook-form"

function classNamess(...classes) {
  return classes.filter(Boolean).join(' ')
}
interface FormCreateProps extends React.HTMLProps<HTMLFormElement> {}


export function FormCreate({ className, ...props}: FormCreateProps) {

  const [status, setStatus] = React.useState<"error" | "success">()
  const { register, handleSubmit, formState, reset } = useForm<FormData>({

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




      <input
        id="name"
        name="name"
        type="text"
        placeholder="Dénomination sociale"
        className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
        {...register("name")}
      />



        <input
          id="mail"
          name="mail"
          type="mail"
          placeholder="Adresse mail"
          className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
          {...register("mail")}
        />


        <Switch.Group as="div" className="flex items-center">
     <Switch
       checked={enabled}
       onChange={setEnabled}
       className={classNamess(
         enabled ? 'bg-indigo-600' : 'bg-gray-200',
         'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
       )}
     >
       <span
         aria-hidden="true"
         className={classNamess(
           enabled ? 'translate-x-5' : 'translate-x-0',
           'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
         )}
       />
     </Switch>
     <Switch.Label as="span" className="ml-3">
       <span className="text-sm font-medium text-gray-500">En cochant cette case, vous acceptez notre Politique de confidentialité.</span>
     </Switch.Label>
   </Switch.Group>

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
    </div>
  )
}
