import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next"


export function ButtonConnexion() {
	const { t } = useTranslation()
	return (
		<button class="shadow-lg justify-end fedblueblue rounded-md px-5 py-2 bg-white ">

			<Link href="/login" passHref>
				<a className="text-lg">{t("Connexion")}</a>
			</Link>

		</button>
	);
}