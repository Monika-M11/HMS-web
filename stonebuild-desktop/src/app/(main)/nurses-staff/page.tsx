"use client";

import React, { useState, Suspense, useEffect } from "react";
import NewStaff from "./NewStaff";
import { useSearchParams } from "next/navigation";

const StaffList = React.lazy(() => import("./StaffList"));

type TabKey = "entry" | "list";

export default function Page() {
  const searchParams = useSearchParams();
  const editId = searchParams.get("edit-id");

  const [activeTab, setActiveTab] = useState<TabKey>("entry");

  useEffect(() => {
    if (editId) setActiveTab("entry");
  }, [editId]);

  return (
    <div>
      <div className="flex border-b border-gray-300">
        <button
          onClick={() => setActiveTab("entry")}
          className={`px-6 py-3 font-medium transition-all ${
            activeTab === "entry"
              ? "border-b-2 text-[#0E7FAB] border-[#0E7FAB]"
              : "text-gray-500"
          }`}
        >
          New Staff
        </button>
        <button
          onClick={() => setActiveTab("list")}
          className={`px-6 py-3 font-medium transition-all ${
            activeTab === "list"
               ? "border-b-2 text-[#0E7FAB] border-[#0E7FAB]"
              : "text-gray-500"
          }`}
        >
          Staff List
        </button>
      </div>

      <div>
        {activeTab === "entry" && <NewStaff editId={editId} />}
        {activeTab === "list" && (
          <Suspense fallback={<div>Loading staff...</div>}>
            <StaffList />
          </Suspense>
        )}
      </div>
    </div>
  );
}