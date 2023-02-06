import * as React from "react";
import Link from "next/link"
import { useTranslation } from "next-i18next"
import { useSession, signOut } from "next-auth/react"
import { Menu, Transition } from '@headlessui/react';

import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import classNames from "classnames"
import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon } from '@heroicons/react/24/outline'

import { Fragment } from 'react'
import useSWR from 'swr'
import { absoluteURL } from "lib/utils"
import Image, { ImageProps } from "next/image"

import { MenuLink } from "components/menu-link"
const fetcher = (url) => fetch(url).then((r) => r.json());

export function MenuUser() {
  const { data, status } = useSession()
  const { t } = useTranslation()

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

    const { data: actualuser, error: actualuserError } = useSWR(() =>`https://fed.septembre.io/actualuser`+ `/`+ data.user.userId, fetcher)
    if (actualuserError) return <div>Failed to load User</div>
  if (status === "loading") {
    return null
  }

  if (status === "unauthenticated") {
    return (
      <Link href="/login" passHref>
        <a className="text-text hover:underline">{t("login")}</a>
      </Link>
    )
  }

  if (status === "authenticated") {
    return (

      <Menu as="div" className="relative ml-3">
        <div>
          <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <span className="sr-only">Open user menu</span>


            {actualuser?.length ? (

              <div>





                                  {actualuser.map((you) => (


               <li key={you.uid} className="inline-flex">


            {you.user_picture && (


                <Image
                  src={absoluteURL(you.user_picture)}
                  alt={you.name}
                  title={you.name}
                  width={50}
                  height={50}
                  className='h-8 w-8 rounded-full'
                />

            )}
                <p className="ml-5 mt-3 text-xl">{you.name}</p>

            </li>

                                         ))}
                                         </div>
                                       ) : (

                                         <p>  Aucun utilisateur</p>

                                       )}
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

          <Menu.Items className="absolute left-0 z-10 mt-2 w-96 origin-top-left rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <MenuLink
                href="/account"
                className={classNames(
                  "flex hover:bg-body w-full px-3 py-2 text-text",
                  {
                    "bg-body": active,
                  }
                )}
              >
                {t("my-wallet")}
              </MenuLink>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <MenuLink
                href="/account"
                className={classNames(
                  "flex hover:bg-body w-full px-3 py-2 text-text",
                  {
                    "bg-body": active,
                  }
                )}
              >
                {t("Financements")}
              </MenuLink>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <MenuLink
                href="/account"
                className={classNames(
                  "flex hover:bg-body w-full px-3 py-2 text-text",
                  {
                    "bg-body": active,
                  }
                )}
              >
                {t("Comptabilité")}
              </MenuLink>
            )}
          </Menu.Item>

            <Menu.Item>
            {({ active }) => (
              <MenuLink
                href="/account"
                className={classNames(
                  "flex hover:bg-body w-full px-3 py-2 text-text",
                  {
                    "bg-body": active,
                  }
                )}
              >
                {t("Partenaires")}
              </MenuLink>
            )}
          </Menu.Item>


              <Menu.Item>
            {({ active }) => (
              <MenuLink
                href="/user-account"
                className={classNames(
                  "flex hover:bg-body w-full px-3 py-2 text-text",
                  {
                    "bg-body": active,
                  }
                )}
              >
                {t("my-account")}
              </MenuLink>
            )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/user-account"
                  className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                >
                  Settings
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}

                  onClick={() => signOut()}
                >
                  {t("logout")}
                </button>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>




    )
  }
}
