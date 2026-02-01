import axios from "axios";
import { ENV } from "@/config/global-config";

const http = axios.create({
  baseURL: ENV.API_BASE_URL + ENV.API_VERSION,
  timeout: ENV.API_TIMEOUT,
  headers: {
    "X-App-Key":
      "akE7CQAlbmlMFait7tBdbzDOJQs4jh6qllkzp3wll968WRMCykl8CQDZ0j43rRRO",
    Accept: "application/json",
  },
});

/* Request interceptor */
http.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");

  // Skip token for public APIs
  if (token && !config.url?.startsWith("/front-end-path")) {
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
