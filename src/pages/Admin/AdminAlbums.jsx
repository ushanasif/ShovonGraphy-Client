import { Link } from "react-router-dom"
import { useRef, useState } from "react"

import toast from "react-hot-toast";
import uploadFileToCloudinary from "../../helpers/uploadFileToCloudinary";
import { useImageFetchingContextHook } from "../../contextApi/ImageFetchingProvider";
import { RiDeleteBin6Line } from "react-icons/ri";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AdminAlbums = () => {
    const [albumName, setAlbumName] = useState('');
    const [images, setImages] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const imgInputRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const axios = useAxiosSecure();
    const {fetchAlbums, albumsData} = useImageFetchingContextHook();


      const storeImages = (e) => {
    setImages((prev) => {
        return [...prev, ...e.target.files]
    })
  }


    const createAlbum = async (e) => {
        e.preventDefault();
        try {
          setLoading(true);
          const uploadResults = await uploadFileToCloudinary(images);
         
          if (uploadResults) {
              const data = {
                    albumName,
                    coverImg: {public_id: uploadResults[0].public_id, imgUrl: uploadResults[0].secure_url}
              }
              setIsModalOpen(true)
              const response = await axios.post('/api/album/create-album', data, {withCredentials: true});
    
              if(response){
                  toast.success(response?.data?.message);
                  setLoading(false);
                  setAlbumName('')
                  setImages(null);
                  if (imgInputRef.current) {
                    imgInputRef.current.value = ""; // Clear the file input field
                  }
                  fetchAlbums();
                  
              }
          }
        } catch (error) {
          console.log(error.message);
          
          if(error.response){
              toast.error(error.response.data.message);
          }
        }finally{
          setLoading(false);
          setIsModalOpen(false)
        }
      };

   const deleteAlbum = async(id) => {
      const album = albumsData?.find(item => item._id === id);

      const publicIds = [album?.coverImg?.public_id, ...album.albumImages.map(val => val.public_id)];
      console.log(publicIds);
      try {
          const response = await axios.delete(`/api/album/delete-album/${id}`, {data: {publicIds}, withCredentials: true});

          if(response){
              toast.success(response?.data?.message);
              fetchAlbums();
          }else{
             toast.error("album not deleted")
          }
      } catch (error) {
          console.log(error.message);
          toast.error("Album not deleted");
      }
   }
   
  return (
    <>
      <div onClick={() => isModalOpen(false)} className="w-full h-screen pt-5 pb-64 pl-60 pr-10 rounded">
        <h1 className="text-center text-4xl mb-20"><span className="border-b-4">Marriage Stories</span></h1>
        <button onClick={()=>{setIsModalOpen(!isModalOpen)}} className="absolute top-20 right-8 bg-slate-500 hover:bg-amber-400 text-white px-2 py-1 rounded">Create an Album</button>
          <div className="grid grid-cols-4 gap-6 gap-y-12">

            {
                albumsData?.map((val)=> {
                  
                  return(
                  
                  <div key={val._id} className="shadow pb-10 flex flex-col">
                  <div className="relative" >
                      <Link to={val._id} > 
                          <img src={val?.coverImg?.imgUrl} alt="image" className="w-full h-full" />
                          
                      <div
                        className="absolute bottom-0 top-0 right-0 left-0 hover:bg-gray-900 hover:opacity-25 transition duration-1000">
                      </div>
                    </Link>
                    <button onClick={()=> deleteAlbum(val?._id)} className="absolute top-2 right-2 rounded-full"><RiDeleteBin6Line className="size-6 text-red-500"/></button>
                  </div>
                  <div className="font-thin italic mt-4 ml-4">
                      <Link to={val._id}>
                          <h2 className="hover:opacity-75">{val?.albumName}</h2>
                      </Link>
                  </div>
              </div>
                )})
            }
             
            <div>
                <button>
                    
                </button>
            </div>
             
             
          </div>


          {isModalOpen && (
  <div
    className="w-full h-screen bg-black bg-opacity-30 top-0 z-20 left-0 right-0 fixed flex justify-center items-center"
    onClick={() => setIsModalOpen(false)}
  >
    <form
      onClick={(e) => e.stopPropagation()}
      onSubmit={createAlbum}
      className="bg-white flex flex-col fixed z-40 px-10 py-10 shadow-lg rounded-md"
    >
      <label htmlFor="albumName">Album Name</label>
      <input
        type="text"
        value={albumName}
        placeholder="Album Name"
        onChange={(e) => setAlbumName(e.target.value)}
        className="border border-slate-400 outline-none pl-2 py-1 rounded"
      />

      <label htmlFor="upload" className="pt-5">Select a cover image</label>
      <input
        type="file"
        ref={imgInputRef}
        name="upload"
        accept="image/*"
        multiple
        onChange={storeImages}
        className="pt-3"
      />

      <div className="flex gap-3 mt-5">
       
        <button
          type="submit"
          className="bg-[#ccaf3d] px-3 py-1 rounded text-white"
        >
          Create Album
        </button>
         <button
          type="button"
          onClick={() => setIsModalOpen(false)}
          className="border px-3 py-1 rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  </div>
)}

      </div>
    </>
  )
}

export default AdminAlbums;

