// definimos el esquema de validación para el formulario de login usando zod
import { z } from "zod";

export const loginSchema = z.object({
  identificador: z.string().min(3, "El usuario es obligatorio"),
  password: z.string().min(6, "La contraseña debe tener mínimo 6 caracteres"),
});

export type LoginFormData = z.infer<typeof loginSchema>;