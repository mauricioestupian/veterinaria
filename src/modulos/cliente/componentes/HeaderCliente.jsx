import { Home, LogOut } from "lucide-react";
import { useNavigate } from "react-router";

export default function HeaderCliente({ user, onLogout }) {
  const navigate = useNavigate();
  console.log("Usuario en HeaderCliente:", user);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-[#21D196] rounded-full flex items-center justify-center text-white">
            🐾
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">VetCare</h1>
            <p className="text-sm text-gray-600">Portal del Cliente</p>
          </div>
        </div>

        {/* Acciones */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-gray-700 hover:text-[#21D196]"
          >
            <Home className="w-5 h-5" />
            Inicio
          </button>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="font-medium text-gray-900">
                {user?.nombreCompleto}
              </p>
              <p className="text-sm text-gray-600">{user?.email}</p>
            </div>

            <button
              onClick={onLogout}
              className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg"
              title="Cerrar sesión"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
