import React from "react";
import Link from 'next/link'
import Image from 'next/image'

export function CardProjetsEncours({ node }: CardProjetsEncoursProps) {
	return (
		<>
			<div className="pb-5 p-0">
				<div className="bg-white rounded-md">
					<div className="flex">

{node.label}
					</div>
				</div>
			</div >
		</>
	);
}
