import Image from "next/image"
import { DrupalNode } from "next-drupal"
import useSWR from 'swr'
import { useRouter } from "next/router"
import { getSession, useSession, signOut } from "next-auth/react";
import { absoluteURL, formatDate } from "lib/utils"
import classNames from "classnames"
import * as React from "react"
import { useTranslation } from "next-i18next"



interface NodeFinancementProps extends React.HTMLProps<HTMLFormElement> {}


interface NodeFinancementProps {
  node: DrupalNode
  status: "success" | "error" | "fetching"
  message?: string | string[]
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
    {node.uid?.display_name ? (

      <div className="grid grid-cols-12 gap-4">

      <div>
      <Image
        src={absoluteURL(node.uid?.user_picture.uri.url)}
        width={100}
        height={100}
        class="rounded-full"
        objectFit="cover rounded-full"
        alt={node.field_media_image.field_media_image.resourceIdObjMeta.alt}
        priority
      />
      </div>
      <div class="text-base font-bold col-span-11 align-middle">
{node.uid?.display_name}
</div>
      </div>
    ) : null}
      <h1 className="mb-4 text-6xl font-black leading-tight">{node.title}</h1>

      <div className="mb-4 text-gray-600">
  <div class="asset-card mb-3">

      <div className="grid grid-cols-12 gap-4">
        <div>
        <svg width="53" height="42" viewBox="0 0 53 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_1092_1243)">
        <rect width="42" height="42" rx="21" fill="#F3F4F6"/>
        <path d="M18.9438 17.6109C19.147 17.4755 19.398 17.3544 19.6875 17.2607L19.6875 19.4893C19.398 19.3956 19.147 19.2745 18.9438 19.1391C18.4659 18.8205 18.375 18.5245 18.375 18.375C18.375 18.2255 18.4659 17.9295 18.9438 17.6109Z" fill="#012BDD"/>
        <path d="M22.3125 24.7393L22.3125 22.5107C22.6021 22.6044 22.853 22.7255 23.0562 22.8609C23.5341 23.1795 23.625 23.4755 23.625 23.625C23.625 23.7745 23.5341 24.0705 23.0562 24.3891C22.853 24.5245 22.6021 24.6456 22.3125 24.7393Z" fill="#012BDD"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M21 31.5C26.799 31.5 31.5 26.799 31.5 21C31.5 15.201 26.799 10.5 21 10.5C15.201 10.5 10.5 15.201 10.5 21C10.5 26.799 15.201 31.5 21 31.5ZM22.3125 14.4375C22.3125 13.7126 21.7249 13.125 21 13.125C20.2751 13.125 19.6875 13.7126 19.6875 14.4375V14.5582C18.8717 14.7115 18.1171 15.0072 17.4877 15.4268C16.5405 16.0582 15.75 17.0747 15.75 18.375C15.75 19.6753 16.5405 20.6918 17.4877 21.3232C18.1171 21.7428 18.8717 22.0385 19.6875 22.1918L19.6875 24.7396C19.1743 24.573 18.7939 24.3231 18.5806 24.0773C18.1056 23.5298 17.2766 23.4711 16.7291 23.9462C16.1816 24.4212 16.1229 25.2502 16.598 25.7977C17.3362 26.6485 18.4532 27.2092 19.6875 27.4413L19.6875 27.5625C19.6875 28.2873 20.2751 28.875 21 28.875C21.7248 28.875 22.3125 28.2874 22.3125 27.5625L22.3125 27.4418C23.1284 27.2886 23.883 26.9928 24.5123 26.5732C25.4595 25.9418 26.25 24.9253 26.25 23.625C26.25 22.3247 25.4595 21.3082 24.5123 20.6768C23.8829 20.2572 23.1284 19.9615 22.3125 19.8082L22.3125 17.2604C22.8257 17.427 23.2061 17.6769 23.4194 17.9227C23.8945 18.4702 24.7234 18.5289 25.2709 18.0538C25.8184 17.5788 25.8771 16.7498 25.4021 16.2023C24.6638 15.3515 23.5468 14.7908 22.3125 14.5587V14.4375Z" fill="#012BDD"/>
        </g>
        <defs>
        <filter id="filter0_d_1092_1243" x="-10.5" y="-10.5" width="63" height="63" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feMorphology radius="10.5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_1092_1243"/>
        <feOffset/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1092_1243"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1092_1243" result="shape"/>
        </filter>
        </defs>
        </svg>

    </div>
    <div class="text-base font-bold col-span-11 align-middle">
      <span className="text-xl fedblueblue font-semibold">   Montant de lapos;apport </span><br/>
    <span className="text-3xl font-bold">  {node.field_estimation_du_prix}€</span>
    </div>
      </div>

</div>



        <span>
        {node.promote}
        {node.sticky}
  <h1 className="mb-4 text-6xl font-black leading-tight">      {node.sticky}</h1>
        </span>
      </div>
 {node.promote}

      {node.field_media_image && (
        <figure>
          <Image
            src={absoluteURL(node.field_media_image.field_media_image.uri.url)}
            width={768}
            height={400}
            layout="responsive"
            objectFit="cover"
            alt={node.field_media_image.field_media_image.resourceIdObjMeta.alt}
            priority
          />


          {node.field_media_image.field_media_image.resourceIdObjMeta.title && (
            <figcaption className="py-2 text-sm text-center text-gray-600">
              {node.field_media_image.field_media_image.resourceIdObjMeta.title}
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


          <div class="flow-root">
            <ul role="list" class="-mb-8">
              <li>
                <div class="relative pb-8">
                  <span class="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                  <div class="relative flex items-start space-x-3">
                    <div class="relative">

                      <span class="absolute -bottom-0.5 -right-1 rounded-tl bg-white px-0.5 py-px">

                        <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M10 2c-2.236 0-4.43.18-6.57.524C1.993 2.755 1 4.014 1 5.426v5.148c0 1.413.993 2.67 2.43 2.902.848.137 1.705.248 2.57.331v3.443a.75.75 0 001.28.53l3.58-3.579a.78.78 0 01.527-.224 41.202 41.202 0 005.183-.5c1.437-.232 2.43-1.49 2.43-2.903V5.426c0-1.413-.993-2.67-2.43-2.902A41.289 41.289 0 0010 2zm0 7a1 1 0 100-2 1 1 0 000 2zM8 8a1 1 0 11-2 0 1 1 0 012 0zm5 1a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                        </svg>
                      </span>
                    </div>
                    <div class="min-w-0 flex-1">
                      <div>
                        <div class="text-sm">
                          <a href="#" class="font-medium text-gray-900">  {comment.attributes.thread}</a>


                        </div>
                        <p class="mt-0.5 text-sm text-gray-500">{comment.attributes.created}</p>
                      </div>
                      <div class="mt-2 text-sm text-gray-700">
                      <p>{comment.attributes.subject}</p>

                        <p><div
                          dangerouslySetInnerHTML={{ __html: comment.attributes.comment_body.value }}
                          className="mt-6 text-xl leading-loose"
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






                                                    <div class="asset-card asset-card-inherit mb-3">



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
</div>

                                                    <div class="asset-card mb-3">



                                                    <div className="grid grid-cols-12 gap-4">
                                                    <div>
                                                    <svg width="50" height="43" viewBox="0 0 50 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g filter="url(#filter0_d_1092_2943)">
                                                    <rect y="0.996094" width="42" height="42" rx="21" fill="#F3F4F6"/>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M31.1156 21.068C31.6281 21.5806 31.6281 22.4116 31.1156 22.9242L21.9281 32.1117C21.4155 32.6242 20.5845 32.6242 20.0719 32.1117L10.8844 22.9242C10.6281 22.6678 10.5 22.3319 10.5 21.9959V15.4336C10.5 13.259 12.2629 11.4961 14.4375 11.4961H21.0004C21.3361 11.4962 21.6719 11.6243 21.9281 11.8805L31.1156 21.068ZM14.4375 16.7461C15.1624 16.7461 15.75 16.1585 15.75 15.4336C15.75 14.7087 15.1624 14.1211 14.4375 14.1211C13.7126 14.1211 13.125 14.7087 13.125 15.4336C13.125 16.1585 13.7126 16.7461 14.4375 16.7461Z" fill="#012BDD"/>
                                                    </g>
                                                    <defs>
                                                    <filter id="filter0_d_1092_2943" x="-8" y="-7.00391" width="58" height="58" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                                    <feMorphology radius="8" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_1092_2943"/>
                                                    <feOffset/>
                                                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
                                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1092_2943"/>
                                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1092_2943" result="shape"/>
                                                    </filter>
                                                    </defs>
                                                    </svg>

                                                    </div>
                                                    <div class="text-base font-bold col-span-11 align-middle">
                                                    <span className="text-xl fedblueblue font-semibold">Date de livraison</span><br/>
                                                    <span className="text-3xl font-bold"> {formatDate(node.field_date_de_livraison)}</span>
                                                    </div>
                                                    </div>
                                                    </div>



    </article>
  )
}
