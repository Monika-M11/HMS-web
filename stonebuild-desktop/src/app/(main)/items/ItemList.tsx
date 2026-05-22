"use client";

import { theme } from "@/theme";

const items = [
  {
    id: 1,
    medicine_name: "Paracetamol",
    shortcode: "PCM",
    hsn: "3004",
    gst: "12%",
    unit: "Box",
  },
  {
    id: 2,
    medicine_name: "Dolo 650",
    shortcode: "D650",
    hsn: "3004",
    gst: "5%",
    unit: "Strip",
  },
];

export default function ItemList() {
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
              Medicine
            </th>

            <th className="p-4 text-left">
              Short Code
            </th>

            <th className="p-4 text-left">
              HSN
            </th>

            <th className="p-4 text-left">
              GST
            </th>

            <th className="p-4 text-left">
              Unit
            </th>

          </tr>
        </thead>

        <tbody>

          {items.map((item) => (
            <tr
              key={item.id}
              className="border-t"
            >
              <td className="p-4">
                {item.medicine_name}
              </td>

              <td className="p-4">
                {item.shortcode}
              </td>

              <td className="p-4">
                {item.hsn}
              </td>

              <td className="p-4">
                {item.gst}
              </td>

              <td className="p-4">
                {item.unit}
              </td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  );
}