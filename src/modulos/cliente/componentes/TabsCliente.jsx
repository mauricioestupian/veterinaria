import { Calendar, PawPrint, User } from "lucide-react";

export default function TabsCliente({ activeTab, setActiveTab }) {
  const tabs = [
    { id: "pets", label: "Mis Mascotas", icon: PawPrint },
    { id: "appointments", label: "Mis Citas", icon: Calendar },
    { id: "profile", label: "Mi Perfil", icon: User },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm mb-6">
      <div className="border-b border-gray-200 flex">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-4 border-b-2 font-medium transition-colors
                ${
                  isActive
                    ? "border-[#21D196] text-[#21D196]"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }
              `}
            >
              <Icon className="w-5 h-5" />
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
