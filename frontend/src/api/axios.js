import axios from "axios";

// Si estás usando Vite, asegúrate de que la variable de entorno esté bien configurada
const baseURL = import.meta.env.VITE_BACKEND || "http://localhost:3000/api";

// Crear una instancia de axios con la base URL y habilitar las credenciales
const client = axios.create({
  baseURL,
  withCredentials: true, // Permite enviar cookies si las tienes configuradas en el backend
});

// Exportar el cliente para usarlo en otros archivos
export default client;

// Realizar la solicitud de signup
client.post('/signup', {
  // Datos que se enviarán en la solicitud
  username: "usuario",
  password: "contraseña",
}).then(response => {
  // Aquí puedes manejar la respuesta de forma efectiva
  console.log("Respuesta del servidor:", response.data);
}).catch(error => {
  // Aquí manejas el error si algo salió mal
  if (
