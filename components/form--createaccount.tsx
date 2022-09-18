import * as React from "react"
import classNames from "classnames"
import { useTranslation } from "next-i18next"
import { signIn } from "next-auth/react"
import { useRouter } from "next/router"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"



import { useForm } from "react-hook-form"

interface FormCreateProps extends React.HTMLProps<HTMLFormElement> {}


export function FormCreate({ className, ...props }: FormCreateProps) {
  const [status, setStatus] = React.useState<"error" | "success">()
  const { register, handleSubmit, formState, reset } = useForm<FormData>({

  })


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

    <form className="space-y-6 inputWithButton" onSubmit={handleSubmit(onSubmit)}>
      <div>

      </div>
      <div>
        <label
          htmlFor="mail"
          className="block text-sm font-medium text-gray-700"
        >


        </label>
        <input
          id="mail"
          name="mail"
          type="mail"
          placeholder="mon@entreprise.com"
          className="d-inline-block w-3/6 px-3 py-2 mr-1 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
          {...register("mail")}
        />
        <input
          id="name"
          name="name"
          type="text"
          className="relative block w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
          {...register("name")}
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
    </div>
  )
}
