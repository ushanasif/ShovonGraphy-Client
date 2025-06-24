import { useContext, useEffect } from "react";
import Navbar from "./components/Navbar";
import Aos from "aos";
import "aos/dist/aos.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { AuthContext } from "./contextApi/AuthContextProvider";

const App = () => {
  const {loading} = useContext(AuthContext)
  useEffect(() => {
    Aos.init();
  }, []);

  if(loading) {
      return <p>Loading...</p>
  }

  return (
    <>
      <div className="bg-gray-50">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default App;
