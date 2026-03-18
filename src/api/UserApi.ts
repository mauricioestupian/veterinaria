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
  console.log("JSON de registro:", requestBody);

  const response = await fetch(API_URL + "/registrar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  });

  const responseJson = await response.json();

  if (!response.ok) {
    throw {
      message: responseJson.error || responseJson.errors || "Error al registrar el usuario" ,
      errors: responseJson.errors || responseJson.errores || null,
    };
  }

  return responseJson;
};