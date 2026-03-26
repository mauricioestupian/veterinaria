import { useState, useEffect } from "react";

export function ServicioModal({
  isOpen,
  onClose,
  onGuardar,
  servicioEditando
}) {

  const [form, setForm] = useState({
    name: "",
    category: "",
    description: "",
    price: "",
    duration: ""
  });

  // 🔥 Cuando cambia el servicio (editar)
  useEffect(() => {
    if (servicioEditando) {
      setForm(servicioEditando);
    } else {
      setForm({
        name: "",
        category: "",
        description: "",
        price: "",
        duration: ""
      });
    }
  }, [servicioEditando]);

  // 🔹 Manejo de inputs
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value
    });
  };

  // 🔹 Guardar
  const handleSubmit = (e) => {
    e.preventDefault();

    onGuardar({
      ...form,
      price: parseFloat(form.price),
      duration: parseInt(form.duration)
    });

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      
      <div className="bg-white p-6 rounded-xl w-full max-w-md">

        <h3 className="text-xl font-bold mb-4">
          {servicioEditando ? "Editar Servicio" : "Nuevo Servicio"}
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Nombre"
            required
            className="w-full border p-2 rounded"
          />

          <input
            type="text"
            name="category"
            value={form.category}
            onChange={handleChange}
            placeholder="Categoría"
            required
            className="w-full border p-2 rounded"
          />

          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Descripción"
            required
            className="w-full border p-2 rounded"
          />

          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="Precio"
            required
            className="w-full border p-2 rounded"
          />

          <input
            type="number"
            name="duration"
            value={form.duration}
            onChange={handleChange}
            placeholder="Duración (min)"
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