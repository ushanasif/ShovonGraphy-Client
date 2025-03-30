
import { Link } from "react-router-dom"
import { LuBoxes, LuDiscAlbum, LuGalleryHorizontalEnd, LuLayoutDashboard} from "react-icons/lu"
import { FiHome } from "react-icons/fi";
import homeIcon from "../../assets/images/270-2701410_icon-with-a-blue-house-home-logo-transparent-background.png"



const Sidebar = () => {
  return (
    <>
      <div className="w-[15%] bg-black text-white px-5">
          <div className="flex items-center justify-center gap-3 pt-8">
              <span><LuLayoutDashboard className="size-6" /></span>
              <span className="text-lg">Dashboard</span>
          </div>
          <hr className="border-gray-400 mt-5 ml-1"/>
          <ul className="space-y-10 mt-6">
              <li><Link to={"/"} className="flex flex-col items-center justify-center gap-3"><span><FiHome className="text-2xl"/></span><span className="text-xl">Home</span></Link></li>
              <li><Link to={"/admin/dashboard/slider"} className="flex flex-col items-center justify-center gap-3"><span><FiHome className="text-2xl"/></span><span className="text-xl">Slider</span></Link></li>
              <li><Link to={"/admin/dashboard/gallery"} className="flex flex-col items-center justify-center gap-3"><span><LuGalleryHorizontalEnd className="text-white text-2xl" /></span><span className="text-xl">Gallery</span></Link></li>
              <li><Link to={"/admin/dashboard/albums"} className="flex flex-col items-center justify-center gap-3"><span><LuDiscAlbum className="text-2xl" /></span><span className="text-xl">Albums</span></Link></li>
              <li><Link to={"/admin/dashboard/package"} className="flex flex-col items-center justify-center gap-3"><span><LuBoxes className="text-2xl" /></span><span className="text-xl">Packages</span></Link></li>
          </ul>

          
      </div>
    </>
  );
};

export default Sidebar;
