import React from "react";
import { useReducer } from 'react';

import Link from 'next/link'
import Image from 'next/image'
import _ from 'lodash'
import { absoluteURL } from "lib/utils"
import { useState, useEffect } from "react";
import { BoxProjetAccount } from "components/box-projet--account-integre"


import { BoxApportsSsgroup } from "components/box-apports-ssgroup"

import { NodeGroupRow } from "components/node--group--row"
import { NodeGroupfinRow } from "components/node--groupfin--row-indigo"

import useSWR from 'swr'


const fetcher = (url) => fetch(url).then((res) => res.json());





export function BoxMescomptes({   groupes, sousgroupes, membres, parente, userid, ttssgroupes, financementssg, user }: BoxMescomptesProps) {


	const mesgroupes = _.groupBy(financementssg, 'gid.id')
	//hook defined


	const [input, setInput] = React.useState({
			num1: "",
			num2: "",
	});
	const [sum, setSum] = React.useState(undefined)

	useEffect(() => {
		 setSum(parseInt(input.num1) - parseInt(input.num2))
	}, [input])

	//handle input change

	const handleInput = function(e){
			setInput({
					...input,
					[e.target.name]: e.target.value
			});
	};


const { data: stringtest, stringtestError } = useSWR('https://fed.septembre.io/stringtest/', fetcher)


const { data: stringcontent, stringcontentError } = useSWR('https://fed.septembre.io/stringify-content/', fetcher)



	if (stringtestError) return <div>Failed to load stringtest</div>;

if (stringcontentError) return <div>Failed to load stringcontent</div>;
 if (!stringcontent) return <div>Loading stringcontent ...</div>
  if (!stringtest) return <div>Loading stringtest ...</div>
	return (
		<>
{userid}


		{stringtest?.length ? (
			<>
			{stringtest


				.map(groupssubgroups => (
				<span key={groupssubgroups.id} >



	<li key={groupssubgroups.id} class="shadow-md bg-white mb-10 p-5 rounded-lg">


	<div class="font-bold"> 	Ma valorisation :	{sum} dans : {groupssubgroups.label}</div>

	<input onChange={handleInput} class="hidden" name="num2" value={input.num2=
	`${(stringcontent
	.filter(valide => valide.subgroup_tree.includes(groupssubgroups.subgroup_tree) && valide.type_1.includes("financement") && !valide.uuid_1.includes(userid))
	.reduce((total, currentValue) => total = total + +currentValue.field_estimation_du_prix,0)
	)}`
	} type="text"></input> <br/>

	<input onChange={handleInput} class="hidden" name="num1" value={input.num1=
	`${(stringcontent
		.filter(valide => valide.subgroup_tree.includes(groupssubgroups.subgroup_tree) && valide.type_1.includes("financement") && valide.uuid_1.includes(userid))
		 .reduce((total, currentValue) => total = total + +currentValue.field_estimation_du_prix,0)
	)}`
	} type="text"></input>

	Somme de mes apports dans : {groupssubgroups.label} :

		{stringcontent
		.filter(valide => valide.subgroup_tree.includes(groupssubgroups.id) && valide.group_type.includes("federage") && !valide.field_statut.includes('177,178')  )
		.reduce((total, currentValue) => total = total + +currentValue.field_estimation_du_prix,0)
		} €
<br/>

	Somme de mes apports dans : {groupssubgroups.label} :

		{stringcontent
		.filter(valide => valide.subgroup_tree.includes(groupssubgroups.id) && valide.group_type.includes("federage") && !valide.field_statut.includes('177,178')  && valide.uuid_1.includes(userid))
		.reduce((total, currentValue) => total = total + +currentValue.field_estimation_du_prix,0)
		} €
	<br/>

	somme sous groupe dont je suis créateur :

	{stringcontent
	.filter(valide => valide.subgroup_tree.includes(groupssubgroups.subgroup_tree) && valide.group_type.includes("subgroup") && valide.uuid_1.includes(userid))
	.reduce((total, currentValue) => total = total + +currentValue.field_estimation_du_prix,0)
	} €
	<br/>

	somme sous groupe dont je ne suis pas créateur :
	{stringcontent
	.filter(valide => valide.subgroup_tree.includes(groupssubgroups.subgroup_tree) && valide.group_type.includes("subgroup") && !valide.uuid_1.includes(userid))
	.reduce((total, currentValue) => total = total + +currentValue.field_estimation_du_prix,0)
	} €
	<br/>



<BoxApportsSsgroup financement={financementssg} subgroup={stringtest} stringcontent={stringcontent} subgroupid={groupssubgroups.subgroup_tree} userid={userid}/>

</li>


				</span>
			))}
		</>
		) : (

		<p>  Aucun utilisateur</p>

		)}










		</>
	);
}
