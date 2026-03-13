import { Clock, Mail, MapPin, Phone } from "lucide-react";

export default function Contacto() {
  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Contacto</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Contáctanos para agendar una cita o
            resolver tus dudas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-[#D4F4E8] rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-[#21D196]" />
              </div>
              <div>
                <h3 className="text-lg text-gray-900 mb-1">Dirección</h3>
                <p className="text-gray-600">
                  Av. Principal 123, Col. Centro
                  <br />
                  Ciudad, Estado, CP 12345
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-[#D4F4E8] rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-[#21D196]" />
              </div>
              <div>
                <h3 className="text-lg text-gray-900 mb-1">Teléfono</h3>
                <p className="text-gray-600">
                  General: (555) 123-4567
                  <br />
                  Emergencias: (555) 987-6543
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-[#D4F4E8] rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-[#21D196]" />
              </div>
              <div>
                <h3 className="text-lg text-gray-900 mb-1">Email</h3>
                <p className="text-gray-600">
                  info@vetcare.com
                  <br />
                  urgencias@vetcare.com
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-[#D4F4E8] rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-[#21D196]" />
              </div>
              <div>
                <h3 className="text-lg text-gray-900 mb-1">Horarios</h3>
                <p className="text-gray-600">
                  Lunes - Viernes: 8:00 AM - 8:00 PM
                  <br />
                  Sábado: 9:00 AM - 5:00 PM
                  <br />
                  Domingo: Emergencias únicamente
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-2xl">
            <h3 className="text-2xl text-gray-900 mb-6">Envíanos un Mensaje</h3>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-gray-700 mb-1"
                >
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#21D196]"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#21D196]"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm text-gray-700 mb-1"
                >
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#21D196]"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label
                  htmlFor="pet"
                  className="block text-sm text-gray-700 mb-1"
                >
                  Nombre de tu Mascota
                </label>
                <input
                  type="text"
                  id="pet"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#21D196]"
                  placeholder="Nombre de tu mascota"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-gray-700 mb-1"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#21D196]"
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#21D196] text-white py-3 rounded-lg hover:bg-[#1AB57F] transition-colors"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
