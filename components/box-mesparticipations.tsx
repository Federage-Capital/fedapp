import React from "react";
import Link from 'next/link'
import Image from 'next/image'
import _ from 'lodash'
import { absoluteURL } from "lib/utils"
import { useState, useEffect } from "react";
import { NodeGroupRow } from "components/node--group--row"
import { NodeGroupfinRow } from "components/node--groupfin--row-indigo"


export function BoxParticpations({ sousgroupes, parente, userid, membershipssg, ttssgroupes, financements, user }: BoxParticpationsProps) {
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


{sousgroupes
	.filter(valide => !valide.uid.id.includes(userid))

		.map((item,index) => (
			<div key={index} className="grid grid-cols-12  gap-4 " >
			<div className="col-span-12">


</div>

	<div className="col-span-12">
{item.label}



- {item.uid.display_name}



</div>
{financements?.length ? (
			<>
{financements

	.filter(valide =>  valide.entity_id.uid.id.includes(userid) && valide.gid.id.includes(item.id))

	.map(filteredtitredugroupe =>  (
								 <div key={filteredtitredugroupe.id} className="col-span-12">

<div className="relative flex items-center text-3xl font-semibold">
											{filteredtitredugroupe.label}

											
<br/>
	{filteredtitredugroupe.entity_id.field_estimation_du_prix}

								<div className="ml-12 flex-shrink-2">

								{filteredtitredugroupe.entity_id.uid.display_name}


								</div>


</div>






</div>

)
)}
</>
) : (
< >
NAaN
</>
)}

</div>

				))}


















		</>
	);
}
