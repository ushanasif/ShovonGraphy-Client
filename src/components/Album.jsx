import img from "../assets/images/slider img.jpg"
const images = [img, img,img,img,img,img];

const Album = () => {
  return (
    <>
        <div className="w-full h-auto pb-20 px-1">
      <h2 className="text-center pt-10 pb-10 text-xl md:text-2xl lg:text-3xl font-light italic">
        Take a View of These Wedding Memories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 lg:gap-12">
        {images.map((item, index) => (
          <div
            key={index}
            className="hover:scale-105 transition-transform cursor-pointer overflow-hidden"
          >
            <img src={item} alt="" className="w-full h-auto object-cover" />
            <div className="py-6 px-4 text-center font-light italic">
              Welcome to the wedding album
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Album



  

