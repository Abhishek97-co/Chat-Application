import axios from "axios";

const getApiBaseUrl = () => {
  if (import.meta.env.VITE_API_URL) return import.meta.env.VITE_API_URL;
  if (import.meta.env.PROD) return `${window.location.origin}/api`;
  return "http://localhost:5001/api";
};

export const axiosInstance = axios.create({
  baseURL: getApiBaseUrl(),
  withCredentials: true,
});