import { Edit, PawPrint, Plus, Trash2 } from "lucide-react";
import { ImageWithFallback } from "../../../componentes/iu/ImageWithFallback";

export default function Mascotas({
  setShowNewPetModal,
  setShowEditPetModal,
  setSelectedPet,
}) {
  // 🔥 luego esto vendrá de backend
  const userPets = [];

  const handleDeletePet = (id, name) => {
    const confirm = window.confirm(`¿Eliminar a ${name}?`);
    if (!confirm) return;

    console.log("Eliminar mascota:", id);
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">Mis Mascotas</h3>

        <button
          onClick={() => setShowNewPetModal(true)}
          className="flex items-center gap-2 bg-[#21D196] text-white px-4 py-2 rounded-lg hover:bg-[#1AB57F]"
        >
          <Plus className="w-5 h-5" />
          Nueva Mascota
        </button>
      </div>

      {/* Lista */}
      {userPets.length === 0 ? (
        <div className="text-center py-12">
          <PawPrint className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">No tienes mascotas registradas</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {userPets.map((pet) => (
            <div
              key={pet.id}
              className="bg-white border rounded-xl p-6 hover:shadow-lg"
            >
              <div className="flex gap-4">
                {/* Imagen */}
                <div className="w-24 h-24 rounded-full overflow-hidden">
                  <ImageWithFallback
                    src={pet.imageUrl}
                    alt={pet.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info */}
                <div className="flex-1">
                  <h4 className="text-lg font-bold">{pet.name}</h4>
                  <p className="text-gray-600 mb-2">{pet.breed}</p>

                  <div className="text-sm grid grid-cols-2 gap-2">
                    <span>Especie: {pet.species}</span>
                    <span>Edad: {pet.age}</span>
                    <span>Peso: {pet.weight} kg</span>
                  </div>

                  {/* Acciones */}
                  <div className="mt-4 flex gap-2">
                    <button
                      onClick={() => {
                        setSelectedPet(pet);
                        setShowEditPetModal(true);
                      }}
                      className="bg-[#21D196] text-white px-3 py-1 rounded"
                    >
                      <Edit className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => handleDeletePet(pet.id, pet.name)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
