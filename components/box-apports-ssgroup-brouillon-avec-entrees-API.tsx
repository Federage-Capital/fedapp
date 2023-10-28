import React, { Component } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { absoluteURL,formatDate } from "lib/utils"
import { useState, useEffect } from "react";

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





		{subgroup
			.filter(valide => valide.subgroup_tree.includes(subgroupid) && valide.type.includes("subgroup"))

				.map((item,index) => (
					<div key={index}  >

{userid}
														<input onChange={handleInput} class="hidden" name="num1" value={input.num1=
													`${(financement
														.filter(valide => valide.gid.id.includes(item.uuid) && valide.uid.id.includes(userid))
														.reduce((total, currentValue) => total = total + +currentValue.entity_id.field_estimation_du_prix,0)
														)}`
														} type="text"></input>
														<input onChange={handleInput} class="hidden" name="num2" value={input.num2=
														`${(financement
															.filter(valide => valide.gid.id.includes(item.uuid) && !valide.uid.id.includes(userid))
															 .reduce((total, currentValue) => total = total + +currentValue.entity_id.field_estimation_du_prix,0)
														)}`
														} type="text"></input>


												<div class="text-5xl font-semibold mb-5">
{sum}




												</div>

												{stringcontent

													.filter(valide => valide.subgroup_tree.includes(subgroupid) && valide.type.includes("subgroup") && valide.uuid_1.includes(userid)  )

													.map(group => (
													<li key={group.id}>
								<div class="font-semibold">{group.label}</div>

																						{userid}
														{group.id} - 		{group.uuid} - {group.type} - {group.subgroup_tree} - {group.label}<br/>
users ID :<br/>
(Group relationship Content) Content: Authored by {group.uid} <br/>
(Group relationship Content) Content: Authored by User: UUID{group.uuid_1}<br/>
Group: Group creator {group.uuid} <br/>
Group: Group creator {group.uid_1} <br/>

(Group relationship) Group relationship: Group relationship creator (vriament le creaeur){group.uid_2}<br/>
(Group relationship) Group relationship: Group relationship creator (vriament le creaeur) User: UUID{group.uuid_2}<br/>




lequel ? User: UUID{group.uuid_3}<br/>
Label _ 1{group.label_1}<br/><br/>
Titre {group.title}<br/>
												{group.field_estimation_du_prix}<br/><br/><br/>
												<br/><br/>


													</li>
												))}

												{stringcontent

													.filter(valide => valide.subgroup_tree.includes(subgroupid) && valide.type.includes("subgroup") && !valide.uuid_1.includes(userid)  )

													.map(group => (
													<li key={group.id}>
								<div class="font-semibold">{group.label}</div>

																						{userid}
														{group.id} - 		{group.uuid} - {group.type} - {group.subgroup_tree} - {group.label}<br/>
users ID :<br/>
(Group relationship Content) Content: Authored by {group.uid} <br/>
(Group relationship Content) Content: Authored by User: UUID{group.uuid_1}<br/>
Group: Group creator {group.uuid} <br/>
Group: Group creator {group.uid_1} <br/>

(Group relationship) Group relationship: Group relationship creator (vriament le creaeur){group.uid_2}<br/>
(Group relationship) Group relationship: Group relationship creator (vriament le creaeur) User: UUID{group.uuid_2}<br/>




lequel ? User: UUID{group.uuid_3}<br/>
Label _ 1{group.label_1}<br/><br/>
Titre {group.title}<br/>
											-	{group.field_estimation_du_prix}<br/><br/><br/>
												<br/><br/>


													</li>
												))}
{financement

	.filter(valide => valide.gid.id.includes(item.uuid) && valide.uid.id.includes(userid))

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
{items.label}<br/>{items.gid.subgroup_tree}
<span className="text-sm  text-neutral-400">{formatDate(items.entity_id.changed)}</span>



</div>

	<div className="col-span-2 text-base font-semibold">




{items.entity_id.field_estimation_du_prix}</div>

</div>

				))}
				{financement

					.filter(valide => valide.gid.id.includes(item.uuid) && !valide.uid.id.includes(userid))

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




			-	{items.entity_id.field_estimation_du_prix}</div>

				</div>

								))}

		</div>

						))}



		</>
	);
}
