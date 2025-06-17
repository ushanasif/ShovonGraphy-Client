
import { useImageFetchingContextHook } from '../contextApi/ImageFetchingProvider';

const ImageGallery = () => {
  const {galleryData} = useImageFetchingContextHook();
  
  return (
    <div className="bg-black grid grid-cols-4 gap-2 p-4">
      {galleryData?.slice(0,12).map((src, index) => (
        <img
          key={index}
          src={src.imgUrl}
          alt={`Gallery ${index + 1}`}
          className="w-full h-auto hover:scale-105 transition-transform"
        />
      ))}
    </div>
  );
};

export default ImageGallery;
