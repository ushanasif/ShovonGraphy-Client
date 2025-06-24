import { createContext, useEffect, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { toast } from "react-hot-toast";

export const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
  const [accessTokenState, setAccessTokenState] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const axios = useAxiosPublic();

  const setAccessToken = (token) => {
    setAccessTokenState(token);
  };

  const getAccessToken = () => {
    return accessTokenState;
  };

  const handleLogin = async (data) => {
    try {
      const response = await axios.post("/api/admin/login", data, {
        withCredentials: true,
      });

      if (response?.status === 200) {
        const token = response.data.accessToken;
        setAccessToken(token);
        setIsLoggedIn(true);
        setUser(response?.data?.admin);
        return true;
      }
    } catch (error) {
      console.log(error?.response?.data?.message || "Login failed");
      return false;
    }
  };

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "/api/admin/logout",
        {},
        {
          headers: { Authorization: `Bearer ${accessTokenState}` },
          withCredentials: true,
        }
      );

      if (response?.status === 200) {
        setAccessToken("");
        setUser(null);
        setIsLoggedIn(false);
        return true;
      }
    } catch (error) {
      console.log(error.message || "Logout failed");
      return false;
    }
  };

  const refreshAccessToken = async () => {
    try {
      const response = await axios.get("/api/admin/refresh-token", {
        withCredentials: true,
      });

      if (response?.status === 200) {
        const newToken = response.data.accessToken;
        setAccessToken(newToken);
        setIsLoggedIn(true);
        return newToken;
      }
    } catch (error) {
      console.log("Refresh token failed:", error?.message);
      setAccessToken(null);
      setIsLoggedIn(false);
      return null;
    }
  };

  const fetchAdminDetails = async () => {
    try {
      const response = await axios("/api/admin/getAdmin", {
        headers: { Authorization: `Bearer ${accessTokenState}` },
        withCredentials: true,
      });

      setUser(response?.data?.payload);
    } catch (error) {
      console.log("Fetching admin details failed");
      return null;
    }
  };

  useEffect(() => {
    const initializeAuth = async () => {
      await refreshAccessToken();
      setLoading(false);
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
        setAccessToken,
        getAccessToken,
        isLoggedIn,
        loading,
        refreshAccessToken
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
