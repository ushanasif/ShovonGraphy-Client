import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); 
    const axios = useAxiosPublic();


    const adminLogout = async() => {
        try {
            
            const response = await axios("/api/admin/logout", {withCredentials: true});

            if(response){
                await signOut(auth);
                setUser(null);
                toast.success(response.data.message);
            }else{
                toast.error("Logout failed.Try again.")
            }
        } catch (error) {
            console.log(error.message);
            toast.error("Logout failed.Try again");
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setLoading(true);

            if (!currentUser) {
                setUser(null);
                setLoading(false);
                return;
            }

            try {
                const response = await axios.get("/api/admin/getAdmin", { withCredentials: true });

                if (response.data.success) {
                    setUser(currentUser); // Only set user if they are an admin
                } else {
                    console.log("Admin not found");
                    setUser(null);
                }
            } catch (error) {
                console.error("Error fetching admin:", error.message);
                setUser(null);
            } finally {
                setLoading(false);
            }
        });

        return () => unsubscribe(); // Cleanup the Firebase auth listener
    }, [axios]); // Only re-run when axios changes (which it shouldn't often)

    return (
        <AuthContext.Provider value={{ user, setUser, loading,  adminLogout}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
