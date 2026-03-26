import {
  AlertCircle,
  CreditCard,
  Eye,
  EyeOff,
  FileText,
  Lock,
  User,
} from "lucide-react";

import { useState } from "react";
import { registroUsuario } from "../../api/UserApi";

export default function RegistroForm({ onSuccess }) {
  // 👁️ Mostrar / ocultar contraseña
  const [showPassword, setShowPassword] = useState(false);

  // ❌ Error general (mensaje global)
  const [error, setError] = useState("");

  // ⚠️ Errores por campo (backend)
  const [fieldErrors, setFieldErrors] = useState({});

  // 📦 Estado principal del formulario
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    documento: {
      tipo: "",
      numero: "",
    },
    direccion: {
      calle: "",
      ciudad: "",
      pais: "",
      codigoPostal: "",
    },
    email: "",
    usuario: "",
    password: "",
    roles: ["ROLE_Cliente"],
  });

  // 📄 Tipos de documento
  const documentTypes = [
    { value: "", label: "Seleccione..." },
    { value: "CC", label: "Cédula de Ciudadanía" },
    { value: "CE", label: "Cédula de Extranjería" },
    { value: "PA", label: "Pasaporte" },
    { value: "TI", label: "Tarjeta de Identidad" },
  ];

  // 👤 Roles disponibles
  const availableRoles = [
    { value: "ROLE_Cliente", label: "Cliente" },
    { value: "ROLE_Admin", label: "Administrador" },
  ];

  // 🚀 ENVÍO DEL FORMULARIO
  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🔄 Limpiar errores anteriores
    setError("");
    setFieldErrors({});

    try {
      // 📡 Llamado a la API
      await registroUsuario(formData);

      // ✅ Si todo sale bien
      onSuccess();
    } catch (err) {
      const message =
        err?.message?.trim() || "No se pudo completar el registro.";

      // ⚠️ Si hay errores por campo
      if (err?.errors) {
        setFieldErrors(err.errors);
        setError(""); // evitar duplicar mensaje
      } else {
        setError(message);
      }
    }
  };

  // 🔁 Manejo de roles (checkbox múltiple)
  const handleRoleChange = (role) => {
    const currentRoles = formData.roles;

    if (currentRoles.includes(role)) {
      // ❌ Quitar rol
      setFormData({
        ...formData,
        roles: currentRoles.filter((r) => r !== role),
      });
    } else {
      // ✅ Agregar rol
      setFormData({
        ...formData,
        roles: [...currentRoles, role],
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-sm p-8"
    >
      {/* ❌ ERROR GLOBAL */}
      {error && (
        <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-red-600" />
          <p className="text-sm text-red-800">{error}</p>
        </div>
      )}

      <div className="space-y-6">
        {/* 🧍 INFORMACIÓN PERSONAL */}
        <div>
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <User className="w-5 h-5 text-[#21D196]" />
            Información Personal
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Nombre */}
            <div>
              <input
                type="text"
                value={formData.nombre}
                onChange={(e) =>
                  setFormData({ ...formData, nombre: e.target.value })
                }
                className="w-full px-4 py-3 border rounded-lg"
                placeholder="Nombres"
              />
              {fieldErrors.nombre && (
                <p className="text-red-500 text-sm mt-1">
                  {fieldErrors.nombre}
                </p>
              )}
            </div>

            {/* Apellido */}
            <div>
              <input
                type="text"
                value={formData.apellido}
                onChange={(e) =>
                  setFormData({ ...formData, apellido: e.target.value })
                }
                className="w-full px-4 py-3 border rounded-lg"
                placeholder="Apellidos"
              />
              {fieldErrors.apellido && (
                <p className="text-red-500 text-sm mt-1">
                  {fieldErrors.apellido}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* 🪪 DOCUMENTO */}
        <div>
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-[#21D196]" />
            Documento
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            <select
              value={formData.documento.tipo}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  documento: {
                    ...formData.documento,
                    tipo: e.target.value,
                  },
                })
              }
              className="px-4 py-3 border rounded-lg"
            >
              {documentTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>

            <input
              type="text"
              value={formData.documento.numero}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  documento: {
                    ...formData.documento,
                    numero: e.target.value,
                  },
                })
              }
              className="px-4 py-3 border rounded-lg"
              placeholder="# Documento"
            />
          </div>
        </div>

        {/* 🔐 CREDENCIALES */}
        <div>
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <Lock className="w-5 h-5 text-[#21D196]" />
            Credenciales
          </h3>

          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full px-4 py-3 border rounded-lg"
            placeholder="email@dominio.com"
          />

          <input
            type="text"
            value={formData.usuario}
            onChange={(e) =>
              setFormData({ ...formData, usuario: e.target.value })
            }
            className="w-full mt-4 px-4 py-3 border rounded-lg"
            placeholder="Usuario"
          />

          {/* Password */}
          <div className="relative mt-4">
            <input
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className="w-full px-4 py-3 border rounded-lg"
              placeholder="********"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3"
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>
        </div>

        {/* 🎭 ROLES */}
        <div>
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#21D196]" />
            Tipo de Cuenta
          </h3>

          {availableRoles.map((role) => (
            <label key={role.value} className="flex gap-3">
              <input
                type="checkbox"
                checked={formData.roles.includes(role.value)}
                onChange={() => handleRoleChange(role.value)}
              />
              {role.label}
            </label>
          ))}
        </div>

        {/* 🚀 BOTÓN */}
        <button
          type="submit"
          className="w-full py-3 text-white rounded-lg bg-[#21D196]"
        >
          Crear Cuenta
        </button>
      </div>
    </form>
  );
}
