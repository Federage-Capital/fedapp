import Link from "next/link";
import { NodeGroupRow } from "components/node--group--row"
import { absoluteURL,formatDate } from "lib/utils"
import Image, { ImageProps } from "next/image"

export function BoxProjetsOffre({ user, propositions
 }: BoxProjetsOffreProps) {


	return (

<>

	{propositions?.length ? (

		<div>




			<h3 className="mb-2 text-lg font-black text-gray-400 text-left">Propositions dans les groupes</h3>

			{propositions.filter(offre1 => !offre1.uuid_2.includes(user[0].id)).map(filteredOffre1 => {

				return (

					<div key={filteredOffre1.id} className="flex-container card" >
						<div className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 mb-5 shadow-sm focus-within:ring-2 focus-within:ring-fedblueblue focus-within:ring-offset-2 hover:border-gray-400"
						>
    
							<div className="flex-shrink-0">
								<Image
									src={absoluteURL(filteredOffre1.user_picture)}
									width={30}
									height={30}
									className='flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ring-8 ring-white'
									objectFit="cover"
									alt={filteredOffre1.title}
									priority
								/>

							</div>
							<div className="min-w-0 flex-1">

								<Link href={filteredOffre1.view_group} passHref>
									<a>
										<div className="w-100">
											<h2 className="text-sm inline-block gray-700">{filteredOffre1.label}</h2>
											<h2 className="text-sm inline-block float-right">  <NodeGroupRow key={filteredOffre1.id} node={filteredOffre1} /></h2>
										</div>
										<span className="text-2xl font-semibold">
											{filteredOffre1.field_estimation_du_prix} €

											Nom du contributeur: {filteredOffre1.uid_1}<br />
											statut: {filteredOffre1.field_statut}<br />





										</span>

									</a>
								</Link>



							</div>
							<div className="flex-shrink-2">


							</div>
						</div>




						<div>


						</div>





					</div>





				)
			})}


		</div>
	) : (
		<p>
pas de proposition
		</p>
	)}




</>

	);
}
