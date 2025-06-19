import React, { useContext } from 'react'
import { AuthContext } from '../contextApi/AuthContextProvider'
import {Navigate, useLocation} from 'react-router-dom'

const Protected = ({children}) => {
    const {isLoggedIn, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <p>Loading...</p>
    }

    else if(!isLoggedIn && location.pathname.includes('/admin/dashboard')){
        return <Navigate to={'/admin/login'}/>
    }

    else if(isLoggedIn && (location.pathname.includes('/admin/login') || location.pathname.includes('/admin/register'))){
        return <Navigate to={'/admin/dashboard'}/>
    }

    return children;
}

export default Protected
