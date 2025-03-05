// products.controller.js
import { pool } from "../database/db.js";

// Middleware de CORS para cada solicitud de producto
const setCorsHeaders = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://bouquet-verde-proyectofinal.onrender.com");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next(); // Pasa al siguiente middleware o ruta
};

export const getAllProducts = async (req, res, next) => {
  // Asegurarte de que los encabezados CORS estén configurados correctamente antes de responder
  res.header("Access-Control-Allow-Origin", "https://bouquet-verde-proyectofinal.onrender.com");
  res.header("Access-Control-Allow-Credentials", "true");
  
  try {
    const result = await pool.query("SELECT * FROM product;");
    return res.json(result.rows);
  } catch (err) {
    return res.status(500).json({
      message: "Hubo un error al obtener los productos",
      error: err.message,
    });
  }
};

export const getProduct = async (req, res) => {
  // Asegurarte de que los encabezados CORS estén configurados correctamente antes de responder
  res.header("Access-Control-Allow-Origin", "https://bouquet-verde-proyectofinal.onrender.com");
  res.header("Access-Control-Allow-Credentials", "true");

  try {
    const result = await pool.query("SELECT * FROM product WHERE id = $1", [req.params.id]);
    if (result.rowCount === 0) {
      return res.status(404).json({
        message: "No existe un producto con ese id",
      });
    }
    return res.json(result.rows[0]);
  } catch (err) {
    return res.status(500).json({
      message: "Hubo un error al obtener el producto",
      error: err.message,
    });
  }
};

export const createProduct = async (req, res) => {
  // Asegurarte de que los encabezados CORS estén configurados correctamente antes de responder
  res.header("Access-Control-Allow-Origin", "https://bouquet-verde-proyectofinal.onrender.com");
  res.header("Access-Control-Allow-Credentials", "true");

  const { title, image_url, description, price } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO product (title, image_url, description, price, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [title, image_url, description, price, req.userId]
    );
    return res.json(result.rows[0]);
  } catch (err) {
    return res.status(500).json({
      message: "Hubo un error al crear el producto",
      error: err.message,
    });
  }
};

export const updateProduct = async (req, res) => {
  // Asegurarte de que los encabezados CORS estén configurados correctamente antes de responder
  res.header("Access-Control-Allow-Origin", "https://bouquet-verde-proyectofinal.onrender.com");
  res.header("Access-Control-Allow-Credentials", "true");

  const id = req.params.id;
  const { title, description, image_url, price } = req.body;

  try {
    const result = await pool.query(
      "UPDATE product SET title = $1, image_url = $2, description = $3, price = $4 WHERE id = $5 RETURNING *",
      [title, description, image_url, price, id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({
        message: "No existe un producto con ese id",
      });
    }

    return res.json(result.rows[0]);
  } catch (err) {
    return res.status(500).json({
      message: "Hubo un error al actualizar el producto",
      error: err.message,
    });
  }
};

export const deleteProduct = async (req, res) => {
  // Asegurarte de que los encabezados CORS estén configurados correctamente antes de responder
  res.header("Access-Control-Allow-Origin", "https://bouquet-verde-proyectofinal.onrender.com");
  res.header("Access-Control-Allow-Credentials", "true");

  try {
    const result = await pool.query("DELETE FROM product WHERE id = $1", [req.params.id]);

    if (result.rowCount === 0) {
      return res.status(404).json({
        message: "No existe un producto con ese id",
      });
    }

    return res.sendStatus(204); // 204 No Content
  } catch (err) {
    return res.status(500).json({
      message: "Hubo un error al eliminar el producto",
      error: err.message,
    });
  }
};
