import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

import productRoutes from "./routes/products.routes.js";
import authRoutes from "./routes/auth.routes.js";
import { ORIGIN } from "./database/config.js"; // Asegúrate de que ORIGIN esté bien definido
import { pool } from "./database/db.js";

// Inicializar Express
const app = express();

// Configuración de CORS
const corsOptions = {
  origin: 'https://bouquet-verde-proyectofinal.onrender.com', // Origen permitido
  credentials: true, // Habilita el uso de cookies en el frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
};

// Uso de CORS con las opciones definidas
app.use(cors(corsOptions));

// Configurar los middlewares
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rutas
app.get("/", (req, res) => res.json({ message: "Bienvenido a mi API" }));
app.get("/api/ping", async (req, res) => {
  const result = await pool.query("SELECT NOW()");
  return res.json(result.rows[0]);
});
app.use("/api", productRoutes);
app.use("/api", authRoutes);

// Manejo de solicitudes OPTIONS
app.options("*", (req, res) => {
  res.header("Access-Control-Allow-Origin", "https://bouquet-verde-proyectofinal.onrender.com");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");
  res.sendStatus(204); // 204 No Content
});

// Manejo de errores
app.use((err, req, res, next) => {
  console.error("Error:", err);
  res.status(500).json({
    status: "error",
    message: err.message,
  });
});

export default app;



