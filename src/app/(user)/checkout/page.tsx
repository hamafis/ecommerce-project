import { faMoneyBillTransfer } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

export default function Checkout(){
  const loopChekcout = []
  
  for(let i=1; i<=5; i++){
    loopChekcout.push(
      <div key={i}>
        <div className="w-full mb-3">
          <p className="border-b-2 py-1 px-2 text-md font-semibold w-1/2 min-w-[480px]">
            Nama Toko
          </p>
        </div>
        <div className="w-full flex flex-nowrap mb-7 px-2">
          <div className="min-h-[120px] max-w-[120px] bg-zinc-600 w-2/12 rounded-md mr-3">
            ini gambar
          </div>
          <div className="w-10/12 space-y-2">
            <p className="font-semibold text-base">Title</p>
            <p className="font-medium text-sm ">x2 (ini jumlah barang yang dibeli)</p>
            <p className="font-medium text-lg">Rp1.000.000,-</p>
          </div>
        </div>
      </div>
    )
  }

  return(
    <div className="flex flex-wrap justify-center">
      <div className="border px-7 py-5 rounded-xl border-zinc-700 bg-zinc-900 shadow-md shadow-stone-800 mb-12 min-w-[700px] w-[50%]">
        {loopChekcout}
        <div className="border-t-2 mt-12">
          <div className="w-full flex flex-wrap">
            <div className="w-full py-2 px-6 flex justify-end">
              <p className="">Total Harga</p>
              <p className="w-60 text-end"> Rp2.000.000,-</p> 
            </div>
            <div className="w-full py-2 px-6 flex justify-end">
              <p className="">Admin</p>
              <p className="w-60 text-end">Rp5.000,-</p> 
            </div>
            <div className="w-full py-2 px-6 flex justify-end">
              <p className="">Pajak</p>
              <p className="w-60 text-end">Rp200.000,-</p> 
            </div>
            <div className="w-full py-2 px-6 flex justify-end">
              <p className="">Total Bayar</p>
              <p className="w-60 text-end">Rp30.000.000,-</p> 
            </div>
          </div>
        </div>        
        <div className="border-t-2">
          <div className="w-full flex flex-wrap">
            <div className="w-full py-2 px-6 flex justify-end">
              <p className="">Nomor Pemesanan</p>
              <p className="w-60 text-end"> 1234564789123</p> 
            </div>
            <div className="w-full py-2 px-6 flex justify-end">
              <p className="">Waktu Pemesanan</p>
              <p className="w-60 text-end"> 13-11-2022 14:13:13 </p> 
            </div>
            <div className="w-full py-2 px-6 flex justify-end">
              <p className="">Waktu Pembayaran</p>
              <p className="w-60 text-end"> 14-11-2022 15:13:13</p> 
            </div>
          </div>
        </div>
        <div className="border-t-2 py-5 flex justify-end">
          <button className="flex flex-wrap text-center justify-center py-2 mx-2 w-4/12 rounded bg-zinc-700 hover:bg-zinc-600 focus:bg-stone-700 focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-gray-500" ><FontAwesomeIcon icon={faMoneyBillTransfer} className="mr-2 w-5 h-5"/> Bayar Sekarang</button>
          </div>
      </div>
    </div>
  )
}