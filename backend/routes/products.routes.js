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

router.get("/products", getAllProducts);

router.get("/products/:id", getProduct);

router.post("/products", isAuth, validateSchema(createProductSchema), createProduct);

router.put("/products/:id", isAuth, validateSchema(updateProductSchema), updateProduct);

router.delete("/products/:id", isAuth, deleteProduct);

export default router;
