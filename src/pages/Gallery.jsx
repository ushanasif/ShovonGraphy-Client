import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { IoCloudUploadOutline } from "react-icons/io5";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useImageFetchingContextHook } from "../contextApi/ImageFetchingProvider";
import uploadFileToCloudinary from "../helpers/uploadFileToCloudinary";

const Gallery = () => {
  const [img, setImg] = useState("");
  const imgInputRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const axios = useAxiosPublic();
  const {galleryData} = useImageFetchingContextHook();

  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { secure_url, public_id } = await uploadFileToCloudinary();
      console.log(secure_url, public_id);

      if (secure_url && public_id) {
          const response = await axios.post('/api/gallery/store-gallery', {public_id, imgUrl: secure_url});

          if(response){
              toast.success(response.data.message);
              setLoading(false)
              setImg(null);
              if (imgInputRef.current) {
                imgInputRef.current.value = ""; // Clear the file input field
              }
          }
      } else {
        toast.error("Data could not be added to mongodb");
      }
    } catch (error) {
      console.log(error.message);
      setLoading(false)
      if(error.response){
          toast.error(error.response.data.message);
      }
    }
  };


  return (
    <>
      <div className="w-full px-10 py-24 bg-slate-100 ">
        <div className="grid grid-cols-5 gap-5">
          {galleryData?.map((val) => (
            <div key={val._id} className="shadow-md">
              <img src={val.imgUrl} alt="img" className="" />
            </div>
          ))}

          {
            img && (
                <div>
                    <img src={img} alt="img" />
                </div>
            )
          }
          <div className="bg-white flex justify-center items-center rounded shadow-md">
            <form onSubmit={handleUpload}>
              <label
                htmlFor="upload"
                className="flex flex-col items-center gap-3 cursor-pointer"
              >
                <IoCloudUploadOutline className="size-14 text-blue-600" />
                <span className="px-3 py-1 opacity-65">
                  Click here to browse Files
                </span>
              </label>
              <input
                type="file"
                name="upload"
                id="upload"
                className="hidden"
                onChange={(e) => setImg(e.target.files[0])}
              />

              <button
                type="submit"
                className="bg-blue-500 text-white text-center w-full mx-auto px-5 py-1 mt-4 hover:bg-gray-400"
              >
                Upload
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
