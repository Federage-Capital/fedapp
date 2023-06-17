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
import { ButtonConnexion } from "components/connexion-desktop"

import { useRouter } from "next/router"
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
  const router = useRouter()

  const containerClasses = `container relative flex-wrap  items-center gray-500 py-6 md:flex lg:py-10 gray-500`;

  if (status === "authenticated" && router.asPath !== "/" && router.asPath !== "/alluserlist") {
    return (
      <header className={`max-w-screen-lg mx-auto md:bg-transparent ${showMenu ? "bg-white" : ""}`}>
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
  } else if (status === "authenticated") {
    return (
      <>
      <header className={`max-w-screen-lg mx-auto md:bg-transparent ${showMenu ? "bg-white" : ""}`}>

        <div className={containerClasses}>
          <Link href="/" passHref>
            <a className="flex justify-start ml-5">
              <Image src="/federage-logo.svg" height={100} width={200} alt="Logo federage" />
              <span className="sr-only">{siteConfig.name}</span>
            </a>
          </Link>



          <div
            className={classNames(
              "max-h-0 transition-all overflow-hidden md:max-h-screen z-50 md:z-0 absolute md:relative",
              {
                "max-h-max bg-white md:bg-transparent": showMenu,
              }
            )}
          >


              <MenuMain items={menus.main} className="ml-10 order-0" />


            </div>

            {!showMenu && (
              <button
                className="absolute transition-all border border-transparent md:hidden right-0 mt-2 top-12 hover:border-link"
                onClick={() => setShowMenu(!showMenu)}
              >

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-8 h-8 mr-5"
                >
                  <path d="M3 12h18M3 6h18M3 18h18" />
                </svg>
              </button>
            )}

            {showMenu && (
              <button className="absolute transition-all border border-transparent md:hidden right-0 mt-2 top-12 hover:border-link mr-5"
                onClick={() => setShowMenu(!showMenu)}>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <g clip-path="url(#clip0_712_7983)">
                    <path d="M9 27L27 9M9 9L27 27" stroke="#111827" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_712_7983">
                      <rect width="36" height="36" rx="9" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            )}
            <div className="grow">  </div>
            <div className="hidden md:block flex">  <MenuUser /></div>

          </div>
        </header>
      </>
    );

  }
  return (
    <header className={`max-w-screen-lg mx-auto md:bg-transparent ${showMenu ? "bg-white" : ""}`}>

      <div className={containerClasses}>
        <Link href="/" passHref>
          <a className="flex justify-start ml-5">
            <Image src="/federage-logo.svg" height={100} width={200} alt="Logo federage" />
            <span className="sr-only">{siteConfig.name}</span>
          </a>
        </Link>



        <div
          className={classNames(
            "max-h-0 transition-all overflow-hidden md:max-h-screen z-50 md:z-0 absolute md:relative",
            {
              "max-h-max bg-white md:bg-transparent": showMenu,
            }
          )}
        >


          <MenuMain items={menus.main} className="md:ml-10 order-0" />


        </div>
        <div className="grow">  </div>
        {!showMenu && (
          <button
            className="absolute transition-all border border-transparent md:hidden right-0 mt-2 top-12 hover:border-link"
            onClick={() => setShowMenu(!showMenu)}
          >

            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 h-8 mr-5"
            >
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
        )}

        {showMenu && (
          <button className="absolute transition-all border border-transparent md:hidden right-0 mt-2 top-12 hover:border-link mr-5"
            onClick={() => setShowMenu(!showMenu)}>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <g clip-path="url(#clip0_712_7983)">
                <path d="M9 27L27 9M9 9L27 27" stroke="#111827" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_712_7983">
                  <rect width="36" height="36" rx="9" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        )}

        <div className="hidden md:block flex">  <MenuUser /></div>
        <div className="hidden md:block"> <ButtonConnexion /></div>

      </div >
    </header >

  )
}
