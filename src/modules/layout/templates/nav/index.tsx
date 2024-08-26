import { Suspense } from "react"

import { listRegions } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import style from "./index.module.css"
import Image from "next/image"
import pic from "../../../../../public/1.png"
export default async function Nav() {
  const regions = await listRegions().then((regions) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className={style.header}>
        <nav className="content-container txt-xsmall-plus text-white flex items-center justify-between w-full h-full text-small-regular">
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="h-full">
              <SideMenu regions={regions} />
            </div>
          </div>

          <div className="flex items-center h-full">
            <LocalizedClientLink
              href="/"
              className="flex"
              data-testid="nav-store-link"
            >
              <Image
              src={pic}
              width={100}
              height={100}
              alt="logo"
            />
              
            </LocalizedClientLink>
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-full">
              <LocalizedClientLink
                className="hover:text-ui-fg-base"
                href="/account"
                data-testid="nav-account-link"
              >
                الحساب
              </LocalizedClientLink>
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-ui-fg-base flex gap-2"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                   (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}

function CartIcon() {
  return (
    <svg fill="#ffffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  width="800px" height="800px" viewBox="0 0 949.434 949.434"  stroke="#ffffff">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <g> <g> <path d="M949.434,224.27l-587.341,0.225l8.312-93.217H200.27v65h49.888h49.192l-2.699,30.287l-14.007,157.11H0v65h276.85 l-4.283,48.044H143.529v65h123.243l-2.67,29.946h553.891L949.434,224.27z M335.155,526.666l6.953-77.99h53.195v-65h-47.4 l8.396-94.179l500.834-0.191l-84.919,237.36H335.155z"/> <path d="M626.999,786.956c16.736,19.827,42.046,31.199,69.442,31.199c53.688,0,102.879-41.885,111.985-95.355 c4.705-27.622-2.319-54.983-19.272-75.068c-16.736-19.827-42.046-31.199-69.442-31.199h-374.45 c-53.688,0-102.879,41.885-111.986,95.354c-4.705,27.623,2.32,54.985,19.273,75.07c16.736,19.827,42.046,31.199,69.441,31.199 c53.688,0,102.878-41.885,111.985-95.355c2.408-14.139,1.736-28.207-1.761-41.269h185.457c-4.72,9.498-8.132,19.695-9.948,30.354 C603.021,739.509,610.045,766.87,626.999,786.956z M365.033,689.656c4.643,5.501,6.372,13.396,4.867,22.229 c-3.745,21.984-26.133,41.271-47.909,41.271c-8.447,0-15.284-2.811-19.771-8.125c-4.644-5.501-6.372-13.396-4.867-22.23 c3.745-21.983,26.133-41.269,47.909-41.269C353.709,681.531,360.546,684.341,365.033,689.656z M739.483,689.656 c4.643,5.501,6.372,13.396,4.866,22.229c-3.744,21.984-26.132,41.271-47.908,41.271c-8.448,0-15.284-2.811-19.771-8.125 c-4.644-5.501-6.372-13.396-4.867-22.23c3.745-21.983,26.132-41.269,47.909-41.269 C728.159,681.531,734.996,684.341,739.483,689.656z"/> <rect x="78.951" y="274.902" width="174.728" height="65"/> </g> </g> </g>

</svg>
  )
}