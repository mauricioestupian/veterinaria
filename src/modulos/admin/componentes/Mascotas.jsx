import { Trash2 } from "lucide-react";
import { ImageWithFallback } from "../../../componentes/iu/ImageWithFallback";

export function Mascotas({ pets }) {
  const eliminarMascota = (id) => {
    if (confirm("¿Estás seguro de eliminar esta mascota?"))
      setPets(pets.filter((p) => p.id !== id));
  };
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">
          Mascotas Registradas
        </h3>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pets.map((pet) => (
          <div
            key={pet.id}
            className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex gap-4 mb-4">
              <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                <ImageWithFallback
                  src={pet.imageUrl}
                  alt={pet.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">
                      {pet.name}
                    </h4>
                    <p className="text-gray-600 text-sm">{pet.breed}</p>
                  </div>
                  <button
                    onClick={() => eliminarMascota(pet.id)}
                    className="p-1 text-red-600 hover:bg-red-50 rounded"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Propietario:</span>
                <span className="text-gray-900 font-medium">
                  {pet.ownerName}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Especie:</span>
                <span className="text-gray-900">{pet.species}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Edad:</span>
                <span className="text-gray-900">{pet.age} años</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Peso:</span>
                <span className="text-gray-900">{pet.weight} kg</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
