
import logo from "../assets/images/Shovon Graphy-06.png";
import { Link } from "react-router-dom";

const Package = () => {
  return (
    <>
     <div className="w-full min-h-screen relative py-12">
      {/* Section Title */}
      <div className="flex items-center px-6 md:px-20 lg:px-40 gap-4 justify-center mb-10">
        <div className="flex-grow border-t border-gray-400"></div>
        <span className="mx-2 text-2xl md:text-3xl lg:text-4xl font-bold uppercase text-gray-800 tracking-wider">
          Packages
        </span>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>

      {/* Packages Grid */}
      <div
        className="container mx-auto px-6 py-20 md:px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-6 items-center relative z-10"
      >
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="bg-[#F5F5DC] pt-5 pb-10 flex flex-col gap-6 items-center border-2"
            data-aos="zoom-in-up"
            duration="1000"
          >
            {/* Package Content */}
            <img src={logo} alt="logo" className="w-28 h-14 mx-auto" />
            <div className="border-t border-black w-48"></div>

            <div className="flex flex-col items-center gap-4">
              <h2 className="text-xl md:text-2xl font-bold tracking-wider">Package {index + 1}</h2>
              <p className="uppercase text-lg text-gray-700">BDT 16,000 /=</p>

              <div className="flex flex-col items-center text-gray-700 text-sm">
                <span>1 Senior Photographer</span>
                <span>1 Senior Cinematographer</span>
              </div>

              <div className="flex flex-col gap-1 items-center text-gray-700 text-sm">
                <span>Prints: 4R size - 50 copies (Matte)</span>
                <span>1 Trailer, Full Video 20-30+ minutes</span>
                <span>Duration: Maximum 4 hours</span>
              </div>
            </div>

            <span className="text-gray-600 text-sm">This is only a Bride-side package.</span>

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
        <button className="px-8 py-2 bg-[#b5ad9d] bg-opacity-55 font-semibold rounded-full text-gray-800 hover:bg-opacity-75 transition">
          View All Packages
        </button>
      </div>
    </div>

      
    </>
  );
};

export default Package;
