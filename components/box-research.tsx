import React from "react";
import Link from 'next/link'
import Image from 'next/image'
import NodeCache from "node-cache";
import CalculApport from "./calcul-apport";
import { useTranslation } from "next-i18next"



export function BoxResearch({ node, logouri, useringroup, results, status, catentreprise }: BoxResearchlistProps) {
	const { t } = useTranslation()
	return (
		<>
			{node.type !== "group--federage" && (
				<div className="pb-4">
					<div className="bg-white rounded-lg pb-3">
						{node.type === "group_content--federage-group_membership" && (
							<div>
								{results
									.filter(group_project => group_project?.id.includes(node?.gid?.id))
									.slice(0, 1)
									.map((item_project) => (
										<div key={item_project.id} className="ml-3 pt-3">
											<div className="flex">
												{useringroup &&
													useringroup
														.filter((userin) => userin.uuid.includes(item_project.id))
														.slice(0, 5)
														.map((filterUser, index) => (
															<div key={filterUser.id} className={`relative ${index != 0 ? '-ml-2' : ''}`}>
																{filterUser.user_picture && (
																	<Image
																		src={`${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}${filterUser.user_picture}`}
																		alt={filterUser.uid}
																		width={30}
																		height={30}
																		className="h-8 w-8 rounded-full"
																	/>
																)}
															</div>
														))}
											</div>
											<p className="font-semibold">
												{item_project.label}
											</p>
											<div className="leading-normal text-slate-600 text-base sm:text-base lg:text-lg px-2">
												{item_project.field_description?.value} <br />
												<CalculApport key={item_project.id} node={item_project} />
											</div>
										</div>
									))
								}
							</div>
						)}

						<div className="flex ">
							{node.type === "user--user" && node.user_picture?.id ? (
								<div>
									{logouri
										.filter((result_logo) => result_logo.id.includes(node.user_picture?.id))
										.slice(0, 1)
										.map((itemlogo) => (
											<div key={itemlogo.id}>
												{itemlogo?.uri && (
													<div className="overflow-hidden h-10 w-10 rounded-full mt-5 ml-5 ">
														<Link href={node?.name.replace(/è/g, 'e').replaceAll(' ', '-')} passHref>
															<Image
																src={`${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}${itemlogo.uri.url}`}
																width={16}
																height={16}
																layout="responsive"
																objectFit="cover"
																alt={node?.name}
															/>
														</Link>
													</div>
												)}
											</div>
										))}
								</div>
							) : null}
							<div className="ml-3 grid xs:grid-cols-1 sm:grid-rows-2 sm:grid-flow-col gap-2 pt-5">
								{node?.field_nom_affiche >= 0 ? (
									<Link href={node?.display_name.replace(/è/g, 'e').replaceAll(' ', '-')} passHref>
										<p className="font-semibold">
											{node?.name}
										</p>
									</Link>
								) : (
									<div className="font-semibold items-center justify-between">
										{node?.label}
										<span className="text-gray-500 text-sm">
											{node.type === "group_content--federage-group_membership" && (
												<div>
													Created: {node.created} ---
													{node.label}
												</div>
											)}
										</span>
									</div>
								)}
								{node?.field_nom_affiche >= 0 ? (
									<Link href={node?.display_name.replace(/è/g, 'e').replaceAll(' ', '-')} passHref>
										<div className="text-slate-500 font-semibold mr-4 lowercase relative -top-3 text-sm max-w-xs truncate">
											app.federage.com/{node?.name.replace(/è/g, 'e').replaceAll(' ', '-')}
										</div>
									</Link>
								) : (
									node?.field_nom_affiche
								)}
							</div>
						</div>
						{node?.field_description?.value && (
							<div dangerouslySetInnerHTML={{ __html: node?.field_description?.value }} className="leading-normal ml-2 pb-5 text-slate-600 text-base sm:text-base lg:text-lg px-4" />
						)}
						<div className="flex ml-6 items-center pb-5">
							{node?.field_type_de_structure?.id && (
								<>
									<div >
										<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
											<path fillRule="evenodd" clipRule="evenodd" d="M2.67471 7.0998H4.42581C4.5061 5.70805 4.7711 4.42597 5.17984 3.39386C3.87581 4.19402 2.93767 5.53244 2.67471 7.0998ZM8.00005 0.799805C4.0236 0.799805 0.800049 4.02335 0.800049 7.9998C0.800049 11.9763 4.0236 15.1998 8.00005 15.1998C11.9765 15.1998 15.2 11.9763 15.2 7.9998C15.2 4.02335 11.9765 0.799805 8.00005 0.799805ZM8.00005 2.5998C7.9316 2.5998 7.79113 2.62836 7.58128 2.83546C7.36756 3.04639 7.13381 3.39622 6.91809 3.89956C6.56827 4.7158 6.31246 5.82683 6.22918 7.0998H9.77092C9.68763 5.82683 9.43182 4.7158 9.08201 3.89956C8.86629 3.39622 8.63254 3.04639 8.41882 2.83546C8.20897 2.62836 8.06849 2.5998 8.00005 2.5998ZM11.5743 7.0998C11.494 5.70805 11.229 4.42597 10.8203 3.39386C12.1243 4.19402 13.0624 5.53244 13.3254 7.0998H11.5743ZM9.77092 8.8998H6.22918C6.31246 10.1728 6.56827 11.2838 6.91809 12.1C7.13381 12.6034 7.36756 12.9532 7.58128 13.1641C7.79113 13.3713 7.9316 13.3998 8.00005 13.3998C8.06849 13.3998 8.20897 13.3713 8.41882 13.1641C8.63254 12.9532 8.86629 12.6034 9.08201 12.1C9.43182 11.2838 9.68763 10.1728 9.77092 8.8998ZM10.8203 12.6058C11.229 11.5736 11.494 10.2916 11.5743 8.8998H13.3254C13.0624 10.4672 12.1243 11.8056 10.8203 12.6058ZM5.17985 12.6058C4.7711 11.5736 4.5061 10.2916 4.42581 8.8998H2.67471C2.93767 10.4672 3.87581 11.8056 5.17985 12.6058Z" fill="#52606D" />
										</svg>
									</div>
									{catentreprise
										.filter((catent) => catent.id.includes(node.field_type_de_structure?.id))
										.map((catname) => (
											<div key={catname.id}>
												<p className="text-sm text-slate-600 ml-2">
													{catname.name}
												</p>
											</div>
										))}

								</>
							)}
						</div>
						{node.type === "group_content--federage-group_membership" && (
							<div className="flex justify-center">
								<Link href="/register" passHref>
									<button className="px-3 fedblue py-2 mb-4 text-md text-white transition-colors rounded-xl
							cursor-pointer bg-link hover:bg-white hover:text-whote border-link w-5/6">
										<a className="text-lg">{t("Contribuer")}</a>
									</button>
								</Link>
							</div>
						)}
					</div>
				</div>
			)}
		</>
	)
}
