"use client";

import { theme }
from "@/theme";

const consultations = [
  {
    id: "CONS-001",
    patient: "Monika",
    doctor: "Dr. Arun",
    illness: "Fever",
    status: "Completed",
  },
  {
    id: "CONS-002",
    patient: "Rahul",
    doctor: "Dr. Kumar",
    illness: "Cold",
    status: "Pending",
  },
];

export default function ConsultationList() {

  return (
    <div
      className="
        mt-6
        border
        rounded-2xl
        overflow-hidden
      "
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
              Consultation ID
            </th>

            <th className="p-4 text-left">
              Patient
            </th>

            <th className="p-4 text-left">
              Doctor
            </th>

            <th className="p-4 text-left">
              Illness
            </th>

            <th className="p-4 text-left">
              Status
            </th>

          </tr>

        </thead>

        <tbody>

          {consultations.map(
            (item) => (
              <tr
                key={item.id}
                className="border-t"
              >

                <td className="p-4">
                  {item.id}
                </td>

                <td className="p-4">
                  {item.patient}
                </td>

                <td className="p-4">
                  {item.doctor}
                </td>

                <td className="p-4">
                  {item.illness}
                </td>

                <td className="p-4">
                  {item.status}
                </td>

              </tr>
            )
          )}

        </tbody>

      </table>

    </div>
  );
}