import { Calendar, PawPrint, UserCircle, Users } from "lucide-react";
import { useState } from "react";
import {
  mockAppointments,
  mockClients,
  mockEmployees,
  mockPets,
} from "../../../data/mockData";

export function Overview({ services }) {
  const [clients, setClients] = useState(mockClients);
  const [pets, setPets] = useState(mockPets);
  const [employees, setEmployees] = useState(mockEmployees);
  // Estadísticas
  const stats = [
    {
      label: "Total Clientes",
      value: clients.length,
      icon: UserCircle,
      color: "bg-blue-500",
    },
    {
      label: "Total Mascotas",
      value: pets.length,
      icon: PawPrint,
      color: "bg-[#21D196]",
    },
    {
      label: "Citas Hoy",
      value: mockAppointments.filter(
        (a) => a.date === new Date().toISOString().split("T")[0],
      ).length,
      icon: Calendar,
      color: "bg-purple-500",
    },
    {
      label: "Empleados",
      value: employees.length,
      icon: Users,
      color: "bg-orange-500",
    },
  ];
  return (
    <div>
      <h3 className="text-xl font-bold text-gray-900 mb-6">Resumen General</h3>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div
                className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center`}
              >
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h4 className="text-lg font-bold text-gray-900 mb-4">
            Próximas Citas
          </h4>
          <div className="space-y-3">
            {mockAppointments.slice(0, 5).map((apt) => (
              <div
                key={apt.id}
                className="flex items-center gap-3 pb-3 border-b border-gray-100 last:border-0"
              >
                <Calendar className="w-5 h-5 text-[#21D196]" />
                <div className="flex-1">
                  <p className="font-medium text-gray-900">
                    {apt.petName} - {apt.clientName}
                  </p>
                  <p className="text-sm text-gray-600">
                    {apt.date} a las {apt.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h4 className="text-lg font-bold text-gray-900 mb-4">
            Servicios Más Solicitados
          </h4>
          <div className="space-y-3">
            {services.slice(0, 5).map((service) => (
              <div
                key={service.id}
                className="flex items-center justify-between pb-3 border-b border-gray-100 last:border-0"
              >
                <div>
                  <p className="font-medium text-gray-900">{service.name}</p>
                  <p className="text-sm text-gray-600">{service.category}</p>
                </div>
                <p className="font-bold text-[#21D196]">${service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
