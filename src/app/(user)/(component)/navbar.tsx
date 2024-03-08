import { faCartShopping, faHandHoldingDollar, faStore, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function NavbarUser(){
  return(
    <nav className="flex flex-wrap items-center justify-between py-3 px-7 bg-zinc-800 fixed w-full top-0">
      <div className="flex items-center flex-shrink-0 mr-6">
        <Link href="/home">  
          <span className="font-semibold text-xl tracking-tight">Ecomerce Project</span>
        </Link>
      </div>
      <div className="flex">
        <ul className="flex"> 
          <li className="px-3 border-r">
            <Link href="/store" className="flex flex-wrap">
            <FontAwesomeIcon icon={faStore} className="w-5 h-5"/>
              <p className="ml-2">Store</p>
            </Link>
          </li>       
          <li className="px-3 border-r">
            <Link href="/checkout" className="flex flex-wrap">
            <FontAwesomeIcon icon={faHandHoldingDollar} className="w-5 h-5"/>
              <p className="ml-2">Checkout</p>
            </Link>
          </li>
          <li className="px-3 border-r">
            <Link href="/cart" className="flex flex-wrap">
              <FontAwesomeIcon icon={faCartShopping} className="w-5 h-5"/>
              <p className="ml-2">Keranjang</p>
            </Link>
          </li>
          <li className="mx-2">
            <Link href="/profile" className="flex flex-wrap">
              <FontAwesomeIcon icon={faUser} className="w-5 h-5"/>
              <p className="ml-2">Profil</p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
)
}