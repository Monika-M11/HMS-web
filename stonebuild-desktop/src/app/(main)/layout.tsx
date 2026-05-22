"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Sidebar from "./sidebar";

import { theme } from "@/theme";

import { usePathname } from "next/navigation";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  // const [activeMenu, setActiveMenu] =
  //   useState("Dashboard");

  const pathname = usePathname();

  const getPageTitle = () => {

  if (
    pathname.startsWith(
      "/reports"
    )
  ) {
    return "Reports";
  }

  if (
    pathname.startsWith(
      "/contacts"
    )
  ) {
    return "Contacts";
  }

  if (
    pathname.startsWith(
      "/items"
    )
  ) {
    return "Items";
  }

  if (
    pathname.startsWith(
      "/purchase"
    )
  ) {
    return "Purchase";
  }

  if (
    pathname.startsWith(
      "/sales"
    )
  ) {
    return "Sales";
  }

  if (
    pathname.startsWith(
      "/staffs"
    )
  ) {
    return "Staffs";
  }

  if (
    pathname.startsWith(
      "/bookings"
    )
  ) {
    return "Bookings";
  }

    if (
    pathname.startsWith(
      "/consultation"
    )
  ) {
    return "Consultation";
  }

  switch (pathname) {

    case "/dashboard":
      return "Dashboard";

    default:
      return "Dashboard";
  }
};


  // 🔐 Protect routes
  useEffect(() => {
    const token =
      localStorage.getItem("token");

    if (!token) {
      router.replace("/login")
    }
  }, [router]);

  return (
    <div
      className="flex h-screen"
      style={{
        background: theme.backgroundSoft,
      }}
    >
      {/* Sidebar */}
       <Sidebar
        // onMenuChange={setActiveMenu}
      />

      {/* Main Section */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Header */}
        <div
          className="
            h-16
            px-8
            flex
            items-center
            justify-between
            border-b
            backdrop-blur-md
          "
          style={{
            background:
              "rgba(255,255,255,0.85)",

            borderColor: theme.border,
          }}
        >
          {/* Page Title */}
          <div>
            <h1
              className="
                text-2xl
                font-semibold
                tracking-tight
              "
              style={{
                color:
                  theme.primaryDark,
              }}
            >
              {/* {activeMenu || "Dashboard"} */}

              {getPageTitle()}
            </h1>

            <p
              className="text-sm mt-1"
              style={{
                color:
                  theme.textSecondary,
              }}
            >
              Hms workspace
            </p>
          </div>

          {/* Logout */}
          <button
           onClick={() => {

  localStorage.removeItem("token");

  localStorage.removeItem("user");

  router.replace("/login");
  console.log("logged out!")

}}

            className="
              px-4 py-2
              rounded-xl
              transition-all
              duration-300
              text-sm
              font-medium
            "
            style={{
              background:
                theme.error,

              color:
                theme.errorDark,
            }}
          >
            Logout
          </button>
        </div>

        {/* Main Content */}
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
    </div>
  );
}