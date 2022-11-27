import Image from "next/image"
import { DrupalNode } from "next-drupal"
import useSWR from 'swr'
import { useRouter } from "next/router"
import { getSession, useSession, signOut } from "next-auth/react";
import { absoluteUrl, formatDate } from "lib/utils"
import classNames from "classnames"
import * as React from "react"
import { useTranslation } from "next-i18next"


interface NodeFinancementProps extends React.HTMLProps<HTMLFormElement> {}

interface FormStatus {
  status: "success" | "error" | "fetching"
  message?: string | string[]
}

interface NodeFinancementProps {
  node: DrupalNode
}

const fetcher = (...args) => fetch(...args).then((res) => res.json())



export function NodeFinancement({ node, className, ...props }: NodeFinancementProps) {
  const [formStatus, setFormStatus] = React.useState<FormStatus>(null)
  const { t } = useTranslation()


    const router = useRouter()
    const session = getSession()
  const { data: comments, error } = useSWR('https://fed.septembre.io/jsonapi/comment/comment?filter[entity_id.id]='+ node.id,  fetcher)

           if (error) return <div>Failed to load</div>
           if (!comments) return <div>Loading ...</div>
           const query = router.query;


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

            router.push("/account")

              }
  return (
    <article {...props}>
      <h1 className="mb-4 text-6xl font-black leading-tight">{node.title}</h1>
      <div className="mb-4 text-gray-600">
        {node.uid?.display_name ? (
          <span>
            Posted by{" "}
            <span className="font-semibold">{node.uid?.display_name}</span>
          </span>
        ) : null}
        <span> - {formatDate(node.created)}</span>
      </div>
      {node.field_image && (
        <figure>
          <Image
            src={absoluteUrl(node.field_image.uri.url)}
            width={768}
            height={400}
            layout="responsive"
            objectFit="cover"
            alt={node.field_image.resourceIdObjMeta.alt}
            priority
          />
          {node.field_image.resourceIdObjMeta.title && (
            <figcaption className="py-2 text-sm text-center text-gray-600">
              {node.field_image.resourceIdObjMeta.title}
            </figcaption>
          )}
        </figure>
      )}
      {node.body?.processed && (
        <div
          dangerouslySetInnerHTML={{ __html: node.body?.processed }}
          className="mt-6 text-xl leading-loose prose"
        />
      )}





      {comments.data?.length ? (

      <p>
          {comments.data.map((comment) => (

          <div className="asset-card mb-3">

          <p>{comment.attributes.created}</p>

  <p>{comment.attributes.subject}</p>
  <p>

  <div
    dangerouslySetInnerHTML={{ __html: comment.attributes.comment_body.value }}
    className="mt-6 text-xl leading-loose"
  />



  </p>

          </div>

                                ))}



      </p>
                                                    ) : (


                                                            <p>   Ajouter un financement</p>

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

                                                      <div className="grid gap-2">
                                                        <label htmlFor="Sujet" className="font-semibold text-text">
                                                          {t("Sujet")} <span className="text-sm text-red-500">*</span>
                                                        </label>
                                                        <input
                                                          id="subject"
                                                          name="subject"
                                                          maxLength={255}
                                                          required
                                                          className="px-2 py-3 border-2 border-gray focus:outline-dotted focus:outline-offset-2 focus:ring-0 focus:outline-link focus:border-gray"
                                                        />
                                                      </div>

                                                      <div className="grid gap-2">
                                                        <label htmlFor="Commentaire" className="font-semibold text-text">
                                                          {t("comment")} <span className="text-sm text-red-500">*</span>
                                                        </label>
                                                        <textarea
                                                          id="comment"
                                                          name="comment"
                                                          className="h-48 px-2 py-3 border-2 border-gray focus:ring-0 focus:outline-dotted focus:outline-offset-2 focus:border-gray focus:outline-link"
                                                        ></textarea>
                                                      </div>



<div className="grid gap-2">

  <textarea
    id="nodeid"
    name="nodeid"
    value={node.id}
    className="hidden"
  ></textarea>
</div>

                                                      <div>
                                                        <input
                                                          type="submit"
                                                          className="px-6 py-3 text-xl text-white transition-colors border-2 rounded-sm cursor-pointer bg-link hover:bg-white hover:text-black border-link"
                                                          disabled={formStatus?.status === "fetching"}
                                                          value={
                                                            formStatus?.status === "fetching"
                                                              ? t("please-wait")
                                                              : t("create-article")
                                                          }
                                                        />
                                                      </div>
                                                    </form>



    </article>
  )
}
