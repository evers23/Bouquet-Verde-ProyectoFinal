import { Router } from "express"; // Usa express.Router() en lugar de express-promise-router
import {
  signin,
  signout,
  signup,
  profile,
} from "../controllers/auth.controller.js";
import { isAuth } from "../middlewares/auth.middleware.js";
import { validateSchema } from "../middlewares/validate.middleware.js";
import { signupSchema, signinSchema } from "../schemas/auth.schema.js";

const router = Router();

// Manejo de autenticación
router.post("/signin", validateSchema(signinSchema), signin);
router.post("/signup", validateSchema(signupSchema), signup);
router.post("/signout", signout);

// Ruta protegida
router.get("/profile", isAuth, profile);

// Middleware para manejar rutas no encontradas
router.use((req, res) => {
  res.status(404).json({ message: "Ruta no encontrada" });
});

export default router;

