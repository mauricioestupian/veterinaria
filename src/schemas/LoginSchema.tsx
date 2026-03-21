// definimos el esquema de validación para el formulario de login usando zod
import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().min(3, "El usuario es obligatorio desde el front"),
  password: z.string().min(6, "La contraseña debe tener mínimo 8 caracteres")
});

export type LoginFormData = z.infer<typeof loginSchema>;