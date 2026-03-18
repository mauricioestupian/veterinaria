import { CheckCircle, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";

import RegistroForm from "../componentes/RegistroForm";

export default function RegistroUser() {

  const navigate = useNavigate();

  const [showSuccess, setShowSuccess] = useState(false);

  const handleSuccess = () => {

    setShowSuccess(true);

    setTimeout(() => {
      navigate("/login");
    }, 4000);

  };

  if (showSuccess) {

    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-green-50">

        <div className="bg-white rounded-2xl p-8 max-w-md text-center shadow-xl">

          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            ¡Registro Exitoso!
          </h2>

          <p className="text-gray-600">
            Redirigiendo al inicio de sesión...
          </p>

        </div>

      </div>
    );

  }

  return (

    <div className="min-h-screen bg-gray-50 py-8">

      <button
        onClick={() => navigate("/login")}
        className="fixed top-4 right-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center"
      >
        <X className="w-6 h-6 text-gray-600" />
      </button>

      <div className="max-w-4xl mx-auto">

        <RegistroForm onSuccess={handleSuccess} />

      </div>

    </div>

  );

}