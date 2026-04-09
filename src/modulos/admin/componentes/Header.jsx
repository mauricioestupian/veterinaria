import { Home, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function Header({ user, onLogout }) {
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#21D196] rounded-full flex items-center justify-center text-white">
              🐾
            </div>
            <div>
              <h1 className="text-xl font-bold">VetCare</h1>
              <p className="text-sm text-gray-600">Panel de Administración</p>
            </div>
          </div>

          {/* Usuario */}
          <div className="flex items-center gap-4">
            <button onClick={() => navigate("/")}>
              <Home className="w-5 h-5" />
            </button>

            <div className="text-right">
              <p>{user?.nombreCompleto}</p>
              <p className="text-sm text-gray-600">Administrador</p>
            </div>

            <button onClick={onLogout}>
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
