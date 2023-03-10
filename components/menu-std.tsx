import classNames from "classnames"
import { DrupalMenuLinkContent } from "next-drupal"
import Link from "next/link"
import { useRouter } from "next/router"
import * as React from "react"

interface MenuStdProps {
  items: DrupalMenuLinkContent[]
}

export function MenuStd({ items, ...props }: MenuStdProps) {
  const router = useRouter()
  const [showMenu, setShowMenu] = React.useState<Boolean>(false)

  return (
    <nav {...props}>

      <ul className="flex flex-col items-center justify-center w-full pt-8 space-y-6 md:pt-0 md:space-y-0 md:flex-row md:space-x-14">
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
  )
}
