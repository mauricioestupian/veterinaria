import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import LoginPage from "./paginas/LoginPage";
import RegistroUser from "./paginas/RegistroUser";

import ProtectedRoute from "./routes/ProtectedRoute";

import AdminDashboard from "./paginas/admin/indexAdmin";
import ClientDashboard from "./paginas/cliente/index.Cliente";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registro" element={<RegistroUser />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/cliente"
          element={
            <ProtectedRoute role="cliente">
              <ClientDashboard />
            </ProtectedRoute>
          }
        />

        {/*<Route
          path="/empleado"
          element={
            <ProtectedRoute role="empleado">
              <EmpleadoDashboard />
            </ProtectedRoute>
          }
        />*/}
      </Routes>
    </>
  );
}

export default App;
