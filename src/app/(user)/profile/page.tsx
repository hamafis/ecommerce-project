import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Profile(){
  return(
  <div className="flex flex-wrap justify-center">
    <div className="border px-7 py-5 rounded-xl border-zinc-700 bg-zinc-900 shadow-md shadow-stone-800 mb-12 min-w-[500px] w-[40%]">
      <div className="text-center border-b-2">
        <p className="font-bold text-xl uppercase tracking-wider pb-2">Profile</p>
      </div>
      <div className="w-full flex justify-center">
        <div className="min-h-[200px] min-w-[200px] bg-zinc-600 my-7 rounded-xl">
          ini gambar
        </div>
      </div>
      <div className="w-full py-4 px-6 flex flex-nowrap border-t-2">
        <p className="w-5/12">Nama</p>
        <p className="w-7/12">xxxxx</p> 
      </div>
      <div className="w-full py-4 px-6 flex flex-nowrap border-t-2">
        <p className="w-5/12">Alamat</p>
        <p className="w-7/12">xxxxx</p> 
      </div>
      <div className="w-full py-4 px-6 flex flex-nowrap border-t-2">
        <p className="w-5/12">tanggal Lahir</p>
        <p className="w-7/12">xxxxx</p> 
      </div>
      <div className="w-full py-4 px-6 flex flex-nowrap border-t-2">
        <p className="w-5/12">Jenis Kelamin</p>
        <p className="w-7/12">xxxxx</p> 
      </div>
      <div className="w-full py-4 px-6 flex flex-nowrap border-t-2">
        <p className="w-5/12">E-mail</p>
        <p className="w-7/12">xxxxx</p> 
      </div>
      <div className="w-full py-4 px-6 flex flex-nowrap border-t-2">
        <p className="w-5/12">Nomor Handphone</p>
        <p className="w-7/12">xxxxx</p> 
      </div>
      <div className="w-full py-4 px-6 flex flex-nowrap border-t-2">
        <p className="w-5/12">Username</p>
        <p className="w-7/12">xxxxx</p> 
      </div>
      <div className="w-full py-4 px-6 flex flex-nowrap border-t-2">
        <p className="w-5/12">Ballance</p>
        <p className="w-7/12">Rp1.000.000,-</p> 
      </div>
      <div className="w-full py-4 flex flex-nowrap border-t-2 justify-end">
        <button className="flex flex-wrap text-center justify-center py-2 mx-2 w-4/12 rounded bg-zinc-700 hover:bg-zinc-600 focus:bg-stone-700 focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-gray-500" ><FontAwesomeIcon icon={faPencil} className="mr-2 w-5 h-5"/> Ubah Data</button>
      </div>
    </div>
  </div>
  )
}