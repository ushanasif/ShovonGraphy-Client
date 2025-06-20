import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Aos from "aos";
import "aos/dist/aos.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div className="">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default App;
