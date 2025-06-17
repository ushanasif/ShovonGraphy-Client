
import logo from "../assets/images/Shovon Graphy-06.png";
import { Link } from "react-router-dom";

const Package = () => {
  return (
    <>
     <div className="bg-white w-full min-h-screen relative pt-20 pb-28">
      {/* Section Title */}
      <div className="flex items-center px-6 md:px-20 lg:px-40 gap-4 justify-center mb-10">
        <div className="flex-grow border-t border-gray-400"></div>
        <span className="mx-2 text-2xl md:text-3xl lg:text-4xl uppercase text-gray-800 tracking-wider">
          Packages
        </span>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>

      {/* Packages Grid */}
      <div
        className="px-2 py-20 md:px-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xl:px-20 gap-6 md:gap-11 xl:gap-20 items-center relative z-10"
      >
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="pt-5 pb-10 flex flex-col gap-6 border border-black"
            data-aos="zoom-in-up"
            duration="1000"
          >
            {/* Package Content */}
            <img src={logo} alt="logo" className="w-28 h-14 mx-auto" />
            <div className="border-t border-black w-48 mx-auto"></div>

            <div className="flex flex-col gap-4 text-center">
              <h2 className="text-4xl md:text-4xl font-bold tracking-wider">Package {index + 1}</h2>
              <p className="uppercase text-3xl">BDT 16,000 /=</p>

              <div className="flex flex-col text-lg">
                <span>1 Senior Photographer</span>
                <span>1 Senior Cinematographer</span>
              </div>

              <div className="flex flex-col gap-1 text-lg">
                <span>Prints: 4R size - 50 copies (Matte)</span>
                <span>1 Trailer, Full Video 20-30+ minutes</span>
                <span>Duration: Maximum 4 hours</span>
              </div>
            </div>

            <span className="text-sm text-center">This is only a Bride-side package.</span>

            {/* Choose Plan Button */}
            <div className="flex flex-wrap justify-center gap-4">
              <a className="relative" href="#">
                <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
                <span className="relative inline-block h-full w-full rounded border-2 border-black bg-white px-4 py-2 text-sm md:text-base font-bold text-black transition duration-150 hover:bg-black hover:text-white">
                  Choose Plan
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* View All Packages Button */}
      <div className="mt-16 text-center">
        <button className="px-8 py-2 border-2 border-[#b48b3c] bg-opacity-55 font-semibold hover:bg-opacity-75 transition">
          View All Packages
        </button>
      </div>
    </div>

      
    </>
  );
};

export default Package;
