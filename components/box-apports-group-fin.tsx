import React, { Component } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { absoluteURL,formatDate } from "lib/utils"
import { useState, useEffect } from "react";

import { NodeGroupRow } from "components/node--group--row"
import { NodeGroupfinRow } from "components/node--groupfin--row-indigo"


export function BoxGroupFin({ financement, groupsfin, grouplink, groupid, grouptitle, userid  }: BoxGroupFinProps) {


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

	<div className="min-w-0 flex-1">
<p className="text-3xl font-semibold">

{sum}

</p>
<div className="relative flex items-center text-3xl font-semibold">
<Link
				 href={grouplink}
			 >

{grouptitle}
			 </Link>


																	<div className="ml-12 flex-shrink-2">

																	proprio 2


																	</div>


</div>










								 <details>
 <summary className="grid grid-cols-12 gap-4">

																																						    <div class="col-span-2 font-semibold">Transactions</div>
																																							<div className="col-span-8"></div>
																																							 <div class="col-span-2"> Tout Voir</div>

																																 </summary>
																																 <span className="mt-8  text-sm text-gray-500">






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

	 <Link
						href={fins.entity_id.path.alias}
						className="text-2xl font-medium font-semibold cursor-pointer text-gray-900"
					>

{fins.label}
					</Link>
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

<Link
				 href={fins.entity_id.path.alias}
				 className="text-2xl font-medium font-semibold cursor-pointer text-gray-900"
			 >

{fins.label}
			 </Link>
<span className="text-sm  text-neutral-400">{fins.created}</span>



</div>

<div className="col-span-2 text-base font-semibold  text-rose-500">




- {fins.entity_id.field_estimation_du_prix}</div>




								 </div>





			 					 ))}



								 </span>
						 </details>

			</div>





		</>
	);
}
