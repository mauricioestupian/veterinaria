import { AlertCircle, Eye, EyeOff, Lock, Mail, X } from "lucide-react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { SmartImage } from "../componentes/iu/SmartImage";
import { useAuth } from "../context/AuthContext";
import { loginSchema } from "../schemas/loginschema";
import { loginUsuario } from "../services/authService";

export default function LoginPage() {
  // Hook de React Router para redireccionar entre páginas
  const navigate = useNavigate();

  // Obtenemos la función login desde el contexto global de autenticación
  // Esta función se encargará de guardar el token y los roles del usuario
  const { login, user } = useAuth();

  // Estado para mostrar u ocultar la contraseña en el input
  const [showPassword, setShowPassword] = useState(false);

  // Estado para mostrar errores generales (ej: credenciales incorrectas)
  const [error, setError] = useState("");

  // Configuración de React Hook Form + validación con Zod
  const {
    register, // conecta los inputs con el formulario
    handleSubmit, // maneja el envío del formulario
    formState: {
      errors, // errores de validación por campo
      isSubmitting, // estado mientras se envía el formulario
    },
  } = useForm({
    resolver: zodResolver(loginSchema), // valida usando el schema definido
  });

  // AUTO-REDIRECT (si ya está logueado)
  useEffect(() => {
    if (user) {
      if (user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/cliente");
      }
    }
  }, [user, navigate]);

  // Función que se ejecuta cuando el formulario es válido y se envía
  const onSubmit = async (data) => {
    // Limpiamos errores previos
    setError("");

    try {
      // 🔹 Adaptamos los datos del formulario al formato que espera el backend
      // El backend espera "usuario", pero el input se llama "identificador"
      const payload = {
        usuario: data.identificador,
        password: data.password,
      };

      // 🔹 Llamada al backend para autenticar al usuario
      const response = await loginUsuario(payload);

      // Guardamos la sesión (token + roles) en el contexto/global
      login(response);

      // Redirección inmediata (opcional pero mejora UX)
      //Funcion importante CON ?. (FORMA SEGURA)
      //Si roles existe → toma el [0]
      //Si roles NO existe → devuelve undefined
      //REVISAR "operadores modernos de JS para React"
      const rol = response.roles?.[0];

      // Redirección según el rol del usuario
      // Esto permite controlar acceso a diferentes áreas del sistema
      if (rol === "ROLE_Admini") {
        navigate("/admin"); // vista para administradores
      } else {
        navigate("/cliente"); // vista para clientes
      }
    } catch (err) {
      // Si ocurre un error (credenciales incorrectas o fallo del servidor)
      setError(err.message || "Error al iniciar sesión");
    }
  };

  // Evita mostrar login si ya hay sesión (UX PRO)
  if (user) return null;

  return (
    <div className="min-h-screen flex relative">
      {/* Botón cerrar */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100"
      >
        <X className="w-6 h-6 text-gray-600" />
      </button>

      {/* Formulario */}
      <div className="flex-1 flex items-center justify-center px-4 bg-white">
        <div className="w-full max-w-md space-y-8">
          {/* Header */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-14 h-14 bg-[#21D196] rounded-full flex items-center justify-center text-white">
                🐾
              </div>

              <div className="text-left">
                <h1 className="font-bold text-2xl text-gray-900">VetCare</h1>
                <p className="text-xs text-gray-600">Clínica Veterinaria</p>
              </div>
            </div>

            <h2 className="text-3xl text-gray-900 mb-2">Bienvenido</h2>

            <p className="text-gray-600">
              Ingresa tus credenciales para acceder al sistema
            </p>
          </div>

          {/* Error */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-600" />
              <p className="text-sm text-red-800">{error}</p>
            </div>
          )}

          {/* FORM */}
          <form
            onSubmit={handleSubmit(onSubmit, (errors) => {
              console.log("Errores formulario:", errors);
            })}
            className="space-y-6"
          >
            {/* Usuario o Email */}
            <div>
              <label className="block text-sm text-gray-700 mb-2">
                Usuario o Email
              </label>

              <div className="relative">
                <div className="absolute left-3 top-3">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>

                <input
                  type="text"
                  {...register("identificador")}
                  className="w-full pl-10 pr-3 py-3 border rounded-lg"
                  placeholder="usuario o correo"
                />
              </div>

              {errors.identificador && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.identificador.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm text-gray-700 mb-2">
                Contraseña
              </label>

              <div className="relative">
                <div className="absolute left-3 top-3">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>

                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password")}
                  className="w-full pl-10 pr-10 py-3 border rounded-lg"
                  placeholder="••••••••"
                />

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-[#21D196] focus:ring-[#21D196] border-gray-300 rounded"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block text-sm text-gray-700"
                    >
                      Recordarme
                    </label>
                  </div>

                  <div className="text-sm">
                    <a href="#" className="text-[#21D196] hover:text-[#1AB57F]">
                      ¿Olvidaste tu contraseña?
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3"
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>

              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 text-white bg-[#21D196] rounded-lg"
            >
              {isSubmitting ? "Ingresando..." : "Iniciar Sesión"}
            </button>
          </form>

          {/* Registro */}
          <p className="text-center text-sm text-gray-600">
            ¿No tienes cuenta?{" "}
            <button
              onClick={() => navigate("/registro")}
              className="text-[#21D196]"
            >
              Regístrate aquí
            </button>
          </p>
        </div>
      </div>

      {/* Imagen */}
      <div className="hidden lg:block lg:flex-1">
        <SmartImage
          src="https://images.unsplash.com/photo-1571063343491-7359c0d47aa1"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
