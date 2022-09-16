import { GetStaticPropsContext, GetStaticPropsResult } from "next"
import { useSession } from "next-auth/react"
import { useTranslation } from "next-i18next"
import { useRouter } from "next/router"

import { getGlobalElements } from "lib/get-global-elements"
import { Layout, LayoutProps } from "components/layout"
import { FormLogin } from "components/form--login"

interface LoginPageProps extends LayoutProps {}

export default function LoginPage({ menus, blocks }: LoginPageProps) {
  const { t } = useTranslation()
  const router = useRouter()
  const { status } = useSession()

  if (status === "authenticated") {
    router.push("/user")
    return null
  }

  return (
    <Layout meta={{ title: t("login") }} menus={menus} blocks={blocks}>

      {status === "unauthenticated" && (
        <div className="container pb-10">
          <FormLogin className="max-w-xl mx-auto" />
        </div>
      )}
    </Layout>
  )
}

export async function getStaticProps(
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<LoginPageProps>> {
  return {
    props: {
      ...(await getGlobalElements(context)),
    },
  }
}
