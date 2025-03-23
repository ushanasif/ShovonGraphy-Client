
import About from '../components/About';
import Follow from '../components/Follow';
import ImageGallery from '../components/Gallery';
import Package from '../components/Package';
import Slider from '../components/Slider';



const Home = () => {
  return (
    <>
      <Slider />
      <About />
      <Package />
      <ImageGallery />
      <Follow />
    </>
  )
}

export default Home