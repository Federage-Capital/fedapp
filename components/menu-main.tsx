import classNames from "classnames"
import { DrupalMenuLinkContent } from "next-drupal"
import Link from "next/link"
import { useRouter } from "next/router"
import { MenuUser } from "components/menu-user"
import Image from 'next/image';
import * as React from "react"
import { useSession, signOut } from "next-auth/react"
import { MenuDring } from "components/menu-dring"

interface MenuMainProps {
  items: DrupalMenuLinkContent[]
}

export function MenuMain({ items, ...props }: MenuMainProps) {
  const router = useRouter()
  const [showMenu, setShowMenu] = React.useState<Boolean>(false)
  const { status } = useSession()

  if (status === "authenticated" && router.asPath === "/" || status === "authenticated" && router.asPath === "/alluserlist") {
    return (
      <nav {...props}>
        <ul className="items-center justify-center space-y-10 rounded w-screen">
          {items.map((item) => {
            const isActive =
              router.asPath === item.url ||
              `/${router.locale}${router.asPath === "/" ? "" : router.asPath}` ===
              item.url ||
              (item.url !== "/" ? router.asPath.indexOf(item.url) === 0 : false)

            return (

              <li key={item.id} className="relative h-10 w-80">
                <Link href={item.url} passHref>
                  <a
                    className={classNames(
                      "text-lg border-b-[3px] text-gray-500 flex border-b-transparent transition-colors hover:text-primary absolute inset-y-50 left-0",
                      {
                        "border-b-primary": isActive,
                      }
                    )}
                  >
                    <div className="ml-5">
                      {item.title === 'Blog' && (
                        <div className="pr-5 -px-3 flex items-center text-black">
                          <Image src="/blog.svg" height={40} width={40} alt="blog" />
                          <p className="ml-2">{item.title}</p>
                        </div>
                      )}
                      {item.title === 'Explorer' && (
                        <div className="pr-5 -px-3 flex items-center text-black">
                          <Image src="/explorer.svg" height={40} width={40} alt="explorer" />
                          <p className="ml-2">{item.title}</p>
                        </div>
                      )}
                      {item.title !== 'Blog' && item.title !== 'Explorer' && (
                        <div className="pr-5 -px-3 flex items-center text-black">
                          <Image src="/documentation.svg" height={40} width={40} alt="documentation" />
                          <p className="ml-2">{item.title}</p>
                        </div>
                      )}
                    </div>
                  </a>
                </Link>
              </li>

            )
          })}

          <div className="border rounded-b-lg">
            <div className="flex">
              <div className="md:hidden ml-5 mt-3"><MenuUser /></div>
              <div className="absolute inset-y-50 right-0 flex items-center pr-5 sm:static sm:inset-auto sm:ml-6 sm:pr-0 mt-5">
                <button
                  type="button"
                  className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-fedblue focus:ring-offset-2"
                >
                  <span className="sr-only">View notifications</span>
                  <MenuDring />
                </button>


              </div>
            </div>
            <p className="ml-5 mt-5 text-gray-500 text-base"> Profil</p>
            <p className="ml-5 mt-5 text-gray-500 text-base">Réglage</p>
            <button
              className={classNames(showMenu ? 'bg-gray-100' : '', 'block ml-5 text-sm text-gray-500 mt-5 pb-5 text-lg')}

              onClick={() => signOut()}
            >
              <p className="text-base">Déconnexion</p>
            </button>
          </div>
        </ul>
      </nav>
    );
  }
  return (
    <nav {...props}>
      <ul className="items-center justify-center space-y-10 rounded w-screen">
        {items.map((item) => {
          const isActive =
            router.asPath === item.url ||
            `/${router.locale}${router.asPath === "/" ? "" : router.asPath}` ===
            item.url ||
            (item.url !== "/" ? router.asPath.indexOf(item.url) === 0 : false)

          return (

            <li key={item.id} className="relative h-10 w-80">
              <Link href={item.url} passHref>
                <a
                  className={classNames(
                    "text-lg border-b-[3px] text-gray-500 flex border-b-transparent transition-colors hover:text-primary absolute inset-y-50 left-0",
                    {
                      "border-b-primary": isActive,
                    }
                  )}
                >
                  <div className="ml-5">
                    {item.title === 'Blog' && (
                      <div className="pr-5 -px-3 flex items-center text-black">
                        <Image src="/blog.svg" height={40} width={40} alt="blog" />
                        <p className="ml-2">{item.title}</p>
                      </div>
                    )}
                    {item.title === 'Explorer' && (
                      <div className="pr-5 -px-3 flex items-center text-black">
                        <Image src="/explorer.svg" height={40} width={40} alt="explorer" />
                        <p className="ml-2">{item.title}</p>
                      </div>
                    )}
                    {item.title !== 'Blog' && item.title !== 'Explorer' && (
                      <div className="pr-5 -px-3 flex items-center text-black">
                        <Image src="/documentation.svg" height={40} width={40} alt="documentation" />
                        <p className="ml-2">{item.title}</p>
                      </div>
                    )}
                  </div>
                </a>
              </Link>
            </li>

          )
        })}
        <div className="md:hidden ml-0 mt-3"><MenuUser /></div>
      </ul>

    </nav>
  )
}


//     <div className="border rounded-b-lg">
//       <div className="flex">
//         <div className="md:hidden ml-0 mt-3"><MenuUser /></div>
//         <div className="absolute inset-y-50 right-0 flex items-center pr-5 sm:static sm:inset-auto sm:ml-6 sm:pr-0 mt-5">
//           <button
//             type="button"
//             className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-fedblue focus:ring-offset-2"
//           >
//             <span className="sr-only">View notifications</span>
//             <MenuDring />
//           </button>


//         </div>
//       </div>
//       <p className="ml-5 mt-5 text-gray-500"> Profil</p>
//       <p className="ml-5 mt-5 text-gray-500">Réglage</p>
//       <button
//         className={classNames(showMenu ? 'bg-gray-100' : '', 'block ml-5 text-sm text-gray-500 mt-5 pb-5')}

//         onClick={() => signOut()}
//       >
//         <p>Déconnexion</p>
//       </button>
//     </div>