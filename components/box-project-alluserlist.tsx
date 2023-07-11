import React from "react";
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from "next/router"
import CalculApport from "./calcul-apport";

import { useTranslation } from "next-i18next"


export function BoxProjectList({ node, useringroup, status }: BoxProjectAlluserlistProps) {
	const { t } = useTranslation()
	const router = useRouter()


	const handleButtonClick = () => {
		router.push({
			pathname: '/register',
			query: {
				tab: 3,
				toggleValue: false
			}
		});
	};

	if (status === "authenticated") {
		return (
			<div className="pb-4">
				<div className="bg-white rounded-lg">
					<div className="flex font-semibold ml-3 pt-3">
						{useringroup &&
							useringroup
								.filter((userin) => userin.uuid.includes(node.id))
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
					<div className="flex font-semibold ml-3 pt-3 relative">*
						{/* {node} */}
						{node.label}
					</div>
					<div>
						{node.field_description?.value && (
							<div dangerouslySetInnerHTML={{ __html: node.field_description?.value }} className="leading-normal ml-2 pb-5 text-slate-600 text-base sm:text-base lg:text-lg px-4" />
						)}
					</div>
					<div className="leading-normal ml-2 pb-5 text-slate-600 text-base sm:text-base lg:text-lg px-4">
						•  apports = calcul des apports
					</div>
					<div>
						apport attendu : intitulé du pre-apport
					</div>
					<div className="flex justify-center">
						<button className="px-3 fedblue py-2 mb-4 text-md text-white transition-colors rounded-xl
					cursor-pointer bg-link hover:bg-white hover:text-whote border-link w-5/6">
							<a className="text-lg">{t("Contribuer")}</a>
						</button>
					</div>
				</div>
			</div>
		)
	}
	else if (status === "unauthenticated") {
		return (
			<div className="pb-4">
				<div className="bg-white rounded-lg">
					<div className="flex font-semibold ml-3 pt-3">
						{useringroup &&
							useringroup
								.filter((userin) => userin.uuid.includes(node.id))
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
					<div className="flex font-semibold ml-3 pt-3 relative">
						{node.label}
					</div>
					<div>
						{node.field_description?.value && (
							<div dangerouslySetInnerHTML={{ __html: node.field_description?.value }} className="leading-normal ml-2 pb-5 text-slate-600 text-base sm:text-base lg:text-lg px-4" />
						)}
					</div>
					<div className="leading-normal ml-2 pb-5 text-slate-600 text-base sm:text-base lg:text-lg px-4">
						<CalculApport key={node.uuid} node={node} />

					</div>
					<div>
						apport attendu : intitulé du pre-apport
					</div>
					<div className="flex justify-center">
						<Link href="/register" passHref>
							<button className="px-3 fedblue py-2 mb-4 text-md text-white transition-colors rounded-xl
							cursor-pointer bg-link hover:bg-white hover:text-whote border-link w-5/6" onClick={handleButtonClick}>
								<a className="text-lg">{t("Contribuer")}</a>
							</button>
						</Link>
					</div>
				</div>
			</div>
		)
	}
}

