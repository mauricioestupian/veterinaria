import { SmartImage } from "../iu/SmartImage";

export default function Inicio() {
  return (
    <section
      id="inicio"
      className="relative bg-gradient-to-br from-emerald-50 to-green-50 py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-900">
              Cuidado Profesional para tus{" "}
              <span className="text-[#21D196]">Mejores Amigos</span>
            </h1>
            <p className="text-lg text-gray-600">
              Clínica veterinaria de confianza con más de 15 años de
              experiencia. Brindamos atención médica integral para mascotas con
              amor y profesionalismo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#21D196] text-white px-8 py-3 rounded-full hover:bg-[#1AB57F] transition-colors">
                Agendar Consulta
              </button>
              <button className="border-2 border-[#21D196] text-[#21D196] px-8 py-3 rounded-full hover:bg-[#D4F4E8] transition-colors">
                Conocer Más
              </button>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl text-[#21D196] mb-1">15+</div>
                <div className="text-sm text-gray-600">Años de Experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl text-[#21D196] mb-1">5000+</div>
                <div className="text-sm text-gray-600">Mascotas Atendidas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl text-[#21D196] mb-1">24/7</div>
                <div className="text-sm text-gray-600">Emergencias</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <SmartImage
                src="https://images.unsplash.com/photo-1625321171045-1fea4ac688e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZXRlcmluYXJpYW4lMjBleGFtaW5pbmclMjBkb2d8ZW58MXx8fHwxNzcxMjg0NDk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Veterinaria examinando perro"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#D4F4E8] rounded-full flex items-center justify-center text-2xl">
                  ⭐
                </div>
                <div>
                  <div className="font-bold text-gray-900">4.9/5.0</div>
                  <div className="text-sm text-gray-600">
                    Calificación de clientes
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
