import { Facebook, Instagram, Mail, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#21D196] rounded-full flex items-center justify-center">
                <span className="text-xl">🐾</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">VetCare</h3>
                <p className="text-xs text-gray-400">Clínica Veterinaria</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Cuidando de tus mascotas con amor y profesionalismo desde 2009.
            </p>
          </div>

          <div>
            <h4 className="mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="#inicio"
                  className="hover:text-teal-400 transition-colors"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  className="hover:text-teal-400 transition-colors"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#equipo"
                  className="hover:text-teal-400 transition-colors"
                >
                  Nuestro Equipo
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="hover:text-teal-400 transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Consultas Generales</li>
              <li>Vacunación</li>
              <li>Cirugía</li>
              <li>Emergencias 24/7</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#21D196] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#21D196] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#21D196] transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#21D196] transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; 2026 VetCare Clínica Veterinaria. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
