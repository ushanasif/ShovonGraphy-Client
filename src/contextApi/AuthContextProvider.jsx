import { createContext, useEffect, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { toast } from "react-hot-toast";

export const AuthContext = createContext(null);

let accessToken = null;

export const setAccessToken = (token) => {
  accessToken = token;
};

export const getAccessToken = () => {
  return accessToken;
};

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const axios = useAxiosPublic();

  const handleLogin = async (data) => {
    try {
      const response = await axios.post("/api/admin/login", data, {
        withCredentials: true,
      });
      if (response?.status === 200) {
        setAccessToken(response?.data?.accessToken);
        setIsLoggedIn(true);
        setUser(response?.data?.admin);
        return true;
      }
    } catch (error) {
      console.log(error.response);
      return false;
    }
  };

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "/api/admin/logout",
        {},
        {
          headers: { Authorization: `Bearer ${accessToken}` },
          withCredentials: true,
        }
      );
      if (response?.status === 200) {
        setAccessToken("");
        setUser(null);
        return true;
      }
    } catch (error) {
      console.log(error.message);
      return false;
    }
  };

  const refreshAccessToken = async () => {
    try {
      const response = await axios("/api/admin/refresh-token", {
        withCredentials: true,
      });
      if (response?.status === 200) {
        setAccessToken(response?.data?.accessToken);
      }
    } catch (error) {
      if (error.response.status === 401) {
        await handleLogout();
      }
      return null;
    }
  };

  const fetchAdminDetails = async () => {
    try {
      const response = await axios("/api/admin/getAdmin", {
        headers: { Authorization: `Bearer ${accessToken}` },
        withCredentials: true,
      });
      setUser(response?.data?.payload);
    } catch (error) {
        return null;
    }
  };

 useEffect(() => {
    const initializeAuth = async () => {
      try {
        await refreshAccessToken();
      } catch (error) {
          return null;
      }
    };
    initializeAuth();
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      fetchAdminDetails();
    }
  }, [isLoggedIn]);

  return (
    <AuthContext.Provider
      value={{
        handleLogin,
        handleLogout,
        user,
        fetchAdminDetails,
        setUser,
        getAccessToken,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
