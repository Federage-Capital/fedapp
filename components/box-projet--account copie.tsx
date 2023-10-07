import React from "react";
import Link from 'next/link'
import Image from 'next/image'
import _ from 'lodash'
import { NodeGroupRow } from "components/node--group--row"


export function BoxProjetAccount({ node, financements, membres, user, ...props }: BoxProjetAccountProps) {
	const regroupement = _.groupBy(financements, 'gid.id')
	const regrmesparticipations = _.groupBy(membres, 'gid.id')
	return (
		<>
			<div className="pb-4">
			{_.map(regrmesparticipations,(value, key) => (
												<>
												<div className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 mb-5 shadow-sm focus-within:ring-2 focus-within:ring-fedblueblue focus-within:ring-offset-2 hover:border-gray-400" key={key}>




												<div className="min-w-0 flex-1">
											<p className="text-3xl font-semibold">
												{financements
												.filter(nonvalide => nonvalide.gid.id.includes(key) && nonvalide.entity_id.field_statut.id.includes('add21795-b0ad-45ab-ba10-a16859dcaf05'))
												.reduce((total, currentValue) => total = total + +currentValue.entity_id.field_estimation_du_prix,0)
												} (Montants validés)
												</p>
												{key?.length ? (
															<>
												{node.filter(titredugroupe => titredugroupe.id.includes(key)).map(filteredtitredugroupe => {
																	return (
																				 <div key={filteredtitredugroupe.id} className="relative flex items-center ">
																							<p className="text-3xl font-semibold">	{filteredtitredugroupe.label}</p><br />


																				<div className="flex-shrink-2">
																				<h2>    <NodeGroupRow key={filteredtitredugroupe.id} node={filteredtitredugroupe} />

																					<Link href={filteredtitredugroupe.path.alias} passHref>

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
																				</div>
																				{filteredtitredugroupe.uid.display_name}
																				 </div>
																			 )
																})}
															</>
														) : (
															< >
												NAaN
															</>
														)}



Non validés:

{financements
.filter(nonvalide => nonvalide.gid.id.includes(key) && nonvalide.entity_id.field_statut.id.includes('6e6f83ed-b882-4b24-9a1b-897ab1f2e37c'))
.reduce((total, currentValue) => total = total + +currentValue.entity_id.field_estimation_du_prix,0)
}
<br/>
Mes apports non validés :

			{financements
			.filter(nonvalide => nonvalide.gid.id.includes(key) && nonvalide.entity_id.field_statut.id.includes('6e6f83ed-b882-4b24-9a1b-897ab1f2e37c') && nonvalide.uid.id.includes(user[0].id))
			.reduce((total, currentValue) => total = total + +currentValue.entity_id.field_estimation_du_prix,0)
			}



<br/>

<br/>

<div class="grid grid-cols-12 gap-4">
<div className="col-span-2">Transactions (apports validés)  :</div>
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

		<div key={item.id} class="grid grid-cols-12 gap-4">
  <div className="col-span-2">{item.entity_id.uid.name}</div>
<div className="col-span-8">{item.entity_id.title}</div>
<div className="col-span-2">{item.entity_id.field_estimation_du_prix}</div>
</div>


			))}










													<br/>
													</div>
													</div>

												</>
											))}
			</div >
		</>
	);
}
