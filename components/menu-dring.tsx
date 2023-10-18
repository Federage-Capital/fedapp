import * as React from "react";

import Link from "next/link"
import { useTranslation } from "next-i18next"
import { getSession, useSession, signOut } from "next-auth/react";
import { Menu, Transition } from "@headlessui/react";
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import classNames from "classnames"
import { CalendarIcon, ChartBarIcon, BellIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon } from '@heroicons/react/24/outline'

import { Fragment } from 'react'
import useSWR from 'swr'
import { absoluteURL } from "lib/utils"
import Image, { ImageProps } from "next/image"

import { MenuLink } from "components/menu-link"
const fetcher = (url) => fetch(url).then((r) => r.json());

export function MenuDring() {
  const { data, status } = useSession()
  const { t } = useTranslation()


  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const { data: dansesAdduser, error: dansesAdduserError } = useSWR(() => `https://fed.septembre.io/danse-notifs-nested`, fetcher)






  if (status === "loading") {
    return null
  }

  if (status === "unauthenticated") {
    return (
      <Link href="/register" passHref>
        <a className="text-text hover:underline">{t("login")}</a>
      </Link>
    )
  }

  if (status === "authenticated") {
    return (

      <Menu as="div" className="relative ml-3">
        <div>

          <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-fedblueblue focus:ring-offset-2">
            <span className="sr-only">Open Dring menu</span>

            <BellIcon className="h-6 w-6" aria-hidden="true" />





          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >


          <Menu.Items className="absolute right-0 z-10 mt-2 w-96 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">



                Alertes - session.user.userId



            {dansesAdduser?.length ? (

              <>

                {dansesAdduser.map((adduser) => (
                  <div key={adduser.id} className="grid grid-cols-1 divide-y-8">

                    # {adduser.id} <br />


{adduser.payload.entity.label}
                  </div>
                ))}

              </>
            ) : (
              <p className="text-2xl cadre text-center p-20 mb-10">


                <p>   Vide 2</p>

              </p>
            )}






            <Menu.Item>
              {({ active }) => (
                <div
                  className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 text-md')}

                  onClick={() => signOut()}
                >
                  {t("Déconnexion")}
                </div>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>




    )
  }
}
