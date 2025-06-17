import { useContext, useRef, useState } from "react";
import toast from "react-hot-toast";
import { IoCloudUploadOutline } from "react-icons/io5";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useImageFetchingContextHook } from "../../contextApi/ImageFetchingProvider";
import uploadFileToCloudinary from "../../helpers/uploadFileToCloudinary";
import { RiDeleteBin6Line } from "react-icons/ri";


const AdminSlider = () => {
  const [img, setImg] = useState("");
  const imgInputRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const axios = useAxiosPublic();
  const {sliderImages, fetchSlider} = useImageFetchingContextHook();
  console.log(sliderImages);


  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { secure_url, public_id } = await uploadFileToCloudinary(img);
      console.log(secure_url, public_id);

      if (secure_url && public_id) {
          const response = await axios.post('/api/slider/add-slider', {public_id, imgUrl: secure_url}, {withCredentials:true});

          if(response){
              toast.success(response.data.message);
              setImg(null);
              if (imgInputRef.current) {
                imgInputRef.current.value = ""; // Clear the file input field
              }
              fetchSlider();
          }
      } else {
        toast.error("Data could not be added to mongodb");
        
      }
    } catch (error) {
      console.log(error.message);
      if(error.response){
          toast.error(error.response.data.message);
      }
    }finally{
        setLoading(false);
    }
  };

  const deleteImg = async(public_id) => {
    
      try {
        const response = await axios.delete(`/api/slider/delete-slider-img/${public_id}`, {withCredentials: true});

        if(response){
            toast.success(response?.data?.message);
            fetchSlider();
        }else{
            toast.error(response?.data?.message);
        }
      } catch (error) {
          console.log(error.message);
          if(error.response){
              toast.error(error.response.data.message)
          }
      }
  }

  return (
    <>
      <div className="bg-slate-100 w-full h-screen px-20 pt-4 pb-40">
        <h1 className="text-center text-4xl py-10"><span className="border-b-4 border-gray-400">Gallery Images</span></h1>
        <div className="grid grid-cols-4 gap-5">
          {/* {sliderImages?.map((val) => (
            <div key={val._id} className="w-full h-full relative shadow-sm">
              <img src={val.imgUrl} alt="img" className="w-full h-full" />
              <button onClick={()=>{deleteImg(val?.public_id)}} className="absolute top-2 right-2 rounded-full"><RiDeleteBin6Line className="size-6 text-red-500"/></button>
            </div>
          ))} */}
          {
              sliderImages?.map((val) => (
                  <div key={val?._id} className="h-full">
                      <img src={val?.imgUrl} alt="Slider" className="w-full h-full" />
                  </div>
              ))
          }
          <div className="flex justify-center items-center rounded shadow-md px-6 py-8 border border-dashed border-black">
            <form onSubmit={handleUpload} className="text-center">
              <label
                htmlFor="upload"
                className="flex flex-col items-center gap-3 cursor-pointer"
              >
                <IoCloudUploadOutline className="size-14 text-blue-600" />
                <span className="px-3 py-1 opacity-65 text-sm">
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

              {img && <button
                type="submit"
                className="bg-blue-500 text-white mx-auto px-3 py-1 mt-4 rounded-md hover:bg-gray-400"
              >
                Upload
              </button>}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSlider;
