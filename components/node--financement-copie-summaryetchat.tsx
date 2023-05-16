import * as React from "react";
import Image from "next/image"
import useSWR from 'swr'
import { useRouter } from "next/router"
import { getSession, useSession, signOut } from "next-auth/react";
import { absoluteURL, formatDate } from "lib/utils"
import { useTranslation } from "next-i18next"
import { NodeFinComment } from "components/node--financement--comment"
import { NodeComment } from "components/node--comments"

import classNames from "classnames"

interface NodeFinancementProps extends React.HTMLProps<HTMLFormElement> {}


interface FormStatus {
  status: "success" | "error" | "fetching"
  message?: string | string[]
}
const fetcher = (url) => fetch(url).then((res) => res.json());



export function NodeFinancement({ node, className, ...props }: NodeFinancementProps) {
  const [formStatus, setFormStatus] = React.useState<FormStatus>(null)

  const { t } = useTranslation()
  const router = useRouter()
  const session = getSession()
  const { data: date, errorDate } = useSWR('https://fed.septembre.io/jsonapi/comment/comment?filter[entity_id.id]='+ node.id + '&filter[subject]='+ node.field_choisir_une_categorie.name,  fetcher)

  const { data: comments, error } = useSWR('https://fed.septembre.io/jsonapi/comment/comment?filter[entity_id.id]='+ node.id + '&filter[subject]='+ node.field_choisir_une_categorie.name,  fetcher)


  const { data: cbasesdeprix, errorCbasesdeprix } = useSWR('https://fed.septembre.io/jsonapi/comment/comment?filter[entity_id.id]='+ node.id + '&filter[subject]='+ node.field_base_de_prix.name,  fetcher)
  if (errorDate) return <div>Failed to load</div>
  if (!date) return <div>Loading ...</div>
  if (error) return <div>Failed to load</div>
  if (!comments) return <div>Loading ...</div>
  if (errorCbasesdeprix) return <div>Failed to load</div>
  if (!cbasesdeprix) return <div>Loading ...</div>



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
<NodeFinComment key={node.id} node={node} />

</p>
</details>

<details className="mb-5 shadow sm:rounded-lg px-4 py-5 sm:p-6">

                                                                  <summary className="text-lg w-100">
Type d'apport : {node.field_choisir_une_categorie.name}
                                                        </summary>
                                                                  <p className="mt-2 max-w-xl text-sm text-gray-500">




                                                                  {comments.data?.length ? (

                                                                  <p>


                                                                      {comments.data.map((comment, index) => (

                                                                      <div key={index} className="asset-card mb-3">





                                                                  <p>





{comment.id}
  <NodeComment key={comment.id} node={comment} />


                                                                  </p>

                                                                      </div>

                                                                                            ))}



                                                                  </p>
                                                                                                                ) : (
                                                                  <p> <NodeFinComment key={node.id} node={node} /></p>
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




                                                                                                                                                                                    <textarea
                                                                                                                                                                                    id="subject"
                                                                                                                                                                                      name="subject"
                                                                                                                                                                                      value={node.field_choisir_une_categorie.name}
                                                                                                                                                                                    ></textarea>

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



<details className="mb-5 shadow sm:rounded-lg px-4 py-5 sm:p-6">

                                                                  <summary className="text-lg w-100">
Base de prix :   {node.field_base_de_prix.name}


                                             </summary>
                                                                  <p className="mt-2 max-w-xl text-sm text-gray-500">

                                                                  {cbasesdeprix.data?.length ? (

                                                                  <p>


                                                                      {cbasesdeprix.data.map((cbasedeprix, index) => (

                                                                      <div key={index} className="asset-card mb-3">





                                                                  <p>






                                          <NodeComment key={cbasedeprix.id} node={cbasedeprix} />


                                                                  </p>

                                                                      </div>

                                                                                            ))}



                                                                  </p>
                                                                                                                ) : (
                                                                  <p> <NodeFinComment key={node.id} node={node} /></p>
                                                                                                                )}                                                                                                                                                                    <form
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




                                                                                                                                                                                                                                                      <textarea
                                                                                                                                                                                                                                                      id="subject"
                                                                                                                                                                                                                                                        name="subject"
                                                                                                                                                                                                                                                        value= {node.field_base_de_prix.name}


                                                                                                                                                                                                                                                      ></textarea>

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



{node.id}







</div>


    </article>
  )
}
