import loveImage from '../assets/images/calligraphy-red-double-heart-vectorart_78370-4101.avif'

const About = () => {
  return (
    <div className="min-h-screen pt-16 pb-32 px-20 text-black text-center my-5">
      <div className="mb-5 flex flex-col">
          <span className='font-bold uppercase'>ShovonGraphy</span>
          <span className='text-2xl font-bold'>PHOTOGRAPHY and CINEMATOGRAPHY</span>
          
      </div>

      <p className=" text-gray-950 text-[18px] leading-8 text-base font-light">
        {" "}
        we capture the magic of your wedding day with timeless, heartfelt
        photography. Our passion is telling love stories through stunning,
        natural imagery, preserving every smile, tear, and joyful moment. We’re available to document your special day
        wherever love takes you. Let’s create memories that last a lifetime!
        Let us be part of your journey and turn your wedding day into a visual masterpiece that tells your love story, frame by frame.
      </p>
      <div className='w-2/3 mt-16 border-b border-black mx-auto'></div>
      <div className='mx-auto'>
        {/* <img src={loveImage} alt="" className='mx-auto w-[500px] h-60' /> */}
      </div>
    </div>
  );
};

export default About;
