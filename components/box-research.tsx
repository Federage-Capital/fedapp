import React from "react";
import Link from 'next/link'
import Image from 'next/image'



export function BoxResearch({ node }: BoxResearchlistProps) {
	return (
		<>
			<div className="pb-4">
				<div className="bg-white rounded-lg p-4">
					<div className="font-semibold">
						BOXRESEARCH COMPONENT <br />
						Type = {node.type}
					</div>
					<div className="flex items-center justify-between font-semibold text-lg">
						<span>{node.label}</span>
						<span className="text-gray-500 text-sm">Created: {node.created}</span>
					</div>
					<div className="text-sm text-slate-600 mt-1">
						GID: {node.gid?.id} <br />
						RelationShipNames = {node.relationshipNames}
					</div>
					<br />
					<div className="">
						UserName = {node.name}
					</div>
				</div>
			</div>
			{/* Infos Groupes :<br />
			{node.created} <br />
			{node.type} <br />
			Label = 		{node.label} <br />
			{node.gid?.id} = id <br />

			{node.relationshipNames}
			<br /><br /><br />
			Infos User :<br />
			Name = 	{node.name} <br />
			<br /> */}
		</>
	)
}