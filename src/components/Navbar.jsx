import { useContext, useEffect, useState } from 'react'
import logoGoldern from "../assets/images/Shovon Graphy-06.png"
import Aos from "aos";
import { Link, useNavigate} from 'react-router-dom';
import { AuthContext } from '../contextApi/AuthContextProvider';

import { RiAdminFill } from 'react-icons/ri';


const Navbar = () => {
  const navigate = useNavigate
  const {user, adminLogout} = useContext(AuthContext);
  const [isDorpdown, setIsDropdown] = useState(false);

  useEffect(() => {
    Aos.init();
  }, []);

 const handleLogout = async() => {
      await adminLogout();
      navigate("/");
 }
  
  return (
    <>

      <div className='w-full pt-3 top-0 z-50'>
        <div className='container mx-auto'>
             <ul className='flex justify-center items-center gap-8 text-lg text-slate-700'>
                 <li className='menu-list'><Link to="/">Home</Link></li>
                 <li className='menu-list'><Link to="/gallery">Gallery</Link></li>
                 <li className='menu-list'><Link to="/albums">Albums</Link></li>
                 <li><Link to="/">
                      <img src={logoGoldern} alt="shovongraphy" className='w-60 h-32' />
                 </Link></li>
                 <li className='menu-list'><Link to="/packages">Packages</Link></li>
                 <li className='menu-list'><Link to="/about">About Us</Link></li>
                 <li><Link to="/contact" className='menu-list'>Contact</Link></li>
              
                {
                   user &&   (<li  className='relative cursor-pointer' onClick={()=>setIsDropdown(!isDorpdown)}>
                   <span><RiAdminFill className='size-10' /></span>
                  {
                     isDorpdown && (
                      <ul className='bg-white text-black absolute rounded'>
                        <li className='border-b border-gray-400 px-2 pr-3 py-1'><Link to="/admin/dashboard">Dashboard</Link></li>
                        
                        <li className='border-b border-gray-400 px-2 pr-3 py-1'><button onClick={handleLogout}>Logout</button></li>
                        
                      </ul>
                     )
                  }
                </li>)
                }

              </ul>
        </div>
      </div>
      

    </>
  )
}

export default Navbar