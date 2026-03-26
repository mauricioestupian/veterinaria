import { Calendar, Clock, PawPrint, Plus, Trash2, User } from "lucide-react";

export default function Citas({ setShowNewAppointmentModal }) {
  // 🔥 luego vendrá de backend
  const userAppointments = [];

  const handleCancelAppointment = (id) => {
    const confirm = window.confirm("¿Cancelar esta cita?");
    if (!confirm) return;

    console.log("Cancelar cita:", id);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-700";
      case "confirmed":
        return "bg-green-100 text-green-700";
      case "cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "pending":
        return "Pendiente";
      case "confirmed":
        return "Confirmada";
      case "cancelled":
        return "Cancelada";
      default:
        return status;
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">Mis Citas</h3>

        <button
          onClick={() => setShowNewAppointmentModal(true)}
          className="flex items-center gap-2 bg-[#21D196] text-white px-4 py-2 rounded-lg hover:bg-[#1AB57F]"
        >
          <Plus className="w-5 h-5" />
          Nueva Cita
        </button>
      </div>

      {/* Lista */}
      {userAppointments.length === 0 ? (
        <div className="text-center py-12">
          <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 mb-4">No tienes citas programadas</p>

          <button
            onClick={() => setShowNewAppointmentModal(true)}
            className="bg-[#21D196] text-white px-6 py-2 rounded-lg"
          >
            Agendar una cita
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {userAppointments.map((apt) => (
            <div
              key={apt.id}
              className="bg-white border rounded-xl p-6 hover:shadow-lg"
            >
              <div className="flex justify-between">
                {/* Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h4 className="font-bold text-lg">{apt.petName}</h4>

                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        apt.status,
                      )}`}
                    >
                      {getStatusText(apt.status)}
                    </span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {new Date(apt.date).toLocaleDateString()}
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {apt.time}
                    </div>

                    <div className="flex items-center gap-2">
                      <PawPrint className="w-4 h-4" />
                      {apt.service}
                    </div>

                    {apt.veterinarian && (
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {apt.veterinarian}
                      </div>
                    )}
                  </div>
                </div>

                {/* Acciones */}
                <div>
                  <button
                    onClick={() => handleCancelAppointment(apt.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
