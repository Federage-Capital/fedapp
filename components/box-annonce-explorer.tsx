import React from "react";
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from "next/router"
import SlideApport from "./card-slide_apport";
import { absoluteURL,formatDate } from "lib/utils"

import { useTranslation } from "next-i18next"


export function BoxAnnonceList({ node, useringroup, status }: BoxAnnonceListProps) {
	const { t } = useTranslation()
	const router = useRouter()

	const [showMenu, setShowMenu] = React.useState<boolean>(false)

	const changeState = () => {
		setShowMenu(!showMenu);
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
			< div className="self-stretch flex flex-col items-center justify-start">


				<div className="self-stretch overflow-y-auto flex flex-col  items-start justify-start gap-[22px]">
					<div className="self-stretch flex flex-col items-center justify-start gap-[24px] text-9xl text-black1">
					</div>
					<div className="self-stretch rounded-lg bg-white flex flex-col p-4 items-start justify-start gap-[20px]">
						<div className="self-stretch flex flex-col items-center justify-start gap-[20px]">
							<div className="self-stretch flex flex-col items-center justify-start gap-[22px] text-xl">
								<div className="self-stretch flex flex-row items-center justify-between">
									<div className="relative w-[84px] h-6 flex">
									{node.entity_id.field_statut.id?.length ? (

												 <div className="px-2 bg-indigo-50 rounded-md text-sm fedblueblue font-semibold">
													 Public
												 </div>
											 ) : (
												 <>


										 Aucun statut


												 </>
											 )}



									</div>
									<div className="rounded-10xs bg-indigo-50" />
								</div>
								<div className="self-stretch flex flex-row items-center justify-start">
									<div className="flex-1 relative leading-[20px] font-semibold">
									<Link href={node.entity_id.path.alias}  passHref>

	{node.entity_id.title}

	</Link><br/>
	{node.gid?.label}<br/>
	GID ?	{node.gid.id}
	<p className="mt-6 text-zinc-600 font-normal text-sm "> {node.entity_id.field_estimation_du_prix}€ - {formatDate(node.entity_id.field_date_de_livraison)}</p>

									</div>
								</div>
							</div>
							<div className="self-stretch flex flex-col items-start justify-start">
								<div className="self-stretch flex flex-col items-start justify-start">
									<div className="self-stretch flex flex-col items-center justify-center fedblueblue">
										<div className="self-stretch relative leading-[20px] font-semibold">


																			 		{showMenu ? (
																			 <>	Détail de l&apos;offre		<span className="inline-block ml-2" onClick={changeState}>
																			 				<svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
																			 					<path fillRule="evenodd" clipRule="evenodd" d="M13.5899 8.78996C13.0432 9.3367 12.1568 9.3367 11.6101 8.78996L7 4.1799L2.38995 8.78996C1.84322 9.3367 0.956784 9.3367 0.410051 8.78996C-0.136684 8.24323 -0.136684 7.35679 0.410051 6.81006L6.01005 1.21005C6.55678 0.663316 7.44322 0.663316 7.98995 1.21005L13.5899 6.81006C14.1367 7.35679 14.1367 8.24323 13.5899 8.78996Z" fill="#012BDD" />
																			 				</svg>
																			 			</span>
																						</>
																			 		) : (
																			 				 <>	Détail de l&apos;offre	<span className="inline-block ml-2" onClick={changeState}>
																			 				<svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
																			 					<path fillRule="evenodd" clipRule="evenodd" d="M0.410051 1.2101C0.956784 0.663365 1.84322 0.663365 2.38995 1.2101L7 5.82016L11.6101 1.2101C12.1568 0.663365 13.0432 0.663365 13.5899 1.2101C14.1367 1.75683 14.1367 2.64327 13.5899 3.19L7.98995 8.79001C7.44322 9.33675 6.55678 9.33675 6.01005 8.79001L0.410051 3.19C-0.136683 2.64327 -0.136683 1.75683 0.410051 1.2101Z" fill="#012BDD" />
																			 				</svg>
																			 			</span>
																						</>
																			 		)}


																							{showMenu && (
																								<>
																								{node.entity_id.body?.processed && (
																								<div
																								dangerouslySetInnerHTML={{ __html: node.entity_id.body?.processed }}
																								className="text-sm text-black mt-4"

																								/>
																								)}
																									</>
																								)
																								}




										</div>
									</div>
								</div>
							</div>











						</div>

						{status === "authenticated" ? (
					           <>
										 <div className="self-stretch rounded-lg bg-blue-600 text-white shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] h-[47px] overflow-hidden shrink-0 flex flex-row py-2.5 px-[18px] box-border items-center justify-center text-dimgray">
 				 							<div className="relative leading-[20px] font-semibold">
 				 					<Link href={`${node.entity_id.path.alias}?gid=${encodeURIComponent(node.gid.id)}`}



									passHref>
 				 								Répondre
 				 					</Link>
								
 				 							</div>
 				 						</div>
					           </>
					         ) : (
										 <div className="self-stretch rounded-lg bg-zinc-200  shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] h-[47px] overflow-hidden shrink-0 flex flex-row py-2.5 px-[18px] box-border items-center justify-center text-dimgray">
 											<div className="relative leading-[20px] font-semibold">
 									<Link href="/register" passHref>
 												Répondre
 									</Link>
 											</div>
 										</div>
					         )}





					</div>
				</div>
			</div>
		)

}
