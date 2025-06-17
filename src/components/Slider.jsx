import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
 
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import img from '../assets/images/slider img.jpg';
import { useImageFetchingContextHook } from "../contextApi/ImageFetchingProvider";


const Slider = () => {
  const {sliderImages} = useImageFetchingContextHook();
  console.log(sliderImages);
  return (
    <div className="w-full h-screen">
    <Swiper
      modules={[Navigation, Autoplay, Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      autoplay={{delay: 3000, pauseOnMouseEnter: true}}
      speed={2000}
      className="w-full h-full"
    >
     
            
      

      
        
        {
            sliderImages?.map((val, i) => (
              
            <SwiperSlide key={i} className="w-full h-full">
              <img src={val?.imgUrl}  alt="" className="w-full h-full object-cover md:object-cover" />
            </SwiperSlide>
              
            ))
        }

        
        
    </Swiper>
    </div>
  );
};

export default Slider;
