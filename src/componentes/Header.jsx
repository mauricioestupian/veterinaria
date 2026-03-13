import { Clock, Phone } from "lucide-react";
import Menu from "./Menu";

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* te explico el comportamiento del header:
      bg-white -> fondo blanco
      shadow-sm -> sombra sutil para dar profundidad
      sticky top-0 -> hace que el header se quede fijo en la parte superior al hacer scroll
      z-50 -> asegura que el header esté por encima de otros elementos en la página
      */}
      {/* Barra superior con información de contacto y horario */}
      <div className="bg-[#21D196] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>Emergencias 24/7: (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Lun - Vie: 8:00 AM - 8:00 PM | Sáb: 9:00 AM - 5:00 PM</span>
            </div>
          </div>
        </div>
      </div>
      {/* Barra de navegación principal con el logo y menú */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#21D196] rounded-full flex items-center justify-center text-white">
              <span className="text-xl">🐾</span>
            </div>
            <div>
              <h1 className="font-bold text-xl text-gray-800">VetCare</h1>
              <p className="text-xs text-gray-600">Clínica Veterinaria</p>
            </div>
          </div>
          <Menu />
        </div>
      </div>
    </header>
  );
}
