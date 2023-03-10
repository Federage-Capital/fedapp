import classNames from "classnames"
import { DrupalMenuLinkContent } from "next-drupal"
import Link from "next/link"
import { useRouter } from "next/router"
import { MenuUser } from "components/menu-user"
import * as React from "react"
import siteConfig from "site.config"
import { Fragment } from 'react'
import Image from "next/image"

import { Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,

  XMarkIcon,
} from '@heroicons/react/24/outline'
interface MenuMainmobProps {
  items: DrupalMenuLinkContent[]
}

export function MenuMainmob({ items, ...props }: MenuMainProps) {
  const router = useRouter()
  const [showMenu, setShowMenu] = React.useState<Boolean>(false)


  return (
    <Popover className="relative bg-white">
      <div className="pointer-events-none absolute inset-0 z-30" aria-hidden="true" />
      <div className="relative z-20">
        <div className="mx-auto flex max-w-screen-2xl items-center justify-between py-5 px-6 sm:py-4 md:justify-start md:space-x-10 lg:px-0">
        <div className="md:hidden">
          <a href="#" className="flex">
            <span className="sr-only">CHPV</span>
            <Link href="/" passHref>
              <a className="flex justify-start">

              <Image src="/logo.svg" height={100} width={200}  />

                <span className="sr-only">{siteConfig.name}</span>
              </a>
            </Link>
          </a>
        </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>



        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6 sm:pb-8">
              <div className="flex items-center justify-between">
                <div>
                <Link href="/" passHref>
                  <a className="flex justify-end">

                  <Image src="/logo.svg" height={70} width={150}  />

                    <span className="sr-only">{siteConfig.name}</span>
                  </a>
                </Link>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6 sm:mt-8">
                <nav>
                  <div className="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">

                  <nav {...props}>

                    <ul className="text-left w-full pt-8 space-y-6 md:pt-0 md:space-y-0 md:flex-row md:space-x-14">
                      {items.map((item) => {
                        const isActive =
                          router.asPath === item.url ||
                          `/${router.locale}${router.asPath === "/" ? "" : router.asPath}` ===
                            item.url ||
                          (item.url !== "/" ? router.asPath.indexOf(item.url) === 0 : false)

                        return (
                          <li key={item.id}>
                            <Link href={item.url} passHref>
                              <a
                                className={classNames(
                                  "text-base font-medium text-gray-500 hover:text-gray-900",
                                  {
                                    "border-b-primary": isActive,
                                  }
                                )}
                              >
                                {item.title}
                              </a>
                            </Link>
                          </li>
                        )
                      })}
                    </ul>

                  </nav>






                  </div>
                  <div className="mt-8 text-base">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      View all
                      <span aria-hidden="true"> &rarr;</span>
                    </a>
                  </div>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5">




            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>

  )
}
