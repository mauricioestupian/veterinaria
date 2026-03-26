export default function Menu() {
  return (
    <nav className="hidden md:flex items-center gap-8">
      <ul className="flex items-center gap-8">
        <li>
          <a
            href="/"
            className="text-gray-700 hover:text-[#21D196] transition-colors"
          >
            Inicio
          </a>
        </li>

        <li>
          <a
            href="/servicios"
            className="text-gray-700 hover:text-[#21D196] transition-colors"
          >
            Servicios
          </a>
        </li>

        <li>
          <a
            href="/equipo"
            className="text-gray-700 hover:text-[#21D196] transition-colors"
          >
            Nuestro Equipo
          </a>
        </li>

        <li>
          <a
            href="/contacto"
            className="text-gray-700 hover:text-[#21D196] transition-colors"
          >
            Contacto
          </a>
        </li>

        <li>
          <a
            href="/login"
            className="bg-[#21D196] text-white px-6 py-2 rounded-full hover:opacity-90 transition"
          >
            Iniciar Sesión
          </a>
        </li>
      </ul>
    </nav>
  );
}
