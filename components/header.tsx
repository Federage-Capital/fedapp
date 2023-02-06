import * as React from "react"
import Link from "next/link"
import { DrupalMenuLinkContent } from "next-drupal"
import classNames from "classnames"
import { useSession, signIn, signOut } from "next-auth/react"

import siteConfig from "site.config"
import { LocaleSwitcher } from "components/locale-switcher"
import { MenuMain } from "components/menu-main"
import { MenuUser } from "components/menu-user"
import { MenuDring } from "components/menu-dring"

import { FormSearch } from "components/form--search"
import Image from "next/image"


import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react';

import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'


export interface HeaderProps {
  menus: {
    main: DrupalMenuLinkContent[]
  }
}

export function Header({ menus }: HeaderProps) {
  const [showMenu, setShowMenu] = React.useState<Boolean>(false)
  const { data: session, status } = useSession()

  if (status === "authenticated") {
    return (
      <header className="max-w-screen-lg mx-auto">
      <Disclosure as="nav" className="bg-white border-b">
            {({ open }) => (
              <>
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-0">
                  <div className="relative flex h-16 justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                      <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                          <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                        )}
                      </Disclosure.Button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                      <div className="flex flex-shrink-0 items-center">
                        <MenuUser />
                      </div>

                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                      <button
                        type="button"
                        className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        <span className="sr-only">View notifications</span>
                             <MenuDring />
                      </button>


                    </div>
                  </div>
                </div>

                <Disclosure.Panel className="sm:hidden">
                  <div className="space-y-1 pt-2 pb-4">
                    <Disclosure.Button
                      as="a"
                      href="#"
                      className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
                    >
                      Dashboard
                    </Disclosure.Button>
                    <Disclosure.Button
                      as="a"
                      href="#"
                      className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                    >
                      Team
                    </Disclosure.Button>
                    <Disclosure.Button
                      as="a"
                      href="#"
                      className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                    >
                      Projects
                    </Disclosure.Button>
                    <Disclosure.Button
                      as="a"
                      href="#"
                      className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                    >
                      Calendar
                    </Disclosure.Button>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
  <div className="mt-10">

                              </div>
  </header>
    )
  }
  return (
    <header className="max-w-screen-lg px-6 mx-auto">

      <div className="container relative flex-wrap items-center justify-between py-6 md:flex lg:py-10">
      <Link href="/" passHref>
        <a className="flex justify-start">

        <Image src="/federage-logo.svg" height={100} width={200}  />

          <span className="sr-only">{siteConfig.name}</span>
        </a>
      </Link>

        <button
          className="absolute transition-all border beorder-transparent md:hidden right-4 top-12 hover:border-link"
          onClick={() => setShowMenu(!showMenu)}
        >

            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 h-8"
            >
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>

          <div
            className={classNames(
              "max-h-0 transition-all overflow-hidden md:max-h-screen",
              {
                "max-h-screen": showMenu,
              }
            )}
          >


          <MenuMain items={menus.main} />

        </div>
      </div>
    </header>

  )
}
