import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import LoginPage from "./paginas/LoginPage";
import RegistroUser from "./paginas/RegistroUser";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registro" element={<RegistroUser />} />
      </Routes>
    </>
  );
}

export default App;
