import { faCartPlus, faPencil, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Store(){
  const loopStore = []
  
  for(let i=1; i<=7; i++){
    loopStore.push(
      <div key={i} className="p-5 border-t-2 flex flex-wrap w-full">
        <div className="flex flex-nowrap">
          <div className="min-w-[150px] mr-5">
            <div className="h-[150px] w-[150px] bg-zinc-600 rounded-md ">
              ini gambar
            </div>
          </div>
          <div className="min-w-[200px] w-5/12">
            <div className="w-full flex flex-nowrap">
              <p className="w-5/12">Title</p>
              <p className="w-7/12">xxxxx</p> 
            </div>
            <div className="w-full flex flex-nowrap">
              <p className="w-5/12">Brand</p>
              <p className="w-7/12">xxxxx</p> 
            </div>
            <div className="w-full flex flex-nowrap">
              <p className="w-5/12">Model</p>
              <p className="w-7/12">xxxxx</p> 
            </div>
            <div className="w-full flex flex-nowrap">
              <p className="w-5/12">Katagori</p>
              <p className="w-7/12">xxxxx</p> 
            </div>
          </div>
          <div className="w-5/12">
            <div className="w-full flex flex-nowrap">
              <p className="w-5/12">Harga</p>
              <p className="w-7/12">xxxxx</p> 
            </div>
            <div className="w-full flex flex-nowrap">
              <p className="w-5/12">Stok</p>
              <p className="w-7/12">xxxxx</p> 
            </div>
            <div className="w-full flex flex-nowrap">
              <p className="w-5/12">Deskripsi</p>
              <p className="w-7/12 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quam, excepturi tempora mollitia labore eligendi sint qui molestias fuga esse veniam accusantium, ab iusto similique! Explicabo quo laboriosam labore possimus.</p> 
            </div>
          </div>
        </div>
        <div className="flex flex-nowrap w-full mt-12 justify-end">
            <button className="flex flex-wrap text-center justify-center py-2 mx-2 w-[200px] rounded bg-zinc-700 hover:bg-zinc-600 focus:bg-stone-700 focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-gray-500" ><FontAwesomeIcon icon={faPencil} className="mr-2 w-5 h-5"/>Ubah Barang</button>
            <button className="flex flex-wrap text-center justify-center py-2 mx-2 w-[200px] rounded bg-zinc-700 hover:bg-zinc-600 focus:bg-stone-700 focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-gray-500" ><FontAwesomeIcon icon={faTrashCan} className="mr-2 w-5 h-5"/>Hapus Barang</button>
        </div>
      </div>
    )
  }
  
  return(
  <div className="px-12">
    <div className="flex flex-wrap my-3 p-5 border rounded-xl border-zinc-700 bg-zinc-900 shadow-md shadow-stone-800">
      <div className="w-full flex flex-nowrap items-center p-7">
        <p className="w-1/2 text-xl font-bold">
          Data Barang yang Dijual
        </p>
        <div className="w-1/2 flex justify-end">
        <button className="flex flex-wrap text-center justify-center py-2 mx-2 w-4/12 rounded bg-zinc-700 hover:bg-zinc-600 focus:bg-stone-700 focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-gray-500" ><FontAwesomeIcon icon={faCartPlus} className="mr-2 w-5 h-5"/>Tambah Barang</button>
        </div>
      </div>
      {loopStore}
    </div>
  </div>
  )
}