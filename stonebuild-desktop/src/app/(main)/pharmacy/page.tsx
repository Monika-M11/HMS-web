"use client";

import React, { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import NewMedicine from "./NewMedicine";

const MedicineList = React.lazy(() => import("./MedicineList"));

type TabKey = "entry" | "list";

function PharmacyContent() {
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
          New Medicine
        </button>
        <button
          onClick={() => setActiveTab("list")}
          className={`px-6 py-3 font-medium transition-all ${
            activeTab === "list"
              ? "border-b-2 text-[#0E7FAB] border-[#0E7FAB]"
              : "text-gray-500"
          }`}
        >
          Medicines List
        </button>
      </div>

      <div>
        {activeTab === "entry" && <NewMedicine editId={editId} />}

        {activeTab === "list" && (
          <Suspense fallback={<div>Loading medicines...</div>}>
            <MedicineList />
          </Suspense>
        )}
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div className="p-8">Loading pharmacy page...</div>}>
      <PharmacyContent />
    </Suspense>
  );
}

