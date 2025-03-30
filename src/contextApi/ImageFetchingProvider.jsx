import { createContext, useContext, useEffect, useState } from "react"
import toast from "react-hot-toast";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { AuthContext } from "./AuthContextProvider";


const ImageFetchingContext = createContext(null);

const ImageFetchingProvider = ({children}) => {
  const [sliderImages, setSliderImages] = useState([]);
  const [galleryData, setGalleryData] = useState([]);
  const [albumsData, setAlbumsData] = useState([]);
  const {user} = useContext(AuthContext);
  const axios = useAxiosPublic();
  

  const fetchSlider = async() => {
    try {
      const response = await axios("/api/slider/get-slider");

      if(response){
          setSliderImages(response?.data?.sliderImages)
      }else{
        toast.error("Error from backend");
      }
  } catch (error) {
    console.log(error.message);
    if(error.response){
      toast.error(error.response.data.message);
      }
  }
  }

  const getGalleryData = async () => {
    try {
        const response = await axios("/api/gallery/get-gallery");

        if(response){
            setGalleryData(response?.data?.galleryData)
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
      const response = await axios('/api/album/get-albums');

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
      fetchSlider();
      getGalleryData();
      fetchAlbums();
  }, []);
  
  return (
    <ImageFetchingContext.Provider value={{sliderImages, galleryData, albumsData, fetchSlider, getGalleryData, fetchAlbums}}>
        {children}
    </ImageFetchingContext.Provider>
  )
}

export const useImageFetchingContextHook = () => {
    return useContext(ImageFetchingContext);
}

export default ImageFetchingProvider;