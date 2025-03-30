import { Link } from "react-router-dom"
import { useRef, useState } from "react"
import useAxiosPublic from "../../hooks/useAxiosPublic";
import toast from "react-hot-toast";
import uploadFileToCloudinary from "../../helpers/uploadFileToCloudinary";
import { useImageFetchingContextHook } from "../../contextApi/ImageFetchingProvider";
import { RiDeleteBin6Line } from "react-icons/ri";

const AdminAlbums = () => {
    const [albumName, setAlbumName] = useState('');
    const [img, setImg] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const imgInputRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const axios = useAxiosPublic();
    const {fetchAlbums, albumsData} = useImageFetchingContextHook();
    console.log(albumsData);


    const createAlbum = async (e) => {
        e.preventDefault();
        try {
          setLoading(true);
          const { secure_url, public_id } = await uploadFileToCloudinary(img);
          console.log(secure_url, public_id);
    
          if (secure_url && public_id) {
              const data = {
                    albumName,
                    coverImg: {public_id, imgUrl: secure_url}
              }
              setIsModalOpen(true)
              const response = await axios.post('/api/album/create-album', data, {withCredentials: true});
    
              if(response){
                  toast.success(response.data.message);
                  setLoading(false);
                  setAlbumName('')
                  setImg(null);
                  if (imgInputRef.current) {
                    imgInputRef.current.value = ""; // Clear the file input field
                  }
                  setIsModalOpen(false);
                  fetchAlbums();
                  
              }
          } else {
            toast.error("Data could not be added to mongodb");
            setLoading(false);
          }
        } catch (error) {
          console.log(error.message);
          setLoading(false);
          if(error.response){
              toast.error(error.response.data.message);
          }
        }
      };

   const deleteAlbum = async(id) => {
      const album = albumsData.find(item => item._id === id);

      const publicIds = [album.coverImg.public_id, ...album.albumImages.map(val => val.public_id)];

      try {
          const response = await axios.delete(`/api/album/delete-album/${id}`, {publicIds}, {withCredentials: true});

          if(response){
              toast.success(response.data.message)
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
      <div className="mt-14 ml-52 pt-5 pb-40 px-4 rounded">
        <h1 className="text-center font-thin text-4xl text-rose-600 italic mb-20">Marriage Stories</h1>
        <button onClick={()=>{setIsModalOpen(!isModalOpen)}} className="absolute top-20 right-8 bg-amber-600 text-lg hover:bg-amber-400 text-white px-2 py-1 rounded">Create an Album</button>
          <div className="grid grid-cols-3 gap-6 gap-y-12">

            {
                albumsData?.map((val)=> {
                  
                  return(
                  
                  <div key={val._id} className="shadow rounded-md pb-10 flex flex-col">
                  <div className="relative" >
                      <Link to={val._id} > 
                          <img src={val?.coverImg?.imgUrl} alt="image" />
                          
                      <div
                        className="absolute bottom-0 top-0 right-0 left-0 hover:bg-gray-900 hover:opacity-25 transition duration-1000">
                      </div>
                    </Link>
                    <button onClick={()=> deleteAlbum(val._id)} className="absolute top-2 right-2 rounded-full"><RiDeleteBin6Line className="size-6 text-red-500"/></button>
                  </div>
                  <div className="font-thin italic mt-4 ml-4">
                      <Link to={val._id}>
                          <h2 className="hover:opacity-75">{val?.albumName}</h2>
                      </Link>
                  </div>
              </div>
                )})
            }
             
            
             
             
          </div>


          {
              
              isModalOpen &&  
                <div className="w-full h-screen top-0 z-20 left-0 right-0 fixed flex justify-center items-center">
                    <form onSubmit={createAlbum} className="bg-white text- flex flex-col fixed z-40">
                        <label htmlFor="albumName">Album Name</label>
                        <input type="text" value={albumName} placeholder="Album Name" onChange={(e)=>{setAlbumName(e.target.value)}} />
    
                        <label htmlFor="upload">Select a cover image</label>
                        <input type="file" ref={imgInputRef} name="upload" accept="image/*" onChange={(e)=>{setImg(e.target.files[0])}}/>
    
                        <button type="submit">Create Album</button>
                    </form>
                </div>
             
            }
      </div>
    </>
  )
}

export default AdminAlbums;

