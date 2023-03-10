import * as React from "react"
import Link from "next/link"
import { DrupalMenuLinkContent } from "next-drupal"
import classNames from "classnames"
import { useSession, signIn, signOut } from "next-auth/react"

import siteConfig from "site.config"
import { LocaleSwitcher } from "components/locale-switcher"
import { MenuMain } from "components/menu-main"
<<<<<<< Updated upstream
import { MenuUser } from "components/menu-user"
import { MenuDring } from "components/menu-dring"
=======
import { MenuMainmob } from "components/menu-main-mob"

import { MenuStd } from "components/menu-std"
>>>>>>> Stashed changes

import { FormSearch } from "components/form--search"
import Image from "next/image"


<<<<<<< Updated upstream
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react';

import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
=======
import { ChevronDownIcon } from '@heroicons/react/20/solid'
>>>>>>> Stashed changes


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

<<<<<<< Updated upstream
      <div className="container relative flex-wrap items-center justify-between py-6 md:flex lg:py-10">
      <Link href="/" passHref>
        <a className="flex justify-start">

        <Image src="/federage-logo.svg" height={100} width={200}  alt="Logo federage" />

          <span className="sr-only">{siteConfig.name}</span>
        </a>
      </Link>

        <button
          className="absolute transition-all border border-transparent md:hidden right-0 mt-2 top-12 hover:border-link"
          onClick={() => setShowMenu(!showMenu)}
        >
=======
    <header className="max-w-screen-2xl mx-auto container">

    <div class="hidden md:flex">
    <div className="flex-start">
      <a href="#" className="flex">
        <span className="sr-only">CHPV</span>
        <Link href="/" passHref>
          <a className="flex justify-start">

          <Image src="/logo.svg" height={200} width={300}  />

            <span className="sr-only">{siteConfig.name}</span>
          </a>
        </Link>
      </a>
    </div>
    <div className="grow">



</div>


    <div className="flex-end ">
<div className="h-full">
     <MenuMain items={menus.main} />
</div>
</div>


</div>


<MenuMainmob items={menus.main} />

>>>>>>> Stashed changes


<<<<<<< Updated upstream
          <div
            className={classNames(
              "max-h-0 transition-all overflow-hidden md:max-h-screen",
              {
                "max-h-screen": showMenu,
              }
            )}
          >


          <MenuMain items={menus.main} />
=======
>>>>>>> Stashed changes

    </header>

  )
}
