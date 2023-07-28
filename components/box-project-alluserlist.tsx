import React from "react";
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from "next/router"
import CalculApport from "./calcul-apport";
import SlideApport from "./card-slide_apport";

import { useTranslation } from "next-i18next"


export function BoxProjectList({ node, useringroup, status }: BoxProjectAlluserlistProps) {
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
											<Link href={`/group/federage/${filterUser.label.replace(/è/g, 'e').replaceAll(' ', '-')}`} passHref>
												<Image
													src={`${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}${filterUser.user_picture}`}
													alt={filterUser.uid}
													width={30}
													height={30}
													className="h-8 w-8 rounded-full"
												/>
											</Link>
										)}
									</div>
								))}
					</div>
					<div className="flex font-semibold ml-3 pt-3 relative">*
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
						<Link href="/contribuer" passHref>
							<button className="px-3 fedblue py-2 mb-4 text-md text-white transition-colors rounded-xl
					cursor-pointer bg-link hover:bg-white hover:text-whote border-link w-5/6">
								<a className="text-lg">{t("Contribuer")}</a>
							</button>
						</Link>
					</div>
				</div>
			</div>
		)
	}
	else if (status === "unauthenticated") {
		return (
			<div className="pb-4">
				<div className="bg-white rounded-lg max-w-full">
					<div className="flex font-semibold ml-3 pt-3">
						{useringroup &&
							useringroup
								.filter((userin) => userin.uuid.includes(node.id))
								.slice(0, 5)
								.map((filterUser, index) => (
									<div key={filterUser.id} className={`relative ${index != 0 ? '-ml-2' : ''}`}>
										{filterUser.user_picture && (
											<Link href={`/group/federage/${filterUser.label.replace(/è/g, 'e').replaceAll(' ', '-')}`} passHref>
												<Image
													src={`${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}${filterUser.user_picture}`}
													alt={filterUser.uid}
													width={30}
													height={30}
													className="h-8 w-8 rounded-full"
												/>
											</Link>
										)}
									</div>
								))}
					</div>
					<div className="font-semibold ml-3 pt-3 relative">
						{node.label}
						<div className="mt-3">

							{node.field_description?.value && (
								<div dangerouslySetInnerHTML={{ __html: node.field_description?.value }} className="leading-normal pb-5 text-slate-600 text-base sm:text-base lg:text-lg" />
							)}
						</div>
					</div>

					<button className="leading-normal pb-5 text-slate-600 text-base sm:text-base lg:text-lg ml-3 fedblueblue font-semibold" onClick={changeState}>
						<div className="flex items-center">
							<CalculApport key={node.uuid} node={node} />
							<span className="ml-3">
								{showMenu ? (
									<span onClick={changeState}>
										<svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path fillRule="evenodd" clipRule="evenodd" d="M13.5899 8.78996C13.0432 9.3367 12.1568 9.3367 11.6101 8.78996L7 4.1799L2.38995 8.78996C1.84322 9.3367 0.956784 9.3367 0.410051 8.78996C-0.136684 8.24323 -0.136684 7.35679 0.410051 6.81006L6.01005 1.21005C6.55678 0.663316 7.44322 0.663316 7.98995 1.21005L13.5899 6.81006C14.1367 7.35679 14.1367 8.24323 13.5899 8.78996Z" fill="#012BDD" />
										</svg>
									</span>
								) : (
									<span onClick={changeState}>
										<svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path fillRule="evenodd" clipRule="evenodd" d="M0.410051 1.2101C0.956784 0.663365 1.84322 0.663365 2.38995 1.2101L7 5.82016L11.6101 1.2101C12.1568 0.663365 13.0432 0.663365 13.5899 1.2101C14.1367 1.75683 14.1367 2.64327 13.5899 3.19L7.98995 8.79001C7.44322 9.33675 6.55678 9.33675 6.01005 8.79001L0.410051 3.19C-0.136683 2.64327 -0.136683 1.75683 0.410051 1.2101Z" fill="#012BDD" />
										</svg>
									</span>
								)}
							</span>
						</div>
					</button>

					{showMenu && <SlideApport showMenu={showMenu} node={node} />}

					<div className="flex justify-center">
						<Link href="/register" passHref>
							<button className="px-3 bg-gray-200 py-3 mb-4 text-md text-white transition-colors rounded-xl
							cursor-pointer bg-link hover:bg-white hover:text-whote border-link w-5/6 " onClick={handleButtonClick}>
								<a className="text-sm text-slate-500 font-semibold">{t("Contribuer")}</a>
							</button>
						</Link>
					</div>
				</div>
			</div>
		)
	}
}

