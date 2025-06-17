import { createContext, useEffect, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import {toast} from 'react-hot-toast';

export const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
    const [accessToken, setAccessToken] = useState('');
    console.log('accesstoken', accessToken);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false); 
    const axios = useAxiosPublic();

    const handleLogin = async(data) => {
        try {
            const response = await axios.post('/api/admin/login', data, {withCredentials: true});
            if(response?.status === 200){
                setAccessToken(response?.status?.accessToken);
                setUser(response?.data?.admin)
                return true;
            }
        } catch (error) {
            console.log(error.response);
            return false
        }
    }

    const handleLogout = async() => {
        try {
            const response = await axios.post('/api/admin/logout', {}, {headers: {Authorization: `Bearer ${accessToken}`}, withCredentials: true});
            if(response?.status === 200){
                setAccessToken('');
                setUser(null);
                return true;
            }
        } catch (error) {
            console.log(error.message);
            return false;
        }
    }


    const refreshAccessToken = async() => {
        try {
            const response = await axios('/api/admin/refresh-token', {withCredentials: true});
            if(response?.status === 200){
                setAccessToken(response?.data?.accessToken);
            }
        } catch (error) {
            console.log(error.message);
            if(error.response){
                if(error.response?.data?.status === 401){
                    toast.error('Session expired. Please sign in...');
                }
            }
        }
    };

    const fetchAdminDetails = async() => {
        try {
            const response = await axios('/api/admin/getAdmin', {headers: {Authorization: `Bearer ${accessToken}`}, withCredentials: true});
            if(response){
                setUser(response?.data?.payload);
            }else{
                console.log(response?.data?.message);
            }
        } catch (error) {
            if (error.response && error.response?.status === 401) {
                setUser(null);
            }
            console.log(error.message);
        }
    };
    
    useEffect(() => {
        refreshAccessToken();
    }, []);

    useEffect(()=>{
        if(accessToken){
            fetchAdminDetails();
        }
    }, [accessToken]);

    return (
        <AuthContext.Provider value={{handleLogin, handleLogout, user, fetchAdminDetails, setUser, accessToken, loading}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
