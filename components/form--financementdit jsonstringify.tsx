import * as React from "react"
import classNames from "classnames"
import { useTranslation } from "next-i18next"
import { signIn } from "next-auth/react"
import { useRouter } from "next/router"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

import { useForm } from "react-hook-form"
import { createFormSchema } from "../validations/update_financement.ts"

import { useState } from 'react'
import { Switch } from '@headlessui/react'



type FormData = yup.TypeOf<typeof createFormSchema>



function classNamess(...classes) {
  return classes.filter(Boolean).join(' ')
}
interface FormFinancementeditProps extends React.HTMLProps<HTMLFormElement> { }


export function FormFinancementedit({ className, node, targetObject, ...props }: FormFinancementeditProps) {

  const [status, setStatus] = React.useState<"error" | "success">()
  const { register, handleSubmit, formState, reset } = useForm<FormData>({
    resolver: yupResolver(createFormSchema),

  })
  const [enabled, setEnabled] = useState(false)


  async function onSubmit(formData: any) {


    const myRegData = {

      data: {
          type: node.type,
          id: node.id,

  attributes: {

    title: {
         value: formData.title,
       },
       body: {
                value: {
                value: formData.body,
              },


            },



      revision_log: {
           value: formData.revision_log,
         },
         langcode: {
              value: node.langcode,
            },


  }
}


    };




    const response = await fetch(`https://fed.septembre.io/jsonapi/node/financement/${node.id}`, {
      method: "PATCH",
      body: JSON.stringify(myRegData),
      headers: {
        'Content-Type': 'application/vnd.api+json',
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




<input
  id="title"
  name="title"
  type="title"
  defautValue={node.title}
  placeholder={node.title}
  className="relative block w-full px-3 py-2 mb-4  text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
  {...register("title")}
/>

{node.body.processed}
<input
  id="body"
  name="body"
  type="textarea"
  defautValue={node.body.processed}
  placeholder={node.body.processed}
  className="relative block w-full px-3 py-2 mb-4  text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
  {...register("body")}
/>
        <input
          id="revision_log"
          name="revision_log"
          type="revision_log"
          placeholder={node.revision_log}
          defautValue={node.revision_log}
          className="relative block w-full px-3 py-2 mb-4  text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
          {...register("revision_log")}
        />


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
