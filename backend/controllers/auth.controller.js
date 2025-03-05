import bcrypt from "bcrypt";
import { pool } from "../database/db.js";
import { createAccessToken } from "../libs/jwt.js";
import md5 from 'md5'

// Middleware de CORS que se puede usar en las rutas
const setCorsHeaders = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://bouquet-verde-proyectofinal.onrender.com");
  res.header("Access-Control-Allow-Credentials", "true");
  next(); // Pasa al siguiente middleware o a la ruta
};

export const signin = async (req, res) => {
  const { email, password } = req.body;
  const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);

  if (result.rowCount === 0) {
    return res.status(400).json({
      message: "El correo no está registrado",
    });
  }

  const validPassword = await bcrypt.compare(password, result.rows[0].password);

  if (!validPassword) {
    return res.status(400).json({
      message: "La contraseña es incorrecta",
    });
  }

  const token = await createAccessToken({ id: result.rows[0].id });

  // Establecer la cookie con el token
  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: 24 * 60 * 60 * 1000,
  });

  // Respuesta al frontend
  return res.json(result.rows[0]);
};

export const signup = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const gravatar = `https://www.gravatar.com/avatar/${md5(email)}?d=wavatar`;

    const result = await pool.query(
      "INSERT INTO users(name, email, password, gravatar) VALUES($1, $2, $3, $4) RETURNING *",
      [name, email, hashedPassword, gravatar]
    );

    const token = await createAccessToken({ id: result.rows[0].id });

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 24 * 60 * 60 * 1000,
    });

    return res.json(result.rows[0]);
  } catch (error) {
    if (error.code === "23505") {
      return res.status(400).json({
        message: "El email ya está registrado o_O",
      });
    }
    next(error);
  }
};
