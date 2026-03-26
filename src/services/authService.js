const API_URL = "http://127.0.0.1:8080/auth/login";

export async function loginUsuario(data) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const json = await res.json();

  if (!res.ok) {
    throw new Error(json.mensaje || "Error en login");
  }

  return json;
}