import { useState } from "react";
import { mockServices } from "../../../data/mockData";

export default function ModalNuevaCita({ onClose }) {
  const [form, setForm] = useState({
    petId: "",
    serviceId: "",
    date: "",
    time: "",
  });

  const userPets = []; // luego del hook

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Nueva cita:", form);

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-2xl w-full max-w-md">
        <h3 className="text-xl font-bold mb-4">Nueva Cita</h3>

        <form onSubmit={handleSubmit} className="space-y-3">
          <select name="petId" onChange={handleChange} required>
            <option value="">Mascota</option>
            {userPets.map((pet) => (
              <option key={pet.id} value={pet.id}>
                {pet.name}
              </option>
            ))}
          </select>

          <select name="serviceId" onChange={handleChange} required>
            <option value="">Servicio</option>
            {mockServices.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </select>

          <input type="date" name="date" onChange={handleChange} required />
          <input type="time" name="time" onChange={handleChange} required />

          <div className="flex gap-2 pt-3">
            <button type="button" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit">Agendar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
