import img from '../assets/images/slider img.jpg';

const images = [img, img,img,img,img,img,img,img,img,]

const ImageGallery = () => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Gallery ${index + 1}`}
          className="w-full h-auto hover:scale-105 transition-transform"
        />
      ))}
    </div>
  );
};

export default ImageGallery;
