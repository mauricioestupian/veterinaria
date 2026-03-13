import {
  AlertCircle,
  CheckCircle,
  CreditCard,
  Eye,
  EyeOff,
  FileText,
  Lock,
  Mail,
  MapPin,
  User,
  X
} from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router';

interface RegisterData {
  nombre: string;
  apellido: string;
  documento: {
    tipo: string;
    numero: string;
  };
  direccion: {
    calle: string;
    ciudad: string;
    pais: string;
    codigoPostal: string;
  };
  email: string;
  usuario: string;
  password: string;
  roles: string[];
}

export default function RegistroUser() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState<RegisterData>({
    nombre: '',
    apellido: '',
    documento: {
      tipo: 'CC',
      numero: ''
    },
    direccion: {
      calle: '',
      ciudad: '',
      pais: '',
      codigoPostal: ''
    },
    email: '',
    usuario: '',
    password: '',
    roles: ['Cliente']
  });

  const documentTypes = [
    { value: 'CC', label: 'Cédula de Ciudadanía' },
    { value: 'CE', label: 'Cédula de Extranjería' },
    { value: 'PA', label: 'Pasaporte' },
    { value: 'TI', label: 'Tarjeta de Identidad' },
  ];

  const availableRoles = [
    { value: 'Cliente', label: 'Cliente' },
    { value: 'Admin', label: 'Administrador' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validaciones
    if (!formData.nombre.trim()) {
      setError('El nombre es requerido');
      return;
    }
    if (!formData.apellido.trim()) {
      setError('El apellido es requerido');
      return;
    }
    if (!formData.documento.numero.trim()) {
      setError('El número de documento es requerido');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setError('Email inválido');
      return;
    }
    if (!formData.usuario.trim()) {
      setError('El nombre de usuario es requerido');
      return;
    }
    if (formData.password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      return;
    }
    if (formData.roles.length === 0) {
      setError('Debe seleccionar al menos un rol');
      return;
    }

    // Generar JSON
    const registrationData = {
      nombre: formData.nombre,
      apellido: formData.apellido,
      documento: {
        tipo: formData.documento.tipo,
        numero: formData.documento.numero
      },
      direccion: {
        calle: formData.direccion.calle,
        ciudad: formData.direccion.ciudad,
        pais: formData.direccion.pais,
        codigoPostal: formData.direccion.codigoPostal
      },
      email: formData.email,
      usuario: formData.usuario,
      password: formData.password,
      roles: formData.roles
    };

    // Mostrar JSON en consola
    console.log('Datos de registro:', JSON.stringify(registrationData, null, 2));

    // Mostrar mensaje de éxito
    setShowSuccess(true);
    
    // Redirigir al login después de 2 segundos
    setTimeout(() => {
      navigate('/login');
    }, 2000);
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

  if (showSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 text-center shadow-xl">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">¡Registro Exitoso!</h2>
          <p className="text-gray-600 mb-4">
            Tu cuenta ha sido creada correctamente.
          </p>
          <p className="text-sm text-gray-500">
            Redirigiendo al inicio de sesión...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      {/* Close button */}
      <button
        onClick={() => navigate('/login')}
        className="fixed top-4 right-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
        aria-label="Cerrar"
      >
        <X className="w-6 h-6 text-gray-600" />
      </button>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
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
            Crear Cuenta
          </h2>
          <p className="text-gray-600">
            Completa el formulario para registrarte en VetCare
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
            <p className="text-sm text-red-800">{error}</p>
          </div>
        )}

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm p-8">
          <div className="space-y-6">
            {/* Información Personal */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <User className="w-5 h-5 text-[#21D196]" />
                Información Personal
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre *
                  </label>
                  <input
                    id="nombre"
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#21D196] focus:border-transparent"
                    placeholder="Mauricio"
                  />
                </div>
                <div>
                  <label htmlFor="apellido" className="block text-sm font-medium text-gray-700 mb-2">
                    Apellido *
                  </label>
                  <input
                    id="apellido"
                    type="text"
                    required
                    value={formData.apellido}
                    onChange={(e) => setFormData({ ...formData, apellido: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#21D196] focus:border-transparent"
                    placeholder="Estupiñan"
                  />
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
                <div>
                  <label htmlFor="docTipo" className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de Documento *
                  </label>
                  <select
                    id="docTipo"
                    required
                    value={formData.documento.tipo}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      documento: { ...formData.documento, tipo: e.target.value }
                    })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#21D196] focus:border-transparent"
                  >
                    {documentTypes.map(type => (
                      <option key={type.value} value={type.value}>{type.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="docNumero" className="block text-sm font-medium text-gray-700 mb-2">
                    Número de Documento *
                  </label>
                  <input
                    id="docNumero"
                    type="text"
                    required
                    value={formData.documento.numero}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      documento: { ...formData.documento, numero: e.target.value }
                    })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#21D196] focus:border-transparent"
                    placeholder="7318214"
                  />
                </div>
              </div>
            </div>

            {/* Dirección */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#21D196]" />
                Dirección
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label htmlFor="calle" className="block text-sm font-medium text-gray-700 mb-2">
                    Calle / Dirección *
                  </label>
                  <input
                    id="calle"
                    type="text"
                    required
                    value={formData.direccion.calle}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      direccion: { ...formData.direccion, calle: e.target.value }
                    })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#21D196] focus:border-transparent"
                    placeholder="Calle 123"
                  />
                </div>
                <div>
                  <label htmlFor="ciudad" className="block text-sm font-medium text-gray-700 mb-2">
                    Ciudad *
                  </label>
                  <input
                    id="ciudad"
                    type="text"
                    required
                    value={formData.direccion.ciudad}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      direccion: { ...formData.direccion, ciudad: e.target.value }
                    })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#21D196] focus:border-transparent"
                    placeholder="Bogotá"
                  />
                </div>
                <div>
                  <label htmlFor="pais" className="block text-sm font-medium text-gray-700 mb-2">
                    País *
                  </label>
                  <input
                    id="pais"
                    type="text"
                    required
                    value={formData.direccion.pais}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      direccion: { ...formData.direccion, pais: e.target.value }
                    })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#21D196] focus:border-transparent"
                    placeholder="Colombia"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="codigoPostal" className="block text-sm font-medium text-gray-700 mb-2">
                    Código Postal *
                  </label>
                  <input
                    id="codigoPostal"
                    type="text"
                    required
                    value={formData.direccion.codigoPostal}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      direccion: { ...formData.direccion, codigoPostal: e.target.value }
                    })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#21D196] focus:border-transparent"
                    placeholder="00001111"
                  />
                </div>
              </div>
            </div>

            {/* Credenciales */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Lock className="w-5 h-5 text-[#21D196]" />
                Credenciales de Acceso
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#21D196] focus:border-transparent"
                      placeholder="juan@mail.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="usuario" className="block text-sm font-medium text-gray-700 mb-2">
                    Usuario *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="usuario"
                      type="text"
                      required
                      value={formData.usuario}
                      onChange={(e) => setFormData({ ...formData, usuario: e.target.value })}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#21D196] focus:border-transparent"
                      placeholder="juanperez"
                    />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Contraseña *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
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
                  <p className="mt-1 text-sm text-gray-500">
                    Mínimo 6 caracteres
                  </p>
                </div>
              </div>
            </div>

            {/* Roles */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#21D196]" />
                Tipo de Cuenta *
              </h3>
              <div className="space-y-2">
                {availableRoles.map(role => (
                  <label key={role.value} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.roles.includes(role.value)}
                      onChange={() => handleRoleChange(role.value)}
                      className="w-4 h-4 text-[#21D196] focus:ring-[#21D196] border-gray-300 rounded"
                    />
                    <div>
                      <p className="font-medium text-gray-900">{role.label}</p>
                      <p className="text-sm text-gray-600">
                        {role.value === 'Cliente' 
                          ? 'Acceso a gestión de mascotas y citas' 
                          : 'Acceso completo a panel de administración'}
                      </p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-white bg-[#21D196] hover:bg-[#1AB57F] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#21D196] transition-colors"
              >
                Crear Cuenta
              </button>
            </div>
          </div>
        </form>

        {/* Back to Login */}
        <p className="text-center text-sm text-gray-600 mt-6">
          ¿Ya tienes una cuenta?{' '}
          <button
            onClick={() => navigate('/login')}
            className="text-[#21D196] hover:text-[#1AB57F] font-medium"
          >
            Inicia sesión aquí
          </button>
        </p>
      </div>
    </div>
  );
}
