import jwt from "jsonwebtoken";

export const isAuth = (req, res, next) => {
  console.log("Cookies recibidas:", req.cookies); // Depuración

  const token = req.cookies.token; // O usar Authorization si prefieres headers

  if (!token) {
    return res.status(401).json({ message: "No estás autorizado, token faltante" });
  }

  jwt.verify(token, "xyz123", (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Token inválido o expirado" });
    }

    req.userId = decoded.id;
    console.log("Token decodificado:", decoded);
    next();
  });
};
