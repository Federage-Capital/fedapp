import * as React from "react";
import Link from "next/link"
import { useSession, signOut } from "next-auth/react"
import { Menu, Transition } from '@headlessui/react';

import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import classNames from "classnames"
import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon } from '@heroicons/react/24/outline'

import { Fragment } from 'react'
import useSWR from 'swr'
import { absoluteURL } from "lib/utils"
import Image, { ImageProps } from "next/image"
import { useTranslation } from "next-i18next"

import { MenuLink } from "components/menu-link"
import MenuConnexion from "components/menu-connexion"
import { MenuDring } from "components/menu-dring";
const fetcher = (url) => fetch(url).then((r) => r.json());

export function MenuUser() {
  const { data, status } = useSession()
  const { t } = useTranslation();

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const { data: actualuser, error: actualuserError } = useSWR(() => `https://fed.septembre.io/actualuser` + `/` + data.user.userId, fetcher)
  if (actualuserError) return <div>Failed to load User</div>
  if (status === "loading") {
    return null
  }

  if (status === "unauthenticated") {
    return (
      <div className="md:hidden border flex justify-center rounded-b-lg">
        <MenuConnexion text='Mentions légales' text_confi="Confidentialité" text_press="CGU" />
      </div >
    )
  }

  if (status === "authenticated") {
    return (

      <Menu as="div" className="relative">
        <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-fedblueblue focus:ring-offset-2">
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
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
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
                  <div className="flex space-x-2">
                    <svg width="18" height="14" viewBox="0 0 20 16" fill="none">
                      <path d="M15 4.99902V2.99902C15 1.89445 14.1046 0.999023 13 0.999023H3C1.89543 0.999023 1 1.89445 1 2.99902V8.99902C1 10.1036 1.89543 10.999 3 10.999H5M7 14.999H17C18.1046 14.999 19 14.1036 19 12.999V6.99902C19 5.89445 18.1046 4.99902 17 4.99902H7C5.89543 4.99902 5 5.89445 5 6.99902V12.999C5 14.1036 5.89543 14.999 7 14.999ZM14 9.99902C14 11.1036 13.1046 11.999 12 11.999C10.8954 11.999 10 11.1036 10 9.99902C10 8.89445 10.8954 7.99902 12 7.99902C13.1046 7.99902 14 8.89445 14 9.99902Z" stroke="#9CA3AF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div>
                      {t("Finances")}
                    </div>
                  </div>
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
                  <div className="flex space-x-2">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V9C21 7.89543 20.1046 7 19 7H13L11 5H5C3.89543 5 3 5.89543 3 7Z" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div>

                      {t("Projets")}
                    </div>
                  </div>
                </MenuLink>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <MenuLink
                  href="/comptabilite"
                  className={classNames(
                    "flex hover:bg-body w-full px-3 py-2 text-text",
                    {
                      "bg-body": active,
                    }
                  )}
                >
                  <div className="flex space-x-1">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M9 19V13C9 11.8954 8.10457 11 7 11H5C3.89543 11 3 11.8954 3 13V19C3 20.1046 3.89543 21 5 21H7C8.10457 21 9 20.1046 9 19ZM9 19V9C9 7.89543 9.89543 7 11 7H13C14.1046 7 15 7.89543 15 9V19M9 19C9 20.1046 9.89543 21 11 21H13C14.1046 21 15 20.1046 15 19M15 19V5C15 3.89543 15.8954 3 17 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H17C15.8954 21 15 20.1046 15 19Z" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div className="flex">

                      {t("Comptabilité")}
                    </div>

                  </div>
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
                  <div className="flex space-x-2">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M12 4.35418C12.7329 3.52375 13.8053 3 15 3C17.2091 3 19 4.79086 19 7C19 9.20914 17.2091 11 15 11C13.8053 11 12.7329 10.4762 12 9.64582M15 21H3V20C3 16.6863 5.68629 14 9 14C12.3137 14 15 16.6863 15 20V21ZM15 21H21V20C21 16.6863 18.3137 14 15 14C13.9071 14 12.8825 14.2922 12 14.8027M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div>

                      {t("Partenaires")}
                    </div>
                  </div>
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
                <Link href="/user-account">
                  <a

                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                  >
                    <p className="text-base">

                      {t("Paramètres")}
                    </p>
                  </a>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}

                  onClick={() => signOut()}
                >
                  <p className="text-base">
                    {t("Déconnexion")}
                  </p>
                </button>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu >




    )
  }
}
