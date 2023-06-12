import React from "react";
import Link from 'next/link'
import Image from 'next/image'

export function BoxUserList({ node }: BoxAlluserlistProps) {
	return (
		<>
			<div className="pb-5">
				<div className="bg-white">
					<div className="flex">
						{node.user_picture?.uri && (
							<div className="overflow-hidden h-10 w-10 rounded-full mt-3 ml-5">
								<Link href={`user/${node.drupal_internal__uid}`} passHref>
									<Image
										src={`${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}${node.user_picture?.uri.url}`}
										width={16}
										height={16}
										layout="responsive"
										objectFit="cover"
										alt={node.drupal_internal__uid}
									/>
								</Link>
							</div>
						)}
						<div className="ml-5 mt-5">
							{node.name}
						</div>
					</div>
					{node.field_description?.value && (
						<div dangerouslySetInnerHTML={{ __html: node.field_description?.value }} className="mt-6 leading-loose prose ml-5 pb-5" />
					)}

				</div>
			</div>
		</>
	);
}


