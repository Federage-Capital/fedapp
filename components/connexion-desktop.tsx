import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next"
import { useRouter } from "next/router"



export function ButtonConnexion() {
	const { t } = useTranslation()

	const router = useRouter()
	const redirectButtonConnexion = () => {
		router.push({
			pathname: '/register',
			query: {
				tab: 1,
				toggleValue: false
			}
		});
	}
	return (
		<button className="shadow-lg justify-end fedblueblue rounded-md px-5 py-2 bg-white " onClick={redirectButtonConnexion}>


			<a className="text-lg">{t("Connexion")}</a>

		</button>
	);
}