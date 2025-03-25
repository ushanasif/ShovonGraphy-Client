import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"


const ResponsiveMenu = ({open}) => {

    useEffect(()=>{
        Aos.init();
    }, []);

  return (
    <>
      {open && (
        <div className="absolute left-0 w-full h-screen z-20">
          <div className="text-xl font-semibold uppercase text-white bg-orange-400 py-10 m-6 rounded-lg">
            <ul className="flex flex-col justify-center items-center gap-10">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default ResponsiveMenu;
