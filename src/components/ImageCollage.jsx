
import img from "../assets/images/10.jpg";
import img2 from '../assets/images/slider img.jpg'

const ImageCollage = () => {
  return (
    <div className="bg-[#d8d2ca] w-full h-screen px-32 py-16 mb-12 container mx-auto">
        <div className="flex gap-20 h-full">
            
            <div className="basis-[45%]">
                <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ipsam voluptate, autem accusantium dolorem nihil. Dicta quibusdam id rem sunt illum deserunt aspernatur sint, consequuntur, consequatur praesentium blanditiis? Dolores vel voluptates in possimus mollitia, voluptate deserunt. Id, optio esse tenetur blanditiis temporibus modi, obcaecati perspiciatis exercitationem beatae natus, odit omnis eos quia est recusandae quaerat atque laborum reiciendis eius non! Harum autem error, ab exercitationem, doloremque consequuntur quos nihil voluptate atque dolores quas ea possimus corporis. Explicabo non error repellendus harum id, quo eligendi facere magnam neque tempore nihil quia odio in dolorem illum saepe. Assumenda sit exercitationem unde labore.</p>
            </div>
            <div className="relative basis-[45%]">
                <img src={img} alt="" className="w-[12rem] h-[16rem] absolute top-10 left-0"/>
                <img src={img2} alt="" className="w-[15rem] absolute top-64 left-52"/>
                <img src={img} alt="" className="w-[12rem] h-[15rem] absolute top-0 left-52"/>
            </div>
        </div>
    </div>
  );
};

export default ImageCollage;
