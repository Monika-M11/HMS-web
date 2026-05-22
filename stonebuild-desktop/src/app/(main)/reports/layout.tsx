"use client";

import Link from "next/link";

import { usePathname }
from "next/navigation";

import { theme }
from "@/theme";

const menus = [
  {
    label: "Sales Report",
    path: "/reports/sales-report",
  },
  {
    label: "Profit Report",
    path: "/reports/profit-report",
  },
  {
    label: "Purchase Report",
    path: "/reports/purchase-report",
  },
  {
    label: "B2B Sales",
    path: "/reports/B2Bsales",
  },
  {
    label: "B2C Sales",
    path: "/reports/B2Csales",
  },
  {
    label: "Stock Report",
    path: "/reports/stock-report",
  },
];

export default function ReportsLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const pathname =
    usePathname();

  return (

    <div
      className="
        flex
        h-[calc(100vh-64px)]
        overflow-hidden
      "
    >

      {/* REPORT SIDEBAR */}
      <div
        className="
          w-[240px]
          border-r
          bg-white
          p-4
          overflow-y-auto
        "
        style={{
          borderColor:
            theme.border,
        }}
      >

        <h2
          className="
            text-lg
            font-semibold
            mb-5
          "
          style={{
            color:
              theme.primaryDark,
          }}
        >
          Reports
        </h2>

        <div className="space-y-2">

          {menus.map((menu) => {

            const isActive =
              pathname ===
              menu.path;

            return (

              <Link
                key={menu.path}
                href={menu.path}
                className={`
                  block
                  rounded-lg
                  px-4
                  py-3
                  text-sm
                  font-medium
                  transition
                  ${
                    isActive
                      ? "bg-gray-100"
                      : "hover:bg-gray-50"
                  }
                `}
              >
                {menu.label}
              </Link>

            );
          })}

        </div>

      </div>

      {/* REPORT CONTENT */}
      <div
        className="
          flex-1
          overflow-y-auto
          p-6
        "
      >

        {children}

      </div>

    </div>
  );
}