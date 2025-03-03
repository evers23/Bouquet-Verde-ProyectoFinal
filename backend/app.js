import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv"; // Cargar variables de entorno

import productRoutes from "./routes/products.routes.js";
import authRoutes from "./routes/auth.routes.js";
import { ORIGIN } from "./database/config.js";
import { pool } from "./database/db.js";

// Cargar las variables de entorno
dotenv.config();

const app = express();

// Middlewares
app.use(
  cors({
    origin: (origin, callback) => {
      // Permitir cualquier origen si no hay origen (común en el backend)
      if (!origin || ORIGIN.indexOf(origin) !== -1) {
        return callback(null, true);
      }
      return callback(new Error('CORS not allowed by this server'), false);
    },
    credentials: true,  // Permitir las cookies si se necesitan
  })
);
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get("/", (req, res) => res.json({ message: "Bienvenido a mi API" }));
app.get("/api/ping", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()"); // Verifica la conexión a la base de datos
    return res.json(result.rows[0]);
  } catch (err) {
    console.error("Error al consultar la base de datos:", err);
    return res.status(500).json({ message: "Error al conectar con la base de datos" });
  }
});

app.use("/api", productRoutes); // Definir rutas de productos
app.use("/api", authRoutes); // Definir rutas de autenticación

// Error Handler
app.use((err, req, res, next) => {
  console.error("Error interno del servidor:", err);
  res.status(500).json({
    status: "error",
    message: err.message || "Error interno del servidor",
  });
});

// Configurar el puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
