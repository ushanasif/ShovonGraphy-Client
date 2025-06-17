

import { Link } from "react-router-dom";
import { useImageFetchingContextHook } from "../contextApi/ImageFetchingProvider";

const gridHeight = [
  "w-full h-full col-span-1",
  "w-full h-[70%] col-span-1 row-span-2",
  "w-full h-full col-span-1",
  "w-full h-full col-span-1",
  "w-full h-full col-span-1",
];

const Album = () => {
  const { albumsData } = useImageFetchingContextHook();
  console.log(albumsData);
  return (
    <>
      <div className="w-full min-h-screen pt-8 pb-28">
        {/* <h1 className="text-3xl font-bold text-center">
          <span className="px-10 py-2 border-b border-b-black">Albums</span>
        </h1> */}

        <h2 className="text-center pt-10 pb-20 text-xl md:text-2xl lg:text-4xl tracking-wider">
        Our Wedding Story in Timeless Frames
        </h2>
        <div className="h-full px-24 grid grid-cols-3 grid-rows-2 gap-24">
          {albumsData?.slice(0, 5).map((src, index) => (
            <div
              key={index}
              className={`hover:scale-105 transition-transform cursor-pointer ${
                gridHeight[index % gridHeight.length]
              } }`}
            >
              <Link to={`albums/${src._id}`}>
              <img
                src={src?.coverImg?.imgUrl}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="py-6">Welcome to the wedding album</div>
              </Link>
            </div>
          ))}
        </div>
          
          <div className="text-center mt-40">
              <Link to="/albums" className="px-10 py-3 bg-[#e57373] text-white text-xl">View All Albums</Link>
          </div>
     
      </div>
    </>
  );
};

export default Album;
