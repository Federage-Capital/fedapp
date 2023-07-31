import React from 'react'
import useSWR from 'swr';
import Link from 'next/link';


const fetcher = (url) => fetch(url).then((r) => r.json());


export default function SlideApport({ showMenu, node }: SlideApportAllUserListProps) {

	const { data: userApport, error: userApportError } = useSWR(() => `https://fed.septembre.io/jsonapi/group_content/federage-group_node-financement` + '/' + node.id, fetcher)


	if (userApportError) return <div>Failed to load</div>;

	return (
		<>
			{showMenu && (
				<div className="self-stretch flex flex-col items-center justify-start text-black1 pb-5 ">
					<div className="self-stretch rounded-t-lg rounded-b-none flex flex-row p-4 items-center justify-between border-[2px] border-solid border-gray-100">
						<div className="flex-1 flex flex-col py-0 pr-2.5 pl-0 items-start justify-start gap-[2px]">
							<div className="self-stretch relative leading-[20px] font-semibold">
								{!userApport?.length ? (
									<p>
										Aucun résultat.
									</p>
								) : (
									<div>
										{userApport?.data
											.filter((userInApport) => userInApport.relationships?.gid?.data?.id.includes(node.id))
											.map((userInApport) => (
												<div key={userInApport.id}>
													{userInApport}
													<div className="self-stretch relative text-xs leading-[24px] font-semibold text-mediumblue-100">
														Prix recherché : 40 000,00€
													</div>
												</div>
											))
										}
									</div>
								)}
							</div>
						</div>
						<Link href={`/group/federage/${node.label.replace(/è/g, 'e').replaceAll(' ', '-')}`} passHref>
							<button>
								<svg width="39" height="38" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">
									<rect x="0.797363" width="38.2027" height="38" rx="8.10667" fill="#F3F4F6" />
									<path fill-rule="evenodd" clip-rule="evenodd" d="M17.2927 23.5314C16.9168 23.1555 16.9168 22.5459 17.2927 22.17L20.4627 19L17.2927 15.8301C16.9168 15.4541 16.9168 14.8446 17.2927 14.4687C17.6686 14.0927 18.2782 14.0927 18.6541 14.4687L22.5048 18.3193C22.8807 18.6953 22.8807 19.3048 22.5048 19.6807L18.6541 23.5314C18.2782 23.9073 17.6686 23.9073 17.2927 23.5314Z" fill="#52606D" />
								</svg>
							</button>
						</Link>
					</div>
					{/* <div className="self-stretch rounded-t-none rounded-b-lg flex flex-row p-4 items-center justify-between border-r-[2px] border-solid border-gray-100 border-b-[2px] border-l-[2px]">
						<div className="flex-1 flex flex-col py-0 pr-2.5 pl-0 items-start justify-start gap-[2px]">
							<div className="self-stretch relative leading-[20px] font-semibold">
								Laboratoire de type Cancéropôle
							</div>
							<div className="self-stretch relative text-xs leading-[24px] font-semibold text-mediumblue-100">
								Prix recherché : 110 000,00€
							</div>
						</div>
						<svg width="39" height="38" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect x="0.797363" width="38.2027" height="38" rx="8.10667" fill="#F3F4F6" />
							<path fill-rule="evenodd" clip-rule="evenodd" d="M17.2927 23.5314C16.9168 23.1555 16.9168 22.5459 17.2927 22.17L20.4627 19L17.2927 15.8301C16.9168 15.4541 16.9168 14.8446 17.2927 14.4687C17.6686 14.0927 18.2782 14.0927 18.6541 14.4687L22.5048 18.3193C22.8807 18.6953 22.8807 19.3048 22.5048 19.6807L18.6541 23.5314C18.2782 23.9073 17.6686 23.9073 17.2927 23.5314Z" fill="#52606D" />
						</svg>
					</div> */}
				</div >
			)
			}
		</>
	)
}