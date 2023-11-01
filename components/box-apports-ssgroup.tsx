import React, { Component } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { absoluteURL,formatDate } from "lib/utils"
import { useState, useEffect } from "react";
import { BoxSousgroupsFin } from "components/box-apports-ssgroup-fin"

import { NodeGroupRow } from "components/node--group--row"
import { NodeGroupfinRow } from "components/node--groupfin--row-indigo"


export function BoxApportsSsgroup({ financement, subgroupid, stringcontent, subgroup, userid,  }: BoxApportsSsgroupProps) {


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


	return (
		<>


		<div className="grid grid-cols-12 gap-4">
		<div class="col-span-12 font-bold mb-5 mt-5"> 	Ma somme dans ces sous groupes :	{sum}</div>




	<div class="col-span-12">




		{subgroup
			.filter(valide => valide.subgroup_tree.includes(subgroupid) && valide.type.includes("subgroup"))

				.map((item,index) => (
					<div key={index} className="mb-5" >


					<input onChange={handleInput} class="hidden" name="num1" value={input.num1=
				`${(stringcontent
					.filter(valide => valide.subgroup_tree.includes(item.subgroup_tree) && valide.group_type.includes("subgroup") && valide.uuid_1.includes(userid))
					.reduce((total, currentValue) => total = total + +currentValue.field_estimation_du_prix,0)
					)}`
					} type="text"></input>
					<input onChange={handleInput} class="hidden" name="num2" value={input.num2=
					`${(stringcontent
						.filter(valide => valide.subgroup_tree.includes(item.subgroup_tree) && valide.group_type.includes("subgroup") && !valide.uuid_1.includes(userid))
						 .reduce((total, currentValue) => total = total + +currentValue.field_estimation_du_prix,0)
					)}`
					} type="text"></input>



<div className="col-span-7">


<div className="relative flex items-center">
	<div className="mr-4">
	<Link href={`/subfinancement/new?gid=${encodeURIComponent(item.uuid)}`} passHref>
	<div className="inline-block px-3 py-1 bg-indigo-100  text-blue-700 transition-colors rounded-xl text-xs text-center font-semibold hover:bg-indigo-200 lg:py-2 bg-secondary hover:bg-white hover:text-black border-secondary">
Apport
		</div>
	</Link>
	</div>

	<div >
	<Link href={`/membre/new?gid=${encodeURIComponent(item.uuid)}`} passHref>
	<div className="inline-block px-3 py-1 bg-indigo-100  text-blue-700 transition-colors rounded-xl text-xs text-center font-semibold hover:bg-indigo-200 lg:py-2 bg-secondary hover:bg-white hover:text-black border-secondary">
		Inviter
</div>
	</Link>
</div>
</div>



</div>



												<BoxSousgroupsFin stringcontent={stringcontent} subgroup={item.uuid} subgrouplink={item.view_group} subgrouptitle={item.label} userid={userid}/>



		</div>

						))}

</div>
									 </div>
		</>
	);
}
