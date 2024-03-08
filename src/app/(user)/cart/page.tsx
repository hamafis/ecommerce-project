"use client"
import { faCashRegister } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

function CartItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const quantityInput = (e:any) => {
    setQuantity(parseInt(e.target.value));
  };

  return (
    <div className="flex flex-wrap mb-3 p-5 border rounded-xl border-zinc-700 bg-zinc-900 shadow-md shadow-stone-800">
      <div className="flex items-center w-2/12 pr-5">
        <div className="block">
          <label className="inline-flex items-center">
            <input type="checkbox" className="h-6 w-6 accent-gray-600  cursor-pointer rounded-full"/>
          </label>
        </div>
        <div className="flex pl-3 mr-3 w-full ">
          <div className="min-h-[150px] max-w-[200px] bg-zinc-600 w-full rounded-xl">
            ini gambar
          </div>
        </div>
      </div>
      <div className="w-4/12">
        <div className="flex flex-wrap align-baseline h-full">
          <p className="w-full pb-1 font-bold text-xl">Nama Toko</p>
          <p className="w-full pb=1 font-semibold text-md">Title</p>
          <p className="w-full pb-2 text-md">Rp5.000,-</p>
          <div className="w-full ">
            <button className="w-8 h-8 px-1 border rounded-l-md" onClick={decrement}> - </button>
            <input type="text" className="w-16 px-2 py-1 text-center border-l border-r bg-zinc-800" min="1" value={quantity} onChange={quantityInput}/>
            <button className="w-8 h-8 px-1 border rounded-r-md" onClick={increment}> + </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Cart() {
  const loopCheckout = [];
  for (let i = 0; i < 10; i++) {
    loopCheckout.push(<CartItem key={i} />);
  }

  return (
    <div>
      <div className="px-12 pt-5 pb-8 mb-20">
        {loopCheckout}
      </div>
      <footer className="flex justify-center py-3 px-20 bg-zinc-800 fixed w-full bottom-0">
        <div className="w-full max-w-[1700px] flex flex-wrap">
          <div className="w-1/2">
            <p className="font-semibold">Total Harga : </p>
            <p className="font-bold text-2xl">Rp5.000.000,-</p>
          </div>
          <div className="w-1/2 flex justify-end">
            <Link href="/checkout" className="flex flex-wrap text-center justify-center items-center py-1 mx-2 w-4/12 rounded bg-zinc-700 hover:bg-zinc-600 focus:bg-stone-700 focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-gray-500 min-w-[180px]" >
            <FontAwesomeIcon icon={faCashRegister} className="mr-2 w-5 h-5"/> Beli Sekarang</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
