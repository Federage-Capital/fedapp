import React from "react";
import Link from 'next/link'
import Image from 'next/image'
import _ from 'lodash'
import { absoluteURL } from "lib/utils"
import { useState, useEffect } from "react";

import { NodeGroupRow } from "components/node--group--row"
import { NodeGroupfinRow } from "components/node--groupfin--row-indigo"


export function BoxMescomptes({ sousgroupes, parente, userid, ttssgroupes, financements, user }: BoxMescomptesProps) {
	const mesgroupes = _.groupBy(financements, 'gid.id')
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
	return (
		<>





{userid}

{user
	.map((userinfo,index) => (

		<div key={index}>

Admin

{ttssgroupes
	.filter(valide => valide.uid.id.includes(userinfo.id))

		.map((item,index) => (
			<div key={index} className="grid grid-cols-12  gap-4 border border-gray-300" >


<div className="col-span-10">{item.label}</div><div className="col-span-2 text-4xl">

  <div>
		 <input onChange={handleInput} class="hidden" name="num1" value={input.num1=
`${(financements
.filter(valide => valide.gid.id.includes(item.id) && valide.uid.id.includes(userinfo.id))
 .reduce((total, currentValue) => total = total + +currentValue.entity_id.field_estimation_du_prix,0)
)}`
} type="text"></input>

<input onChange={handleInput} class="hidden" name="num2" value={input.num2=
`${(financements
	.filter(valide => valide.gid.id.includes(item.id) && !valide.uid.id.includes(userinfo.id))
	 .reduce((total, currentValue) => total = total + +currentValue.entity_id.field_estimation_du_prix,0)
)}`
} type="text"></input>


		 {sum !== undefined && <span>{sum}</span>}
 </div>


</div>
<div className="col-span-12">
{financements
	.filter(valide => valide.gid.id.includes(item.id) && valide.uid.id.includes(userinfo.id))

		.map((item,index) => (
			<div key={index} className="grid grid-cols-12  gap-4 border border-gray-300" >



		<div className="col-span-10">


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
		<span className="ml-5 mt-3 text-xl">{item.uid.display_name}</span>
		<span className="ml-5 mt-3 text-xl">{item.label}</span>
		</div>


	<div className="col-span-2">




{item.entity_id.field_estimation_du_prix}</div>

</div>

				))}

{financements
	.filter(valide => valide.gid.id.includes(item.id) && !valide.uid.id.includes(userinfo.id))

		.map((item,index) => (
			<div key={index} className="grid grid-cols-12  gap-4 border border-gray-300" >



		<div className="col-span-10">


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
		<span className="ml-5 mt-3 text-xl">{item.uid.display_name}</span>
		<span className="ml-5 mt-3 text-xl">{item.label}</span>
		</div>


	<div className="col-span-2 text-rose-500">




	- {item.entity_id.field_estimation_du_prix}</div>

</div>

				))}
</div>
</div>

				))}








</div>



			))}






		</>
	);
}
