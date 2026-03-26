import Contacto from "./componentes/iu/Contacto";
import Equipo from "./componentes/iu/Equipo";
import Servicios from "./componentes/iu/Servicios";
import { Footer } from "./componentes/layout/Footer";
import Header from "./componentes/layout/Header";
import Inicio from "./componentes/layout/Inicio";

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
