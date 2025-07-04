import { useContext, useEffect, useState } from 'react'
import logoGolden from "../assets/images/Shovon Graphy-06.png"
import Aos from "aos";
import { Link, useNavigate} from 'react-router-dom';
import { AuthContext } from '../contextApi/AuthContextProvider';
import { RiAdminFill, RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import toast from 'react-hot-toast';


const Navbar = () => {
  const navigate = useNavigate();
  const {isLoggedIn, handleLogout} = useContext(AuthContext);
  const [isDropdown, setIsDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  

  useEffect(() => {
    Aos.init();
  }, []);

 const logout = async() => {
      const success = await handleLogout();
      if(success){
          toast.success('You are logged out!');
          navigate('/admin/login')
      }
 }
  
  return (
    <>

       {/* <nav className='bg-white w-full pt-3 top-0 z-50'>
        <div className='md:container md:mx-auto'>
             <ul className='md:flex md:justify-center md:items-center md:gap-8 md:text-xl'>
                 <li className='menu-list'><Link to="/">Home</Link></li>
                 <li className='menu-list'><Link to="/gallery">Gallery</Link></li>
                 <li className='menu-list'><Link to="/albums">Albums</Link></li>
                 <li><Link to="/">
                      <img src={logoGoldern} alt="shovongraphy" className='w-60 h-32' />
                 </Link></li>
                 <li className='menu-list'><Link to="/packages">Packages</Link></li>
                 <li className='menu-list'><Link to="/about">About Us</Link></li>
                 <li><Link to="/contact" className='menu-list'>Contact</Link></li>
              
                
                   <li  className='relative cursor-pointer' onClick={()=>setIsDropdown(!isDorpdown)}>
                   <span><RiAdminFill className='size-10' /></span>
                  {
                     isDropdown && (
                      <ul className='bg-white text-black rounded absolute z-10'>


                        {
                            isLoggedIn ? <> <li className='border-b border-gray-400 px-2 pr-3 py-1'><Link to="/admin/dashboard">Dashboard</Link></li>
                        
                            <li className='border-b border-gray-400 px-2 pr-3 py-1'><button onClick={handleLogout}>Logout</button></li>
                            </> : <li className='border-b border-gray-400 px-2 pr-3 py-1'><Link to="/admin/login">Login</Link></li>
                        }
                       
                      </ul>
                     )
                  }
                </li>

              </ul>
        </div>
      </nav>  */}
    
    <nav className='bg-white w-full top-0 z-50 shadow-sm py-3'>
      <div className='container mx-auto flex justify-around gap-32 items-center px-4 md:px-8'>
        <Link to='/'>
          <img src={logoGolden} alt='shovongraphy' className='w-40 h-20 md:w-60 md:h-20' />
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className='lg:hidden text-3xl' 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <RiCloseLine /> : <RiMenu3Line />}
        </button>

        {/* Desktop Menu */}
        <ul className='hidden tracking-widest lg:flex lg:items-center lg:gap-8 font-light'>
          <li className='menu-list'><Link to='/'>Home</Link></li>
          <li className='menu-list'><Link to='/gallery'>Gallery</Link></li>
          <li className='menu-list'><Link to='/albums'>Albums</Link></li>
          <li className='menu-list'><Link to='/packages'>Packages</Link></li>
          <li className='menu-list'><Link to='/about'>About Us</Link></li>
          <li className='menu-list'><Link to='/contact'>Contact</Link></li>

          <li className='relative cursor-pointer' onClick={() => setIsDropdown(!isDropdown)}>
            <RiAdminFill className='size-7' />
            {isDropdown && (
              <ul className='bg-black text-white rounded absolute z-10 right-0 shadow-lg w-40'>
                {isLoggedIn ? (
                  <>
                    <li className='border-b border-gray-400 px-4 py-3 text-xl'><Link to='/admin/dashboard'>Dashboard</Link></li>
                    <li className='px-4 py-3 text-xl'><button onClick={logout}>Logout</button></li>
                  </>
                ) : (
                  <li className='px-4 py-3 text-white text-xl'><Link to='/admin/login'>Login</Link></li>
                )}
              </ul>
            )}
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
            <div className='lg:hidden w-[60%] md:w-[40%] min-h-screen bg-black text-center fixed top-0 right-0 z-50 '>
              <div onClick={() => setIsMobileMenuOpen(false)} className='flex justify-end p-5 transition-transform duration-300'><RiCloseLine className='size-10 bg-white text-black'/></div> 
                <ul className='flex flex-col w-full text-white py-4 space-y-6 shadow-lg'>
                    
                    <li className='menu-list'><Link to='/' onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
                    <li className='menu-list'><Link to='/gallery' onClick={() => setIsMobileMenuOpen(false)}>Gallery</Link></li>
                    <li className='menu-list'><Link to='/albums' onClick={() => setIsMobileMenuOpen(false)}>Albums</Link></li>
                    <li className='menu-list'><Link to='/packages' onClick={() => setIsMobileMenuOpen(false)}>Packages</Link></li>
                    <li className='menu-list'><Link to='/about' onClick={() => setIsMobileMenuOpen(false)}>About Us</Link></li>
                    <li className='menu-list'><Link to='/contact' onClick={() => setIsMobileMenuOpen(false)}>Contact</Link></li>
                    <li className='menu-list'><Link to='/admin/login' onClick={() => setIsMobileMenuOpen(false)}>Login</Link></li>
                </ul>
            </div>
      )}
    </nav>



    </>
  )
}

export default Navbar
