import * as React from "react"
import Link from "next/link"

import classNames from "classnames"


export function Footer({ }) {
  return (
    <>
    <footer className="bg-black fix-bottom text-white py-10 mx-auto">

    <article className="max-w-screen-lg px-6 mb-5 mx-auto">

    <div class="grid grid-cols-12 gap-0">
      <div className="col-span-12 md:col-span-7 text-center md:text-left pb-10 md:p-0">  FEDERAGE SAS • SIREN n°828743369 • Paris • 2023</div>
      <div className="col-span-3 md:col-span-2">  </div>
      <div className="col-span-2 md:col-span-1 text-center">
      <a href="bonjour@federage.com" data-address="bonjour" data-domain="federage.com" className="mx-auto inline-block float-none md:float-right">

      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"  xmlns="http://www.w3.org/2000/svg">
      <path d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      </a>
</div>
<div className="col-span-2 md:col-span-1 text-center">


      <a href="https://twitter.com/FederageCapital" target="_blank" className="mx-auto inline-block float-none md:float-right">



      <svg width="24" height="24" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.29 16.2534C13.837 16.2534 17.965 10.0004 17.965 4.5784C17.965 4.4004 17.965 4.2234 17.953 4.0484C18.7562 3.46693 19.4493 2.74701 20 1.9224C19.2511 2.2544 18.4566 2.47216 17.643 2.5684C18.4996 2.05546 19.1408 1.24875 19.447 0.298398C18.6417 0.776285 17.7607 1.11313 16.842 1.2944C16.2234 0.636163 15.405 0.200233 14.5136 0.0541031C13.6222 -0.0920265 12.7075 0.0597974 11.9111 0.486067C11.1147 0.912337 10.4811 1.58927 10.1083 2.41206C9.7355 3.23485 9.64437 4.15758 9.849 5.0374C8.21759 4.95564 6.6216 4.53172 5.16465 3.79317C3.70769 3.05461 2.42233 2.01792 1.392 0.750398C0.867318 1.6536 0.706589 2.72282 0.942536 3.74036C1.17848 4.75791 1.79337 5.64728 2.662 6.2274C2.00926 6.2085 1.37063 6.0329 0.8 5.7154V5.7674C0.800389 6.71469 1.1284 7.6327 1.7284 8.36576C2.3284 9.09881 3.16347 9.60179 4.092 9.7894C3.48781 9.95411 2.85389 9.97806 2.239 9.8594C2.50116 10.6749 3.01168 11.388 3.69913 11.899C4.38658 12.41 5.21657 12.6934 6.073 12.7094C5.22212 13.378 4.24779 13.8722 3.20573 14.1639C2.16367 14.4556 1.07432 14.539 0 14.4094C1.8766 15.6137 4.06019 16.2525 6.29 16.2494" fill="white"/>
      </svg>
        </a>




</div>
<div className="col-span-2 md:col-span-1 text-center">

<a href="https://github.com/Federage-Capital" target="_blank" className="mx-auto inline-block float-none md:float-right">

      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"  xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017C2 16.442 4.865 20.197 8.839 21.521C9.339 21.613 9.521 21.304 9.521 21.038C9.521 20.801 9.513 20.17 9.508 19.335C6.726 19.94 6.139 17.992 6.139 17.992C5.685 16.834 5.029 16.526 5.029 16.526C4.121 15.906 5.098 15.918 5.098 15.918C6.101 15.988 6.629 16.95 6.629 16.95C7.521 18.48 8.97 18.038 9.539 17.782C9.631 17.135 9.889 16.694 10.175 16.444C7.955 16.191 5.62 15.331 5.62 11.493C5.62 10.4 6.01 9.505 6.649 8.805C6.546 8.552 6.203 7.533 6.747 6.155C6.747 6.155 7.587 5.885 9.497 7.181C10.3128 6.95851 11.1544 6.84519 12 6.844C12.85 6.848 13.705 6.959 14.504 7.181C16.413 5.885 17.251 6.154 17.251 6.154C17.797 7.533 17.453 8.552 17.351 8.805C17.991 9.505 18.379 10.4 18.379 11.493C18.379 15.341 16.04 16.188 13.813 16.436C14.172 16.745 14.491 17.356 14.491 18.291C14.491 19.629 14.479 20.71 14.479 21.038C14.479 21.306 14.659 21.618 15.167 21.52C17.1583 20.8521 18.8893 19.5753 20.1155 17.87C21.3416 16.1648 22.0009 14.1173 22 12.017C22 6.484 17.522 2 12 2Z" fill="white"/>
      </svg>

</a>

      </div>


    </div>


</article>

    </footer>
    </>
  )
}
