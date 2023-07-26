import React from "react";
import Link from 'next/link'
import Image from 'next/image'
import CalculApport from "./calcul-apport";
import { useTranslation } from "next-i18next"
import { useRouter } from "next/router"



export function BoxMemberProject({ node, project_member, useringroup }: BoxAlluserlistProps) {

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
	return (
		<>
			{project_member?.data?.attributes.id}
			<div className="pb-4">
				<div className="bg-white rounded-lg">
					<div className="flex font-semibold ml-3 pt-3">
						{useringroup &&
							useringroup
								.filter((userin) => userin.uuid.includes(project_member?.id))
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
					<div className="ml-3 grid xs:grid-cols-1 sm:grid-rows-2 sm:grid-flow-col gap-2 pt-5">
						<p className="font-semibold">
							{project_member?.attributes.label}
						</p>
						<div className="text-slate-500 font-semibold mr-4 lowercase relative -top-3 text-sm max-w-xs truncate">
							app.federage.com/{project_member?.attributes.label.replace(/è/g, 'e').replaceAll(' ', '-')}
						</div>
					</div>
					{project_member?.attributes.field_description?.value && (
						<div dangerouslySetInnerHTML={{ __html: project_member?.attributes.field_description?.value }} className="leading-normal ml-2 pb-5 text-slate-600 text-base sm:text-base lg:text-lg px-4" />
					)}
					<div className="flex ml-6 items-center pb-5 text-sm text-slate-600">
						<div className="pr-2">
							<CalculApport key={project_member?.id} node={project_member} />
						</div>
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
			</div >
		</>
	);
}
