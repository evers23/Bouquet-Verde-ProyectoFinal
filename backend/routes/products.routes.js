import Router from "express-promise-router";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
  updateProduct,
} from "../controllers/products.controller.js";
import { isAuth } from "../middlewares/auth.middleware.js";
import { validateSchema } from "../middlewares/validate.middleware.js";
import { createProductSchema, updateProductSchema } from "../schemas/product.schema.js";

const router = Router();

// Rutas de productos con prefijo /api
router.get("/products", getAllProducts); // Obtener todos los productos

router.get("/products/:id", getProduct); // Obtener un producto específico por ID

router.post("/products", isAuth, validateSchema(createProductSchema), createProduct); // Crear un nuevo producto, con validación y autenticación

router.put("/products/:id", isAuth, validateSchema(updateProductSchema), updateProduct); // Actualizar un producto, con validación y autenticación

router.delete("/products/:id", isAuth, deleteProduct); // Eliminar un producto, con autenticación

export default router;

