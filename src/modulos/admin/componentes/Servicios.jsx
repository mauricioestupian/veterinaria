import { Edit, Plus, Trash2 } from "lucide-react";

export function Servicios({
  servicios,
  setServicios,
  setShowServiceModal,
  setEditingService,
}) {
  const eliminarServicio = (id) => {
    if (confirm("¿Estás seguro de eliminar este servicio?")) {
      setServicios(servicios.filter((s) => s.id !== id));
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between mb-6">
        <h3 className="text-xl font-bold">Servicios</h3>

        <button
          onClick={() => {
            setEditingService(null);
            setShowServiceModal(true);
          }}
          className="flex items-center gap-2 bg-[#21D196] text-white px-4 py-2 rounded"
        >
          <Plus className="w-5 h-5" />
          Nuevo Servicio
        </button>
      </div>

      {/* Lista */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicios.map((servicio) => (
          <div key={servicio.id} className="border rounded-xl p-6">
            <div className="flex justify-between mb-2">
              <h4 className="font-bold">{servicio.name}</h4>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                {servicio.category}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setEditingService(servicio);
                    setShowServiceModal(true);
                  }}
                >
                  <Edit className="w-4 h-4 text-blue-600" />
                </button>

                <button onClick={() => eliminarServicio(servicio.id)}>
                  <Trash2 className="w-4 h-4 text-red-600" />
                </button>
              </div>
            </div>

            <p className="text-sm text-gray-600">{servicio.description}</p>

            <div className="flex justify-between mt-4">
              <span>{servicio.duration} min</span>
              <span className="font-bold text-[#21D196]">
                ${servicio.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
