import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";

import {
  mockClients,
  mockEmployees,
  mockPets,
  mockServices,
} from "../../data/mockData";
import { Empleados } from "../../modulos/admin/componentes/Empleados";
import { Header } from "../../modulos/admin/componentes/Header";
import { Overview } from "../../modulos/admin/componentes/Overview";
import { Servicios } from "../../modulos/admin/componentes/Servicios";
import { Tablas } from "../../modulos/admin/componentes/Tablas";
import { EmpleadoModal } from "../../modulos/admin/modals/EmpleadoModal";
import { ServicioModal } from "../../modulos/admin/modals/ServicioModal";

export default function AdminDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("overview");

  const [services, setServices] = useState(mockServices);
  const [employees, setEmployees] = useState(mockEmployees);
  const [pets, setPets] = useState(mockPets);
  const [clients, setClients] = useState(mockClients);

  const [showServiceModal, setShowServiceModal] = useState(false);
  const [showEmployeeModal, setShowEmployeeModal] = useState(false);

  const [editingService, setEditingService] = useState(null);
  const [editingEmployee, setEditingEmployee] = useState(null);

  const handleLogout = () => {
    logout(); // cierra sesión
    navigate("/"); // redirige al inicio
  };

  const stats = [
    { label: "Servicios", value: services.length },
    { label: "Empleados", value: employees.length },
    { label: "Mascotas", value: pets.length },
    { label: "Clientes", value: clients.length },
  ];

  const guardarServicio = (nuevoServicio) => {
    if (editingService?.id) {
      // editar
      setServices(
        services.map((s) =>
          s.id === editingService.id ? { ...nuevoServicio, id: s.id } : s,
        ),
      );
    } else {
      // crear
      setServices([...services, { ...nuevoServicio, id: Date.now() }]);
    }

    setEditingService(null);
  };

  const guardarEmpleado = (nuevoEmpleado) => {
    if (editingEmployee?.id) {
      setEmployees(
        employees.map((e) =>
          e.id === editingEmployee.id ? { ...nuevoEmpleado, id: e.id } : e,
        ),
      );
    } else {
      setEmployees([...employees, { ...nuevoEmpleado, id: Date.now() }]);
    }

    setEditingEmployee(null);
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

      {/* CONTENIDO DINÁMICO */}
      {activeTab === "overview" && (
        <Overview
          stats={stats}
          appointments={[]} // luego conectamos esto
          services={services}
        />
      )}

      {activeTab === "services" && (
        <Servicios
          servicios={services}
          setServicios={setServices}
          setShowServiceModal={setShowServiceModal}
          setEditingService={setEditingService}
        />
      )}

      {activeTab === "employees" && (
        <Empleados
          empleados={employees}
          setEmpleados={setEmployees}
          setShowEmployeeModal={setShowEmployeeModal}
          setEditingEmployee={setEditingEmployee}
        />
      )}

      {/* Modal Servicio */}
      <ServicioModal
        isOpen={showServiceModal}
        onClose={() => {
          setShowServiceModal(false);
          setEditingService(null);
        }}
        onGuardar={guardarServicio}
        servicioEditando={editingService}
      />

      {/* Modal Empleado */}
      <EmpleadoModal
        isOpen={showEmployeeModal}
        onClose={() => {
          setShowEmployeeModal(false);
          setEditingEmployee(null);
        }}
        onGuardar={guardarEmpleado}
        empleadoEditando={editingEmployee}
      />
    </div>
  );
}
