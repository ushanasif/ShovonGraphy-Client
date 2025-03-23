import { Navigate } from 'react-router-dom'
import { AuthContext } from '../contextApi/AuthContextProvider'
import { useContext } from 'react';

const Protected = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    console.log(user, loading);
    if(loading){
        return <p>Loading ......</p>
    }
    if (!user) {
        // Redirect to admin login if the user is trying to access admin routes
        if (location.pathname.startsWith("/admin")) {
            return <Navigate to="/admin/login" replace />;
        }
        return <Navigate to="/" replace />;
    }

    return children;
}

export default Protected;