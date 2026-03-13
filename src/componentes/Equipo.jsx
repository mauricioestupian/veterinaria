import { SmartImage } from "./SmartImage";

const teamMembers = [
  {
    name: "Dra. María González",
    role: "Directora Médica",
    specialty: "Cirugía y Medicina Interna",
    image:
      "https://images.unsplash.com/photo-1676552055618-22ec8cde399a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjB2ZXRlcmluYXJpYW4lMjBzbWlsaW5nfGVufDF8fHx8MTc3MTM2MTA3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Dr. Carlos Rodríguez",
    role: "Veterinario Senior",
    specialty: "Dermatología Veterinaria",
    image:
      "https://images.unsplash.com/photo-1625321171045-1fea4ac688e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZXRlcmluYXJpYW4lMjBleGFtaW5pbmclMjBkb2d8ZW58MXx8fHwxNzcxMjg0NDk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Dra. Ana Martínez",
    role: "Veterinaria",
    specialty: "Emergencias y Cuidados Intensivos",
    image:
      "https://images.unsplash.com/photo-1676552055618-22ec8cde399a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjB2ZXRlcmluYXJpYW4lMjBzbWlsaW5nfGVufDF8fHx8MTc3MTM2MTA3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export default function Equipo() {
  return (
    <section
      id="equipo"
      className="py-20 bg-gradient-to-br from-emerald-50 to-green-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
            Nuestro Equipo de Expertos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Profesionales altamente calificados dedicados al cuidado de tus
            mascotas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-80 overflow-hidden">
                <SmartImage
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl text-gray-900 mb-1">{member.name}</h3>
                <p className="text-[#21D196] mb-2">{member.role}</p>
                <p className="text-sm text-gray-600">{member.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
