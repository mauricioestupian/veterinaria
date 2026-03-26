import { useState } from "react";

export default function ModalNuevaMascota({ onClose }) {
  const [form, setForm] = useState({
    name: "",
    species: "",
    breed: "",
    age: "",
    weight: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Nueva mascota:", form);

    onClose(); // cerrar modal
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md">
        <h3 className="text-xl font-bold mb-4">Nueva Mascota</h3>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            name="name"
            placeholder="Nombre"
            onChange={handleChange}
            required
          />
          <input
            name="breed"
            placeholder="Raza"
            onChange={handleChange}
            required
          />

          <select name="species" onChange={handleChange} required>
            <option value="">Especie</option>
            <option value="perro">Perro</option>
            <option value="gato">Gato</option>
          </select>

          <input
            name="age"
            type="number"
            placeholder="Edad"
            onChange={handleChange}
            required
          />
          <input
            name="weight"
            type="number"
            placeholder="Peso"
            onChange={handleChange}
            required
          />

          <div className="flex gap-2 pt-3">
            <button type="button" onClick={onClose} className="flex-1 border">
              Cancelar
            </button>

            <button type="submit" className="flex-1 bg-[#21D196] text-white">
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
