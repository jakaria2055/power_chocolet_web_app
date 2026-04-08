import axios from "axios";

// Create a reusable Axios instance for API requests
export const axiosInstance = axios.create({
  baseURL: "https://apitest.thewarriors.team/api",
  headers: {
    Accept: "application/json",
  },
});

// Attach authentication token to every outgoing request
axiosInstance.interceptors.request.use((config) => {
  // Get token from localStorage
  const token = localStorage.getItem("token");

  // Add Authorization header if token exists
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  // Return updated request config
  return config;
});