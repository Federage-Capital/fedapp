import React from 'react'
import useSWR from 'swr';
import Link from 'next/link';


const fetcher = (url) => fetch(url).then((r) => r.json());


export default function SlideApport({  node }: SlideApportAllUserListProps) {
	const [showMenu, setShowMenu] = React.useState<boolean>(false)

	const changeState = () => {
		setShowMenu(!showMenu);
	}
	const { data: userApport, error: userApportError } = useSWR(() => `https://fed.septembre.io/groupfederagewithoutcountersorprice/` + node.id, fetcher);

	if (userApportError) return <div>Failed to load</div>;

	return (
		<>




				<div className="self-stretch flex flex-col  justify-start text-black1">

				{userApport?.length ? (

										 <>
										 <span className="ml-1">
										 <p className="text-2xl inline-block fedblueblue font-semibold">	 {userApport.length} apport(s)</p>

									 		{showMenu ? (
									 			<span onClick={changeState}>
									 				<svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
									 					<path fillRule="evenodd" clipRule="evenodd" d="M13.5899 8.78996C13.0432 9.3367 12.1568 9.3367 11.6101 8.78996L7 4.1799L2.38995 8.78996C1.84322 9.3367 0.956784 9.3367 0.410051 8.78996C-0.136684 8.24323 -0.136684 7.35679 0.410051 6.81006L6.01005 1.21005C6.55678 0.663316 7.44322 0.663316 7.98995 1.21005L13.5899 6.81006C14.1367 7.35679 14.1367 8.24323 13.5899 8.78996Z" fill="#012BDD" />
									 				</svg>
									 			</span>
									 		) : (
									 			<span className="inline-block ml-1" onClick={changeState}>
									 				<svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
									 					<path fillRule="evenodd" clipRule="evenodd" d="M0.410051 1.2101C0.956784 0.663365 1.84322 0.663365 2.38995 1.2101L7 5.82016L11.6101 1.2101C12.1568 0.663365 13.0432 0.663365 13.5899 1.2101C14.1367 1.75683 14.1367 2.64327 13.5899 3.19L7.98995 8.79001C7.44322 9.33675 6.55678 9.33675 6.01005 8.79001L0.410051 3.19C-0.136683 2.64327 -0.136683 1.75683 0.410051 1.2101Z" fill="#012BDD" />
									 				</svg>
									 			</span>
									 		)}
									 	</span>


		{showMenu && (
			<>
											 {userApport.map((userInApport,index) => (
					<div key={userInApport.id} className="self-stretch rounded-t-lg rounded-b-lg flex flex-row p-4 mb-1 items-center justify-between border-[2px] border-solid border-gray-100">
						<div className="flex-1 flex flex-col py-0 pr-2.5 pl-2 items-start justify-start gap-[2px]">
							<div className="self-stretch relative leading-[20px] font-semibold">


								 								{userInApport.title}
								 								<div className="self-stretch relative text-xs leading-[24px] font-semibold text-mediumblue-100">
								 									Prix recherché : 	{userInApport.field_estimation_du_prix}
								 								</div>



								{/* 		{!userApport?.length ? (
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
								)}*/}
							</div>
						</div>

						<Link href=	{userInApport.view_node} passHref>
							<button>
								<svg width="39" height="38" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">
									<rect x="0.797363" width="38.2027" height="38" rx="8.10667" fill="#F3F4F6" />
									<path fill-rule="evenodd" clip-rule="evenodd" d="M17.2927 23.5314C16.9168 23.1555 16.9168 22.5459 17.2927 22.17L20.4627 19L17.2927 15.8301C16.9168 15.4541 16.9168 14.8446 17.2927 14.4687C17.6686 14.0927 18.2782 14.0927 18.6541 14.4687L22.5048 18.3193C22.8807 18.6953 22.8807 19.3048 22.5048 19.6807L18.6541 23.5314C18.2782 23.9073 17.6686 23.9073 17.2927 23.5314Z" fill="#52606D" />
								</svg>
							</button>
						</Link>
					</div>
				))}
				</>
			)
			}
			</>
		) : (
			<p className="text-2xl text-dimgray font-semibold">


Contribution libre

			</p>
		)}

				</div >

		</>
	)
}
