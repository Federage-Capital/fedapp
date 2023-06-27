import React from 'react'
import Link from 'next/link'
import { useTranslation } from "next-i18next"
import { useRouter } from "next/router"


type MenuConnexionProps = {
	text: string;
	text_confi: string;
	text_press: string;
};

const MenuConnexion = (props: MenuConnexionProps) => {
	const { t } = useTranslation()

	const router = useRouter()
	const refreshPage = () => {
		router.reload();
	}

	const buttonPage = () => {
		router.push({
			pathname: '/register',
			query: {
				tab: 1,
				toggleValue: false
			}
		}).then(() => refreshPage());
	}

	const buttonRedirect = () => {
		router.push({
			pathname: '/register',
			query: {
				tab: 3,
				toggleValue: false
			}
		}).then(() => refreshPage());
	}


	return (
		<div className="mt-5">
			<div className="flex justify-center space-x-20">
				<button>
					<Link href="/mentions-legales" passHref>
						<div className="ml-2">{props.text}</div>
					</Link>
				</button>
				<button>
					<Link href="/confidentialite" passHref>
						<p className="ml-2 px-2 sm:px-12">{props.text_confi}</p>
					</Link>
				</button>
			</div>

			<button>
				<Link href="/cgu" passHref>
					<p className="mt-3 ml-2 pb-5 md:ml-5">{props.text_press}</p>
				</Link>
			</button>
			<div className="flex justify-center">
				<button className="px-3 fedblue py-2 text-md text-white transition-colors rounded-xl
					cursor-pointer bg-link hover:bg-white hover:text-whote border-link w-5/6 w-full" onClick={buttonPage}>
					<a className="text-lg">{t("Connexion")}</a>
				</button>
			</div>
			<div className="flex justify-center mx-auto">
				<div className="mt-5 relative pb-0 mr-12">
					<p className="text-gray-500 font-semibold">Jamais inscrit ?</p>
					<button onClick={buttonRedirect}>
						<p className="relative -top-6 left-[125px] fedblueblue font-semibold">Cliquez ici</p>
					</button>
				</div>
			</div>
		</div >
	);
}

export default MenuConnexion;