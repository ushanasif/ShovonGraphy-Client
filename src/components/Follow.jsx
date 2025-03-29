import logo from "../assets/images/Shovon Graphy-06.png"
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Follow = () => {
  return (
    <>
        <div className="w-full py-10  bg-opacity-50">
            <div className="container mx-auto rounded-lg py-7 md:py-20 flex flex-col items-center gap-6">
                <h2 className="uppercase text-4xl lg:text-6xl myfont-thin"><span className="">follow us on</span></h2>
                <div className="flex justify-center gap-8 my-3">
                  <a href="http://www.facebook.com" target="_blank"><FaFacebook className="size-[70px] md:size-20 rounded-full p-2" /></a>
                  <a href="http://www.instagram.com" target="_blank"><FaInstagram className="size-[70px] md:size-20 rounded-full p-2" /></a>
                  <a href="http://www.youtube.com" target="_blank"><FaYoutube className="size-[75px] md:size-20 rounded-full p-2" /></a>
            </div>
            </div>
        </div> 
    </>
  )
}

export default Follow; 