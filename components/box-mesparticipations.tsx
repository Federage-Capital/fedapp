import React from "react";
import Link from 'next/link'
import Image from 'next/image'
import _ from 'lodash'
import { absoluteURL } from "lib/utils"

import { NodeGroupRow } from "components/node--group--row"
import { NodeGroupfinRow } from "components/node--groupfin--row-indigo"


export function BoxParticpations({ sousgroupes, parente, ttssgroupes, financements, user }: BoxParticpationsProps) {
	const mesgroupes = _.groupBy(financements, 'gid.id')

	return (
		<>







{user
	.map((userinfo,index) => (

		<div key={index}>

Admin

{ttssgroupes
	.filter(valide => valide.uid.id.includes(userinfo.id))

		.map((item,index) => (
			<div key={index} className="grid grid-cols-12  gap-4 border border-gray-300" >


<div className="col-span-6">{item.label}</div><div className="col-span-6">Somme : console.log(2 + 2);</div>
<div className="col-span-12">
{financements
	.filter(valide => valide.gid.id.includes(item.id))

		.map((item,index) => (
			<div key={index} className="grid grid-cols-12  gap-4 border border-gray-300" >



		<div className="col-span-6">


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

		</div>


	<div className="col-span-6">





	{item.entity_id.field_estimation_du_prix}</div>

</div>

				))}
</div>
</div>

				))}

{_.map(mesgroupes,(value, key) => (

									<div className="rounded-lg border border-gray-300 bg-white px-6 py-5 mb-5 " key={key}>
{key}{value.label} truc
									{financements
										.filter(valide => valide.gid.id.includes(key) && valide.gid.uid.id.includes(userinfo.id))

											.map((item,index) => (
												<div key={index} className="grid grid-cols-12  gap-4 border border-gray-300" >
{item.id}

										  <div className="col-span-12">Titre du groupe (sousgroupe){item.gid.label}</div>
											<div className="col-span-12">ID du groupe (sousgroupe){item.gid.id}</div>

											<div className="col-span-12">Titre du financement{item.label}</div>
											<div className="col-span-12">Montant du financement{item.entity_id.field_estimation_du_prix}</div>


										<div className="col-span-8">Auteur du financement{item.uid.display_name}</div>

									</div>

													))}



										</div>


								))}






</div>



			))}






		</>
	);
}
