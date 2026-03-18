import { AlertCircle, Eye, EyeOff, Lock, Mail, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { SmartImage } from "../componentes/SmartImage";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginFormData, loginSchema } from "../schemas/loginschema";

export default function LoginPage() {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {

    setError("");

    try {

      console.log("Login:", data);

      // Aquí conectarás la API después
      const success = true;

      if (success) {
        window.location.reload();
      } else {
        setError("Email o contraseña incorrectos");
      }

    } catch (err) {
      setError("Error al iniciar sesión");
    }

  };

  return (
    <div className="min-h-screen flex relative">

      {/* Close button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
        aria-label="Cerrar"
      >
        <X className="w-6 h-6 text-gray-600" />
      </button>

      {/* Left side - Login Form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-white">

        <div className="w-full max-w-md space-y-8">

          {/* Logo */}
          <div className="text-center">

            <div className="flex items-center justify-center gap-2 mb-6">

              <div className="w-14 h-14 bg-[#21D196] rounded-full flex items-center justify-center text-white">
                <span className="text-2xl">🐾</span>
              </div>

              <div className="text-left">
                <h1 className="font-bold text-2xl text-gray-900">VetCare</h1>
                <p className="text-xs text-gray-600">Clínica Veterinaria</p>
              </div>

            </div>

            <h2 className="text-3xl text-gray-900 mb-2">
              Bienvenido de nuevo
            </h2>

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
          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">

            <div className="space-y-4">

              {/* Email */}
              <div>

                <label
                  htmlFor="email"
                  className="block text-sm text-gray-700 mb-2"
                >
                  Usuario o Email
                </label>

                <div className="relative">

                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>

                  <input
                    id="email"
                    type="text"
                    {...register("email")}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#21D196] focus:border-transparent"
                    placeholder="usuario@ejemplo.com"
                  />

                </div>

                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}

              </div>

              {/* Password */}
              <div>

                <label
                  htmlFor="password"
                  className="block text-sm text-gray-700 mb-2"
                >
                  Contraseña
                </label>

                <div className="relative">

                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    {...register("password")}
                    className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#21D196] focus:border-transparent"
                    placeholder="••••••••"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    )}
                  </button>

                </div>

                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}

              </div>

            </div>

            {/* Remember + forgot */}
            <div className="flex items-center justify-between">

              <div className="flex items-center">

                <input
                  id="remember-me"
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

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-white bg-[#21D196] hover:bg-[#1AB57F] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#21D196] transition-colors"
            >
              {isSubmitting ? "Ingresando..." : "Iniciar Sesión"}
            </button>

          </form>

          {/* Register */}
          <p className="text-center text-sm text-gray-600">

            ¿No tienes una cuenta?{" "}

            <button
              onClick={() => navigate("/registro")}
              className="text-[#21D196] hover:text-[#1AB57F] font-medium"
            >
              Regístrate aquí
            </button>

          </p>

        </div>

      </div>

      {/* Right image */}
      <div className="hidden lg:block lg:flex-1 relative bg-gradient-to-br from-emerald-50 to-green-50">

        <div className="absolute inset-0 flex items-center justify-center p-12">

          <div className="max-w-lg">

            <div className="rounded-3xl overflow-hidden shadow-2xl mb-8">

              <SmartImage
                src="https://images.unsplash.com/photo-1571063343491-7359c0d47aa1"
                alt="Mascotas felices"
                className="w-full h-96 object-cover"
              />

            </div>

            <div className="text-center space-y-4">

              <h3 className="text-3xl text-gray-900">
                Cuidamos de tus{" "}
                <span className="text-[#21D196]">Mejores Amigos</span>
              </h3>

              <p className="text-lg text-gray-600">
                Accede al sistema de gestión de VetCare para administrar citas,
                historiales médicos y más.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}