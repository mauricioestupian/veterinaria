import Contacto from "./componentes/Contacto";
import Equipo from "./componentes/Equipo";
import { Footer } from "./componentes/Footer";
import Header from "./componentes/Header";
import Inicio from "./componentes/Inicio";
import Servicios from "./componentes/Servicios";

export default function Home() {
  return (
    <>
      <div className="min-h-screen">
        <Header />
        <main>
          <Inicio />
          <Servicios />
          <Equipo />
          <Contacto />
        </main>
        <Footer />
      </div>
    </>
  );
}
