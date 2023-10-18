import React from "react";
import Link from 'next/link'
import Image from 'next/image'

import { NodeGroupRow } from "components/node--group--row"
import { NodeGroupfinRow } from "components/node--groupfin--row-indigo"


export function BoxMescomptes({ sousgroupes, parente, financements, user }: BoxMescomptesProps) {

	return (
		<>





		Sous groupes dont je suis Admin :
<br/>


{user
	.map((userinfo,index) => (

		<div key={index}>






{financements
	.filter(valide => valide.gid.uid.id.includes(userinfo.id))

		.map((item) => (
			<div key="1" className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 mb-5 shadow-sm focus-within:ring-2 focus-within:ring-fedblueblue focus-within:ring-offset-2 hover:border-gray-400" >

			<div key={item.id} className="grid grid-cols-12 gap-4">
	  <div className="col-span-12">Titre du groupe (sousgroupe){item.gid.label}</div>

		<div className="col-span-12">Titre du financement{item.label}</div>
		<div className="col-span-12">Montant du financement{item.entity_id.field_estimation_du_prix}</div>


	<div className="col-span-8">Auteur du financement{item.uid.display_name}</div>
	</div>
</div>

				))}


</div>



			))}

membership sous groupes : group_content--subgroup-group_membership<br/><br/>

                {sousgroupes
                  .map((item,index) => (

                    <div key={index} className="grid grid-cols-1 gap-4">

              {item.label} -

							   UID de l&apos;admin {item.uid.id}

                            {item.type} -  GID du groupe : {item.gid.id} <br/>

-  label du GID du groupe : {item.gid.label} - hierarchie : {item.gid.label}
              </div>
                      ))}
 <br/> <br/> <br/> <br/>
Parenté : group_content--federage-subgroup-subgroup :<br/><br/>
                      {parente
                        .map((item,index) => (

                          <div key={index} className="grid grid-cols-1 gap-4">

                  Label de l&apos;enfant du  groupe :   {item.label} -   ID de la relation enfant : {item.id} - ID de l&apos;enfant : {item.entity_id.id}

                                 <br/>


Admin du groupe :  {item.uid.display_name} -

Membres du groupe :
                                                <br/>


               - hierarchie : <br/>Parent :{item.gid.label} - ID du parent {item.gid.id}
                    </div>
                            ))}




<br/> <br/> <br/> <br/>
financementsssgroupes :<br/><br/>
                     {financements
                       .map((item,index) => (

                         <div key={index} className="grid grid-cols-1 gap-4">

                 Label du financement :   {item.label} -   ID du financement : {item.id} - ID du sous groupe = groupe enfant : {item.gid.id}

                                <br/>

              - Node financement = entity: <br/>Id du financement :{item.entity_id.id} - titre du financement {item.entity_id.title}
                   </div>
                           ))}



					<br/>





		</>
	);
}
