import { useContext, useRef, useState } from "react";
import toast from "react-hot-toast";
import { IoCloudUploadOutline } from "react-icons/io5";
import { useImageFetchingContextHook } from "../../contextApi/ImageFetchingProvider";
import uploadFileToCloudinary from "../../helpers/uploadFileToCloudinary";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AuthContext } from "../../contextApi/AuthContextProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AdminGallery = () => {
  const [images, setImages] = useState("");
  const imgInputRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const axios = useAxiosSecure();
  const { fetchAdminDetails } = useContext(AuthContext);
  const { galleryData, getGalleryData } = useImageFetchingContextHook();

  const storeImages = (e) => {
    setImages((prev) => {
      return [...prev, ...e.target.files];
    });
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const uploadResults = await uploadFileToCloudinary(images);

      const response = await axios.post("/api/gallery/store-gallery", {
        data: uploadResults,
      });

      if (response.status === 200) {
        toast.success(response.data.message);
        fetchAdminDetails();
        setImages(null);
        if (imgInputRef.current) {
          imgInputRef.current.value = ""; // Clear the file input field
        }
      }
    } catch (error) {
      console.log(error.message);

      if (error.response) {
        toast.error(error.response.data.message);
      }
    } finally {
      setLoading(false);
      getGalleryData();
    }
  };

  const deleteImg = async (public_id) => {
    try {
      const response = await axios.delete(
        `/api/gallery/delete-gallery-img/${public_id}`,
        { withCredentials: true }
      );

      if (response.status === 200) {
        toast.success(response?.data?.message);
        getGalleryData();
      }
    } catch (error) {
      console.log(error.message);
      if (error.response) {
        toast.error(error.response.data.message);
      }
    }
  };

  if(loading){
     return <p>Loading...</p>
  }

  return (
    <>
      <div className="bg-slate-100 w-full pl-60 pr-14 pt-10 pb-60">
        <div className="h-full grid grid-cols-4 gap-5">
          {galleryData?.map((val) => (
            <div key={val?._id} className="relative shadow-md">
              <img src={val?.imgUrl} alt="img" className="w-full h-full" />
              <button
                onClick={() => {
                  deleteImg(val?.public_id);
                }}
                className="absolute top-2 right-2 rounded-full"
              >
                <RiDeleteBin6Line className="size-6 text-red-500" />
              </button>
            </div>
          ))}

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
                className="hidden"
                onChange={storeImages}
              />

              {images && (
                <button
                  type="submit"
                  className="bg-blue-500 text-white mx-auto px-3 py-1 mt-4 rounded-md hover:bg-gray-400"
                >
                  Upload
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminGallery;
