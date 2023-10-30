import React, { Component } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { absoluteURL,formatDate } from "lib/utils"
import { useState, useEffect } from "react";

import { NodeGroupRow } from "components/node--group--row"
import { NodeGroupfinRow } from "components/node--groupfin--row-indigo"


export function BoxSousgroupsFin({ financement, subgroupid, stringcontent, subgroup, subgrouptitle, userid,  }: BoxSousgroupsFinProps) {


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





<div class="text-5xl font-semibold mb-5"> {subgrouptitle} - {sum}<br/></div>




					<input onChange={handleInput} class="hidden" name="num1" value={input.num1=
				`${(stringcontent
					.filter(valide => valide.uuid.includes(subgroup) && valide.uuid_1.includes(userid))
					.reduce((total, currentValue) => total = total + +currentValue.field_estimation_du_prix,0)
					)}`
					} type="text"></input>
					<input onChange={handleInput} class="hidden" name="num2" value={input.num2=
					`${(stringcontent
						.filter(valide => valide.uuid.includes(subgroup) && !valide.uuid_1.includes(userid))
						 .reduce((total, currentValue) => total = total + +currentValue.field_estimation_du_prix,0)
					)}`
					} type="text"></input>




												{stringcontent

													.filter(valide => valide.uuid.includes(subgroup) && valide.group_type.includes("subgroup") && valide.type_1.includes("financement") && valide.uuid_1.includes(userid)  )

													.map(group => (
													<div key={group.id} className="grid grid-cols-12  gap-4 mb-5 ">


								<div className="col-span-1">


								{group.user_picture && (


								<Image
								src={absoluteURL(group.user_picture)}
								alt={group.title}
								title={group.title}
								width={50}
								height={50}
								className='h-8 w-8 rounded-full'
								/>

								)}
								</div>
								<div className="col-span-9 text-base font-semibold">
						{group.title}<br/>
								<span className="text-sm  text-neutral-400">{group.created}</span>





								</div>

								<div className="col-span-2 text-base font-semibold">




								{group.field_estimation_du_prix}</div>




													</div>
												))}
												{stringcontent

													.filter(valide => valide.uuid.includes(subgroup) && valide.group_type.includes("subgroup") && valide.type_1.includes("financement") && !valide.uuid_1.includes(userid))

													.map(group => (
													<div key={group.id} className="grid grid-cols-12  gap-4 mb-5 ">


<div className="col-span-1">

{group.user_picture && (


<Image
src={absoluteURL(group.user_picture)}
alt={group.title}
title={group.title}
width={50}
height={50}
className='h-8 w-8 rounded-full'
/>

)}
</div>
<div className="col-span-9 text-base font-semibold">

{group.title}<br/>
<span className="text-sm  text-neutral-400">{group.created}</span>



</div>

<div className="col-span-2 text-base font-semibold  text-rose-500">




- {group.field_estimation_du_prix}</div>




													</div>
												))}







		</>
	);
}
