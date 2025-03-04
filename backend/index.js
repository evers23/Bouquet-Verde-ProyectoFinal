import dotenv from "dotenv"; // Cargar variables de entorno
dotenv.config(); // Debe estar en la primera línea antes de importar otros módulos

import app from "./app.js";
import { PORT } from "./database/config.js";

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
}).on("error", (err) => {
  console.error("❌ Error al iniciar el servidor:", err.message);
});

