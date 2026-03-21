import {
  AlertCircle,
  CreditCard,
  Eye,
  EyeOff,
  FileText,
  Lock,
  MapPin,
  User
} from "lucide-react";

import { useState } from "react";
import { registroUsuario } from "../api/UserApi";
import { RegisterData } from "../types/user";

interface Props {
  onSuccess: () => void;
}

export default function RegistroForm({ onSuccess }: Props) {

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<any>({});

  const [formData, setFormData] = useState<RegisterData>({
    nombre: "",
    apellido: "",
    documento: {
      tipo: "",
      numero: ""
    },
    direccion: {
      calle: "",
      ciudad: "",
      pais: "",
      codigoPostal: ""
    },
    email: "",
    usuario: "",
    password: "",
    roles: ["ROLE_Cliente"]
  });

  const documentTypes = [
    { value: "", label: "Seleccione..." },
    { value: "CC", label: "Cédula de Ciudadanía" },
    { value: "CE", label: "Cédula de Extranjería" },
    { value: "PA", label: "Pasaporte" },
    { value: "TI", label: "Tarjeta de Identidad" }
  ];

  const availableRoles = [
    { value: "ROLE_Cliente", label: "Cliente" },
    { value: "ROLE_Administrador", label: "Administrador" }
  ];

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();
    
    setError("");
    setFieldErrors({}); // limpiar errores anteriore

    try {

      await registroUsuario(formData);

      onSuccess();

    } catch (err: any) {
      const message =
    err?.message?.trim() ||
    "No se pudo completar el registro.";

  if (err?.errors) {
    setFieldErrors(err.errors);
    setError(""); // 👈 evita duplicar mensajes
  } else {
    setError(message);
  }
    }

  };

  const handleRoleChange = (role: string) => {

    const currentRoles = formData.roles;

    if (currentRoles.includes(role)) {

      setFormData({
        ...formData,
        roles: currentRoles.filter(r => r !== role)
      });

    } else {

      setFormData({
        ...formData,
        roles: [...currentRoles, role]
      });

    }

  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm p-8">

      {error && (
        <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-red-600" />
          <p className="text-sm text-red-800">{error}</p>
        </div>
      )}
  
      <div className="space-y-6">

        {/* Información Personal */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <User className="w-5 h-5 text-[#21D196]" />
            Información Personal
          </h3>

          <div className="grid md:grid-cols-2 gap-4">

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nombre *
              </label>

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
                <p className="text-sm text-red-500 mt-1">
                {fieldErrors.nombre}
                </p>
                )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Apellido *
              </label>

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
                <p className="text-sm text-red-500 mt-1">
                {fieldErrors.apellido}
                </p>
                )}
            </div>

          </div>
        </div>

        {/* Documento */}
        <div>

          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-[#21D196]" />
            Documento de Identidad
          </h3>

          <div className="grid md:grid-cols-2 gap-4">

            <select
              value={formData.documento.tipo}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  documento: {
                    ...formData.documento,
                    tipo: e.target.value
                  }
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
                    numero: e.target.value
                  }
                })
              }
              className="px-4 py-3 border rounded-lg"
              placeholder="# Documento"
            />

          </div>
        </div>

        {/* Dirección */}
        <div>

          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-[#21D196]" />
            Dirección
          </h3>

          <input
            type="text"
            value={formData.direccion.calle}
            onChange={(e) =>
              setFormData({
                ...formData,
                direccion: {
                  ...formData.direccion,
                  calle: e.target.value
                }
              })
            }
            className="w-full px-4 py-3 border rounded-lg"
            placeholder="Dirección"
          />

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <input
              type="text"
              value={formData.direccion.ciudad}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  direccion: {
                    ...formData.direccion,
                    ciudad: e.target.value
                  }
                })
              }
              className="w-full px-4 py-3 border rounded-lg"
              placeholder="Ciudad"
            />
            <input
              type="text"
              value={formData.direccion.pais}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  direccion: {
                    ...formData.direccion,
                    pais: e.target.value
                  }
                })
              }
              className="w-full px-4 py-3 border rounded-lg"
              placeholder="País"
            />
          </div>

          <input
            type="text"
            value={formData.direccion.codigoPostal}
            onChange={(e) =>
              setFormData({
                ...formData,
                direccion: {
                  ...formData.direccion,
                  codigoPostal: e.target.value
                }
              })
            }
            className="w-full mt-4 px-4 py-3 border rounded-lg"
            placeholder="Código postal"
          />

        </div>

        {/* Credenciales */}
        <div>

          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Lock className="w-5 h-5 text-[#21D196]" />
            Credenciales
          </h3>

          <div className="grid md:grid-cols-2 gap-4">

            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="px-4 py-3 border rounded-lg"
              placeholder="email@dominio.com"
            />

            <input
              type="text"
              value={formData.usuario}
              onChange={(e) =>
                setFormData({ ...formData, usuario: e.target.value })
              }
              className="px-4 py-3 border rounded-lg"
              placeholder="Usuario"
            />

          </div>

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

        {/* Roles */}
        <div>

          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#21D196]" />
            Tipo de Cuenta
          </h3>

          {availableRoles.map((role) => (

            <label key={role.value} className="flex items-center gap-3">

              <input
                type="checkbox"
                checked={formData.roles.includes(role.value)}
                onChange={() => handleRoleChange(role.value)}
              />

              {role.label}

            </label>

          ))}

        </div>

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