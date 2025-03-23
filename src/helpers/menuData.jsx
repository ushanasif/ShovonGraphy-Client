
import logo1 from "../assets/images/Shovon Graphy-06.png"

import { CiCamera } from "react-icons/ci"

export const menuData = [
    {
        id: 1,
        title: "Home",
        navigation: "/",
    },
    {
        id: 2,
        title: "Gallery",
        navigation: "/slider"
    },
   
    {
        id: 3,
        title: <img src={logo1} alt="" className='w-180 h-20 opacity-80' />
    },
    {
        id: 5,
        title: "Packages",
    },
    {
        id: 6,
        title: "Contact"
    }
]