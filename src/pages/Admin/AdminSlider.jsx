import { useContext, useRef, useState } from "react";
import toast from "react-hot-toast";
import { IoCloudUploadOutline } from "react-icons/io5";

import { useImageFetchingContextHook } from "../../contextApi/ImageFetchingProvider";
import uploadFileToCloudinary from "../../helpers/uploadFileToCloudinary";
import useAxiosSecure from '../../hooks/useAxiosSecure'
import { RiDeleteBin6Line } from "react-icons/ri";


const AdminSlider = () => {
  const [images, setImages] = useState([]);
  
  const imgInputRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const axios = useAxiosSecure();
  const {sliderImages, fetchSlider} = useImageFetchingContextHook();


  const storeImages = (e) => {
    setImages((prev) => {
        return [...prev, ...e.target.files]
    })
  }

  const handleUpload = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
       const uploadResults = await uploadFileToCloudinary(images);
       console.log(uploadResults);
      

      if (uploadResults) {
          const response = await axios.post('/api/slider/add-slider', {data:uploadResults});

          if(response.status === 200){
              toast.success(response.data.message);
              setImages(null);
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
        const response = await axios.delete(`/api/slider/delete-slider-img/${public_id}`);

        if(response.status === 200){
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
      <div className="w-full bg-slate-100 pl-72 pr-14 pt-4 pb-60">
        <h1 className="text-center text-4xl py-10"><span className="border-b-4 border-gray-400">Gallery Images</span></h1>
        <div className="grid grid-cols-4 gap-5">

          {
              sliderImages?.map((val) => (
                  <div key={val?._id} className="h-full relative">
                      <img src={val?.imgUrl} alt="Slider" className="w-full h-full" />
                      <button onClick={()=> deleteImg(val.public_id)} className="absolute top-2 right-2 rounded-full"><RiDeleteBin6Line className="size-6 text-red-500" /></button>
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
                multiple
                ref={imgInputRef}
                className="hidden"
                onChange={storeImages}
              />

              {images?.length > 0 && <button
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
