"use client";

import React, { useEffect, useState, Suspense } from "react";
import ContactForm from "./NewContact";
import { useSearchParams } from "next/navigation";

const ContactList = React.lazy(() => import("./ContactList"));

type TabKey = "entry" | "list";

function PatientsContent() {
  const searchParams = useSearchParams();
  const editId = searchParams.get("edit-id");

  const [activeTab, setActiveTab] = useState<TabKey>("entry");

  useEffect(() => {
    if (editId) setActiveTab("entry");
  }, [editId]);

  return (
    <div className="">
      <div className="flex border-b border-gray-300">
        <button
          onClick={() => setActiveTab("entry")}
          className={`px-6 py-3 font-medium transition-all ${
            activeTab === "entry"
              ? "border-b-2 border-[#103BB5] text-[#103BB5]"
              : "text-gray-500 hover:text-[#103BB5]"
          }`}
        >
          New Patient
        </button>

        <button
          onClick={() => setActiveTab("list")}
          className={`px-6 py-3 font-medium transition-all ${
            activeTab === "list"
              ? "border-b-2 border-[#103BB5] text-[#103BB5]"
              : "text-gray-500 hover:text-[#103BB5]"
          }`}
        >
          Patients List
        </button>
      </div>

      <div>
        {activeTab === "entry" && <ContactForm editId={editId} />}

        {activeTab === "list" && (
          <Suspense fallback={<div>Loading patients...</div>}>
            <ContactList />
          </Suspense>
        )}
      </div>
    </div>
  );
}

export default function Page() {
  // Next.js requires that pages/components using `useSearchParams()` are under a Suspense boundary.
  return (
    <Suspense fallback={<div className="p-8">Loading patients page...</div>}>
      <PatientsContent />
    </Suspense>
  );
}

