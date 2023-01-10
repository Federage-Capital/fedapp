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
interface FormInviteProps extends React.HTMLProps<HTMLFormElement> {}


export function FormInvite({ className, ...props}: FormCreateProps) {

  const [status, setStatus] = React.useState<"error" | "success">()
  const { register, handleSubmit, formState, reset } = useForm<FormData>({

  })
  const [enabled, setEnabled] = useState(false)


  async function onSubmit(formData: any) {
    const myRegData = {
      name: {
        value: formData.mail,
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


        <div className="grid grid-cols-12 gap-4">


<div class="text-base font-bold col-span-8 align-middle">
        <input
          id="mail"
          name="mail"
          type="mail"
          placeholder="Adresse mail"
          className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
          {...register("mail")}
        />


</div>
<div class="text-base font-bold col-span-3 align-middle">
        <button
          type="submit"
          data-cy="btn-submit"
          className="px-3 fedblue py-2 text-md text-white w-full transition-colors rounded-xl cursor-pointer bg-link hover:bg-white hover:text-whote border-link"
        >
          Envoyer
        </button>

</div>

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
