import {
  Briefcase,
  LayoutDashboard,
  PawPrint,
  UserCircle,
  Users,
} from "lucide-react";
import { useState } from "react";
import {
  mockClients,
  mockEmployees,
  mockPets,
  mockServices,
} from "../../../data/mockData";

import { EmpleadoModal } from "../modals/EmpleadoModal";
import { ServicioModal } from "../modals/ServicioModal";
import { Clientes } from "./Clientes";
import { Empleados } from "./Empleados";
import { Mascotas } from "./Mascotas";
import { Overview } from "./Overview";
import { Servicios } from "./Servicios";

export function Tablas({ activeTab, setActiveTab }) {
  const [services, setServices] = useState(mockServices);
  const [employees, setEmployees] = useState(mockEmployees);
  const [pets, setPets] = useState(mockPets);
  const [clients, setClients] = useState(mockClients);
  const [showServiceModal, setShowServiceModal] = useState(false);
  const [editingService, setEditingService] = useState(null);
  const [showEmployeeModal, setShowEmployeeModal] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);

  const tabs = [
    { id: "overview", label: "Resumen", icon: LayoutDashboard },
    { id: "services", label: "Servicios", icon: Briefcase },
    { id: "employees", label: "Empleados", icon: Users },
    { id: "pets", label: "Mascotas", icon: PawPrint },
    { id: "clients", label: "Clientes", icon: UserCircle },
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
    <div className="bg-white rounded-xl shadow-sm mb-6">
      <div className="border-b border-gray-200">
        <nav className="flex flex-wrap -mb-px">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-4 border-b-2 font-medium transition-colors ${
                activeTab === tab.id
                  ? "border-[#21D196] text-[#21D196]"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* CONTENIDO DINÁMICO */}
      <div className="p-6">
        {activeTab === "overview" && <Overview services={services} />}
      </div>

      {/* CONTENIDO Servicios */}
      {activeTab === "services" && (
        <Servicios
          servicios={services}
          setServicios={setServices}
          setShowServiceModal={setShowServiceModal}
          setEditingService={setEditingService}
        />
      )}

      {/* CONTENIDO Empleados */}
      {activeTab === "employees" && (
        <Empleados
          empleados={employees}
          setEmpleados={setEmployees}
          setShowEmployeeModal={setShowEmployeeModal}
          setEditingEmployee={setEditingEmployee}
        />
      )}

      {/* CONTENIDO Mascotas */}
      {activeTab === "pets" && <Mascotas pets={pets} />}

      {/* CONTENIDO Clientes */}
      {activeTab === "clients" && <Clientes clients={clients} />}

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
