import axios from "axios";

const axiosPublic = axios.create({
  baseURL: import.meta.env.MODE === 'development'? 'http://localhost:5000' : import.meta.env.VITE_API_BASE_URL
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
