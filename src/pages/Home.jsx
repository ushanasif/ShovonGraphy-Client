
import About from '../components/About';
import Album from '../components/Album';
import Follow from '../components/Follow';
import ImageGallery from '../components/Gallery';
import ImageCollage from '../components/ImageCollage';
import Slider from '../components/Slider';



const Home = () => {
  return (
    <>
      <Slider />
      <About />
      <Album />
      {/* <ImageCollage /> */}
      <ImageGallery />
      <Follow />
    </>
  )
}

export default Home