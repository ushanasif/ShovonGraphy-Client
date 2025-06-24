import axios from "axios";
import { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../contextApi/AuthContextProvider";

const useAxiosSecure = () => {
  const { getAccessToken, setAccessToken, refreshAccessToken, handleLogout } = useContext(AuthContext);
  const axiosSecureRef = useRef(null);

  if (!axiosSecureRef.current) {
    axiosSecureRef.current = axios.create({
      baseURL: import.meta.env.VITE_BACKEND_URL,
      withCredentials: true,
    });
  }

  const axiosSecure = axiosSecureRef.current;

  useEffect(() => {
    console.log("🔁 Interceptors registered");

    const requestInterceptor = axiosSecure.interceptors.request.use(
      (config) => {
        const token = getAccessToken();
        console.log("🔐 Sending token:", token);
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseInterceptor = axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;

          try {
            const newToken = await refreshAccessToken();
            setAccessToken(newToken);
            originalRequest.headers.Authorization = `Bearer ${newToken}`;
            return axiosSecure(originalRequest);
          } catch (err) {
            await handleLogout();
            return Promise.reject(err);
          }
        }

        return Promise.reject(error);
      }
    );

    return () => {
      axiosSecure.interceptors.request.eject(requestInterceptor);
      axiosSecure.interceptors.response.eject(responseInterceptor);
    };
  }, [getAccessToken, refreshAccessToken, handleLogout]);

  return axiosSecure;
};

export default useAxiosSecure;
