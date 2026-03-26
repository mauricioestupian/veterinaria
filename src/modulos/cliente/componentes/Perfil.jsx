import { Mail, MapPin, Phone } from "lucide-react";

export default function Perfil({ user }) {
  // 🔥 luego vendrá de backend
  const userPets = [];
  const userAppointments = [];

  return (
    <div>
      <h3 className="text-xl font-bold text-gray-900 mb-6">Mi Perfil</h3>

      <div className="max-w-2xl">
        <div className="bg-white border rounded-xl p-6">
          {/* Header usuario */}
          <div className="flex items-center gap-3 pb-4 border-b">
            <div className="w-16 h-16 bg-[#21D196] rounded-full flex items-center justify-center text-white text-2xl">
              {user?.name?.charAt(0)}
            </div>

            <div>
              <h4 className="text-xl font-bold text-gray-900">{user?.name}</h4>
              <p className="text-gray-600">Cliente VetCare</p>
            </div>
          </div>

          {/* Info */}
          <div className="grid gap-4 mt-4">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-gray-900">{user?.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Teléfono</p>
                <p className="text-gray-900">+34 611 111 111</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Dirección</p>
                <p className="text-gray-900">Calle Principal 123, Madrid</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="pt-4 mt-4 border-t">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-2xl font-bold text-[#21D196]">
                  {userPets.length}
                </p>
                <p className="text-sm text-gray-600">Mascotas</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-2xl font-bold text-[#21D196]">
                  {userAppointments.length}
                </p>
                <p className="text-sm text-gray-600">Citas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
