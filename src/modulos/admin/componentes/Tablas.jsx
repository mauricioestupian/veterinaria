import {
  Briefcase,
  LayoutDashboard,
  PawPrint,
  UserCircle,
  Users,
} from "lucide-react";

export function Tablas({ activeTab, setActiveTab }) {
  const tabs = [
    { id: "overview", label: "Resumen", icon: LayoutDashboard },
    { id: "services", label: "Servicios", icon: Briefcase },
    { id: "employees", label: "Empleados", icon: Users },
    { id: "pets", label: "Mascotas", icon: PawPrint },
    { id: "clients", label: "Clientes", icon: UserCircle },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm mb-6">
      <div className="border-b">
        <nav className="flex flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-4 border-b-2 ${
                activeTab === tab.id
                  ? "border-[#21D196] text-[#21D196]"
                  : "text-gray-500"
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
