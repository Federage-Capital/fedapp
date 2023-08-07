import moment from "moment";



export function BaxActualPreapports({ preapports }: BaxActualPreapportsProps) {



	const currentDate = moment();
	const future = moment('2024-03-02 10:03:02');
	const timeLeft = moment(future.diff(currentDate)).format("MMMM Do YYYY, h:mm:ss a");
	const current_time = moment().format("MMMM Do YYYY, h:mm:ss a")


	return (

<>
		{preapports?.length ? (

					 <>
						 {preapports.map((preapp,index) => (




							 <div key={preapp.id} className="self-stretch rounded-lg bg-white flex flex-col p-4 items-start justify-start gap-[20px]">
								 <div className="self-stretch flex flex-col items-start justify-start text-3xs">
									 <div className="self-stretch flex flex-col items-center justify-start gap-[23px]">
										 <div className="self-stretch flex flex-row items-center justify-between">
											 <div className="rounded-10xs bg-gray-100 flex flex-row py-0 px-1.5 items-start justify-start">
												 <b className="relative leading-[20px]">{preapp.moderation_state}</b>
											 </div>
											 <div className="flex flex-row items-center justify-start gap-[5px]">
												 <img
													 className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
													 alt=""
													 src="/clock.svg"
												 />
												 <b className="relative leading-[20px]"> {preapp.field_date_de_livraison}</b><br/>


												         
											 </div>
										 </div>
										 <div className="self-stretch flex flex-row items-center justify-start text-xl text-gray-900">
											 <div className="flex-1 relative leading-[20px] font-semibold">


													<p
																							 dangerouslySetInnerHTML={{ __html: preapp.label }}

																						 />
											 </div>
										 </div>
									 </div>
								 </div>
								 <div className="self-stretch flex flex-row items-center justify-between text-mediumblue-100">
									 <div className="relative leading-[20.03px] font-semibold">
												{preapp.field_description}



									 </div>
									 <img
										 className="relative w-2.5 h-1.5"
										 alt=""
										 src="/icon311.svg"
									 />
								 </div>
								 <div className="self-stretch rounded-lg bg-gray-100 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] overflow-hidden flex flex-row py-2.5 px-[18px] items-center justify-center text-center">
									 <div className="flex-1 relative leading-[20px] font-semibold">
										 Modifier
									 </div>
								 </div>
							 </div>


						 ))}

					 </>
				 ) : (
					 <div className="text-2xl cadre text-center p-20 mb-10">


			 Vide

					 </div>
				 )}



</>
	);
}
