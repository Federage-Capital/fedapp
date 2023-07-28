import * as React from "react";
import Image from "next/image"
import {
	DrupalNode,
	getSearchIndexFromContext,
	deserialize,
	JsonApiSearchApiResponse,
	DrupalTaxonomyTerm,
} from "next-drupal";
import { useTranslation } from "next-i18next"
import { GetStaticPropsResult } from "next"
import { useRouter } from "next/router"
import { getGlobalElements } from "lib/get-global-elements"
import { Layout } from "components/layout"
import { BoxUserList } from "components/box-alluserlist"
import { BoxProjectList } from "components/box-project-alluserlist";
import { BoxResultNameSearch } from "components/box-searchbar";
import { useSession } from "next-auth/react"
import { drupal } from "lib/drupal"
import { BoxResearch } from "components/box-research";


import { usePaginatedSearch } from "../hooks/use-paginated-search"

function formatDate(input: string): string {
	const date = new Date(input)
	return date.toLocaleDateString("en-US", {
		month: "long",
		day: "numeric",
		year: "numeric",
	})
}

import useSWR from 'swr'


const fetcher = (url) => fetch(url).then((r) => r.json());

const params = {
	fields: {
		"group--federage": "label,field_description",
		"user--user": "name,display_name,field_nom_affiche,field_description,field_type_de_structure,user_picture",
	},
	filter: {

	},

	include: "",
}






export default function AlluserlistPage
	({ menus, blocks, users, nodes, logouri, catentreprise, result_users,
		facets: initialFacets,
	}: AlluserlistPageProps) {
	const { t } = useTranslation()
	const router = useRouter()

	const { data: session, status } = useSession()


	const { data: useringroup, error: useringroupError } = useSWR(() => `https://fed.septembre.io/explorer-user-in-group`, fetcher)
	const colored = "bg-white fedblueblue";

	const [state, setStatus] = React.useState<"error" | "success" | "loading">()
	const [results, setResults] = React.useState<DrupalNode[]>(nodes)
	const [openTab, setOpenTab] = React.useState(1);
	const [facets, setFacets] =
		React.useState<DrupalSearchApiFacet[]>(initialFacets)

	const { data, hasNextPage, isFetching, fetchNextPage, isError } =
		usePaginatedSearch()

	function onSubmit(event) {
		event.preventDefault()

		router.push({
			pathname: "/alluserlist",
			query: `keywords=${event.target.keywords.value}`,
		})
	}


	return (
		// <Layout meta={{ title: t("Explorer") }} menus={menus} blocks={blocks}>
		// 	<div className="relative bg-gray-50 w-full overflow-y-auto flex flex-col pt-6 px-0 pb-0 box-border items-center justify-start mix-blend-normal text-left text-base text-gray-900 font-text-sm-leading-5-font-medium">
		// 		<div className="self-stretch flex flex-col items-center justify-start">
		// 			<div className="self-stretch h-[98px] overflow-hidden shrink-0 flex flex-col items-center justify-start">
		// 				<div className="self-stretch flex flex-row pt-[30px] px-4 pb-0 items-center justify-between z-[0]">
		// 				</div>
		// 			</div>
		// 			<div className="self-stretch overflow-y-auto flex flex-col pt-6 px-4 pb-12 items-start justify-start gap-[22px]">
		// 				<div className="self-stretch flex flex-col items-center justify-start gap-[24px] text-9xl text-black1">
		// 					<div className="self-stretch flex flex-col items-start justify-center gap-[10px]">
		// 						{/* <div className="self-stretch relative leading-[20px] font-semibold">
		// 							Explorer
		// 						</div> */}
		// 						<div className="self-stretch relative text-base leading-[20px] font-medium text-dimgray">
		// 							Vous pouvez répondre à une demande de partenariat, effectuer une
		// 							offre d’apport et intégrer plusieurs projets.
		// 						</div>
		// 					</div>
		// 					<div className="self-stretch rounded-lg bg-white overflow-hidden flex flex-row items-center justify-start text-base text-darkgray-200 border-[2px] border-solid border-gray-200">
		// 						<div className="flex-1 flex flex-row py-[9px] px-[13px] items-center justify-start gap-[8px]">
		// 							<img
		// 								className="relative w-5 h-5 overflow-hidden shrink-0"
		// 								alt=""
		// 								src="/search.svg"
		// 							/>
		// 							<div className="relative leading-[24px] font-medium">
		// 								Rechercher un projet
		// 							</div>
		// 						</div>
		// 					</div>
		// 				</div>
		// 				<div className="self-stretch rounded-lg bg-white flex flex-col p-4 items-start justify-start gap-[20px]">
		// 					<div className="self-stretch flex flex-col items-center justify-start gap-[20px]">
		// 						<div className="self-stretch flex flex-col items-center justify-start gap-[22px] text-xl">
		// 							<div className="self-stretch flex flex-row items-center justify-between">
		// 								<div className="relative w-[84px] h-6">
		// 									<img
		// 										className="absolute top-[-2px] left-[58px] rounded-xl w-7 h-7 overflow-hidden object-cover"
		// 										alt=""
		// 										src="/avatar1@2x.png"
		// 									/>
		// 									<img
		// 										className="absolute top-[-2px] left-[38px] rounded-xl w-7 h-7 overflow-hidden object-cover"
		// 										alt=""
		// 										src="/avatar8@2x.png"
		// 									/>
		// 									<img
		// 										className="absolute top-[-2px] left-[18px] rounded-xl w-7 h-7 overflow-hidden object-cover"
		// 										alt=""
		// 										src="/avatar9@2x.png"
		// 									/>
		// 									<img
		// 										className="absolute top-[-2px] left-[-2px] rounded-xl w-7 h-7 overflow-hidden object-cover"
		// 										alt=""
		// 										src="/avatar10@2x.png"
		// 									/>
		// 								</div>
		// 								<div className="rounded-10xs bg-indigo-50" />
		// 							</div>
		// 							<div className="self-stretch flex flex-row items-center justify-start">
		// 								<div className="flex-1 relative leading-[20px] font-semibold">
		// 									Développement d’un site de voyages prémium par abonnement
		// 									mensuel
		// 								</div>
		// 							</div>
		// 						</div>
		// 						<div className="self-stretch flex flex-col items-start justify-start text-gray-500">
		// 							<div className="self-stretch flex flex-col items-start justify-start">
		// 								<div className="self-stretch flex flex-col items-center justify-center">
		// 									<div className="self-stretch relative leading-[20px] font-medium">
		// 										Plateforme privative d'abonnement de services pour voyages
		// 										haut-de-gamme.
		// 									</div>
		// 								</div>
		// 							</div>
		// 						</div>
		// 						<div className="self-stretch flex flex-col items-center justify-center text-mediumblue-100">
		// 							<div className="self-stretch rounded-lg overflow-hidden flex flex-row items-center justify-start">
		// 								<div className="flex-1 flex flex-col items-start justify-start">
		// 									<div className="self-stretch flex flex-row py-0 pr-7 pl-0 items-center justify-between">
		// 										<div className="relative leading-[20px] font-semibold">
		// 											167 00€ • 4 apports spécifiés
		// 										</div>
		// 										<img
		// 											className="relative w-3.5 h-[8.4px]"
		// 											alt=""
		// 											src="/icon2.svg"
		// 										/>
		// 									</div>
		// 								</div>
		// 							</div>
		// 						</div>
		// 					</div>
		// 					<div className="self-stretch rounded-lg bg-gray-100 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] h-[47px] overflow-hidden shrink-0 flex flex-row py-2.5 px-[18px] box-border items-center justify-center text-dimgray">
		// 						<div className="relative leading-[20px] font-semibold">
		// 							Contribuer
		// 						</div>
		// 					</div>
		// 				</div>
		// 				<div className="self-stretch rounded-lg bg-white flex flex-col p-4 items-start justify-start gap-[20px]">
		// 					<div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
		// 						<div className="self-stretch flex flex-col items-center justify-start gap-[22px] text-xl">
		// 							<div className="self-stretch flex flex-row items-center justify-between">
		// 								<div className="relative w-[84px] h-6">
		// 									<img
		// 										className="absolute top-[-2px] left-[58px] rounded-xl w-7 h-7 overflow-hidden object-cover"
		// 										alt=""
		// 										src="/avatar4@2x.png"
		// 									/>
		// 									<img
		// 										className="absolute top-[-2px] left-[38px] rounded-xl w-7 h-7 overflow-hidden object-cover"
		// 										alt=""
		// 										src="/avatar5@2x.png"
		// 									/>
		// 									<img
		// 										className="absolute top-[-2px] left-[18px] rounded-xl w-7 h-7 overflow-hidden object-cover"
		// 										alt=""
		// 										src="/avatar6@2x.png"
		// 									/>
		// 									<img
		// 										className="absolute top-[-2px] left-[-2px] rounded-xl w-7 h-7 overflow-hidden object-cover"
		// 										alt=""
		// 										src="/avatar@2x.png"
		// 									/>
		// 								</div>
		// 								<div className="rounded-10xs bg-indigo-50" />
		// 							</div>
		// 							<div className="self-stretch flex flex-row items-center justify-start">
		// 								<div className="flex-1 relative leading-[20px] font-semibold">
		// 									Solution pour le développement de nutriments actifs
		// 									anti-cancérigènes
		// 								</div>
		// 							</div>
		// 						</div>
		// 						<div className="self-stretch flex flex-col items-start justify-start text-gray-500">
		// 							<div className="self-stretch flex flex-col items-start justify-start">
		// 								<div className="self-stretch flex flex-col items-center justify-end">
		// 									<div className="self-stretch relative leading-[20px] font-medium">
		// 										Recherche un procédé agro-alimentaire pour expérimenter
		// 										des solutions nutritionnelles médicales.
		// 									</div>
		// 								</div>
		// 							</div>
		// 						</div>
		// 						<div className="self-stretch flex flex-col items-center justify-center text-mediumblue-100">
		// 							<div className="self-stretch rounded-lg overflow-hidden flex flex-row items-center justify-start">
		// 								<div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
		// 									<div className="self-stretch flex flex-row py-0 pr-7 pl-0 items-center justify-between">
		// 										<div className="relative leading-[20px] font-semibold">
		// 											210 000€ • 3 apports spécifiés
		// 										</div>
		// 										<img
		// 											className="relative w-3.5 h-[8.4px]"
		// 											alt=""
		// 											src="/icon3.svg"
		// 										/>
		// 									</div>
		// 									<div className="self-stretch flex flex-col items-center justify-start text-black1">
		// 										<div className="self-stretch rounded-t-lg rounded-b-none flex flex-row p-4 items-center justify-between border-[2px] border-solid border-gray-100">
		// 											<div className="flex-1 flex flex-col py-0 pr-2.5 pl-0 items-start justify-start gap-[2px]">
		// 												<div className="self-stretch relative leading-[20px] font-semibold">{`Formule bio-synthétique humanoïde `}</div>
		// 												<div className="self-stretch relative text-xs leading-[24px] font-semibold text-mediumblue-100">
		// 													Prix recherché : 40 000,00€
		// 												</div>
		// 											</div>
		// 											<img
		// 												className="relative rounded-[6.91px] w-[38.27px] h-[38px]"
		// 												alt=""
		// 												src="/bouton2.svg"
		// 											/>
		// 										</div>
		// 										<div className="self-stretch flex flex-row p-4 items-center justify-between border-r-[2px] border-solid border-gray-100 border-b-[2px] border-l-[2px]">
		// 											<div className="flex-1 flex flex-col py-0 pr-2.5 pl-0 items-start justify-start gap-[2px]">
		// 												<div className="self-stretch relative leading-[20px] font-semibold">
		// 													Traitement immunothérapie
		// 												</div>
		// 												<div className="self-stretch relative text-xs leading-[24px] font-semibold text-mediumblue-100">
		// 													Prix recherché : 60 000,00€
		// 												</div>
		// 											</div>
		// 											<img
		// 												className="relative rounded-[6.91px] w-[38.27px] h-[38px]"
		// 												alt=""
		// 												src="/bouton2.svg"
		// 											/>
		// 										</div>
		// 										<div className="self-stretch rounded-t-none rounded-b-lg flex flex-row p-4 items-center justify-between border-r-[2px] border-solid border-gray-100 border-b-[2px] border-l-[2px]">
		// 											<div className="flex-1 flex flex-col py-0 pr-2.5 pl-0 items-start justify-start gap-[2px]">
		// 												<div className="self-stretch relative leading-[20px] font-semibold">
		// 													Laboratoire de type Cancéropôle
		// 												</div>
		// 												<div className="self-stretch relative text-xs leading-[24px] font-semibold text-mediumblue-100">
		// 													Prix recherché : 110 000,00€
		// 												</div>
		// 											</div>
		// 											<img
		// 												className="relative rounded-[6.91px] w-[38.27px] h-[38px]"
		// 												alt=""
		// 												src="/bouton2.svg"
		// 											/>
		// 										</div>
		// 									</div>
		// 								</div>
		// 							</div>
		// 						</div>
		// 					</div>
		// 					<div className="self-stretch rounded-lg bg-gray-100 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] h-[47px] overflow-hidden shrink-0 flex flex-row py-2.5 px-[18px] box-border items-center justify-center text-dimgray">
		// 						<div className="relative leading-[20px] font-semibold">
		// 							Contribuer
		// 						</div>
		// 					</div>
		// 				</div>
		// 				<div className="self-stretch rounded-lg bg-white flex flex-col p-4 items-start justify-start text-center text-xl">
		// 					<div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
		// 						<div className="self-stretch flex flex-row items-center justify-center gap-[12px]">
		// 							<img
		// 								className="rounded-[24.02px] w-[52px] h-[52px] object-cover"
		// 								alt=""
		// 								src="/avatar2@2x.png"
		// 							/>
		// 							<div className="flex-1 h-[53px] flex flex-col items-start justify-start">
		// 								<div className="flex flex-row items-center justify-center gap-[2px]">
		// 									<b className="flex-1 relative leading-[32px]">
		// 										BIM Finance
		// 									</b>
		// 									<div className="flex flex-row py-0 px-0.5 items-center justify-center">
		// 										<img
		// 											className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
		// 											alt=""
		// 											src="/shield-check1.svg"
		// 										/>
		// 									</div>
		// 								</div>
		// 								<b className="flex-1 relative text-xs leading-[32px] flex text-dimgray text-left items-center w-48 mt-[-11px]">
		// 									app.federage.com/bimfinance
		// 								</b>
		// 							</div>
		// 						</div>
		// 						<div className="self-stretch flex flex-col items-start justify-start gap-[20px] text-left text-base text-gray-500">
		// 							<div className="self-stretch flex flex-row items-start justify-start">
		// 								<div className="flex-1 relative leading-[20px] font-medium">
		// 									Société de financement pour l'écosystème des TPE/PME
		// 									industrielles qui mettent au point des innovations de
		// 									rupture.
		// 								</div>
		// 							</div>
		// 							<div className="flex flex-row items-center justify-start text-xs text-dimgray">
		// 								<div className="flex flex-row items-center justify-start">
		// 									<div className="flex flex-row py-0 px-0.5 items-center justify-start gap-[6px]">
		// 										<img
		// 											className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
		// 											alt=""
		// 											src="/globe-alt1.svg"
		// 										/>
		// 										<div className="relative leading-[20px] font-medium">
		// 											Entreprise
		// 										</div>
		// 									</div>
		// 								</div>
		// 							</div>
		// 						</div>
		// 					</div>
		// 				</div>
		// 				<div className="self-stretch flex flex-col items-start justify-center text-sm text-darkslategray">
		// 					<div className="w-[143px] flex flex-col items-start justify-start">
		// 						<div className="self-stretch rounded-lg bg-white flex flex-col items-start justify-start">
		// 							<div className="self-stretch rounded-md bg-white h-[46px] overflow-hidden shrink-0 flex flex-row py-2 px-3.5 box-border items-center justify-center gap-[8px]">
		// 								<div className="relative leading-[20px] font-semibold">
		// 									Tout afficher
		// 								</div>
		// 								<img
		// 									className="relative w-5 h-5 overflow-hidden shrink-0"
		// 									alt=""
		// 									src="/chevron-down.svg"
		// 								/>
		// 							</div>
		// 						</div>
		// 					</div>
		// 				</div>
		// 			</div>
		// 			<div className="self-stretch bg-white flex flex-col items-center justify-start text-center text-white">
		// 				<div className="self-stretch bg-white flex flex-col items-center justify-start">
		// 					<div className="self-stretch flex flex-col items-center justify-start">
		// 						<div className="self-stretch relative bg-gray-200 h-px" />
		// 						<div className="self-stretch bg-black1 flex flex-col py-12 px-0 items-center justify-start gap-[24px]">
		// 							<div className="relative leading-[24px] font-medium flex items-center justify-center w-[298px]">
		// 								FEDERAGE SAS • SIREN n°828743369 • Paris • 2023
		// 							</div>
		// 							<div className="self-stretch flex flex-row items-center justify-center gap-[32px]">
		// 								<div className="flex flex-row items-center justify-start">
		// 									<img
		// 										className="relative w-6 h-6 overflow-hidden shrink-0"
		// 										alt=""
		// 										src="/footerssocial-icon1.svg"
		// 									/>
		// 								</div>
		// 								<div className="flex flex-row items-center justify-start">
		// 									<img
		// 										className="relative w-6 h-6 overflow-hidden shrink-0"
		// 										alt=""
		// 										src="/footerssocial-icon2.svg"
		// 									/>
		// 								</div>
		// 								<div className="flex flex-row items-center justify-start">
		// 									<img
		// 										className="relative w-6 h-6 overflow-hidden shrink-0"
		// 										alt=""
		// 										src="/mail1.svg"
		// 									/>
		// 								</div>
		// 							</div>
		// 						</div>
		// 					</div>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>

		// </Layout>
		<div className="bg-slate-100">
			<Layout meta={{ title: t("Explorer") }} menus={menus} blocks={blocks}>
				<div className="px-6">
					<h1 className="max-w-4xl mb-3 text-4xl text-left md:text-5xl lg:text-4xl">Explorer</h1>
					<p className="mb-3 text-zinc-500">Vous pouvez répondre à une demande de partenariat, effectuer une offre d’apport et intégrer plusieurs projets.</p>
					<form onSubmit={onSubmit} className="mb-4">
						<div className="items-center gap-4 sm:grid sm:grid-cols-7">
							<input
								type="search"
								placeholder="Rechercher un projet ou un membre"
								name="keywords"
								required
								className="relative block w-full col-span-5 px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
							/>
							<button
								type="submit"
								data-cy="btn-submit"
								className="flex justify-center w-full px-4 py-2 mt-4 text-sm font-medium text-white bg-black border border-transparent rounded-md shadow-sm sm:col-span-2 sm:mt-0 hover:bg-black"
							>
								{isFetching ? "Recherche en cours" : "Recherche"}
							</button>
						</div>
					</form>
					{isError ? (
						<div className="px-4 py-2 text-sm text-red-600 bg-red-100 border-red-200 rounded-md">
							An error occured. Please try again.
						</div>
					) : null}
					{!data?.pages?.length ? (
						<div className="text-sm" data-cy="search-no-results">
							<ul className="flex pt-3">
								<li className="-mb-px mr-2 last:mr-0 flex-left text-center">
									<a
										className={"text-xs font-bold px-2 py-3 rounded-md leading-normal " + (openTab === 1 ? colored : "text-" + "bg-white")}
										onClick={e => {
											e.preventDefault();
											setOpenTab(1);
										}}
										data-toggle="tab"
										href="#link1"
										role="tablist"
									>
										Projets
									</a>
								</li>
								<li className="-mb-px mr-2 last:mr-0 flex-left text-center">
									<a
										className={"text-xs font-bold px-2 py-3 rounded-md leading-normal " + (openTab === 2 ? colored : "text-" + "bg-white")}
										onClick={e => {
											e.preventDefault();
											setOpenTab(2);
										}}
										data-toggle="tab"
										href="#link1"
										role="tablist"
									>
										Membres
									</a>
								</li>
							</ul>
							<div className="pb-10" />
							{state === "error" ? (
								<div className="px-4 py-2 text-sm text-red-600 bg-red-100 border-red-200 rounded-md">
									Une erreur s&#39;est produite. Veuillez réessayer.
								</div>
							) : null}
							<div className={openTab === 2 ? "block" : "hidden"}>
								{!results.length ? (
									<p className="text-sm" data-cy="search-no-results">
										Aucun résultat.
									</p>
								) : (
									<div className="md:grid-cols-1">
										{results
											.filter((results_users) => results_users.type.includes("user--user"))
											.map((node) => (
												<div key={node.id}>
													{node.user_picture ? (
														<div className="text-sm" data-cy="search-no-results">
															{logouri
																.filter((results_logo) => results_logo.id.includes(node.user_picture.id))
																.map((itemlogo) => (
																	<div key={itemlogo.id}>
																		<BoxUserList key={node.id} node={node} itemlogo={itemlogo} results={results} catentreprise={catentreprise} />
																	</div>
																))}
														</div>
													) : (
														<div>
															<div className="text-sm" data-cy="search-no-results">
																<BoxUserList key={node.id} node={node} results={results} catentreprise={catentreprise} />
															</div>
														</div>
													)}
												</div>
											))}
									</div>
								)}
							</div>
							<div className={openTab === 1 ? "block" : "hidden"}>
								{!results.length ? (
									<p className="text-sm" data-cy="search-no-results">
										Aucun résultat.
									</p>
								) : (
									<div className="md:grid-cols-1">
										{results
											.filter(results_projets => results_projets.type.includes("group--federage"))
											.map((filterNode) => (
												<div key={filterNode.id}>
													{nodes.type}
													<BoxProjectList key={filterNode.id} node={filterNode} useringroup={useringroup} status={status} />
												</div>
											))}
									</div>
								)}
							</div>
						</div>
					) : (
						<div className="pt-4">
							<h3 className="mt-0" data-cy="search-results">
								{data?.pages[0]?.total} résultat(s).
							</h3>
							{data?.pages.map((page, index) => (
								<div key={index}>
									{page.items?.map((node) => (
										<div key={node.id}>
											<BoxResearch key={node.id} node={node} logouri={logouri} useringroup={useringroup} results={results} status={status} catentreprise={catentreprise} />
											{node.type === "group--federage" &&
												results
													.filter(results_projets => results_projets.type.includes("group--federage"))
													.slice(0, 1)
													.map((filterNode) => (
														<div key={filterNode.id}>
															< BoxProjectList key={node.id} node={node} useringroup={useringroup} status={status} />
														</div>
													))
											}
										</div>
									))}
								</div>
							))}
							{hasNextPage && (
								<button
									onClick={() => fetchNextPage()}
									disabled={isFetching}
									className="flex justify-center px-4 py-2 mt-4 text-sm font-medium text-black bg-slate-200 border border-slate-200 rounded-md shadow-sm sm:col-span-2 sm:mt-0"
								>
									{isFetching ? "Loading..." : "Show more"}
								</button>
							)}
						</div>
					)
					}
				</div >
			</Layout >
		</div >
	)
}

export async function getStaticProps(
	context
): Promise<GetStaticPropsResult<AccountPageProps>> {


	const catentreprise = await drupal.getResourceCollectionFromContext<DrupalTaxonomyTerm>(
		"taxonomy_term--categorie_d_entreprise",
		context,
		{
			params: {
				"fields[taxonomy_term--categorie_d_entreprise]": "id,name",
				sort: "-name",
			},
		}
	)


	const results = await getSearchIndexFromContext<JsonApiSearchApiResponse>(
		"default_index",
		context,
		{
			deserialize: false,
			params,
		}
	)


	const result_users = await getSearchIndexFromContext<JsonApiSearchApiResponse>(
		"default_index",
		context,
		{
			deserialize: false,
			params: {
				"filter[type]": "user--user",

			},
		}
	)


	const logouri = await drupal.getResourceCollectionFromContext<DrupalNode[]>(
		"file--file",
		context,
		{
			params: {
				"fields[file--file]": "id,uri",


				sort: "-created",
			},
		}
	)

	return {
		props: {
			...(await getGlobalElements(context)),
			catentreprise,

			nodes: deserialize(results) as DrupalNode[],
			nodes2: deserialize(result_users) as DrupalNode[],

			facets: results.meta.facets,
			logouri,

		},
		revalidate: 5,

	};
}