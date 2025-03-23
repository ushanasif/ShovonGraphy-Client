import React from "react";
import { FcCheckmark } from "react-icons/fc";
import logo from "../assets/images/Shovon Graphy-06.png";
import { Link } from "react-router-dom";

const Package = () => {
  return (
    <>
      <div className="w-full min-h-screen relative">
      <div className="flex items-center px-60 gap-8 justify-center mb-20">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-4 text-4xl font-bold uppercase text-gray-800 tracking-wider">Packages</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

        <div className="container mx-auto px-7 pt-5 grid grid-cols-4 gap-10 items-center relative z-10">

          <div
            className="bg-[#F5F5DC] pt-5 pb-10 flex flex-col gap-6 items-center"
            data-aos="zoom-in-up"
            duration="1000"
          >
            
              <img src={logo} alt="logo" className="w-36 h-16 mx-auto" />
              <div className="border-t border-black w-60"></div>
              <div className="flex flex-col items-center gap-6">
              <h2 className="text-2xl font-bold tracking-wider">Package 1</h2>
              <p className="uppercase text-2xl">bdt 16,000 /=</p>

              <div className="flex flex-col items-center  text-slate-700">
                <span>1 Senior Photographer</span>
                <span>1 Senior cinematographer</span>
              </div>
              <div className="flex flex-col gap-2 items-center text-slate-700">
                <span>Prints : 4R size- 50 copies (Matte)</span>
                <span>1 Trailer, full video 20-30+ minutes</span>
                <span>Duration : Maximum 4 hours</span>
              </div>
              </div>
              <span className="">This is only Bride side package.</span>
              {/* <Link className="uppercase border border-black px-1 py-3 bg-black text-sm text-white font-semibold">Choose Plan</Link> */}
              <div className="flex flex-wrap justify-center gap-6">
                  <a className="relative" href="#">
                      <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
                      <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-black hover:text-white">Choose Plan</span>
                  </a>
              </div>
          </div>
          <div
            className="bg-[#FFDEAD] pt-5 pb-10 flex flex-col gap-6 items-center"
            data-aos="zoom-in-up"
            duration="1000"
          >
            
              <img src={logo} alt="logo" className="w-36 h-16 mx-auto" />
              <div className="border-t border-black w-60"></div>
              <div className="flex flex-col items-center gap-6">
              <h2 className="text-2xl font-bold tracking-wider">Package 1</h2>
              <p className="uppercase text-2xl">bdt 16,000 /=</p>

              <div className="flex flex-col items-center  text-slate-700">
                <span>1 Senior Photographer</span>
                <span>1 Senior cinematographer</span>
              </div>
              <div className="flex flex-col gap-2 items-center text-slate-700">
                <span>Prints : 4R size- 50 copies (Matte)</span>
                <span>1 Trailer, full video 20-30+ minutes</span>
                <span>Duration : Maximum 4 hours</span>
              </div>
              </div>
              <span className="">This is only Bride side package.</span>
              {/* <Link className="uppercase border border-black px-1 py-3 bg-black text-sm text-white font-semibold">Choose Plan</Link> */}
              <div className="flex flex-wrap justify-center gap-6">
                  <a className="relative" href="#">
                      <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
                      <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-black hover:text-white">Choose Plan</span>
                  </a>
              </div>
          </div>
          <div
            className="bg-[#FFDEAD] pt-5 pb-10 flex flex-col gap-6 items-center"
            data-aos="zoom-in-up"
            duration="1000"
          >
            
              <img src={logo} alt="logo" className="w-36 h-16 mx-auto" />
              <div className="border-t border-black w-60"></div>
              <div className="flex flex-col items-center gap-6">
              <h2 className="text-2xl font-bold tracking-wider">Package 1</h2>
              <p className="uppercase text-2xl">bdt 16,000 /=</p>

              <div className="flex flex-col items-center  text-slate-700">
                <span>1 Senior Photographer</span>
                <span>1 Senior cinematographer</span>
              </div>
              <div className="flex flex-col gap-2 items-center text-slate-700">
                <span>Prints : 4R size- 50 copies (Matte)</span>
                <span>1 Trailer, full video 20-30+ minutes</span>
                <span>Duration : Maximum 4 hours</span>
              </div>
              </div>
              <span className="">This is only Bride side package.</span>
              {/* <Link className="uppercase border border-black px-1 py-3 bg-black text-sm text-white font-semibold">Choose Plan</Link> */}
              <div className="flex flex-wrap justify-center gap-6">
                  <a className="relative" href="#">
                      <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
                      <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-black hover:text-white">Choose Plan</span>
                  </a>
              </div>
          </div>
         

        </div>
          
        <div className="my-32 text-center">
            <Link className="px-12 py-2 bg-[#b5ad9d] bg-opacity-55 font-semibold rounded-full">View all Packages</Link>
        </div>
        {/* <div className="absolute bg-slate-300 top-48 pt-16 pb-16 w-full bottom-50 -z-20"></div> */}
      </div>
    </>
  );
};

export default Package;
