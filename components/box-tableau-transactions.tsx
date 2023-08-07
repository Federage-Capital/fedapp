import Link from "next/link";
import { NodeGroupRow } from "components/node--group--row"
import { absoluteURL,formatDate } from "lib/utils"
import Image, { ImageProps } from "next/image"

export function BoxTransactions({ user, financementsdansgr
 }: BoxTransactionsProps) {


	return (

<>




                      {financementsdansgr?.length ? (

                        <div>




                          {financementsdansgr.map((findetails) => (



                            <div
                              key={findetails.id}
                              className="grid grid-cols-6 gap-4"
                            >


                              {findetails.label}

                              <div>Intitulé de l&apos;apport</div>
                              <div>Type d&apos;apport   </div>
                              <div>  </div>
                              <div>Comptabilisé</div>
                              <div>Accepté</div>
                            </div>

                          ))}



                        </div>
                      ) : (
                        <>

                        </>
                      )}







</>

	);
}
