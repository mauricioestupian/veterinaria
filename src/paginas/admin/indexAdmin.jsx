import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";

import { Header } from "../../modulos/admin/componentes/Header";
import { Tablas } from "../../modulos/admin/componentes/Tablas";

export default function AdminDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("overview");

  const handleLogout = () => {
    logout(); // cierra sesión
    navigate("/"); // redirige al inicio
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header user={user} onLogout={handleLogout} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-[#21D196] to-[#1AB57F] rounded-2xl p-8 mb-8 text-white">
          <h2 className="text-3xl mb-2">Panel de Administración</h2>
          <p className="text-lg opacity-90">
            Gestiona todos los aspectos de VetCare
          </p>
        </div>

        {/* Tablas */}
        <Tablas activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}
