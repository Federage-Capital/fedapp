import * as React from "react";
import Image from "next/image"
import { DrupalNode } from "next-drupal"
import useSWR from 'swr'

import { useRouter } from "next/router"
import { getSession, useSession, signOut } from "next-auth/react";
import { absoluteURL, formatDate } from "lib/utils"
import { useTranslation } from "next-i18next"
import { NodeFinComment } from "components/node--financement--comment"
import { Icon1 } from "components/icon1"
import { Icon2 } from "components/icon2"
import { FormComment } from "components/form--comment-fin"


import { Fragment, useState } from 'react'



interface NodeFinancementProps extends React.HTMLProps<HTMLFormElement> {}

interface FormStatus {
  status: "success" | "error" | "fetching"
  message?: string | string[]
}


interface NodeFinancementProps {
  node: DrupalNode
}




function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const fetcher = (url) => fetch(url).then((res) => res.json());



export function NodeFinancement({ node, className, ...props }: NodeFinancementProps) {
  const [formStatus, setFormStatus] = React.useState<FormStatus>(null)
  const { t } = useTranslation()

    const { data: comments, error } = useSWR('https://fed.septembre.io/jsonapi/comment/comment?filter[entity_id.id]='+ node.id,  fetcher)
    if (error) return <div>Failed to load</div>
    if (!comments) return <div>Loading ...</div>



    const router = useRouter()
    const session = getSession()



                const onSubmit = async (event) => {
                  event.preventDefault()
                  const data = new FormData(event.target)

                  setFormStatus({ status: "fetching" })

                  const response = await fetch("/api/comments", {
                    method: "POST",
                    body: data,
                  })

                  if (!response.ok) {
                    const errors = await response.json()

                    return setFormStatus({
                      status: "error",
                      message: errors?.map((error) => error.detail),
                    })
                  }

                  router.reload()

                    }

  return (
    <article {...props}>


      <div className="mb-4 text-gray-600">






<details className="mb-5 shadow sm:rounded-lg px-4 py-5 sm:p-6">

                                                                  <summary className="text-lg w-100">
                                                                  <span className="text-xl fedblueblue font-semibold">    {node.field_statut.name}</span> <br/>

                                                                  <span className="text-xl fedblueblue font-semibold">    {node.title}</span><br/>
                                                                  <span className="text-3xl font-bold">  {node.field_estimation_du_prix}€</span>

    <div class="button-transparent">Edit</div>
                                             </summary>
                                                                  <p className="mt-2 max-w-xl text-sm text-gray-500">
                                                                  Description :
                                                                  {node.body?.processed && (
                                                                    <div
                                                                      dangerouslySetInnerHTML={{ __html: node.body?.processed }}
                                                                      className="mt-6 text-xl leading-loose prose"
                                                                    />
                                                                  )}

</p>
</details>


<details className="mb-5 shadow sm:rounded-lg px-4 py-5 sm:p-6">

                                                                  <summary className="text-lg w-100">
Date de livraison       : {formatDate(node.field_date_de_livraison)}                                                          </summary>
                                                                  <p className="mt-2 max-w-xl text-sm text-gray-500">

                                                                  <NodeFinComment key={node.field_date_de_livraison} node={node} />

</p>
</details>

<details className="mb-5 shadow sm:rounded-lg px-4 py-5 sm:p-6">

                                                                  <summary className="text-lg w-100">
Type d'apport : {node.field_choisir_une_categorie.name}
                                                        </summary>
                                                                  <p className="mt-2 max-w-xl text-sm text-gray-500">

                                                                  <NodeFinComment key={node.field_choisir_une_categorie.id} node={node} />

</p>
</details>



<details className="mb-5 shadow sm:rounded-lg px-4 py-5 sm:p-6">

                                                                  <summary className="text-lg w-100">
Base de prix :   {node.field_base_de_prix.name}


                                             </summary>
                                                                  <p className="mt-2 max-w-xl text-sm text-gray-500">

                                                                  <NodeFinComment key={node.field_base_de_prix.id} node={node} />


</p>
</details>








</div>


    </article>
  )
}
