import React, { Component } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { absoluteURL,formatDate } from "lib/utils"
import { useState, useEffect } from "react";

import { NodeGroupRow } from "components/node--group--row"
import { NodeGroupfinRow } from "components/node--groupfin--row-indigo"


export function BoxGroupFin({ financement, groupsfin, groupid, grouptitle, userid  }: BoxGroupFinProps) {


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


				{grouptitle} <br/>
		{sum}



			<input onChange={handleInput} class="hidden" name="num1" value={input.num1=
		`${(groupsfin
		.filter(valide => valide.uid.id.includes(userid) && valide.gid.id.includes(groupid))
		.reduce((total, currentValue) => total = total + +currentValue.entity_id.field_estimation_du_prix,0)
		)}`
		} type="text"></input>
		<input onChange={handleInput} class="hidden" name="num2" value={input.num2=
		`${(groupsfin
		  	.filter(valide => !valide.uid.id.includes(userid) && valide.gid.id.includes(groupid))
		   .reduce((total, currentValue) => total = total + +currentValue.entity_id.field_estimation_du_prix,0)
		)}`
		} type="text"></input>


							{groupsfin
	 			 			.filter(valide => valide.gid.id.includes(groupid) && valide.uid.id.includes(userid))

	 			 				 .map((fins) => (
	 								 <div key={fins.id} className="grid grid-cols-12  gap-4 mb-5 ">


	 <div className="col-span-1">

	 {fins.uid.user_picture && (


	 <Image
	 src={absoluteURL(fins.uid.user_picture.uri.url)}
	 alt={fins.uid.display_name}
	 title={fins.uid.display_name}
	 width={50}
	 height={50}
	 className='h-8 w-8 rounded-full'
	 />

	 )}
	 </div>
	 <div className="col-span-9 text-base font-semibold">


	 {fins.label}<br/>
	 <span className="text-sm  text-neutral-400">{fins.created}</span>



	 </div>

	 <div className="col-span-2 text-base font-semibold  ">




	 {fins.entity_id.field_estimation_du_prix}</div>




	 								 </div>





	 			 					 ))}


					 {groupsfin
			 			.filter(valide => valide.gid.id.includes(groupid) && !valide.uid.id.includes(userid))

			 				 .map((fins) => (
								 <div key={fins.id} className="grid grid-cols-12  gap-4 mb-5 ">


<div className="col-span-1">

{fins.uid.user_picture && (


<Image
src={absoluteURL(fins.uid.user_picture.uri.url)}
alt={fins.uid.display_name}
title={fins.uid.display_name}
width={50}
height={50}
className='h-8 w-8 rounded-full'
/>

)}
</div>
<div className="col-span-9 text-base font-semibold">


{fins.label}<br/>
<span className="text-sm  text-neutral-400">{fins.created}</span>



</div>

<div className="col-span-2 text-base font-semibold  text-rose-500">




- {fins.entity_id.field_estimation_du_prix}</div>




								 </div>





			 					 ))}










		</>
	);
}
