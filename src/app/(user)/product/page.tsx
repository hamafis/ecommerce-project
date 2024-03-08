"use client"
import { faCartPlus, faCashRegister } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

export default function Product(){
  const [quantity, setQuantity] = useState(1);
  const increment = () => {
    setQuantity(quantity + 1);
  };
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const quantityInput = (e:any) =>{
    setQuantity(parseInt(e.target.value))
  }

  return(
    <div className="px-12 py-3">
      <div className="flex flex-wrap my-3 p-5 border rounded-xl border-zinc-700 bg-zinc-900 shadow-md shadow-stone-800 mb-12">
        <div className="w-1/2 flex justify-center">
          <div className="min-h-[400px] bg-zinc-600 w-7/12 m-7 rounded-xl">
            ini gambar
          </div>
        </div>
        <div className="w-1/2 py-5"> 
          <div className="mb-7 border rounded-md p-3">
            <p className="w-full text-2xl font-bold">
              Nama Toko
            </p>
          </div>
          <p className="w-full text-2xl font-semibold pb-1 uppercase">
            Title
          </p>
          <div className="w-full mb-5 text-sm flex flex-wrap font-medium">
            <p className="border-r pr-2">rate &#11088;4.6</p>
            <p className="border-r px-2">128 rate</p>
            <p className="pl-2">2.700 Terjual</p>
          </div>
          <p className="font-bold text-3xl mb-3">
            Rp5.000.000,-  
          </p>
          <div className="text-sm">
            <div className="w-full py-2 flex flex-wrap">
              <p className="w-2/12">Model</p>
              <p className="w-10/12">: AA001</p> 
            </div>
            <div className="w-full py-2 flex flex-wrap">
              <p className="w-2/12">Brand</p>
              <p className="w-10/12">: Ham</p> 
            </div>
            <div className="w-full py-2 flex flex-wrap">
              <p className="w-2/12">Katagory</p>
              <p className="w-10/12">: Elektronik</p> 
            </div>
            <div className="w-full py-2 flex flex-wrap">
              <p className="w-2/12">Deskripsi</p>
              <p className="w-10/12">: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe reiciendis neque consectetur quia reprehenderit odio optio est magnam? Sed facilis aliquid natus magnam numquam similique fuga voluptatum! Aliquam, hic dolorem.</p> 
            </div>
          </div>
          <div className="pt-7">
            <div className="flex flex-wrap items-center">
              <p className="w-3/12">Jumlah Barang : </p>
              <div className="w-3/12">
                <button className="w-8 h-8 px-1 border rounded-l-md" onClick={decrement}> - </button>
                <input type="text" className="w-16 px-2 py-1 text-center border-l border-r bg-zinc-800" min="1" value={quantity} onChange={quantityInput}/>
                <button className="w-8 h-8 px-1 border rounded-r-md" onClick={increment}> + </button>
              </div>
              <p className="w-3/12">Stok xxxx barang </p>
            </div>
          </div>
          <div className="my-5 flex flex-wrap text-center">
            <Link href="/cart" className="flex flex-wrap text-center justify-center py-2 mx-2 w-4/12 rounded bg-zinc-700 hover:bg-zinc-600 focus:bg-stone-700 focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-gray-500" ><FontAwesomeIcon icon={faCartPlus} className="mr-2 w-5 h-5"/> Masukkan Keranjang</Link>
            <Link href="/checkout" className="flex flex-wrap text-center justify-center py-2 mx-2 w-4/12 rounded bg-zinc-700 hover:bg-zinc-600 focus:bg-stone-700 focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-gray-500" ><FontAwesomeIcon icon={faCashRegister} className="mr-2 w-5 h-5"/> Beli Sekarang</Link>
          </div>
        </div>
      </div>
    </div>

  )
}