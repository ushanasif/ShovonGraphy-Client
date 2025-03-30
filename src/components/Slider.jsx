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
    <div className="px-5">
    <Swiper
      modules={[Navigation, Autoplay, Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      autoplay={{delay: 3000, pauseOnMouseEnter: true}}
      speed={2000}
    >
     
            
      

      <div className="w-full min-h-screen">
        <SwiperSlide>
            <img src={import.meta.env.MODE === 'development' ? sliderImages[0]?.imgUrl : img}  alt="" className="w-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={import.meta.env.MODE === 'development' ? sliderImages[0]?.imgUrl : img} alt="" className="w-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={import.meta.env.MODE === 'development' ? sliderImages[0]?.imgUrl : img} alt="" className="w-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={import.meta.env.MODE === 'development' ? sliderImages[0]?.imgUrl : img} alt="" className="w-full object-cover" />
        </SwiperSlide>

        
        </div>
    </Swiper>
    </div>
  );
};

export default Slider;
