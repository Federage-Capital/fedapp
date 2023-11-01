import React from "react";
import Link from 'next/link'
import Image from 'next/image'
import _ from 'lodash'
import { NodeGroupRow } from "components/node--group--row"
import { NodeGroupfinRow } from "components/node--groupfin--row-indigo"


export function BoxProjetAccount({ node, financements, membres, user }: BoxProjetAccountProps) {
	const regrmesparticipations = _.groupBy(membres, 'gid.id')
	return (
		<>

			{_.map(regrmesparticipations,(value, key) => (

												<div className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 mb-5 shadow-sm focus-within:ring-2 focus-within:ring-fedblueblue focus-within:ring-offset-2 hover:border-gray-400" key={key}>




												<div className="min-w-0 flex-1">
											<p className="text-3xl font-semibold">
												{financements
												.filter(nonvalide => nonvalide.gid.id.includes(key) && nonvalide.entity_id.field_statut.id.includes('add21795-b0ad-45ab-ba10-a16859dcaf05'))
												.reduce((total, currentValue) => total = total + +currentValue.entity_id.field_estimation_du_prix,0)
											} €
												</p>


												{key?.length ? (
															<>
												{node.filter(titredugroupe => titredugroupe.id.includes(key)).map(filteredtitredugroupe => {
																	return (
																				 <div key={filteredtitredugroupe.id}>

<div className="relative flex items-center text-3xl font-semibold">
																							{filteredtitredugroupe.label}


																				<div className="ml-12 flex-shrink-2">

																				{filteredtitredugroupe.uid.display_name}


																				</div>


</div>



Mes propositions non validées :

			{financements
			.filter(nonvalide => nonvalide.gid.id.includes(key) && nonvalide.entity_id.field_statut.id.includes('6e6f83ed-b882-4b24-9a1b-897ab1f2e37c') && nonvalide.uid.id.includes(user[0].id))
			.reduce((total, currentValue) => total = total + +currentValue.entity_id.field_estimation_du_prix,0)
			}




<div className="relative flex items-center">
	<div className="col-span-10 text-right">
<Link href={`/financement/new?gid=${encodeURIComponent(filteredtitredugroupe.id)}`}>

<div className="inline-block px-3 py-1 bg-indigo-100  text-blue-700 transition-colors rounded-xl text-xs text-center font-semibold hover:bg-indigo-200 lg:py-2 bg-secondary hover:bg-white hover:text-black border-secondary">
		Nouvel apport
		</div>

</Link>
</div>

<div className="col-span-10 text-right">
<Link href={`/membre/new?gid=${encodeURIComponent(filteredtitredugroupe.id)}`}>

<div className="inline-block px-3 py-1 bg-indigo-100 hover:bg-indigo-200 text-blue-700 transition-colors rounded-xl text-xs text-center font-semibold lg:py-2 bg-secondary hover:bg-white hover:text-black border-secondary">
	Ajouter un membre
	</div>

</Link>
</div>



<NodeGroupfinRow key={filteredtitredugroupe.id} node={filteredtitredugroupe} />
</div>
</div>

)
})}
</>
) : (
< >
NAaN
</>
)}


<div className="grid grid-cols-12 gap-4">
<div className="col-span-2 font-semibold">Transactions</div>
<div className="col-span-8"></div>
<div className="col-span-2">
{key?.length ? (
			<>
{node.filter(titredugroupe => titredugroupe.id.includes(key)).map(filteredtitredugroupe => {
					return (
								 <div key={filteredtitredugroupe.id} className="relative flex items-center ">



								<div className="flex-shrink-2">
								<h2>
									<Link href={filteredtitredugroupe.path.alias} passHref>

										<a>
									Tout voir

										</a>
									</Link>
								</h2>
								</div>
								 </div>
							 )
				})}
			</>
		) : (
			< >
NAaN
			</>
		)}
</div>
</div>
{financements
	.filter(valide => valide.gid.id.includes(key) && valide.entity_id.field_statut.id.includes('add21795-b0ad-45ab-ba10-a16859dcaf05'))
	.map((item) => (

		<div key={item.id} className="grid grid-cols-12 gap-4">
  <div className="col-span-2">{item.entity_id.uid.name}</div>

	<Link href=	{item.entity_id.path.alias} passHref>

		<a>
voir l&apos;offre node

		</a>
	</Link>


		<Link href=	{item.path.alias}  passHref>

			<a>
	voir l&apos;offre relation

			</a>
		</Link>
<div className="col-span-8"><p>{item.entity_id.title}</p>
<p>{item.entity_id.created}</p></div>
<div className="col-span-2">{item.entity_id.field_estimation_du_prix}</div>
</div>


			))}










									 
													</div>
													</div>


											))}

		</>
	);
}
