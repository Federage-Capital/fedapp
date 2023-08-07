import { GetStaticPropsContext, GetStaticPropsResult } from "next"
import { DrupalNode } from "next-drupal"

import { useTranslation } from "next-i18next"
import { DrupalJsonApiParams } from "drupal-jsonapi-params";

import { getSession, useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router"
import { drupal } from "lib/drupal";
import { getGlobalElements } from "lib/get-global-elements"
import { Layout, LayoutProps } from "components/layout"
import { PageHeader } from "components/page-header"
import { FormGroupfin } from "components/form--groupfin"
import { EtatDuGroupe } from "components/etat-du-groupe"

import {
	DrupalNode,
	DrupalUser,
} from "next-drupal";

import { NodeGroupRow } from "components/node--group--row"

interface StatutPageProps extends LayoutProps {


	user: DrupalUser[];
	groupelastcreation: DrupalNode[];
}


export default function StatutPage({
  menus,
  blocks,
	groupe,
	groupelastcreation,
	userss,
	...props
}: StatutPageProps) {

	  const { t } = useTranslation();
	  const router = useRouter();






  return (
    <Layout meta={{ title: t("Choisir le financement") }} menus={menus} blocks={blocks}>

		<div className="self-stretch bg-white flex flex-col py-5 px-4 items-start justify-start gap-[32px] text-dimgray">
			<div className="self-stretch flex flex-row items-center justify-between">
				<div className="w-[167px] flex flex-row items-center justify-start gap-[11px]">
					<div className="rounded-lg bg-gray-100 w-[38px] h-[38px] flex flex-row p-1.5 box-border items-center justify-center">
					<button onClick={() => router.back()} class="bg-white hover:bg-blue-500 text-black font-semibold hover:text-white py-2 px-4  hover:border-transparent rounded">
		<img className="relative w-1.5 h-2.5" alt="" src="/icon2.svg" />


      </button>
					</div>
					<b className="flex-1 relative leading-[24px]">Créer un projet</b>
				</div>
				<div className="rounded-3xs flex flex-row py-0.5 px-2.5 items-center justify-center text-right text-xs">
					<div className="relative leading-[16px] font-medium">
						Étape 2 sur 3
					</div>
				</div>
			</div>
			<div className="self-stretch flex flex-col items-start  gap-[10px] text-9xl text-black">
				<div className="self-stretch relative text-left ">
				<PageHeader
	        heading={t("choisir-le-financement")}

	      />
				</div>
				<div className="self-stretch relative text-base leading-[20px] text-gray-500">
					<span className="font-medium">{`Optez pour un projet entièrement participatif ou limité aux partenaires. Pour plus d’information, vous pouvez `}</span>
					<span className="font-semibold text-mediumblue-100">
						lire notre guide
					</span>
					<span className="font-medium">.</span>
				</div>
			</div>
		</div>





		{groupelastcreation.length ? (
						<span >

						 {groupelastcreation.slice(0,1).map((node) => (

							<div key={node.id}>
      <div className="container pb-10">











			<div className="relative w-full h-[844px] flex flex-col items-start justify-start text-left text-base text-gray-700 font-text-xs-leading-4-font-medium">


			      <div className="self-stretch bg-whitesmoke-100 flex flex-col pt-6 px-4 pb-0 items-center justify-start gap-[48px]">
			        <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
			          <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
			            <b className="self-stretch relative leading-[20px]">
			              Qui peut participer au projet : {node.label} ?
			            </b>

									<EtatDuGroupe key={node.id} node={node}/> <br/>

			          </div>
			          <div className="self-stretch flex flex-col items-start justify-center gap-[12px]">
			            <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
			              <b className="self-stretch relative leading-[20px]">
			                Vous êtes investisseur professionnel ?
			              </b>
			              <div className="self-stretch relative text-xs leading-[18px] font-medium text-gray-500">
			                <span>{`Réservé aux fonds d'investissement et aux financeurs publics. Vous pouvez en faire la demande `}</span>
			                <span className="text-mediumblue-100">depuis ce lien</span>
			                <span>.</span>
			              </div>
			            </div>
			            <div className="self-stretch rounded-lg bg-gainsboro flex flex-row py-[15px] px-4 items-start justify-between text-gray-500 border-[2px] border-solid border-darkgray-100 sm:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]">
			              <div className="w-[282px] flex flex-col items-start justify-start gap-[4px]">
			                <div className="relative leading-[20px] font-semibold">
			                  Mode investisseur
			                </div>
			                <div className="self-stretch relative text-xs leading-[16px] font-medium">
			                  Le projet est entièrement configurable. Ce paramètre est
			                  désactivé par défaut.
			                </div>
			              </div>
			              <div className="rounded-lg w-4 h-5 flex flex-row items-center justify-center">
			                <div className="relative rounded-lg bg-gainsboro box-border w-4 h-4 overflow-hidden shrink-0 border-[2px] border-solid border-gray-500" />
			              </div>
			            </div>
			          </div>
			        </div>
			        <div className="self-stretch flex flex-col pt-0 px-0 pb-6 items-center justify-start text-center text-black">
			          <div className="self-stretch flex flex-col items-center justify-center gap-[24px]">
			            <div className="self-stretch bg-gray-200" />
			            <div className="self-stretch rounded-lg bg-mediumblue-100 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] flex flex-row py-4 px-[18px] items-center justify-center">
			              <div className="flex-1 relative leading-[20px] font-semibold">
			                Suivant
			              </div>
			            </div>
			          </div>
			        </div>



			      </div>
			    </div>

										</div>


</div>

))}
</span>
) : (
<p className="py-6">Nothing found</p>
)}




    </Layout>
  )
}

export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<StatutPageProps>> {

  const session = await getSession({ ctx: context });
  if (!session) {
    return {
      redirect: {
        destination: "/register",
        permanent: false,
      },
    };
  }




  // Fetch user info



	const userss = await drupal.getResourceCollectionFromContext<DrupalUser[]>(
		"user--user",
		context,
{
	params: new DrupalJsonApiParams()
	.addFilter("drupal_internal__uid", session.user.userId)


.addSort("created", "DESC")


		.getQueryObject(),

		withAuth: session.accessToken,


}





	)


  // Fetch user info
	const groupelastcreation = await drupal.getResourceCollectionFromContext<DrupalNode[]>(
	  "group--federage",
	      context,
	  {
	    params: new DrupalJsonApiParams()
			.addFilter("uid.meta.drupal_internal__target_id", userss.drupal_internal__uid)

	    .addFields("group--federage", [
	             "label",
							 "moderation_state",
	             "uid",
	           ])
    .addSort("created", "DESC")


	      .getQueryObject(),

				withAuth: session.accessToken,


	  }

	)





  return {
    props: {
      ...(await getGlobalElements(context)),

			groupelastcreation,
userss,
    },
  }
}
