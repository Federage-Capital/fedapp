import { GetStaticPropsContext, GetStaticPropsResult } from "next"
import { useSession } from "next-auth/react"
import { useTranslation } from "next-i18next"
import { useRouter } from "next/router"

import { getGlobalElements } from "lib/get-global-elements"
import { Layout, LayoutProps } from "components/layout"
import { FormCreate } from "components/form--createaccount"
import { PageHeader } from "components/page-header"

interface CreatePageProps extends LayoutProps { }

export default function CreatePage({ menus, blocks }: CreatePageProps) {
  const { t } = useTranslation()
  const router = useRouter()
  const { status } = useSession()

  if (status === "authenticated") {
    router.push("/")
    return null
  }

  return (
    <Layout meta={{ title: t("login") }} menus={menus} blocks={blocks}>
      <PageHeader
        heading={t("login")}
        breadcrumbs={[
          {
            title: t("login"),
          },
        ]}
      />
      {status === "unauthenticated" && (
        <div className="container pb-10">
          <FormCreate className="max-w-xl mx-auto" />
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
