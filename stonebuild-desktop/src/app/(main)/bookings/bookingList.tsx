"use client";

import { theme }
from "@/theme";

const bookings = [
  {
    id: 1,
    patient: "Monika",
    doctor: "Dr. John",
    date: "21/05/2026",
    time: "10:30 AM",
    illness: "Fever",
    status: "Confirmed",
  },
  {
    id: 2,
    patient: "Anu",
    doctor: "Dr. Ram",
    date: "21/05/2026",
    time: "12:00 PM",
    illness: "Cold",
    status: "Pending",
  },
];

export default function BookingList() {

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
              Patient
            </th>

            <th className="p-4 text-left">
              Doctor
            </th>

            <th className="p-4 text-left">
              Date
            </th>

            <th className="p-4 text-left">
              Time
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

          {bookings.map((booking) => (

            <tr
              key={booking.id}
              className="border-t"
            >

              <td className="p-4">
                {booking.patient}
              </td>

              <td className="p-4">
                {booking.doctor}
              </td>

              <td className="p-4">
                {booking.date}
              </td>

              <td className="p-4">
                {booking.time}
              </td>

              <td className="p-4">
                {booking.illness}
              </td>

              <td className="p-4">
                {booking.status}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}