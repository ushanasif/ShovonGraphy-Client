import { RiDeleteBin6Line } from "react-icons/ri";
import { useParams } from "react-router-dom";

import { IoCloudUploadOutline } from "react-icons/io5";
import { useRef, useState } from "react";

import toast from "react-hot-toast";
import uploadFileToCloudinary from "../../helpers/uploadFileToCloudinary";
import { useImageFetchingContextHook } from "../../contextApi/ImageFetchingProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AdminSingleAlbum = () => {
  const [images, setImages] = useState("");
  const imgInputRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const axios = useAxiosSecure();
  const { id } = useParams();
  const { fetchAlbums, albumsData } = useImageFetchingContextHook();

  const filterData = albumsData.find((val) => val._id === id);

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

      const data = {
        id: id,
        allImages: uploadResults.map((val) => {
          return { public_id: val.public_id, imgUrl: val.secure_url };
        }),
      };

      const response = await axios.patch(
        "/api/album/add-single-album-images",
        data
      );

      if (response.status === 200) {
        toast.success(response?.data?.message);
        setLoading(false);
        setImages(null);
        if (imgInputRef.current) {
          imgInputRef.current.value = ""; // Clear the file input field
        }
        fetchAlbums();
      }
    } catch (error) {
      setLoading(false);
      if (error.response) {
        toast.error(error.response.data.message);
      }
    }
  };

  const deleteImg = async (public_id) => {
    try {
      const response = await axios.delete(
        `/api/album/delete-album-image/${public_id}`,
        { withCredentials: true }
      );

      if (response) {
        toast.success(response?.data?.message);
        fetchAlbums();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      }
    }
  };

  return (
    <>
      <div className="w-full pl-60 pt-7 pb-40">
        <div className="grid grid-cols-5 gap-5">
          {filterData &&
            filterData.albumImages.map((val) => (
              <div key={val._id} className="relative shadow-md">
                <img src={val.imgUrl} alt="img" className="" />
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

export default AdminSingleAlbum;
