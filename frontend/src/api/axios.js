import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND || "http://localhost:3000/api";

const client = axios.create({
  baseURL,
  withCredentials: true,
});

export default client;

client.post('/signup', {
  // Datos de tu solicitud
}).then(response => {
  console.log(response.data);
}).catch(error => {
  console.error(error);
});