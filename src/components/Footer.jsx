import image from "../assets/images/Shovon Graphy-05.png";


const Footer = () => {
  return (
    <>
      <footer className="bg-gray-950 py-5">
        {/* <div className="flex flex-col justify-center items-center gap-2">
            
            <h2 className="text-xl font-bold uppercase text-white">connect with us</h2>
            <div className="flex justify-center gap-8 my-3">
                <a href="http://www.facebook.com" target="_blank"><FaFacebook className="text-white hover:bg-blue-500 size-11 border border-gray-400 rounded-full p-2" /></a>
                <a href="http://www.instagram.com" target="_blank"><FaInstagram className="text-white hover:bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 size-11 border border-gray-400 rounded-full p-2" /></a>
                <a href="http://www.youtube.com" target="_blank"><FaYoutube className="text-white hover:bg-red-600 size-11 border border-gray-400 rounded-full p-2" /></a>
            </div>
        </div> */}
        <p className="text-center text-sm text-white">
          &copy; {new Date().getFullYear()} ShovonGraphy. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
