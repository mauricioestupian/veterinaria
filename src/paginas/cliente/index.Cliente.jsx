import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";

import Citas from "../../modulos/cliente/componentes/Citas";
import HeaderCliente from "../../modulos/cliente/componentes/HeaderCliente";
import Mascotas from "../../modulos/cliente/componentes/Mascotas";
import Perfil from "../../modulos/cliente/componentes/Perfil";
import TabsCliente from "../../modulos/cliente/componentes/TabsCliente";

import ModalEditarMascota from "../../modulos/cliente/modals/ModalEditarMascota";
import ModalNuevaCita from "../../modulos/cliente/modals/ModalNuevaCita";
import ModalNuevaMascota from "../../modulos/cliente/modals/ModalNuevaMascota";

export default function ClientDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("pets");

  const [showNewPetModal, setShowNewPetModal] = useState(false);
  const [showEditPetModal, setShowEditPetModal] = useState(false);
  const [showNewAppointmentModal, setShowNewAppointmentModal] = useState(false);

  const [selectedPet, setSelectedPet] = useState(null);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <HeaderCliente user={user} onLogout={handleLogout} />

      <div className="max-w-7xl mx-auto p-6">
        <TabsCliente activeTab={activeTab} setActiveTab={setActiveTab} />

        {activeTab === "pets" && (
          <Mascotas
            setShowNewPetModal={setShowNewPetModal}
            setShowEditPetModal={setShowEditPetModal}
            setSelectedPet={setSelectedPet}
          />
        )}

        {activeTab === "appointments" && (
          <Citas setShowNewAppointmentModal={setShowNewAppointmentModal} />
        )}

        {activeTab === "profile" && <Perfil user={user} />}
      </div>

      {/* Modales */}
      {showNewPetModal && (
        <ModalNuevaMascota onClose={() => setShowNewPetModal(false)} />
      )}

      {showEditPetModal && (
        <ModalEditarMascota
          pet={selectedPet}
          onClose={() => setShowEditPetModal(false)}
        />
      )}

      {showNewAppointmentModal && (
        <ModalNuevaCita onClose={() => setShowNewAppointmentModal(false)} />
      )}
    </div>
  );
}
