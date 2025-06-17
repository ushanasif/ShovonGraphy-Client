
import { FaInstagram } from "react-icons/fa";
import { FiFacebook} from "react-icons/fi";

const Follow = () => {
  return (
    <>
        <div className="w-full py-10 bg-slate-200 my-5">
            <div className="container mx-auto rounded-lg py-7 md:py-16 flex flex-col items-center gap-6">
                <h2 className="uppercase text-4xl lg:text-4xl tracking-widest"><span className="">follow us on</span></h2>
                <div className="flex justify-center gap-8 my-3">
                  <a href="http://www.facebook.com" target="_blank"><FiFacebook className="size-[70px] md:size-20 rounded-full p-2" /></a>
                  <a href="http://www.instagram.com" target="_blank"><FaInstagram className="size-[70px] md:size-20 rounded-full p-2" /></a>
                  {/* <a href="http://www.youtube.com" target="_blank"><FiYoutube className="size-[75px] md:size-20 rounded-full p-2" /></a> */}
            </div>
            </div>
        </div> 
    </>
  )
}

export default Follow; 