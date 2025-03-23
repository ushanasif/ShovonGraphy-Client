import logo from "../assets/images/Shovon Graphy-06.png"
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Follow = () => {
  return (
    <>
        <div className="w-full py-10  bg-opacity-50">
            <div className="bg-rose-50 container mx-auto rounded-lg py-20 flex flex-col items-center gap-6">
                <h2 className="uppercase text-amber-700 text-3xl"><span className="">follow us on</span></h2>
                <div className="flex justify-center gap-8 my-3">
                  <a href="http://www.facebook.com" target="_blank"><FaFacebook className="hover:bg-blue-500 hover:text-white size-12 rounded-full p-2" /></a>
                  <a href="http://www.instagram.com" target="_blank"><FaInstagram className="hover:bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 size-12 hover:text-white rounded-full p-2" /></a>
                  <a href="http://www.youtube.com" target="_blank"><FaYoutube className="hover:bg-red-600 hover:text-white size-12 rounded-full p-2" /></a>
            </div>
            </div>
        </div> 
    </>
  )
}

export default Follow; 