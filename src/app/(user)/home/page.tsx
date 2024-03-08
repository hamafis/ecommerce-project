import Card from "@/components/card";
import Link from "next/link";

export default function HomeUser(){
  const loopCataagory = []
  const loopCard = []

  for(let i=1; i<=18; i++){
    loopCataagory.push(
      <div key={i} className="w-2/12">
        <Link href="/category" className="w-full inline-block border border-zinc-700 p-3 hover:bg-zinc-800 focus:bg-zinc-800">
          Catagory
        </Link>
      </div>
    )
  }

  for(let i=1; i<=18; i++){
    loopCard.push(
      <Link key={i} href="/product" className="w-2/12 p-3">
        <Card/>
      </Link>
    )
  }

  return(
    <div className="px-12 py-3">
      <div className="flex flex-wrap my-3 p-5 border rounded-xl border-zinc-700 bg-zinc-900 shadow-md shadow-stone-800 mb-12">
        <p className="w-full mb-5 text-md font-semibold pb-3 border-b-2 uppercase">
          Kategori
        </p>
        {loopCataagory}
      </div>
      <div className="flex flex-wrap my-3 p-5 border rounded-xl border-zinc-700 bg-zinc-900 shadow-md shadow-stone-800">
        <p className="w-full mb-5 text-xl font-semibold pb-3 border-b-2 uppercase text-center">
          produk terbaru
        </p>
        {loopCard}
      </div>
    </div>
  )
}