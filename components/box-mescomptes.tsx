import React from "react";
import { useReducer } from 'react';

import Link from 'next/link'
import Image from 'next/image'
import _ from 'lodash'
import { absoluteURL } from "lib/utils"
import { useState, useEffect } from "react";
import { BoxProjetAccount } from "components/box-projet--account-integre"
import { BoxGroupFin } from "components/box-apports-group-fin"


import { BoxApportsSsgroup } from "components/box-apports-ssgroup"

import { NodeGroupRow } from "components/node--group--row"
import { NodeGroupfinRow } from "components/node--groupfin--row-indigo"

import useSWR from 'swr'


const fetcher = (url) => fetch(url).then((res) => res.json());





export function BoxMescomptes({   groupes, sousgroupes, membres, memberships, membershipssgroup, groupsfin, parente, userid, ttssgroupes, financementssg, user }: BoxMescomptesProps) {


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
const { data: groupsmemberships, groupsmembershipsError } = useSWR(() => `https://fed.septembre.io/groupsmemberships_rest/`, fetcher);




	if (stringtestError) return <div>Failed to load stringtest</div>;

if (stringcontentError) return <div>Failed to load stringcontent</div>;
if (groupsmembershipsError) return <div>Failed to load groupsmemberships</div>;
 if (!groupsmemberships) return <div>Loading groupsmemberships ...</div>
 if (!stringcontent) return <div>Loading stringcontent ...</div>
  if (!stringtest) return <div>Loading stringtest ...</div>
	return (
		<>
		{groupsmemberships?.length ? (
			<>



						{groupsmemberships
							.filter((userin) => userin.uuid_2.includes(userid))
			.map((filterUser) => {

			        return filterUser.subgroup_tree === "0" ? (
			          <h3 key={filterUser.uuid} className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 mb-5 shadow-sm focus-within:ring-2 focus-within:ring-fedblueblue focus-within:ring-offset-2 hover:border-gray-400">

								<BoxGroupFin groupsfin={groupsfin} groupid={filterUser.uuid} grouptitle={filterUser.label} grouplink={filterUser.view_group}userid={userid}/>


								</h3>
			        ) : (
			          <h3 key={filterUser.uuid} className="relative  space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 mb-5 shadow-sm focus-within:ring-2 focus-within:ring-fedblueblue focus-within:ring-offset-2 hover:border-gray-400">

								<div className="flex items-center">
							<p className="text-3xl font-semibold">
								Ma valorisation :	{sum} dans : {filterUser.label}</p>



								<input onChange={handleInput} class="hidden" name="num2" value={input.num2=
								`${(stringcontent
								.filter(valide => valide.subgroup_tree.includes(filterUser.subgroup_tree) && valide.type_1.includes("financement") && !valide.uuid_1.includes(userid))
								.reduce((total, currentValue) => total = total + +currentValue.field_estimation_du_prix,0)
								)}`
								} type="text"></input> <br/>

								<input onChange={handleInput} class="hidden" name="num1" value={input.num1=
								`${(stringcontent
								.filter(valide => valide.subgroup_tree.includes(filterUser.subgroup_tree) && valide.type_1.includes("financement") && valide.uuid_1.includes(userid))
								 .reduce((total, currentValue) => total = total + +currentValue.field_estimation_du_prix,0)
								)}`
								} type="text"></input>

								Somme de mes apports dans : {filterUser.label} :

								{stringcontent
								.filter(valide => valide.subgroup_tree.includes(filterUser.id) && valide.group_type.includes("federage") && !valide.field_statut.includes('177,178')  )
								.reduce((total, currentValue) => total = total + +currentValue.field_estimation_du_prix,0)
								} €
								<br/>

								Somme de mes apports dans : {filterUser.label} :

								{stringcontent
								.filter(valide => valide.subgroup_tree.includes(filterUser.id) && valide.group_type.includes("federage") && !valide.field_statut.includes('177,178')  && valide.uuid_1.includes(userid))
								.reduce((total, currentValue) => total = total + +currentValue.field_estimation_du_prix,0)
								} €
								<br/>

								somme sous groupe dont je suis créateur :

								{stringcontent
								.filter(valide => valide.subgroup_tree.includes(filterUser.subgroup_tree) && valide.group_type.includes("subgroup") && valide.uuid_1.includes(userid))
								.reduce((total, currentValue) => total = total + +currentValue.field_estimation_du_prix,0)
								} €
								<br/>

								somme sous groupe dont je ne suis pas créateur :
								{stringcontent
								.filter(valide => valide.subgroup_tree.includes(filterUser.subgroup_tree) && valide.group_type.includes("subgroup") && !valide.uuid_1.includes(userid))
								.reduce((total, currentValue) => total = total + +currentValue.field_estimation_du_prix,0)
								} €
								<br/>
	</div>


											{stringtest?.length ? (
												<>
												{stringtest

													.filter((usergroup) => usergroup.uuid.includes(filterUser.uuid))

													.map(groupssubgroups => (





										<li key={groupssubgroups.id}  className="relative flex items-center space-x-3 mb-5 focus-within:ring-2 focus-within:ring-fedblueblue focus-within:ring-offset-2 hover:border-gray-400">






										<BoxApportsSsgroup financement={financementssg} subgroup={stringtest} stringcontent={stringcontent} subgroupid={groupssubgroups.subgroup_tree} userid={userid}/>

									</li>


												))}
											</>
											) : (

											<p>  Aucun utilisateur</p>

											)}



								</h3>
			        );
			      })}





	</>


					) : (

						<p>  Aucun utilisateur</p>

						)}











		</>
	);
}
