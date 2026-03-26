import { useState } from "react";

// 🖼️ Imagen fallback (cuando falla la carga)
const FALLBACK =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4=";

export function SmartImage({
  src,
  alt = "",
  className = "",
  ...props
}) {

  // ⏳ Estado de carga
  const [loading, setLoading] = useState(true);

  // ❌ Estado de error
  const [error, setError] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>

      {/* 🔄 Skeleton mientras carga */}
      {loading && !error && (
        <div className="absolute inset-0 animate-pulse bg-gray-200"></div>
      )}

      <img
        // 🔁 Si falla la imagen → usa fallback
        src={error ? FALLBACK : src}
        alt={alt}
        loading="lazy"

        // ✅ Cuando carga correctamente
        onLoad={() => setLoading(false)}

        // ❌ Si falla
        onError={() => {
          setError(true);
          setLoading(false);
        }}

        className={`w-full h-full object-cover transition-opacity duration-300 ${
          loading ? "opacity-0" : "opacity-100"
        }`}

        {...props}
      />
    </div>
  );
}