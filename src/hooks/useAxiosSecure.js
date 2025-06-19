import axios from 'axios';
import { getAccessToken, setAccessToken } from '../contextApi/AuthContextProvider';


const apiSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

// REQUEST INTERCEPTOR
apiSecure.interceptors.request.use(
  (config) => {
    const accessToken = getAccessToken();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// RESPONSE INTERCEPTOR FOR TOKEN REFRESH
let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

apiSecure.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    // Only try refresh once
    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({
            resolve: (token) => {
              originalRequest.headers['Authorization'] = `Bearer ${token}`;
              resolve(apiSecure(originalRequest));
            },
            reject: (err) => reject(err),
          });
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const res = await apiSecure.post(
          '/api/admin/refresh-token'
        );
        console.log(res.data);
        const newAccessToken = res.data.accessToken;
        setAccessToken(newAccessToken);

        processQueue(null, newAccessToken);
        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
        return apiSecure(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError, null);
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default apiSecure;
