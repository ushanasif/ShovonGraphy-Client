// import { Link } from "react-router-dom";
// import { useImageFetchingContextHook } from "../contextApi/ImageFetchingProvider";


// const Album = () => {
//   const { albumsData } = useImageFetchingContextHook();

//   return (
//     <>
//       <div className="w-full min-h-screen pt-8 pb-28">

//         <div className="inline-flex items-center justify-center w-full">
//           <hr className="w-[70%] h-px my-8 bg-gray-300 border-0" />
//           <span className="text-lg h-1 absolute px-7 font-normal text-gray-900 -translate-x-1/2 bg-white left-1/2"></span>
//         </div>

//         <h2 className="text-center text-[#000] pb-2 text-xl md:text-2xl lg:text-4xl tracking-wider font-playfair font-thin italic">
//           Our Wedding Stories in Timeless Frames
//         </h2>

//          <div className="inline-flex items-center justify-center w-full">
//           <hr className="w-[70%] h-px my-8 bg-gray-300 border-0" />
//           <span className="text-lg h-1 absolute px-7 font-normal text-gray-900 -translate-x-1/2 bg-white left-1/2"></span>
//         </div>

//         <div className="h-full px-40 grid grid-cols-3 gap-14 mt-7">
//           {albumsData?.slice(0, 5).map((src, index) => (
//             <div
//               key={index}
//               className={`hover:scale-105 transition-transform cursor-pointer}`}
//             >
//               <Link to={`albums/${src._id}`}>
//                 <img src={src?.coverImg?.imgUrl} alt="" className="object-cover" />
//                 <div className="py-2">Welcome to the wedding album</div>
//               </Link>
//             </div>
//           ))}
//         </div>

//         <div className="text-center mt-40">
//           <Link
//             to="/albums"
//             className="px-4 py-2 border border-gray-900 hover:bg-gray-900 hover:text-white duration-300"
//           >
//             View All Albums
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Album;



import { Link } from "react-router-dom";
import { useImageFetchingContextHook } from "../contextApi/ImageFetchingProvider";

const Album = () => {
  const { albumsData } = useImageFetchingContextHook();

  return (
    <>
      <div className="w-full min-h-screen pt-8 pb-28 px-4 sm:px-8 md:px-12 lg:px-20">

        <div className="inline-flex items-center justify-center w-full relative">
          <hr className="w-[70%] h-px my-8 bg-gray-300 border-0" />
          <span className="text-lg h-1 absolute px-7 font-normal text-gray-900 -translate-x-1/2 bg-white left-1/2"></span>
        </div>

        <h2 className="text-center text-[#000] pb-2 text-xl sm:text-2xl lg:text-4xl tracking-wider font-playfair font-thin italic">
          Our Wedding Stories in Timeless Frames
        </h2>

        <div className="inline-flex items-center justify-center w-full relative">
          <hr className="w-[70%] h-px my-8 bg-gray-300 border-0" />
          <span className="text-lg h-1 absolute px-7 font-normal text-gray-900 -translate-x-1/2 bg-white left-1/2"></span>
        </div>

        <div className="h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mt-7">
          {albumsData?.slice(0, 5).map((src, index) => (
            <div
              key={index}
              className="hover:scale-105 transition-transform cursor-pointer"
            >
              <Link to={`albums/${src._id}`}>
                <img
                  src={src?.coverImg?.imgUrl}
                  alt=""
                  className="object-cover w-full h-60 sm:h-72 lg:h-80 rounded-md"
                />
                <div className="py-2 text-center text-sm sm:text-base">
                  Welcome to the wedding album
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <Link
            to="/albums"
            className="px-4 py-2 border border-gray-900 hover:bg-gray-900 hover:text-white duration-300"
          >
            View All Albums
          </Link>
        </div>
      </div>
    </>
  );
};

export default Album;

