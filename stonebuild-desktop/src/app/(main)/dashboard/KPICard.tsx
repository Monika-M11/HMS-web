"use client";

import { theme } from "@/theme";

type KPICardProps = {
  title: string;
  value: string;
  subtitle?: string;
  color?: "blue" | "green" | "red" | "purple";
  icon?: React.ReactNode;
};

export const KPICard = ({ title, value, subtitle, color = "blue", icon }: KPICardProps) => {
  const colorClasses = {
    blue: "border-blue-200 text-blue-700 bg-blue-50",
    green: "border-green-200 text-green-700 bg-green-50",
    red: "border-red-200 text-red-700 bg-red-50",
    purple: "border-purple-200 text-purple-700 bg-purple-50",
  };

  return (
    <div className={`p-6 rounded-2xl border-2 ${colorClasses[color]} hover:shadow-lg transition-all`}>
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-sm font-medium opacity-80">{title}</h3>
          <p className="text-3xl font-bold mt-2">{value}</p>
          {subtitle && <p className="text-sm mt-2 opacity-75">{subtitle}</p>}
        </div>
        {icon && <div className="opacity-70">{icon}</div>}
      </div>
    </div>
  );
};