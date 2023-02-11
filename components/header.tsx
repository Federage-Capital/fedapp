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
                    <div className="absolute inset-y-0 left-0 flex items-center">
                        <MenuUser />
                    </div>
                    <div className="flex flex-1 items-center justify-center">
                      <div className="flex flex-shrink-0 items-center">
                      </div>

                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                      <button
                        type="button"
                        className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-fedblue focus:ring-offset-2"
                      >
                        <span className="sr-only">View notifications</span>
                             <MenuDring />
                      </button>


                    </div>
                  </div>
                </div>


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

        <Image src="/federage-logo.svg" height={100} width={200}  alt="Logo federage" />

          <span className="sr-only">{siteConfig.name}</span>
        </a>
      </Link>

        <button
          className="absolute transition-all border border-transparent md:hidden right-4 top-12 hover:border-link"
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
