import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Lazy } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/lazy";

import { useImageFetchingContextHook } from "../contextApi/ImageFetchingProvider";

const Slider = () => {
  const { sliderImages } = useImageFetchingContextHook();

  return (
    <div className="w-full h-screen">
      <Swiper
        modules={[Navigation, Autoplay, Pagination, Lazy]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
        speed={2000}
        lazy={true}
        navigation
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {sliderImages?.map((val, i) => (
          <SwiperSlide key={i} className="w-full h-full relative">
            {/* Lazy-loaded image */}
            <img
              data-src={val?.imgUrl}
              className="swiper-lazy w-full h-full object-cover"
              alt={`slide-${i}`}
            />
            {/* Swiper's built-in spinner */}
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
