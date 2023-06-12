import React from 'react'
import Link from 'next/link'
import { useTranslation } from "next-i18next"

type MenuConnexionProps = {
    text: string;
    text_confi: string;
    text_press: string;
};

const MenuConnexion = (props: MenuConnexionProps) => {
    const { t } = useTranslation()
    return (
        <div className="mt-5">
            <div className="flex space-x-12">
                <p className="ml-2">{props.text}</p>
                <p className="px-12">{props.text_confi}</p>
            </div>
            <p className="mt-3 ml-2 pb-5">{props.text_press}</p>
            <div className="flex justify-center">
                <button className="px-3 fedblue py-2 text-md text-white transition-colors rounded-xl
					cursor-pointer bg-link hover:bg-white hover:text-whote border-link w-5/6">
                    <Link href="/login" passHref>
                        <a className="text-lg">{t("Connexion")}</a>
                    </Link>
                </button>
            </div>
            <div className="flex justify-center mx-auto">
                <div className="mt-5 relative pb-0 mr-12">
                    <p className="text-gray-500 font-semibold">Jamais inscrit ?</p>
                    <p className="relative -top-6 left-[125px] fedblueblue font-semibold">Cliquez ici</p>
                </div>
            </div>
        </div >
    );
}

export default MenuConnexion;