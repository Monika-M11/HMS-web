"use client";

import React,
{
  useState,
  Suspense,
} from "react";

import NewItem from "./Newstaff";


const ItemList = React.lazy(
  () => import("./staffList")
);

type TabKey =
  | "entry"
  | "list";

export default function Page() {

  const [activeTab, setActiveTab] =
    useState<TabKey>("entry");

  return (
    <div>

      {/* Tabs */}
      <div className="flex border-b border-gray-300">

        <button
          onClick={() =>
            setActiveTab("entry")
          }
          className={`px-6 py-3 font-medium transition-all ${
            activeTab === "entry"
              ? "border-b-2 text-[#095E80] border-[#095E80]"
              : "text-gray-500"
          }`}
        >
          New Staffs
        </button>

        <button
          onClick={() =>
            setActiveTab("list")
          }
          className={`px-6 py-3 font-medium transition-all ${
            activeTab === "list"
              ? "border-b-2 text-[#095E80] border-[#095E80]"
              : "text-gray-500"
          }`}
        >
          Staffs List
        </button>
      </div>

      {/* Content */}
      <div>

        {activeTab === "entry" && (
          <NewItem />
        )}

        {activeTab === "list" && (
          <Suspense
            fallback={
              <div className="p-6">
                Loading...
              </div>
            }
          >
            <ItemList />
          </Suspense>
        )}

      </div>
    </div>
  );
}