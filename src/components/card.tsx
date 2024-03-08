export default function Card(){
  return(
    <div className="w-full rounded-xl hover:border hover:border-gray-500 ">
      <div className="border border-zinc-700 rounded-xl bg-zinc-900 shadow-md shadow-stone-800">
        <div className="min-h-24">
          <div className="bg-zinc-600 min-h-48 w-full rounded-t-xl p-2">
            ini gambar
          </div>
          <div className="pt-2 pb-3 px-2">
            <p className="text-lg font-medium">
              Title
            </p>
            <p className="font-semibold">
              Rp.000000000,-
            </p>
            <p className="text-xs mt-2">
              Rate 
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}