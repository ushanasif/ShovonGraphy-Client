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
    <div className="min-h-screen bg-white container mx-auto mt-32">
      <div className="w-full flex px-8">
        <div className="flex flex-col gap-10 items-center basis-[48%] pr-12">
          <div className="text-left font-playfair">
            <p className="font-bold italic text-xl text-[#ccaf3d]">ShovonGraphy</p>
            <p className="text-4xl tracking-widest">Exclusive Photography & Cinematography </p>
          </div>

          <div>
            <p className="text-justify text-[18px] leading-8 tracking-wider font-thin">
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

        <div className="basis-[48%] pl-12">
          <img
            src={img}
            alt="image"
            className="h-[30rem] object-cover"
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
