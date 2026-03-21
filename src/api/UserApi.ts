import { RegisterData } from "../types/user";

const API_URL = "http://127.0.0.1:8080/api/usuarios";

export const registroUsuario = async (data: RegisterData) => {
  const requestBody = {
    nombre: data.nombre,
    apellido: data.apellido,
    documento: {
      tipo: data.documento.tipo,
      numero: data.documento.numero,
    },
    direccion: {
      calle: data.direccion.calle,
      ciudad: data.direccion.ciudad,
      pais: data.direccion.pais,
      codigoPostal: data.direccion.codigoPostal,
    },
    email: data.email,
    usuario: data.usuario,
    password: data.password,
    roles: data.roles,
  };
  try {
    const response = await fetch(API_URL + "/registrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });
    
    let responseJson;

    try {

      responseJson = await response.json();
    } catch {
      throw {
        messaje: "Respuesta invalida del servidor",
        errors: null,
      };
    }
    if (!response.ok) {
      throw {
        messaje:
        responseJson.message || "Error al registrar el usuario",
        errors: responseJson.errors || null,
      };
    }

    return responseJson;
  } catch (error: any) {
      throw {
        message: "Error de conexion con Servidor",
        errors: "",
      };
    }
};