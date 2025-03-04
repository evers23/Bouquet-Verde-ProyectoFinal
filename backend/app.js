import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv"; // Cargar variables de entorno

import productRoutes from "./routes/products.routes.js";
import authRoutes from "./routes/auth.routes.js";
import { pool } from "./database/db.js";

// Cargar las variables de entorno
dotenv.config();

const app = express();

// Middleware de CORS
app.use(
  cors({
    origin: (origin, callback) => {
      const allowedOrigins = [
        "https://bouquet-verde-proyectofinal.onrender.com",
        "https://bouquet-verde-frontend.onrender.com"
      ];
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, origin);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rutas
app.get("/", (req, res) => res.json({ message: "Bienvenido a mi API" }));
app.get("/api/ping", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    return res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
});
app.use("/api", productRoutes);
app.use("/api", authRoutes);

// Manejador de errores
app.use((err, req, res, next) => {
  res.status(500).json({
    status: "error",
    message: err.message,
  });
});

export default app;


