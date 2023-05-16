import { DrupalNode } from "next-drupal"
import { useTranslation } from "next-i18next"
import { useRouter } from "next/router"
import Link from "next/link";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'

import { formatDate } from "lib/utils"

interface NodeFinancementRowProps {
  node: DrupalNode,

}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export function NodeFinancementRow({ node, ...props }: NodeFinancementRowProps) {
  const { t } = useTranslation()
  const router = useRouter()

  async function handleDelete() {
    if (!window?.confirm(t("are-you-use-you-want-to-delete-this-article"))) {
      return
    }

    const response = await fetch(`/api/publish/financement/${node.id}`, {
      method: "DELETE",
    })

    if (response?.ok) {
     router.push("/account")
    }
  }

  async function handlePublish() {
    if (!window?.confirm(t("are-you-use-you-want-to-publish-this-article"))) {
      return
    }

    const response = await fetch(`/api/publish/financement/${node.id}`, {
      method: "PUT",

        })

    if (response?.ok) {
      router.reload()
    }
  }


  async function handleAgreed() {
    if (!window?.confirm(t("are-you-use-you-are-agree-with-the-terms"))) {
      return
    }

    const response = await fetch(`/api/publish/financement/${node.id}`, {
      method: "PUT",

        })

    if (response?.ok) {
      router.reload()
    }
  }




  return (
    <article

      {...props}
    >

    <Menu as="div" className="relative ml-4 inline-block text-left">
         <div>
           <Menu.Button className="flex items-center rounded-full bg-gray-100 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
             <span className="sr-only">Open options</span>
             <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
           </Menu.Button>
         </div>

         <Transition
           as={Fragment}
           enter="transition ease-out duration-100"
           enterFrom="transform opacity-0 scale-95"
           enterTo="transform opacity-100 scale-100"
           leave="transition ease-in duration-75"
           leaveFrom="transform opacity-100 scale-100"
           leaveTo="transform opacity-0 scale-95"
         >
           <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
             <div className="py-1">
                {node.field_statut == 'Proposé' &&
               <Menu.Item>
                 {({ active }) => (
                   <a
 onClick={() => handleAgreed()}
                      className={classNames(
                       active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                       'block px-4 py-2 text-sm'
                     )}
                   >

{t("Agree")}







                   </a>
                 )}
               </Menu.Item>
                  }
               <Menu.Item>
                 {({ active }) => (
                   <a
                     href={`/financement/edit?gid=${encodeURIComponent(node.id)}`}
                     className={classNames(
                       active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                       'block px-4 py-2 text-sm'
                     )}
                   >


           Modifier


                   </a>
                 )}
               </Menu.Item>
               <Menu.Item>
                 {({ active }) => (
                   <a
                  onClick={() => handleDelete()}
                     className={classNames(
                       active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                       'block px-4 py-2 text-sm'
                     )}
                   >





                           {t("delete")}



                   </a>
                 )}
               </Menu.Item>

             </div>
           </Menu.Items>
         </Transition>
       </Menu>
      <div className="flex items-start justify-between text-text">







            {node.field_statut == 'Accepter' &&
                    <h2>

            Do something

                    </h2>




            }
        {node.moderation_state == 'published' &&
                <h2>
                <Link href={node.path.alias} passHref>

              <a>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 ml-2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>

              </a>
                </Link>
                </h2>




        }




        {node.moderation_state == 'Draft' &&
                <h2>





<button
  onClick={() => handlePublish()}
  className="px-2 py-1 text-white redbutton rounded-md hover:bg-error bg-error/80"
>
  {t("publish")}
</button>







                </h2>




        }








      </div>
    </article>
  )
}
