import { GetStaticPropsContext, GetStaticPropsResult } from "next"
import { useSession } from "next-auth/react"
import { useTranslation } from "next-i18next"
import { useRouter } from "next/router"

import { getGlobalElements } from "lib/get-global-elements"
import { Layout, LayoutProps } from "components/layout"
import { FormLogin } from "components/form--login"
import { FormCreate } from "components/form--createaccount"
import { FormResetpassword } from "components/form--resetpassword"
import Link from 'next/link'
import { WhoIs } from "components/whois"
import React from "react";


import { PageHeader } from "components/page-header"
interface RegisterPageProps extends LayoutProps { }

export default function RegisterPage({ menus, blocks }: RegisterPageProps) {
	const { t } = useTranslation()
	const router = useRouter()
	const { status } = useSession()
	const [openTab, setOpenTab] = React.useState(1);
	const { toggleValue } = router.query;
	const styles = "bg-white fedblueblue"
	const [toggle, setToggle] = React.useState<boolean>(toggleValue === 'true');

	React.useEffect(() => {
		setToggle(toggleValue === 'true');
	}, [toggleValue]);

	React.useEffect(() => {
		const activeTab = parseInt(router.query.tab, 10) || 1;
		setOpenTab(activeTab);
	}, [router.query.tab]);

	if (status === "authenticated") {
		router.push("/account")
		return null
	}

	const handleButtonClick = () => {
		router.push({
			pathname: '/register',
			query: {
				tab: 3,
				toggleValue: false
			}
		});
	};


	return (
		<div className="bg-slate-100">
			<Layout meta={{ title: t("Connexion") }} menus={menus} blocks={blocks} >
				<PageHeader
					heading={t("Accedez à Federage")}
				/>
				{status === "unauthenticated" && (
					<div className="container pb-1">
						<div className="flex flex-col justify-center items-center flex-1">
							<div className={`text-md text-slate-500 ${openTab === 1 ? "block" : "hidden"} -mt-10 mb-5 justify-center pt-1`}>

								Connectez-vous à Federage.
								<div className="text-md">
									Jamais inscrit ?
									<button className="ml-1 fedblueblue text-md" onClick={handleButtonClick}>Cliquez-ici</button>
								</div>
							</div>
							<div className={`text-md text-slate-500 ${openTab === 2 ? "block" : "hidden"} -mt-10 mb-5 justify-center pt-1 text-center`}>
								<p>
									Entrez l&lsquo;adresse mail associée à votre
								</p>
								<p>
									compte pour modifier votre mot de passe.
								</p>
							</div>
							<div className={`text-md text-slate-500 ${openTab === 3 ? "block" : "hidden"} -mt-10 mb-5 justify-center pt-1 text-center`}>
								<p>
									Inscrivez-vous pour trouver des partenaires
								</p>
								<p>
									et financer vos projets professionnels.
								</p>
							</div>
						</div>
						<div className="flex flex-wrap justify-center">
							{/* <div className="grid gap-4 max-lg mx-auto"> */}
							<ul
								className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
								role="tablist"
							>
								<li className="-mb-px mr-2 last:mr-0 flex-left text-center">
									<a
										className={
											"text-xs font-bold px-2 py-3 rounded-md leading-normal " +
											(openTab === 1
												? styles
												: "text-" + "bg-white")
										}


										onClick={e => {
											e.preventDefault();
											setOpenTab(1);
										}}
										data-toggle="tab"
										href="#link1"
										role="tablist"
									>
										Connexion
									</a>
								</li>
								<li className="-mb-px mr-2 last:mr-0 flex-left text-center">
									<a
										className={
											"text-xs font-bold px-2 py-3 rounded-md leading-normal " +
											(openTab === 2
												? styles
												: "text-" + "bg-white")
										}


										onClick={e => {
											e.preventDefault();
											setOpenTab(2);
										}}
										data-toggle="tab"
										href="#link2"
										role="tablist"
									>
										Mot de passe oublié
									</a>
								</li>
								<li className="-mb-px mr-2 last:mr-0 flex-left text-center">
									<a
										className={
											"text-xs font-bold px-2 py-3 rounded-md leading-normal " +
											(openTab === 3
												? styles
												: "text-" + "bg-white")
										}
										onClick={e => {
											e.preventDefault();
											setOpenTab(3);
										}}
										data-toggle="tab"
										href="#link3"
										role="tablist"
									>
										Inscription
									</a>
								</li>
							</ul>
							<div className="relative flex flex-col min-w-0 break-words w-full mb-6 ">
								<div className="px-4 py-5 flex-auto">
									<div className="tab-content tab-space">
										<div className={openTab === 1 ? "block" : "hidden"} id="link1">
											<p>
												<FormLogin className="max-w-md mx-auto" />
											</p>
										</div>
										<div className={openTab === 2 ? "block" : "hidden"} id="link2">
											{toggle ? (
												<p>
													<FormResetpassword className="max-w-md mx-auto" />
												</p>
											) :
												<p>
													<FormResetpassword className="max-w-md mx-auto" />
												</p>}
										</div>
										<div className={openTab === 3 ? "block" : "hidden"} id="link3">
											{toggle ? (
												<p>
													<FormCreate className="max-w-md mx-auto" />
												</p>
											) :
												<p>
													<FormCreate className="max-w-md mx-auto" />
												</p>
											}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

				)}


			</Layout>
		</div>
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
