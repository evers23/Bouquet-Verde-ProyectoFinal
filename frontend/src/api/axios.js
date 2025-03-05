import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND || "http://localhost:3000/api";

const client = axios.create({
  baseURL,
  withCredentials: true,  // Permite enviar cookies
});

export default client;

