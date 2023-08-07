import Link from "next/link";
import _ from 'lodash'

import { NodeGroupRow } from "components/node--group--row"


export function BoxProjetsEncours({

	financementsdansgr,

financementsacceptedansgroupe,
 }: BoxProjetsEncoursProps) {



const findansgroupes = _.groupBy(financementsacceptedansgroupe, 'gid.id')





	return (

<>



{Object.entries(findansgroupes).map(([dep, staff]) => {

	const result = staff.reduce((total, currentValue) => total = total + +currentValue.entity_id.field_estimation_du_prix,0);

	console.log(result);  // 600

				return (
					<div className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 mb-5 shadow-sm focus-within:ring-2 focus-within:ring-fedblueblue focus-within:ring-offset-2 hover:border-gray-400" key={dep}>

					<div className="flex-shrink-0">
						<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M17 21.0714H23M11 25.3571V14.6429C11 14.0745 11.2107 13.5295 11.5858 13.1276C11.9609 12.7258 12.4696 12.5 13 12.5H19L21 14.6429H27C27.5304 14.6429 28.0391 14.8686 28.4142 15.2705C28.7893 15.6723 29 16.2174 29 16.7857V25.3571C29 25.9255 28.7893 26.4705 28.4142 26.8724C28.0391 27.2742 27.5304 27.5 27 27.5H13C12.4696 27.5 11.9609 27.2742 11.5858 26.8724C11.2107 26.4705 11 25.9255 11 25.3571Z" stroke="#012BDD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
							<rect x="1.25" y="1.25" width="37.5" height="37.5" rx="18.75" stroke="#D1D5DB" strokeWidth="2.5" strokeDasharray="5 5" />
						</svg>
					</div>

						<div className="min-w-0 flex-1">
						{financementsdansgr?.length ? (
							<>

								{financementsdansgr.filter(infodugroupe => infodugroupe.id.includes(dep)).map(filteredInfodugroupe => {

									return (

										<div key={filteredInfodugroupe.id} className="relative flex items-center ">


												{filteredInfodugroupe.label}<br />
												admin :

<Link href={filteredInfodugroupe.uid.display_name.replace(/è/g, 'e').replaceAll(' ', '-')} passHref>
	<p className="font-semibold">
		{filteredInfodugroupe.uid.display_name}
	</p>
</Link>
<br/>
<div className="flex-shrink-2">
<NodeGroupRow key={filteredInfodugroupe.id} node={filteredInfodugroupe} />

{filteredInfodugroupe.moderation_state == 'published' &&
	<h2>
		<Link href={filteredInfodugroupe} passHref>

			<a>
				<svg
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="w-4 h-4 ml-2"
				>
					<path d="M5 12h14M12 5l7 7-7 7" />
				</svg>

			</a>
		</Link>
	</h2>

	}


</div>









										</div>)
								})}



							</>

						) : (
							< >

NAaN

							</>


						)}

Montant total mes apports potentiels (non-validés +  validés) : {result} <br/>



Montant Non validés
{staff
	.filter(nonvalide => nonvalide.entity_id.field_statut.id.includes('6e6f83ed-b882-4b24-9a1b-897ab1f2e37c'))
	.reduce((total, currentValue) => total = total + +currentValue.entity_id.field_estimation_du_prix,0)



 }

<br/>


Montant  validés
{staff
	.filter(nonvalide => nonvalide.entity_id.field_statut.id.includes('add21795-b0ad-45ab-ba10-a16859dcaf05'))
	.reduce((total, currentValue) => total = total + +currentValue.entity_id.field_estimation_du_prix,0)



 }
<br/>

</div>




					</div>
				)
			})}




<p>


</p>


</>

	);
}
