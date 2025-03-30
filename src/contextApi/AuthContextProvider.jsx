import { createContext, useEffect, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); 
    const axios = useAxiosPublic();

    const fetchAdminDetails = async() => {
        try {
            const response = await axios('/api/admin/getAdmin', {withCredentials: true});
            if(response){
                setUser(response?.data?.payload);
                console.log(response.data);
            }
        } catch (error) {
            console.log(error.message);
        }
    } 

    useEffect(()=>{
        fetchAdminDetails();
    }, []);
// Only re-run when axios changes (which it shouldn't often)

    return (
        <AuthContext.Provider value={{ user, fetchAdminDetails, setUser, loading}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
