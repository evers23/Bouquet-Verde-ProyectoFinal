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

// CORS middleware
app.use(
  cors({
    origin: ORIGIN, // Orígenes permitidos (pueden ser múltiples en el archivo config.js)
    methods: ["GET", "POST", "PUT", "DELETE"], // Métodos permitidos
    allowedHeaders:[
      'Content-Type',
      'Authorization',
      'Access-Control-Allow-Origin',
  })
);

app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get("/", (req, res) => res.json({ message: "Bienvenido a mi API" }));
app.get("/api/ping", async (req, res) => {
  const result = await pool.query("SELECT NOW()");
  return res.json(result.rows[0]);
});
app.use("/api", productRoutes);
app.use("/api", authRoutes);

// Error handler
app.use((err, req, res, next) => {
  res.status(500).json({
    status: "error",
    message: err.message,
  });
});

export default app;
