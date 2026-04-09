const API_URL = "http://localhost:8080/api/servicios";

export const obtenerCategorias = async () => {
  try {
    const response = await fetch(API_URL+"/categorias", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener categorias:", error);
    throw error;
  }
};

export const CrearServicio = async (data) => {
  try {
    const response = await fetch(API_URL+"/crear", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const servicioCreado = await response.json();
    return servicioCreado;
  } catch (error) {
    console.error("Error al crear servicio:", error);
    throw error;
  }
};

export const actualizarServicio = async (id, data) => {
  try {
    const response = await fetch(`${API_URL}/actualizar/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const servicioActualizado = await response.json();
    return servicioActualizado;
  } catch (error) {
    console.error("Error al actualizar servicio:", error);
    throw error;
  }
};
