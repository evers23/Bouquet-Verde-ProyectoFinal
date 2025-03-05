import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

import productRoutes from "./routes/products.routes.js";
import authRoutes from "./routes/auth.routes.js";
import { ORIGIN } from "./database/config.js";
import { pool } from "./database/db.js";

//const app = express();

// Middlewares
//app.use(
  //cors({
    //origin: [ORIGIN],
 //  credentials: true, // Habilita el uso de cookies en el frontend
 // })
//);

const corsOptions = {
  origin: 'https://bouquet-verde-proyectofinal.onrender.com',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));

app.options('*', cors(corsOptions));
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get("/", (req, res) => res.json({ message: " Bienvenido a mi API" }));
app.get("/api/ping", async (req, res) => {
  const result = await pool.query("SELECT NOW()");
  return res.json(result.rows[0]);
});
app.use("/api", productRoutes);
app.use("/api", authRoutes);

// Error Hander
app.use((err, req, res, next) => {
  console.log("err",err)
  res.status(500).json({
    status: "error",
    message: err.message,
  });
});

app.post("/api/signin", (req, res) => {
  res.header("Access-Control-Allow-Origin", "https://bouquet-verde-proyectofinal.onrender.com");
  res.header("Access-Control-Allow-Credentials", "true");
  res.json({ message: "Inicio de sesión exitoso" });
  });

export default app;


