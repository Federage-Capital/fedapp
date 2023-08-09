import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useSession } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export  function BottomNav() {

  const { data, status } = useSession()

        if (status === "authenticated") {



  return (
    <div className="self-stretch bg-white flex flex-row py-5 px-[30px] items-center justify-between text-center text-3xs text-gray-900 border-t-[2px] border-solid border-whitesmoke-300">
      <div className="w-[46px] flex flex-col items-center justify-start gap-[4px] text-mediumblue-100">
      <Link
          href="/"
          className="inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"
        >
        <a>  <img
          className="relative w-6 h-6 overflow-hidden shrink-0"
          alt=""
          src="/component-22.svg"
        /></a>
            </Link>
        <div className="relative leading-[16px] font-medium">Accueil</div>
      </div>

      <div className="w-[46px] flex flex-col items-center justify-start gap-[4px]">
      <Link
        href="/chat"
          className="inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"
        >
        <a>
          <img
          className="relative w-6 h-6 overflow-hidden shrink-0"
          alt=""
          src="/component-14.svg"
        />
        </a>
            </Link>
        <div className="relative leading-[16px] font-medium">Messagerie</div>
      </div>
      <div className="w-[46px] flex flex-col items-center justify-start gap-[4px]">
      <Link
              href="/alluserlist"
          className="inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"
        >
        <a>
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0"
          alt=""
          src="/component-53.svg"
        />
        </a>
            </Link>
        <div className="relative leading-[16px] font-medium">Projets</div>
      </div>
      <div className="w-[46px] flex flex-col items-center justify-start gap-[4px]">
      <Link
              href="/user-account"
          className="inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"
        >
        <a>
          <img
          className="relative w-6 h-6 overflow-hidden shrink-0"
          alt=""
          src="/component-111.svg"
        />
        </a>
            </Link>
        <div className="relative leading-[16px] font-medium">Compte</div>
      </div>
    </div>
  )
}

}
