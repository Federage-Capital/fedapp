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
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">



                </div>
                <div className=" sm:ml-6 sm:flex sm:space-x-8">



                <Link
                    href="/"
                    className="inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"
                  >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_2839_1567)">
<path fillRule="evenodd" clipRule="evenodd" d="M11.2633 0.229798C11.6966 -0.0765992 12.3034 -0.0765992 12.7367 0.229798L23.5367 7.86616C23.829 8.07284 24 8.39063 24 8.72727V20.7273C24 21.5953 23.6207 22.4277 22.9456 23.0414C22.2705 23.6552 21.3548 24 20.4 24H3.6C2.64522 24 1.72955 23.6552 1.05442 23.0414C0.379285 22.4277 0 21.5953 0 20.7273V8.72727C0 8.39063 0.170967 8.07284 0.463271 7.86616L11.2633 0.229798ZM2.4 9.26082V20.7273C2.4 21.0166 2.52643 21.2941 2.75147 21.4987C2.97652 21.7032 3.28174 21.8182 3.6 21.8182H20.4C20.7183 21.8182 21.0235 21.7032 21.2485 21.4987C21.4736 21.2941 21.6 21.0166 21.6 20.7273V9.26082L12 2.47294L2.4 9.26082Z" fill="#012BDD"/>
<path fillRule="evenodd" clipRule="evenodd" d="M7.19995 12.0001C7.19995 11.3976 7.73721 10.9092 8.39995 10.9092H15.6C16.2627 10.9092 16.8 11.3976 16.8 12.0001V22.9092C16.8 23.5117 16.2627 24.0001 15.6 24.0001C14.9372 24.0001 14.4 23.5117 14.4 22.9092V13.091H9.59995V22.9092C9.59995 23.5117 9.06269 24.0001 8.39995 24.0001C7.73721 24.0001 7.19995 23.5117 7.19995 22.9092V12.0001Z" fill="#012BDD"/>
</g>
<defs>
<clipPath id="clip0_2839_1567">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
    </Link>
<Link
href="/chat"
className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
>
Home

                    </Link>
                    <Link
                    href="/chat"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_2839_1572)">
    <path d="M18.6667 6.0002H21.0667C22.3922 6.0002 23.4667 7.07471 23.4667 8.4002V15.6002C23.4667 16.9257 22.3922 18.0002 21.0667 18.0002H18.6667V22.8002L13.8667 18.0002H9.0667C8.40396 18.0002 7.80396 17.7316 7.36964 17.2973M7.36964 17.2973L11.4667 13.2002H16.2667C17.5922 13.2002 18.6667 12.1257 18.6667 10.8002V3.6002C18.6667 2.27471 17.5922 1.2002 16.2667 1.2002H4.2667C2.94122 1.2002 1.8667 2.27471 1.8667 3.6002V10.8002C1.8667 12.1257 2.94122 13.2002 4.2667 13.2002H6.6667V18.0002L7.36964 17.2973Z" stroke="#111827" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
    <defs>
    <clipPath id="clip0_2839_1572">
    <rect width="24" height="24" fill="white" transform="translate(0.666687)"/>
    </clipPath>
    </defs>
    </svg>
      </Link >
      <Link
      href="/chat"
      className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
    >
Messagerie

                  </Link >

                  <Link
                    href="/alluserlist"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.1334 22.8002L15.9334 15.6002M18.3334 9.6002C18.3334 14.2394 14.5726 18.0002 9.93339 18.0002C5.29419 18.0002 1.53339 14.2394 1.53339 9.6002C1.53339 4.961 5.29419 1.2002 9.93339 1.2002C14.5726 1.2002 18.3334 4.961 18.3334 9.6002Z" stroke="#111827" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
  </Link >
                  <Link
                    href="/alluserlist"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
Recherche

                  </Link >
                  <Link href="/user-account"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M2 3C2 2.44772 2.44772 2 3 2H10C10.5523 2 11 2.44772 11 3V12C11 12.5523 10.5523 13 10 13H3C2.44772 13 2 12.5523 2 12V3ZM4 4V11H9V4H4Z" fill="#111827"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M13 3C13 2.44772 13.4477 2 14 2H21C21.5523 2 22 2.44772 22 3V8C22 8.55228 21.5523 9 21 9H14C13.4477 9 13 8.55228 13 8V3ZM15 4V7H20V4H15Z" fill="#111827"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M13 12C13 11.4477 13.4477 11 14 11H21C21.5523 11 22 11.4477 22 12V21C22 21.5523 21.5523 22 21 22H14C13.4477 22 13 21.5523 13 21V12ZM15 13V20H20V13H15Z" fill="#111827"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M2 16C2 15.4477 2.44772 15 3 15H10C10.5523 15 11 15.4477 11 16V21C11 21.5523 10.5523 22 10 22H3C2.44772 22 2 21.5523 2 21V16ZM4 17V20H9V17H4Z" fill="#111827"/>
      </svg>

  </Link >
<Link href="/user-account"
  className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
>Réglages

                  </Link >

                </div>
              </div>


            </div>
          </div>


        </>
      )}
    </Disclosure>
  )
}

}
