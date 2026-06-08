"use client";

import React, { useState, Suspense, useEffect } from "react";
import NewDoctor from "./newDoctor";
import { useSearchParams } from "next/navigation";

const DoctorList = React.lazy(() => import("./doctorList"));

type TabKey = "entry" | "list";

function DoctorsContent() {
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
              ? "border-b-2 border-[#103BB5] text-[#103BB5]"
              : "text-gray-500 hover:text-[#103BB5]"
          }`}
        >
          New Doctor
        </button>
        <button
          onClick={() => setActiveTab("list")}
          className={`px-6 py-3 font-medium transition-all ${
            activeTab === "list"
              ? "border-b-2 border-[#103BB5] text-[#103BB5]"
              : "text-gray-500 hover:text-[#103BB5]"
          }`}
        >
          Doctors List
        </button>
      </div>

      <div>
        {activeTab === "entry" && <NewDoctor editId={editId} />}
        {activeTab === "list" && (
          <Suspense fallback={<div>Loading doctors...</div>}>
            <DoctorList />
          </Suspense>
        )}
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div className="p-8">Loading Doctors Page...</div>}>
      <DoctorsContent />
    </Suspense>
  );
}