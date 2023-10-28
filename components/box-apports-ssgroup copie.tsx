import React, { Component } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { absoluteURL,formatDate } from "lib/utils"
import { useState, useEffect } from "react";

import { NodeGroupRow } from "components/node--group--row"
import { NodeGroupfinRow } from "components/node--groupfin--row-indigo"


export function BoxApportsSsgroup({ financement, subgroupid, subgroup, userid, childToParent, ssgrouplabel }: BoxApportsSsgroupProps) {


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
	`${(financement
		.filter(valide => valide.gid.id.includes(subgroupid) && valide.uid.id.includes(userid))
		.reduce((total, currentValue) => total = total + +currentValue.entity_id.field_estimation_du_prix,0)
		)}`
		} type="text"></input>
		<input onChange={handleInput} class="hidden" name="num2" value={input.num2=
		`${(financement
			.filter(valide => valide.gid.id.includes(subgroupid) && !valide.uid.id.includes(userid))
			 .reduce((total, currentValue) => total = total + +currentValue.entity_id.field_estimation_du_prix,0)
		)}`
		} type="text"></input>


<div class="text-5xl font-semibold mb-5">

		{sum !== undefined && <span>{sum}</span>}
{ssgrouplabel}rerezre

</div>

<div className="grid grid-cols-12  gap-4 mb-5" >



<div className="col-span-10">
Transactions
</div>

<div className="col-span-2">
Tout voir
</div>

</div>

		{financement

			.filter(valide => valide.gid.id.includes(subgroupid) && !valide.uid.id.includes(userid))

		    .map((items,index) => (
		      <div key={index} className="grid grid-cols-12  gap-4 mb-5 " >



		    <div className="col-span-1">

		    {items.uid.user_picture && (


		      <Image
		        src={absoluteURL(items.uid.user_picture.uri.url)}
		        alt={items.uid.display_name}
		        title={items.uid.display_name}
		        width={50}
		        height={50}
		        className='h-8 w-8 rounded-full'
		      />

		    )}
		    </div>
				<div className="col-span-9 text-base font-semibold">
  {items.label}<br/>
 <span className="text-sm  text-neutral-400">{formatDate(items.entity_id.changed)}</span>



 		</div>

		  <div className="col-span-2 text-base font-semibold">




		{items.entity_id.field_estimation_du_prix}</div>

		</div>

		        ))}


		        {financement
							.filter(valide => valide.gid.id.includes(subgroupid) && valide.uid.id.includes(userid))

		            .map((item,index) => (
		              <div key={index} className="grid grid-cols-12  gap-4 mb-5" >



		            <div className="col-span-1">


		            {item.uid.user_picture && (


		              <Image
		                src={absoluteURL(item.uid.user_picture.uri.url)}
		                alt={item.uid.display_name}
		                title={item.uid.display_name}
		                width={50}
		                height={50}
		                className='h-8 w-8 rounded-full'
		              />

		            )}
</div>

								   <div className="col-span-9 text-base font-semibold">
		         {item.label}<br/>
 <span className="text-sm  text-neutral-400">{formatDate(item.entity_id.changed)}</span>



		            </div>


		          <div className="col-span-2 text-base font-semibold text-rose-500">




		          - {item.entity_id.field_estimation_du_prix}</div>

		        </div>

		                ))}
										<div>
												 --- <button primary onClick={() => childToParent(sum)}>Click Child</button> ---
										 </div>

		</>
	);
}
