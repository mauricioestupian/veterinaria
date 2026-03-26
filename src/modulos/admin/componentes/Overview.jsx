import { Calendar } from "lucide-react";

export function Overview({ stats, appointments, services }) {
  return (
    <div>
      <h3 className="text-xl font-bold mb-6">Resumen General</h3>

      {/* 📊 Estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="border rounded-xl p-6">
            <p className="text-sm text-gray-600">{stat.label}</p>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* 📅 Contenido */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Citas */}
        <div className="border rounded-xl p-6">
          <h4 className="font-bold mb-4">Próximas Citas</h4>

          {appointments.slice(0, 5).map((apt) => (
            <div key={apt.id} className="flex gap-2 mb-2">
              <Calendar className="w-4 h-4" />
              <span>
                {apt.petName} - {apt.clientName}
              </span>
            </div>
          ))}
        </div>

        {/* Servicios */}
        <div className="border rounded-xl p-6">
          <h4 className="font-bold mb-4">Servicios Más Solicitados</h4>

          {services.slice(0, 5).map((s) => (
            <div key={s.id} className="flex justify-between mb-2">
              <span>{s.name}</span>
              <span>${s.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
