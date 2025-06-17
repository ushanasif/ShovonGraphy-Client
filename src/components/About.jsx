import img from "../assets/images/10.jpg";

const About = () => {
  return (
    // <div className="bg-white h-auto pt-20 pb-48 px-3 md:px-12 text-center">
    //   <div className="mb-5 flex flex-col">
    //       <span className='text-lg font-bold italic'>ShovonGraphy</span>
    //       <span className='text-4xl'>Exclusive Photography & Cinematography Services</span>

    //   </div>

    //   <p className="leading-8 text-justify text-lg font-sans font-thin">

    //     we capture the magic of your wedding day with timeless, heartfelt
    //     photography. Our passion is telling love stories through stunning,
    //     natural imagery, preserving every smile, tear, and joyful moment. We’re available to document your special day
    //     wherever love takes you. Let’s create memories that last a lifetime!
    //     Let us be part of your journey and turn your wedding day into a visual masterpiece that tells your love story, frame by frame.
    //   </p>
    //   {/* <div className='w-2/3 mt-16 border-b border-black mx-auto'></div> */}
    //   <div className='mx-auto'>
    //     {/* <img src={loveImage} alt="" className='mx-auto w-[500px] h-60' /> */}
    //   </div>
    // </div>

    <>
    <div className="bg-[#f7f1f1] py-32 container mx-auto mt-16">
      <div className="w-full h-screen flex items-center gap-10">
        <div className="pl-36 pr-10">
          <img
            src={img}
            alt="image"
            className=" h-[30rem] object-cover"
          />
        </div>

        <div className="w-[0.5px] h-full bg-black"></div>

        <div className="flex flex-col gap-10 items-center w-[80%] pr-32">
          <div className="text-center">
            <p className="font-bold italic">ShovonGraphy</p>
            <p className="text-3xl tracking-widest">Exclusive Cinematography & Photography</p>
          </div>

          <div>
            <p className="text-justify">
              we capture the magic of your wedding day with timeless, heartfelt
              photography. Our passion is telling love stories through stunning,
              natural imagery, preserving every smile, tear, and joyful moment.
              We’re available to document your special day wherever love takes
              you. Let’s create memories that last a lifetime! Let us be part of
              your journey and turn your wedding day into a visual masterpiece
              that tells your love story, frame by frame.
            </p>
          </div>
        </div>
      </div>
    
    </div>
    </>
  );
};

export default About;
