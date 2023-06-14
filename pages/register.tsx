import { GetStaticPropsContext, GetStaticPropsResult } from "next"
import { useSession } from "next-auth/react"
import { useTranslation } from "next-i18next"
import { useRouter } from "next/router"
import { getGlobalElements } from "lib/get-global-elements"
import { Layout, LayoutProps } from "components/layout"
import { FormLogin } from "components/form--login"
import { FormCreate } from "components/form--createaccount"
import { FormResetpassword } from "components/form--resetpassword"
import { WhoIs } from "components/whois"
import React from "react";


import { PageHeader } from "components/page-header"
interface RegisterPageProps extends LayoutProps { }

export default function RegisterPage({ menus, nodes, blocks }: RegisterPageProps) {
	const { t } = useTranslation();
	const router = useRouter();

	return (
		<div className="bg-slate-100">
			<Layout meta={{ title: t("Inscription") }} menus={menus} blocks={blocks}>
				<h1 className="max-w-4xl mb-1 text-4xl text-left md:text-5xl lg:text-4xl">Explorer</h1>
				<p className="mb-3 text-zinc-500">Veuillez enregistrer votre structure pour démarrer. </p>
				<FormCreate className="max-w-xl mx-auto" />
			</Layout>
		</div>
	);
}

export async function getStaticProps(
	context: GetStaticPropsContext
): Promise<GetStaticPropsResult<RegisterPageProps>> {
	return {
		props: {
			...(await getGlobalElements(context)),
		},
	}
}