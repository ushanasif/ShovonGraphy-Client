
import About from '../components/About';
import Album from '../components/Album';
import Follow from '../components/Follow';
import ImageGallery from '../components/Gallery';
import Package from '../components/Package';
import Slider from '../components/Slider';



const Home = () => {
  return (
    <>
      <Slider />
      <About />
      <Album />
      <Package />
      <ImageGallery />
      <Follow />
    </>
  )
}

export default Home