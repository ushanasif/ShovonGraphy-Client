import img from "../assets/images/slider img.jpg"
const images = [img, img,img,img,img,img];

const Album = () => {
  return (
    <>
        <div className="w-full h-auto pb-20">
            <h2 className="text-center pt-10 pb-20 myfont-thin italic text-2xl">Take a View of These Wedding Memories</h2>
            <div className="grid grid-cols-3 gap-10 px-20 gap-y-36">
                {
                    images.map((item, index)=>{
                        return(
                            <div key={index + 1} className="bg-gray-200 hover:scale-105 transition-transform cursor-pointer">
                                <img src={item} alt="" className="w- h-auto" />
                                <div className="py-10 ml-6 myfont-thin italic">
                                    Welcome to wedding album
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </>
  )
}

export default Album



  

