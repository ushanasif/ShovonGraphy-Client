
import { useImageFetchingContextHook } from "../contextApi/ImageFetchingProvider";


const Gallery = () => {
  const {galleryData} = useImageFetchingContextHook();



  return (
    <>
      <div className="w-full min-h-screen px-10 bg-black py-5">
        <h2 className="py-6 text-[#ca786c] text-6xl tracking-widest myfont-thin text-center">Gallery</h2>
        <div className="grid grid-cols-3 gap-2 cursor-pointer">
          {galleryData?.map((val) => (
            <div key={val._id} className="shadow-md">
              <img src={val.imgUrl} alt="img" className="h-96 object-cover" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
