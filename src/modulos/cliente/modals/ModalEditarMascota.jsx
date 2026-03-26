import { useEffect, useState } from "react";

export default function ModalEditarMascota({ pet, onClose }) {
  const [form, setForm] = useState(pet || {});

  useEffect(() => {
    setForm(pet);
  }, [pet]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Editar mascota:", form);

    onClose();
  };

  if (!pet) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-2xl w-full max-w-md">
        <h3 className="text-xl font-bold mb-4">Editar Mascota</h3>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input name="name" value={form.name || ""} onChange={handleChange} />
          <input
            name="breed"
            value={form.breed || ""}
            onChange={handleChange}
          />

          <input name="age" value={form.age || ""} onChange={handleChange} />
          <input
            name="weight"
            value={form.weight || ""}
            onChange={handleChange}
          />

          <div className="flex gap-2 pt-3">
            <button type="button" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit">Guardar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
