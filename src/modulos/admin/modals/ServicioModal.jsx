import { Briefcase, Image as ImageIcon, Upload } from "lucide-react";
import { useEffect, useState } from "react";
import {
  actualizarServicio,
  CrearServicio,
  obtenerCategorias,
} from "../../../api/Servicios";

export function ServicioModal({
  isOpen,
  onClose,
  onGuardar,
  servicioEditando,
}) {
  const [form, setForm] = useState({
    nom: "",
    categoria: "",
    desc: "",
    precio: "",
    duracion: "",
    imagen: "",
  });

  const [imageUploadMode, setImageUploadMode] = useState("url");
  const [categorias, setCategorias] = useState([]);

  // 🔥 Cuando cambia el servicio (editar)
  useEffect(() => {
    if (servicioEditando) {
      setForm(servicioEditando);
    } else {
      setForm({
        nom: "",
        categoria: "",
        desc: "",
        precio: "",
        duracion: "",
        imagen: "",
      });
    }
  }, [servicioEditando]);

  // Cargar lista de categorias al montar el componente
  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const CategoriaData = await obtenerCategorias();
        setCategorias(CategoriaData);
      } catch (error) {
        console.error("Error al cargar listas:", error);
      }
    };
    cargarDatos();
  }, []);

  // 🔹 Manejo de inputs
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  // 🔹 Guardar
  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🔄 Limpiar errores anteriores
    //setError("");
    //setFieldErrors({});

    onGuardar({
      ...form,
      precio: parseInt(form.precio),
      duracion: parseInt(form.duracion),
    });

    try {
      //Llamado a la API para crear o actualizar el servicio
      await (servicioEditando ? actualizarServicio(form) : CrearServicio(form));

      //toast.success("Servicio guardado correctamente");

      // ✅ Si todo sale bien
      // ✅ Cerrar modal
      onClose();
    } catch (err) {
      const message =
        err?.message?.trim() || "No se pudo completar la operación.";

      // ⚠️ Si hay errores por campo
      if (err?.errors) {
        setFieldErrors(err.errors);
        setError(""); // evitar duplicar mensaje
      } else {
        setError(message);
      }
    }
  };

  if (!isOpen) return null;

  // Tamaño máximo para la imagen: 5MB
  const handleImageFileChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Archivo inválido");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("Máx 5MB");
      return;
    }

    const previewUrl = URL.createObjectURL(file);

    setForm((prev) => ({
      ...prev,
      imagen: previewUrl,
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#21D196] to-[#1AB57F] px-8 py-6 rounded-t-2xl">
          <h3 className="text-2xl font-bold text-white flex items-center gap-3">
            <Briefcase className="w-7 h-7" />
            {servicioEditando ? "Editar Servicio" : "Nuevo Servicio"}
          </h3>
          <p className="text-white text-sm opacity-90 mt-1">
            {servicioEditando
              ? "Modifica la información del servicio"
              : "Completa los datos para crear un nuevo servicio"}
          </p>
        </div>
        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {/* Nombre del Servicio */}
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <span className="text-[#21D196]">●</span>
              Nombre del Servicio
            </label>
            <input
              type="text"
              id="nom"
              name="nom"
              required
              value={form.nom}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#21D196] focus:ring-4 focus:ring-[#21D196] focus:ring-opacity-20 transition-all"
              placeholder="Ej: Consulta General, Vacunación, Cirugía..."
            />
          </div>

          {/*select con categorías predefinidas*/}
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <span className="text-[#21D196]">●</span>
              Categoría
            </label>
            <select
              id="categoria"
              name="categoria"
              value={form.categoria}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#21D196] focus:ring-4 focus:ring-[#21D196] focus:ring-opacity-20 transition-all bg-white"
            >
              <option value="">Seleccionar categoría</option>
              {categorias.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Descripción */}
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <span className="text-[#21D196]">●</span>
              Descripción
            </label>
            <textarea
              id="desc"
              name="desc"
              required
              value={form.desc}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#21D196] focus:ring-4 focus:ring-[#21D196] focus:ring-opacity-20 transition-all resize-none"
              rows={4}
              placeholder="Describe el servicio, qué incluye y cualquier información importante..."
            />
          </div>

          {/* Precio y Duración */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2 flex items-center gap-2">
                <span className="text-[#21D196]">●</span>
                Precio ($)
              </label>
              <div className="relative">
                <input
                  id="precio"
                  name="precio"
                  type="number"
                  required
                  value={form.precio}
                  onChange={handleChange}
                  className="w-full px-4 py-3 pl-10 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#21D196] focus:ring-4 focus:ring-[#21D196] focus:ring-opacity-20 transition-all"
                  placeholder="0.00"
                  step="0.01"
                  min="0"
                />
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">
                  $
                </span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2 flex items-center gap-2">
                <span className="text-[#21D196]">●</span>
                Duración (minutos)
              </label>
              <div className="relative">
                <input
                  type="number"
                  id="duracion"
                  name="duracion"
                  required
                  value={form.duracion}
                  onChange={handleChange}
                  className="w-full px-4 py-3 pr-14 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#21D196] focus:ring-4 focus:ring-[#21D196] focus:ring-opacity-20 transition-all"
                  placeholder="30"
                  min="1"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
                  min
                </span>
              </div>
            </div>
          </div>

          {/* Imagen del Servicio */}
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <span className="text-[#21D196]">●</span>
              Imagen del Servicio
              <span className="text-xs font-normal text-gray-500">
                (opcional)
              </span>
            </label>

            {/* Tabs para elegir método de carga */}
            <div className="flex gap-2 mb-4 bg-gray-100 p-1 rounded-lg">
              <button
                type="button"
                onClick={() => setImageUploadMode("url")}
                className={`flex-1 px-4 py-2 rounded-md font-medium text-sm transition-all ${
                  imageUploadMode === "url"
                    ? "bg-white text-[#21D196] shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                🔗 URL de Imagen
              </button>
              <button
                type="button"
                onClick={() => setImageUploadMode("file")}
                className={`flex-1 px-4 py-2 rounded-md font-medium text-sm transition-all ${
                  imageUploadMode === "file"
                    ? "bg-white text-[#21D196] shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                📁 Subir Archivo
              </button>
            </div>

            {/* Input URL */}
            {imageUploadMode === "url" && (
              <div className="relative">
                <input
                  type="url"
                  id="imagen"
                  name="imagen"
                  value={form.imagen}
                  onChange={handleChange}
                  className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#21D196] focus:ring-4 focus:ring-[#21D196] focus:ring-opacity-20 transition-all"
                  placeholder="https://ejemplo.com/imagen.jpg"
                />
                <ImageIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            )}

            {/* Input File */}
            {imageUploadMode === "file" && (
              <div>
                <label className="relative block w-full cursor-pointer">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageFileChange}
                    className="hidden"
                  />
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-[#21D196] hover:bg-[#21D196] hover:bg-opacity-5 transition-all">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                    <p className="text-sm font-medium text-gray-700 mb-1">
                      Haz clic para seleccionar una imagen
                    </p>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF hasta 5MB
                    </p>
                  </div>
                </label>
                {servicioEditando?.imageUrl && (
                  <div className="mt-3 flex items-center gap-3 p-3 bg-green-50 border-2 border-green-200 rounded-lg">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <ImageIcon className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-green-900">
                        Imagen cargada exitosamente
                      </p>
                      <p className="text-xs text-green-600">
                        Listo para guardar
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={handleChange}
                      className="text-red-500 hover:text-red-700 p-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Vista previa de la imagen */}
            {servicioEditando?.imageUrl && (
              <div className="mt-4 p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border-2 border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                    Vista Previa
                  </p>
                  <button
                    type="button"
                    onClick={handleChange}
                    className="text-xs text-red-600 hover:text-red-700 font-medium flex items-center gap-1"
                  >
                    <Trash2 className="w-3 h-3" />
                    Eliminar
                  </button>
                </div>
                <div className="relative rounded-lg overflow-hidden bg-white shadow-sm">
                  <img
                    src={editingService.imageUrl}
                    alt="Preview"
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://via.placeholder.com/400x200/e5e7eb/6b7280?text=Error+al+cargar+imagen";
                    }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Botones de Acción */}
          <div className="flex gap-4 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 hover:border-gray-400 font-semibold transition-all"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-gradient-to-r from-[#21D196] to-[#1AB57F] text-white rounded-xl hover:shadow-lg hover:shadow-[#21D196]/30 font-semibold transition-all transform hover:scale-[1.02]"
            >
              {servicioEditando ? "💾 Guardar Cambios" : "✨ Crear Servicio"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
