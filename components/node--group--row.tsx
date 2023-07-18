import { DrupalNode } from "next-drupal"
import { useTranslation } from "next-i18next"
import { useRouter } from "next/router"
import Link from "next/link";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'

import { formatDate } from "lib/utils"

interface NodeGroupRowProps {
  node: DrupalNode,

}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export function NodeGroupRow({ node, groupe, filteredPerson1, ...props }: NodeGroupRowProps) {
  const { t } = useTranslation()
  const router = useRouter()

  async function handleDelete() {
    if (!window?.confirm(t("are-you-use-you-want-to-delete-this-article"))) {
      return
    }

    const response = await fetch(`/api/publish/groupfin/${node.id}`, {
      method: "DELETE",
    })

    if (response?.ok) {
      router.reload()
    }
  }

  async function handlePublish() {
    if (!window?.confirm(t("are-you-use-you-want-to-publish-this-article"))) {
      return
    }

    const response = await fetch(`/api/publish/groupfin/${node.id}`, {
      method: "PUT",

    })

    if (response?.ok) {
      router.reload()
    }
  }




  return (
    <article
      className=""
      {...props}
    >


      <Menu as="div" className="relative inline-block text-left">
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


              {node.moderation_state == 'draft' &&

                <Menu.Item>
                  {({ active }) => (
                    <a
                      onClick={() => handlePublish()}
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >



                      {t("publish")}


                    </a>
                  )}
                </Menu.Item>






              }
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

              <Menu.Item>
                {({ active }) => (
                  <a
                    href={`/groupfederage/edit?gid=${encodeURIComponent(node.id)}`}
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >





                    {t("modifier")}



                  </a>
                )}
              </Menu.Item>

            </div>
          </Menu.Items>
        </Transition>
      </Menu>


    </article>
  )
}
