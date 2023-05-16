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





  <div className="asset-card mb-3">

      <div className="grid grid-cols-12 gap-4">
          <div className="col-span-3">


    </div>
    <div className="text-base font-bold col-span-9 align-middle">

      <span className="text-xl fedblueblue font-semibold">    {node.field_statut.name}</span> <br/>

      <span className="text-xl fedblueblue font-semibold">    {node.title}</span><br/>
      <span className="text-xl fedblueblue font-semibold">   Montant de l&#39;apport </span><br/>
    <span className="text-3xl font-bold">  {node.field_estimation_du_prix}€</span>
<div class="button-transparent">Edit</div>
    </div>
    <div>
    </div>
      </div>
</div>

<details className="mb-5 shadow sm:rounded-lg px-4 py-5 sm:p-6">

                                                                  <summary className="text-lg w-100">
Date de livraison       : {formatDate(node.field_date_de_livraison)}                                                          </summary>
                                                                  <p className="mt-2 max-w-xl text-sm text-gray-500">
ksdhclkjsdhjkhdskc
dsxksdjsl

</p>
</details>

<details className="mb-5 shadow sm:rounded-lg px-4 py-5 sm:p-6">

                                                                  <summary className="text-lg w-100">
Type d'apport : {node.field_choisir_une_categorie.name}
                                                        </summary>
                                                                  <p className="mt-2 max-w-xl text-sm text-gray-500">
ksdhclkjsdhjkhdskc
dsxksdjsl

</p>
</details>



<details className="mb-5 shadow sm:rounded-lg px-4 py-5 sm:p-6">

                                                                  <summary className="text-lg w-100">
Base de prix :   {node.field_base_de_prix.name}


                                             </summary>
                                                                  <p className="mt-2 max-w-xl text-sm text-gray-500">
ksdhclkjsdhjkhdskc
dsxksdjsl

</p>
</details>

<div className="separateur-card">

<span className="text-xl fedblueblue font-semibold">Date de livraison</span><br/>
<span className="text-3xl font-bold"> {formatDate(node.field_date_de_livraison)}</span>

</div>

<div className="separateur-card">

Description :
{node.body?.processed && (
  <div
    dangerouslySetInnerHTML={{ __html: node.body?.processed }}
    className="mt-6 text-xl leading-loose prose"
  />
)}

<details className="mb-5 shadow sm:rounded-lg px-4 py-5 sm:p-6">

                                                                  <summary className="text-lg w-100">
                                                                Titre
                                                                  </summary>
                                                                  <p className="mt-2 max-w-xl text-sm text-gray-500">

{comments.data?.length ? (

<p>

    {comments.data.map((comment) => (

    <div key={comment.id} className="asset-card mb-3">


    <div className="flow-root">
      <ul role="list" className="-mb-8">
        <li>
          <div className="relative pb-8">
            <span className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
            <div className="relative  flex items-start space-x-3">
              <div className="relative">


              {node.uid.user_picture?.uri.url && (
                <Image
                  src={absoluteURL(node.uid.user_picture?.uri.url)}
                  width={30}
                  height={30}
                  className='flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ring-8 ring-white'
                  objectFit="cover"
                  alt={node.field_media_image.field_media_image.resourceIdObjMeta.alt}
                  priority
                />
              )}





                <span className="absolute -bottom-0.5 -right-1 rounded-tl bg-white px-0.5 py-px">


                </span>
              </div>
              <div className="min-w-0 flex-1">
                <div>
                  <div className="text-sm">
                    <a href="#" className="font-medium text-gray-900">  {comment.attributes.thread}</a>
{comment.attributes.thread}
lkjdhljhdjhd
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">{comment.attributes.created}</p>
                </div>
                <div className="mt-2 text-sm text-gray-700">
                <p>{comment.attributes.subject}</p>

                  <p><div
                    dangerouslySetInnerHTML={{ __html: comment.attributes.comment_body.value }}
                    className="font-medium text-gray-900"
                  />
</p>
                </div>
              </div>
            </div>
          </div>
        </li>


        </ul>
        </div>



<p>




</p>

    </div>

                          ))}



</p>
                                              ) : (
<p>   Participer à la conversation</p>
                                              )}


                                                                                                      <form
                                                                                                        className={classNames("grid gap-4", className)}
                                                                                                        onSubmit={onSubmit}
                                                                                                        {...props}
                                                                                                      >
                                                                                                        {(formStatus?.status === "success" || formStatus?.status === "error") && (
                                                                                                          <div
                                                                                                            className={classNames("py-3 px-4 border", {
                                                                                                              "border-link bg-link/10 text-link": formStatus.status === "success",
                                                                                                              "border-error bg-error/10 text-error":
                                                                                                                formStatus.status === "error",
                                                                                                            })}
                                                                                                          >
                                                                                                            {Array.isArray(formStatus.message) ? (
                                                                                                              <ul className="list-disc list-inside list">
                                                                                                                {formStatus.message.map((message, index) => (
                                                                                                                  <li key={index}>{message}</li>
                                                                                                                ))}
                                                                                                              </ul>
                                                                                                            ) : (
                                                                                                              formStatus.message
                                                                                                            )}
                                                                                                          </div>
                                                                                                        )}



                                                                                                                                                              <div action="#" className="relative">
                                                                                                                                                                    <div className="overflow-hidden rounded-lg border border-gray-300 shadow-sm focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">

                                                                                                                                                                    <label htmlFor="title" className="sr-only">
                                                                                                                                                                      {t("Thread")} <span className="text-sm text-red-500">*</span>
                                                                                                                                                                    </label>
                                                                                                                                                                    <input
                                                                                                                                                                      type="thread"
                                                                                                                                                                      placeholder={node.title}
                                                                                                                                                                      defaultValue={node.title}

                                                                                                                                                                      id="thread"
                                                                                                                                                                      name="thread"
                                                                                                                                                                      maxLength={255}
                                                                                                                                                                      required
                                                                                                                                                                      className="block w-full border-0 pt-2.5 text-lg font-medium placeholder-gray-500 focus:ring-0"
                                                                                                                                                                    />




                                                                                                                                                                      <label htmlFor="title" className="sr-only">
                                                                                                                                                                        {t("Sujet")} <span className="text-sm text-red-500">*</span>
                                                                                                                                                                      </label>
                                                                                                                                                                      <input
                                                                                                                                                                        type="text"
                                                                                                                                                                        placeholder="Sujet"

                                                                                                                                                                        id="subject"
                                                                                                                                                                        name="subject"
                                                                                                                                                                        maxLength={255}
                                                                                                                                                                        required
                                                                                                                                                                        className="block w-full border-0 pt-2.5 text-lg font-medium placeholder-gray-500 focus:ring-0"
                                                                                                                                                                      />
                                                                                                                                                                      <label htmlFor="description" className="sr-only">
                                                                                                                                                                      {t("comment")} <span className="text-sm text-red-500">*</span>
                                                                                                                                                                      </label>
                                                                                                                                                                      <textarea
                                                                                                                                                                        rows={2}
                                                                                                                                                                        name="comment"
                                                                                                                                                                        id="comment"
                                                                                                                                                                        className="block w-full resize-none border-0 py-0 placeholder-gray-500 focus:ring-0 sm:text-sm"
                                                                                                                                                                        placeholder="Ecrivez un commentaire..."
                                                                                                                                                                        defaultValue={''}
                                                                                                                                                                      />

                                                                                                                                                                      <textarea
                                                                                                                                                                        id="nodeid"
                                                                                                                                                                        name="nodeid"
                                                                                                                                                                        value={node.id}
                                                                                                                                                                        className="hidden"
                                                                                                                                                                      ></textarea>

                                                                                                                                                                      <div aria-hidden="true">
                                                                                                                                                                        <div className="py-2">
                                                                                                                                                                          <div className="h-9" />
                                                                                                                                                                        </div>
                                                                                                                                                                        <div className="h-px" />
                                                                                                                                                                        <div className="py-2">
                                                                                                                                                                          <div className="py-px">
                                                                                                                                                                            <div className="h-9" />
                                                                                                                                                                          </div>
                                                                                                                                                                        </div>
                                                                                                                                                                      </div>
                                                                                                                                                                    </div>

                                                                                                                                                                    <div className="absolute inset-x-px bottom-0">

                                                                                                                                                                      <div className="flex items-center justify-between space-x-3 border-t border-gray-200 px-2 py-2 sm:px-3">


                                                                                                                                                                        <div className="flex-shrink-0">


                                                                                                                                                                          <input
                                                                                                                                                                            type="submit"
                                                                                                                                                                            className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                                                                                                                                            disabled={formStatus?.status === "fetching"}
                                                                                                                                                                            value={
                                                                                                                                                                              formStatus?.status === "fetching"
                                                                                                                                                                                ? t("envoyer")
                                                                                                                                                                                : t("envoyer")
                                                                                                                                                                            }
                                                                                                                                                                          />
                                                                                                                                                                        </div>
                                                                                                                                                                      </div>
                                                                                                                                                                    </div>
                                                                                                                                                                    </div>
                                                                                                                                                                  </form>

                                              </p>
                                          </details>


</div>
<div className="separateur-card">

Type d'apport
Type de financement : {node.field_type_de_financement}

</div>

<div className="separateur-card">

Base de prix : {node.field_base_de_prix}</div>

        <span>

        </span>
      </div>













                                                    <div className="asset-card mb-3">






                                                    <details className="mb-5 shadow sm:rounded-lg px-4 py-5 sm:p-6">

                                                                                                                      <summary className="text-lg w-100">
                                                                                                                    Titre
                                                                                                                      </summary>
                                                                                                                      <p className="mt-2 max-w-xl text-sm text-gray-500">

                                                    {comments.data?.length ? (

                                                    <p>

                                                        {comments.data.map((comment) => (

                                                        <div key={comment.id} className="asset-card mb-3">


                                                        <div className="flow-root">
                                                          <ul role="list" className="-mb-8">
                                                            <li>
                                                              <div className="relative pb-8">
                                                                <span className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                                                                <div className="relative  flex items-start space-x-3">
                                                                  <div className="relative">


                                                                  {node.uid.user_picture?.uri.url && (
                                                                    <Image
                                                                      src={absoluteURL(node.uid.user_picture?.uri.url)}
                                                                      width={30}
                                                                      height={30}
                                                                      className='flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ring-8 ring-white'
                                                                      objectFit="cover"
                                                                      alt={node.field_media_image.field_media_image.resourceIdObjMeta.alt}
                                                                      priority
                                                                    />
                                                                  )}





                                                                    <span className="absolute -bottom-0.5 -right-1 rounded-tl bg-white px-0.5 py-px">


                                                                    </span>
                                                                  </div>
                                                                  <div className="min-w-0 flex-1">
                                                                    <div>
                                                                      <div className="text-sm">
                                                                        <a href="#" className="font-medium text-gray-900">  {comment.attributes.thread}</a>
                                              {comment.attributes.thread}
                                              lkjdhljhdjhd
                                                                      </div>
                                                                      <p className="mt-0.5 text-sm text-gray-500">{comment.attributes.created}</p>
                                                                    </div>
                                                                    <div className="mt-2 text-sm text-gray-700">
                                                                    <p>{comment.attributes.subject}</p>

                                                                      <p><div
                                                                        dangerouslySetInnerHTML={{ __html: comment.attributes.comment_body.value }}
                                                                        className="font-medium text-gray-900"
                                                                      />
                                                  </p>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </li>


                                                            </ul>
                                                            </div>



                                                  <p>




                                                  </p>

                                                        </div>

                                                                              ))}



                                                    </p>
                                                                                                  ) : (
                                                  <p>   Participer à la conversation</p>
                                                                                                  )}


                                                                                                                                                          <form
                                                                                                                                                            className={classNames("grid gap-4", className)}
                                                                                                                                                            onSubmit={onSubmit}
                                                                                                                                                            {...props}
                                                                                                                                                          >
                                                                                                                                                            {(formStatus?.status === "success" || formStatus?.status === "error") && (
                                                                                                                                                              <div
                                                                                                                                                                className={classNames("py-3 px-4 border", {
                                                                                                                                                                  "border-link bg-link/10 text-link": formStatus.status === "success",
                                                                                                                                                                  "border-error bg-error/10 text-error":
                                                                                                                                                                    formStatus.status === "error",
                                                                                                                                                                })}
                                                                                                                                                              >
                                                                                                                                                                {Array.isArray(formStatus.message) ? (
                                                                                                                                                                  <ul className="list-disc list-inside list">
                                                                                                                                                                    {formStatus.message.map((message, index) => (
                                                                                                                                                                      <li key={index}>{message}</li>
                                                                                                                                                                    ))}
                                                                                                                                                                  </ul>
                                                                                                                                                                ) : (
                                                                                                                                                                  formStatus.message
                                                                                                                                                                )}
                                                                                                                                                              </div>
                                                                                                                                                            )}



                                                                                                                                                                                                                  <div action="#" className="relative">
                                                                                                                                                                                                                        <div className="overflow-hidden rounded-lg border border-gray-300 shadow-sm focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">

                                                                                                                                                                                                                        <label htmlFor="title" className="sr-only">
                                                                                                                                                                                                                          {t("Thread")} <span className="text-sm text-red-500">*</span>
                                                                                                                                                                                                                        </label>
                                                                                                                                                                                                                        <input
                                                                                                                                                                                                                          type="thread"
                                                                                                                                                                                                                          placeholder={node.title}
                                                                                                                                                                                                                          defaultValue={node.title}

                                                                                                                                                                                                                          id="thread"
                                                                                                                                                                                                                          name="thread"
                                                                                                                                                                                                                          maxLength={255}
                                                                                                                                                                                                                          required
                                                                                                                                                                                                                          className="block w-full border-0 pt-2.5 text-lg font-medium placeholder-gray-500 focus:ring-0"
                                                                                                                                                                                                                        />




                                                                                                                                                                                                                          <label htmlFor="title" className="sr-only">
                                                                                                                                                                                                                            {t("Sujet")} <span className="text-sm text-red-500">*</span>
                                                                                                                                                                                                                          </label>
                                                                                                                                                                                                                          <input
                                                                                                                                                                                                                            type="text"
                                                                                                                                                                                                                            placeholder="Sujet"

                                                                                                                                                                                                                            id="subject"
                                                                                                                                                                                                                            name="subject"
                                                                                                                                                                                                                            maxLength={255}
                                                                                                                                                                                                                            required
                                                                                                                                                                                                                            className="block w-full border-0 pt-2.5 text-lg font-medium placeholder-gray-500 focus:ring-0"
                                                                                                                                                                                                                          />
                                                                                                                                                                                                                          <label htmlFor="description" className="sr-only">
                                                                                                                                                                                                                          {t("comment")} <span className="text-sm text-red-500">*</span>
                                                                                                                                                                                                                          </label>
                                                                                                                                                                                                                          <textarea
                                                                                                                                                                                                                            rows={2}
                                                                                                                                                                                                                            name="comment"
                                                                                                                                                                                                                            id="comment"
                                                                                                                                                                                                                            className="block w-full resize-none border-0 py-0 placeholder-gray-500 focus:ring-0 sm:text-sm"
                                                                                                                                                                                                                            placeholder="Ecrivez un commentaire..."
                                                                                                                                                                                                                            defaultValue={''}
                                                                                                                                                                                                                          />

                                                                                                                                                                                                                          <textarea
                                                                                                                                                                                                                            id="nodeid"
                                                                                                                                                                                                                            name="nodeid"
                                                                                                                                                                                                                            value={node.id}
                                                                                                                                                                                                                            className="hidden"
                                                                                                                                                                                                                          ></textarea>

                                                                                                                                                                                                                          <div aria-hidden="true">
                                                                                                                                                                                                                            <div className="py-2">
                                                                                                                                                                                                                              <div className="h-9" />
                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                            <div className="h-px" />
                                                                                                                                                                                                                            <div className="py-2">
                                                                                                                                                                                                                              <div className="py-px">
                                                                                                                                                                                                                                <div className="h-9" />
                                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                        </div>

                                                                                                                                                                                                                        <div className="absolute inset-x-px bottom-0">

                                                                                                                                                                                                                          <div className="flex items-center justify-between space-x-3 border-t border-gray-200 px-2 py-2 sm:px-3">


                                                                                                                                                                                                                            <div className="flex-shrink-0">


                                                                                                                                                                                                                              <input
                                                                                                                                                                                                                                type="submit"
                                                                                                                                                                                                                                className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                                                                                                                                                                                                disabled={formStatus?.status === "fetching"}
                                                                                                                                                                                                                                value={
                                                                                                                                                                                                                                  formStatus?.status === "fetching"
                                                                                                                                                                                                                                    ? t("envoyer")
                                                                                                                                                                                                                                    : t("envoyer")
                                                                                                                                                                                                                                }
                                                                                                                                                                                                                              />
                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                      </form>

                                                                                                  </p>
                                                                                              </details>



                                                    </div>



    </article>
  )
}
