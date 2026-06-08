"use client";

import React, { useState, Suspense, useEffect } from "react";
import NewIPD from "./NewIPD";
import { useSearchParams } from "next/navigation";

const IPDList = React.lazy(() => import("./IPDList"));

type TabKey = "entry" | "list";

function IPDContent() {
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
          New Admission
        </button>
        <button
          onClick={() => setActiveTab("list")}
          className={`px-6 py-3 font-medium transition-all ${
            activeTab === "list"
              ? "border-b-2 text-[#0E7FAB] border-[#0E7FAB]"
              : "text-gray-500"
          }`}
        >
          IPD Admissions List
        </button>
      </div>

      <div>
        {activeTab === "entry" && <NewIPD editId={editId} />}
        {activeTab === "list" && (
          <Suspense fallback={<div>Loading IPD admissions...</div>}>
            <IPDList />
          </Suspense>
        )}
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div className="p-8">Loading IPD page...</div>}>
      <IPDContent />
    </Suspense>
  );
}