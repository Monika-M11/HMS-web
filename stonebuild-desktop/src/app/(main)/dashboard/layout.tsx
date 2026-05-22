"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { getSession } from "@/app/utils/api";
import { theme } from "@/theme";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const session = getSession();

    console.log(
      "SESSION IN DASHBOARD LAYOUT:",
      session
    );

    // ✅ TEMPORARY UI-ONLY AUTH
    // allow dashboard if user exists
    if (!session?.user) {
      router.replace("/login");
    }
  }, [mounted, router]);

  if (!mounted) {
    return (
      <div
  className="text-lg font-medium mb-2"
  style={{ color: theme.primaryDark }}
      >
        Loading...
      </div>
    );
  }

  return <>{children}</>;
}