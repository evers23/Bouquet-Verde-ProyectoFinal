import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND || "http://localhost:3000/api";

const client = axios.create({
  baseURL,
  withCredentials: true,
});

export default client;

// Función para autenticar al usuario
const signin = async () => {
  try {
    const response = await client.post('/signin', {
      email: "meverdiaz@gmail.com",  
      password: "123456"
    });

    const token = response.data.token; // Recibir el token en la respuesta

    // Guardar el token en el almacenamiento local o en una cookie
    localStorage.setItem("token", token);

    console.log("Autenticación exitosa:", token);
  } catch (error) {
    console.error("Error en la autenticación:", error.response ? error.response.data : error.message);
  }
};

signin(); // Llamar a la función para autenticar al usuario