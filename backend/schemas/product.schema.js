import { z } from "zod";

export const createProductSchema = z.object({
  title: z
    .string({
      required_error: "El título es requerido",
      invalid_type_error: "El título debe ser un texto",
    })
    .min(1)
    .max(255),
  description: z
    .string({
      required_error: "La descripción es requerida",
      invalid_type_error: "La descripcion debe ser un texto",
    })
    .min(1)
    .max(255)
    .optional(),
});

export const updateProductSchema = z.object({
  title: z
    .string({
      required_error: "El título es requerido",
      invalid_type_error: "El título debe ser un texto",
    })
    .min(1)
    .max(255)
    .optional(),
  description: z
    .string({
      required_error: "La descripción es requerida",
      invalid_type_error: "La descripcion debe ser un texto",
    })
    .min(1)
    .max(255)
    .optional(),
});
