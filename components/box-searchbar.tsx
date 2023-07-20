import React from "react";
import Link from 'next/link'
import Image from 'next/image'
import CalculApport from "./calcul-apport";


export function BoxResultNameSearch({ node, logouri }: BoxResultsearchAlluserlistProps) {
	const name = node.label.replace(/è/g, 'e').replaceAll(' ', '-');

	return (
		<>
			{/* {node} */}
			{/* {node.relationshipNames} = relationshipNames <br />
			<br />
			{node.created} = created <br />
			<br />

			{node.changed} = changed <br />
			<br />

			{node.path.alias} = path/alias <br />
			<br />

			{node.links.self.href} = links <br />
			<br />

			{node.group_content_type.id} = group content id<br />
			<br />

			{node.uid.type} = uid type <br />
			<br />

			{node.gid.type} = gid type <br />
			<br />

			{node.entity_id.type} = entity type	<br />
			<br />
			{node.group_roles.id} = groupe roles <br />

			{node.type} = type <br />
			{node.label} = label <br /> */}
			<div className="pb-4">
				<div className="bg-white rounded-lg">
					<div className="flex">
						{logouri.uri && (
							<div className="overflow-hidden h-10 w-10 rounded-full ml-5 mt-5">
								<Link href={name} passHref>
									<Image
										src={`${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}${logouri.uri.url}`}
										width={16}
										height={16}
										layout="responsive"
										objectFit="cover"
										alt={node.label}
									/>
								</Link>
							</div>
						)}
						<div className="ml-3 grid xs:grid-cols-1 sm:grid-rows-2 sm:grid-flow-col gap-2 pt-5">
							<Link href={name} passHref>
								<p className="font-semibold">
									{node.label}
								</p>
							</Link>
							<Link href={name} passHref>
								<div className="text-slate-500 font-semibold mr-4 lowercase relative -top-3 text-sm max-w-xs truncate">
									app.federage.com/{name}
								</div>
							</Link>
						</div>
					</div>
					{node.field_description?.value && (
						<div dangerouslySetInnerHTML={{ __html: node.field_description?.value }} className="leading-normal ml-2 pb-5 text-slate-600 text-base sm:text-base lg:text-lg px-4" />
					)}
				</div>
			</div >
		</>
	);
}