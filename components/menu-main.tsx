import classNames from "classnames"
import { DrupalMenuLinkContent } from "next-drupal"
import Link from "next/link"
import { useRouter } from "next/router"
import { MenuUser } from "components/menu-user"
import Image from 'next/image';
import * as React from "react"

interface MenuMainProps {
  items: DrupalMenuLinkContent[]
}

export function MenuMain({ items, ...props }: MenuMainProps) {
  const router = useRouter()
  const [showMenu, setShowMenu] = React.useState<Boolean>(false)



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
                      <div className="pr-5 -px-3 flex items-center">
                        <Image src="/blog.svg" height={40} width={40} alt="blog" />
                        <p className="ml-2">{item.title}</p>
                      </div>
                    )}
                    {item.title === 'Explorer' && (
                      <div className="pr-5 -px-3 flex items-center">
                        <Image src="/explorer.svg" height={40} width={40} alt="explorer" />
                        <p className="ml-2">{item.title}</p>
                      </div>
                    )}
                    {item.title !== 'Blog' && item.title !== 'Explorer' && (
                      <div className="pr-5 -px-3 flex items-center">
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

        <div className="md:hidden ">  <MenuUser /></div>

      </ul>

    </nav>
  )
}
