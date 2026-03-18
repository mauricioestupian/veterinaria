src/
├── api
├── assets
├── componentes
├── hooks
├── paginas
├── schemas
├── services
├── styles
├── types
├── App.jsx
├── main.jsx

-> api
Maneja llamadas HTTP directas (fetch/axios)
Ej: endpoints hacia tu backend Spring Boot
👉 Aquí se conecta con tu backend

->services
Lógica de negocio del frontend
Usa api para consumir datos
Ej: transformar respuestas, manejar reglas
👉 Buena práctica: separar lógica de api

->componentes
Componentes reutilizables
Botones, tablas, inputs, etc.

-> paginas
Vistas principales (rutas)
Ej: Home, Login, Dashboard
👉 Cada página usa componentes

-> hooks
Hooks personalizados de React
Ej: useAuth, useFetch

-> schemas
Validaciones (probablemente con Zod o Yup)
Formularios y reglas de datos

-> types
Tipos TypeScript
Ej: users.ts

->styles
Estilos globales o modulares

->assets
Imágenes, íconos, fuentes
