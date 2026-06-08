"use client";

import React, { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import NewBilling from "./NewBilling";

const BillingList = React.lazy(() => import("./BillingList"));

type TabKey = "entry" | "list";

function BillingContent() {
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
          New Invoice
        </button>
        <button
          onClick={() => setActiveTab("list")}
          className={`px-6 py-3 font-medium transition-all ${
            activeTab === "list"
              ? "border-b-2 text-[#0E7FAB] border-[#0E7FAB]"
              : "text-gray-500"
          }`}
        >
          Billing List
        </button>
      </div>

      <div>
        {activeTab === "entry" && <NewBilling editId={editId} />}

        {activeTab === "list" && (
          <Suspense fallback={<div>Loading invoices...</div>}>
            <BillingList />
          </Suspense>
        )}
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div className="p-8">Loading billing page...</div>}>
      <BillingContent />
    </Suspense>
  );
}

