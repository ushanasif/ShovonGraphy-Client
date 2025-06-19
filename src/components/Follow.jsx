import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";

const Follow = () => {
  return (
    <>
      <div className="w-full mt-20 mb-14 px-4 sm:px-6 md:px-10">
        <div className="bg-[#eeeadd] rounded-lg">
          <div className="container mx-auto py-10 sm:py-14 md:py-16 flex flex-col items-center gap-6">
            <h2 className="uppercase text-2xl sm:text-3xl md:text-4xl tracking-widest text-center">
              follow us on
            </h2>

            <div className="flex justify-center gap-8 my-2">
              <a
                href="http://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiFacebook className="text-5xl sm:text-6xl p-2 rounded-full hover:scale-110 transition-transform" />
              </a>
              <a
                href="http://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-5xl sm:text-6xl p-2 rounded-full hover:scale-110 transition-transform" />
              </a>
              {/* Future YouTube icon can be added here */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Follow;
