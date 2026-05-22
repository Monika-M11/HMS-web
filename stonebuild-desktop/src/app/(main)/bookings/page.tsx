"use client";

import React, {
  Suspense,
  useState,
} from "react";

import NewBooking from "./Newbooking";

const BookingList =
  React.lazy(
    () => import("./bookingList")
  );

type TabKey =
  | "entry"
  | "list";

export default function Page() {

  const [activeTab,
    setActiveTab] =
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
              ? "border-b-2 text-[#0E7FAB] border-[#0E7FAB]"
              : "text-gray-500"
          }`}
        >
          New Booking
        </button>

        <button
          onClick={() =>
            setActiveTab("list")
          }
          className={`px-6 py-3 font-medium transition-all ${
            activeTab === "list"
              ? "border-b-2 text-[#0E7FAB] border-[#0E7FAB]"
              : "text-gray-500"
          }`}
        >
          Booking List
        </button>

      </div>

      {/* Content */}
      <div>

        {activeTab === "entry" && (
          <NewBooking />
        )}

        {activeTab === "list" && (
          <Suspense
            fallback={
              <div>Loading...</div>
            }
          >
            <BookingList />
          </Suspense>
        )}

      </div>

    </div>
  );
}