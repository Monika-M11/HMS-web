"use client";

import React, { useState, Suspense, useEffect } from "react";
import NewInventory from "./NewInventory";
import { useSearchParams } from "next/navigation";

const InventoryList = React.lazy(() => import("./InventoryList"));

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
          New Inventory Item
        </button>
        <button
          onClick={() => setActiveTab("list")}
          className={`px-6 py-3 font-medium transition-all ${
            activeTab === "list"
               ? "border-b-2 text-[#0E7FAB] border-[#0E7FAB]"
              : "text-gray-500"
          }`}
        >
          Inventory List
        </button>
      </div>

      <div>
        {activeTab === "entry" && <NewInventory editId={editId} />}
        {activeTab === "list" && (
          <Suspense fallback={<div>Loading inventory...</div>}>
            <InventoryList />
          </Suspense>
        )}
      </div>
    </div>
  );
}