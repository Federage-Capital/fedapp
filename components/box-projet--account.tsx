import React from "react";
import Link from 'next/link'
import Image from 'next/image'
import _ from 'lodash'
import { NodeGroupRow } from "components/node--group--row"


export function BoxProjetAccount({ node, financements, membres, user }: BoxProjetAccountProps) {
	const regroupement = _.groupBy(financements, 'gid.id')
	const regrmesparticipations = _.groupBy(membres, 'gid.id')
	return (
		<>
			<div className="pb-4">
			{_.map(regrmesparticipations,(value, key) => (

												<div key={key} className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 mb-5 shadow-sm focus-within:ring-2 focus-within:ring-fedblueblue focus-within:ring-offset-2 hover:border-gray-400" key={key}>




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
																				 <div key={filteredtitredugroupe.id} className="relative flex items-center ">
																							<p className="text-3xl font-semibold">	{filteredtitredugroupe.label}</p><br />


																				<div className="ml-12 flex-shrink-2">

																				{filteredtitredugroupe.uid.display_name}


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




<br/>
Mes propositions non validées :

			{financements
			.filter(nonvalide => nonvalide.gid.id.includes(key) && nonvalide.entity_id.field_statut.id.includes('6e6f83ed-b882-4b24-9a1b-897ab1f2e37c') && nonvalide.uid.id.includes(user[0].id))
			.reduce((total, currentValue) => total = total + +currentValue.entity_id.field_estimation_du_prix,0)
			}



<br/>

<br/>

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
<div className="col-span-8"><p>{item.entity_id.title}</p>
<p>{item.entity_id.created}</p></div>
<div className="col-span-2">{item.entity_id.field_estimation_du_prix}</div>
</div>


			))}










													<br/>
													</div>
													</div>


											))}
			</div >
		</>
	);
}
