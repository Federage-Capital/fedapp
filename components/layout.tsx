import { Meta, MetaProps } from "components/meta"
import { PreviewAlert } from "components/preview-alert"
import { Header, HeaderProps } from "components/header"
import { Footer } from "components/footer"
import { TailwindIndicator } from "components/tailwind-indicator"

export interface LayoutProps extends HeaderProps {
  meta?: MetaProps
  menus: HeaderProps["menus"]
  children?: React.ReactNode
}

export function Layout({ meta, menus, children }: LayoutProps) {
  return (
    <>
      <Meta {...meta} />
      <div className="max-w-screen-lg mx-auto">
        <PreviewAlert />
        <Header menus={{ main: menus.main }} />
        <main className="flex-1 pb-10 px-6 bg-body">{children}</main>

      <Footer  />
      </div>
      <TailwindIndicator />
    </>
  )
}
