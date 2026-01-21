import axios from "axios";
import { ENV } from "@/config/global-config";

const http = axios.create({
  baseURL: ENV.API_BASE_URL + ENV.API_VERSION,
  timeout: ENV.API_TIMEOUT,
  headers: {
    Accept: "application/json",
  },
});

/* Request interceptor */
http.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

/* Response interceptor */
http.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response?.status === 401) {
      // logout / refresh token
    }
    return Promise.reject(error);
  },
);

export default http;
