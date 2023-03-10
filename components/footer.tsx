import * as React from "react"
import Link from "next/link"
import siteConfig from "site.config"
import Image from "next/image"

import classNames from "classnames"


export function Footer({ }) {
  return (
    <>
<<<<<<< Updated upstream
    <footer className="bg-black text-white text-center content-center py-20 mx-auto">

    <article className="max-w-screen-lg px-6 mx-auto">FEDERAGE SAS • SIREN n°828743369 • Paris • 2023</article>
   
=======
    <footer className="bg-white container px-2 mx-auto">



    <div class="grid grid-cols-1 divide-y">
      <div>


      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-9 text-left">


        <Link href="/" passHref>
             <a className="flex justify-start pl-20">

             <Image src="/logo.svg" height={200} width={300}   />

               <span className="sr-only">{siteConfig.name}</span>
             </a>
           </Link></div>

           <div class="col-span-3 gap-4 relative">

           <div class=   "absolute bottom-5">
 Association pour l'étude de <br/>l'histoire de la politique de la Ville
          8 cours des humanités<br/>93 300 Aubervilliers
          Contats</div>
          </div>
      </div>


    </div>

      <div class="pt-10">

      <Image src="/rp.svg" height={100} width={300}  />
          <Image src="/anct.svg" height={100} width={300}  /></div>
    </div>



>>>>>>> Stashed changes
    </footer>
    </>
  )
}
