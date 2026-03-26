import { Heart, Pill, Scissors, Stethoscope, Syringe, X } from "lucide-react";
import { SmartImage } from "./SmartImage";

const services = [
  {
    icon: Stethoscope,
    title: "Consultas Generales",
    description:
      "Exámenes médicos completos y diagnóstico profesional para tu mascota.",
    image:
      "https://images.unsplash.com/photo-1625321171045-1fea4ac688e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZXRlcmluYXJpYW4lMjBleGFtaW5pbmclMjBkb2d8ZW58MXx8fHwxNzcxMjg0NDk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    icon: Syringe,
    title: "Vacunación",
    description:
      "Programas completos de vacunación para proteger la salud de tu mascota.",
    image:
      "https://images.unsplash.com/photo-1770836037275-38b44e4b101f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZXRlcmluYXJ5JTIwY2xpbmljJTIwcGV0c3xlbnwxfHx8fDE3NzEzNjEwNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    icon: X,
    title: "Cirugía",
    description:
      "Procedimientos quirúrgicos con tecnología de punta y cuidado especializado.",
    image:
      "https://images.unsplash.com/photo-1770836037326-d2df574278b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZXRlcmluYXJ5JTIwc3VyZ2VyeSUyMHJvb218ZW58MXx8fHwxNzcxMzYxMDc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    icon: Scissors,
    title: "Estética y Grooming",
    description:
      "Servicios de baño, corte de pelo y uñas para mantener a tu mascota bella.",
    image:
      "https://images.unsplash.com/photo-1625279138836-e7311d5c863a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXQlMjBncm9vbWluZyUyMHNlcnZpY2V8ZW58MXx8fHwxNzcxMjkxOTQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    icon: Heart,
    title: "Emergencias 24/7",
    description:
      "Atención de urgencias disponible las 24 horas, todos los días del año.",
    image:
      "https://images.unsplash.com/photo-1770836037275-38b44e4b101f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZXRlcmluYXJ5JTIwY2xpbmljJTIwcGV0c3xlbnwxfHx8fDE3NzEzNjEwNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    icon: Pill,
    title: "Farmacia Veterinaria",
    description:
      "Medicamentos y productos de calidad para el cuidado de tu mascota.",
    image:
      "https://images.unsplash.com/photo-1625321171045-1fea4ac688e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZXRlcmluYXJpYW4lMjBleGFtaW5pbmclMjBkb2d8ZW58MXx8fHwxNzcxMjg0NDk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ofrecemos atención integral para el bienestar de tus mascotas, con
            la más alta calidad y profesionalismo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-48 overflow-hidden">
                  <SmartImage
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="w-14 h-14 bg-[#D4F4E8] rounded-full flex items-center justify-center mb-4 group-hover:bg-[#21D196] transition-colors">
                    <Icon className="w-7 h-7 text-[#21D196] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl mb-2 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
