import React from "react";
import Link from 'next/link'
import Image from 'next/image'
import _ from 'lodash'
import { NodeGroupRow } from "components/node--group--row"
import { NodeGroupfinRow } from "components/node--groupfin--row-indigo"


export function BoxProjetAccount({ node, financements, thegroup, membres, user }: BoxProjetAccountProps) {
	const regrmesparticipations = _.groupBy(membres, 'gid.id')

	return (
		<>





{membres
	.filter(valide => valide.gid.id.includes(thegroup))
		.slice(0, 1)
	.map((members) => (


	<li key={members.id} className="inline-flex">


	<p className="text-3xl font-semibold">
		{financements
		.filter(nonvalide => nonvalide.gid.id.includes(thegroup) && nonvalide.entity_id.field_statut.id.includes('add21795-b0ad-45ab-ba10-a16859dcaf05'))
		.reduce((total, currentValue) => total = total + +currentValue.entity_id.field_estimation_du_prix,0)
	} €
		</p>


	</li>

))}



		</>
	);
}
