import * as React from "react";
import classNames from "classnames"
import Link from "next/link"
import { DrupalNode } from "next-drupal"
import { useTranslation } from "next-i18next"
import { useRouter } from "next/router"

import { MediaImage } from "components/media--image"


interface NodeFinCommentProps {
  node: DrupalNode
}

interface NodeFinCommentProps extends React.HTMLProps<HTMLFormElement> {}


export function NodeFinComment({ node, className, ...props }: NodeFinCommentProps) {

      const [formStatus, setFormStatus] = React.useState<FormStatus>(null)
      const { t } = useTranslation()
      const router = useRouter()





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
    <p
      className="relative flex flex-col p-4 space-y-4 overflow-hidden bg-white border border-border group"
      {...props}
    >

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
  )
}
