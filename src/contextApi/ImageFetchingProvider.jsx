import { createContext, useContext, useEffect, useState } from "react"
import toast from "react-hot-toast";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { AuthContext } from "./AuthContextProvider";


const ImageFetchingContext = createContext(null);

const ImageFetchingProvider = ({children}) => {
  const [galleryData, setGalleryData] = useState([]);
  const [albumsData, setAlbumsData] = useState([]);
  const {user} = useContext(AuthContext);
  const axios = useAxiosPublic();
  

  const getGalleryData = async () => {
    try {
        const response = await axios("/api/gallery/get-gallery", {withCredentials: true});

        if(response){
            setGalleryData(response.data.galleryData)
        }else{
          toast.error("Error from backend");
        }
    } catch (error) {
      console.log(error.message);
      if(error.response){
        toast.error(error.response.data.message);
        }
    }
  };

  const fetchAlbums = async() => {
    try {
      const response = await axios('/api/album/get-albums', {withCredentials: true});

      if(response){
            setAlbumsData(response?.data?.payload)
        }else{
          toast.error("Error from backend");
        }
    } catch (error) {
        console.log(error.message);
        if(error.response){
            console.log(error.response.data.message);
        }
    }
  }

  useEffect(()=>{
    if (user) {  // Ensure user is logged in before fetching
      getGalleryData();
      fetchAlbums();
    }
  }, [user]);
  
  return (
    <ImageFetchingContext.Provider value={{getGalleryData, galleryData, fetchAlbums, albumsData}}>
        {children}
    </ImageFetchingContext.Provider>
  )
}

export const useImageFetchingContextHook = () => {
    return useContext(ImageFetchingContext);
}
export default ImageFetchingProvider;