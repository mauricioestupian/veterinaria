import { Edit, Plus, Trash2 } from "lucide-react";

export function Empleados({
  empleados,
  setEmpleados,
  setShowEmployeeModal,
  setEditingEmployee,
}) {
  const eliminarEmpleado = (id) => {
    if (confirm("¿Estás seguro de eliminar este empleado?"))
      setEmpleados(empleados.filter((e) => e.id !== id));
  };

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between mb-6">
        <h3 className="text-xl font-bold">Empleados</h3>

        <button
          onClick={() => {
            setEditingEmployee(null);
            setShowEmployeeModal(true);
          }}
          className="flex items-center gap-2 bg-[#21D196] text-white px-4 py-2 rounded"
        >
          <Plus className="w-5 h-5" />
          Nuevo Empleado
        </button>
      </div>

      {/* Lista */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {empleados.map((emp) => (
          <div key={emp.id} className="border rounded-xl p-6">
            <div className="flex justify-between mb-2">
              <h4 className="font-bold">{emp.name}</h4>

              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setEditingEmployee(emp);
                    setShowEmployeeModal(true);
                  }}
                >
                  <Edit className="w-4 h-4 text-blue-600" />
                </button>

                <button onClick={() => eliminarEmpleado(emp.id)}>
                  <Trash2 className="w-4 h-4 text-red-600" />
                </button>
              </div>
            </div>

            <p className="text-sm text-gray-600">{emp.role}</p>

            {emp.specialization && (
              <p className="text-xs text-gray-500">{emp.specialization}</p>
            )}

            <p className="text-sm mt-2"> {emp.email}</p>

            <p className="text-sm">📞 {emp.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
