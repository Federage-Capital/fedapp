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
      <div className="w-full mx-auto">
        <PreviewAlert />

        <Header menus={{ main: menus.main }} />
<<<<<<< Updated upstream
        <main className="flex-1 pb-10 bg-body">{children}</main>

      </div>
      <div className="w-full md:w-auto">
      <Footer />
=======
        <main className="max-w-screen-2xl mx-auto flex-1">{children}</main>
        <Footer />
>>>>>>> Stashed changes
      </div>
      <TailwindIndicator />
    </>
  )
}
