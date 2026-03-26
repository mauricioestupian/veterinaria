import { useEffect, useState } from "react";

export function EmpleadoModal({
  isOpen,
  onClose,
  onGuardar,
  empleadoEditando,
}) {
  const [form, setForm] = useState({
    name: "",
    role: "",
    specialization: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    if (empleadoEditando) {
      setForm(empleadoEditando);
    } else {
      setForm({
        name: "",
        role: "",
        specialization: "",
        email: "",
        phone: "",
      });
    }
  }, [empleadoEditando]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onGuardar(form);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl w-full max-w-md">
        <h3 className="text-xl font-bold mb-4">
          {empleadoEditando ? "Editar Empleado" : "Nuevo Empleado"}
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Nombre completo"
            required
            className="w-full border p-2 rounded"
          />

          <input
            type="text"
            name="role"
            value={form.role}
            onChange={handleChange}
            placeholder="Cargo"
            required
            className="w-full border p-2 rounded"
          />

          <input
            type="text"
            name="specialization"
            value={form.specialization}
            onChange={handleChange}
            placeholder="Especialización (opcional)"
            className="w-full border p-2 rounded"
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Correo"
            required
            className="w-full border p-2 rounded"
          />

          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Teléfono"
            required
            className="w-full border p-2 rounded"
          />

          <div className="flex gap-2">
            <button
              type="button"
              onClick={onClose}
              className="w-1/2 border p-2 rounded"
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="w-1/2 bg-[#21D196] text-white p-2 rounded"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
