"use client";

import { theme } from "@/theme";

export default function PurchaseList() {
  return (
    <div
      className="mt-6 border rounded-2xl overflow-hidden"
      style={{
        borderColor:
          theme.border,
      }}
    >
      <table className="w-full">

        <thead
          style={{
            background:
              theme.primaryLight,
          }}
        >
          <tr>
            <th className="p-4 text-left">
              Purchase No
            </th>

            <th className="p-4 text-left">
              Supplier
            </th>

            <th className="p-4 text-left">
              Date
            </th>

            <th className="p-4 text-left">
              Total
            </th>

            <th className="p-4 text-left">
              Status
            </th>
          </tr>
        </thead>

        <tbody>

          <tr className="border-t">
            <td className="p-4">
              PUR-001
            </td>

            <td className="p-4">
              Apollo Pharma
            </td>

            <td className="p-4">
              19/05/2026
            </td>

            <td className="p-4">
              ₹2500
            </td>

            <td className="p-4">
              Completed
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  );
}