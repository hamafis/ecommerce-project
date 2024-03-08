import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Login(){
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="border border-zinc-700 rounded-xl px-7 py-5 w-3/12 bg-zinc-900 shadow-lg shadow-stone-800">
        <div className="text-center mt-2 mb-8">
          <div className="w-full flex justify-center">
            <div className="w-20 h-20 rounded-full flex items-center justify-center border-4">
              <FontAwesomeIcon className="w-14 h-14" icon={faUserTie} />
            </div>
          </div>
          <p className="text-xl mt-4 font-semibold">Login Form</p>
        </div>
          <div className="mb-4">
            <label htmlFor="Username" className="block font-semibold mb-1 text-sm"> Username </label>
            <input id="Username" type="text" className="w-full p-2 rounded border bg-zinc-800 hover:bg-zinc-700 focus:bg-zinc-700 
            focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-gray-500"/>
          </div>
          <div className="mb-4">
            <label htmlFor="Password" className="block font-semibold mb-1 text-sm"> Password </label>
            <input id="Password" type="password" className="w-full p-2 rounded border bg-zinc-800 hover:bg-zinc-700 focus:bg-zinc-700 focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-gray-500"/>
          </div>
          <div className="mb-4 mt-7 text-center">
            {/* <button className="py-2 inline-block w-1/2 rounded bg-zinc-700 hover:bg-zinc-600 focus:bg-stone-700 focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-gray-500">Login</button> */}
            <Link className="py-2 inline-block w-1/2 rounded bg-zinc-700 hover:bg-zinc-600 focus:bg-stone-700 focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-gray-500" href="/home">Login</Link>
          </div>
      </div>
    </div>
  );
}