"use client";

import { theme }
from "@/theme";


const appointments = [
  {
    id: 1,
    appointmentId: "APP001",
    patient: "Monika",
    doctor: "Dr. John",
    department: "General Medicine",
    date: "21/05/2026",
    time: "10:30 AM",
    status: "Confirmed",
    remarks: "Fever with cough",
  },
  {
    id: 2,
    appointmentId: "APP002",
    patient: "Anu",
    doctor: "Dr. Ram",
    department: "Pediatrics",
    date: "21/05/2026",
    time: "12:00 PM",
    status: "Pending",
    remarks: "Routine checkup",
  },
  {
    id: 3,
    appointmentId: "APP003",
    patient: "Karthik",
    doctor: "Dr. Sarah",
    department: "Cardiology",
    date: "22/05/2026",
    time: "09:00 AM",
    status: "Confirmed",
    remarks: "Chest pain evaluation",
  },
  {
    id: 4,
    appointmentId: "APP004",
    patient: "Priya",
    doctor: "Dr. David",
    department: "Dermatology",
    date: "22/05/2026",
    time: "11:15 AM",
    status: "Completed",
    remarks: "Skin allergy treatment",
  },
  {
    id: 5,
    appointmentId: "APP005",
    patient: "Arun",
    doctor: "Dr. Meera",
    department: "Orthopedics",
    date: "22/05/2026",
    time: "02:00 PM",
    status: "Cancelled",
    remarks: "Knee pain consultation",
  },
  {
    id: 6,
    appointmentId: "APP006",
    patient: "Divya",
    doctor: "Dr. Ram",
    department: "Pediatrics",
    date: "23/05/2026",
    time: "10:00 AM",
    status: "Confirmed",
    remarks: "Vaccination follow-up",
  },
  {
    id: 7,
    appointmentId: "APP007",
    patient: "Rahul",
    doctor: "Dr. John",
    department: "General Medicine",
    date: "23/05/2026",
    time: "03:30 PM",
    status: "Pending",
    remarks: "Headache and fatigue",
  },
  {
    id: 8,
    appointmentId: "APP008",
    patient: "Sneha",
    doctor: "Dr. Sarah",
    department: "Cardiology",
    date: "24/05/2026",
    time: "09:45 AM",
    status: "Confirmed",
    remarks: "ECG review",
  },
  {
    id: 9,
    appointmentId: "APP009",
    patient: "Vignesh",
    doctor: "Dr. Meera",
    department: "Orthopedics",
    date: "24/05/2026",
    time: "01:15 PM",
    status: "Completed",
    remarks: "Back pain assessment",
  },
  {
    id: 10,
    appointmentId: "APP010",
    patient: "Lakshmi",
    doctor: "Dr. David",
    department: "Dermatology",
    date: "24/05/2026",
    time: "04:00 PM",
    status: "Confirmed",
    remarks: "Acne treatment",
  },
  {
    id: 11,
    appointmentId: "APP011",
    patient: "Ajay",
    doctor: "Dr. John",
    department: "General Medicine",
    date: "25/05/2026",
    time: "08:30 AM",
    status: "Pending",
    remarks: "Diabetes review",
  },
  {
    id: 12,
    appointmentId: "APP012",
    patient: "Keerthi",
    doctor: "Dr. Sarah",
    department: "Cardiology",
    date: "25/05/2026",
    time: "10:45 AM",
    status: "Confirmed",
    remarks: "Blood pressure monitoring",
  },
  {
    id: 13,
    appointmentId: "APP013",
    patient: "Naveen",
    doctor: "Dr. Ram",
    department: "Pediatrics",
    date: "25/05/2026",
    time: "01:00 PM",
    status: "Completed",
    remarks: "Child wellness visit",
  },
  {
    id: 14,
    appointmentId: "APP014",
    patient: "Harini",
    doctor: "Dr. Meera",
    department: "Orthopedics",
    date: "25/05/2026",
    time: "03:00 PM",
    status: "Confirmed",
    remarks: "Fracture follow-up",
  },
  {
    id: 15,
    appointmentId: "APP015",
    patient: "Suresh",
    doctor: "Dr. David",
    department: "Dermatology",
    date: "26/05/2026",
    time: "11:00 AM",
    status: "Cancelled",
    remarks: "Psoriasis consultation",
  },
  {
    id: 16,
    appointmentId: "APP016",
    patient: "Rani",
    doctor: "Dr. John",
    department: "General Medicine",
    date: "26/05/2026",
    time: "12:30 PM",
    status: "Confirmed",
    remarks: "Seasonal flu symptoms",
  },
  {
    id: 17,
    appointmentId: "APP017",
    patient: "Kumar",
    doctor: "Dr. Sarah",
    department: "Cardiology",
    date: "26/05/2026",
    time: "02:00 PM",
    status: "Pending",
    remarks: "Heart palpitations",
  },
  {
    id: 18,
    appointmentId: "APP018",
    patient: "Aishwarya",
    doctor: "Dr. Ram",
    department: "Pediatrics",
    date: "27/05/2026",
    time: "09:15 AM",
    status: "Completed",
    remarks: "Growth assessment",
  },
  {
    id: 19,
    appointmentId: "APP019",
    patient: "Bharath",
    doctor: "Dr. Meera",
    department: "Orthopedics",
    date: "27/05/2026",
    time: "11:45 AM",
    status: "Confirmed",
    remarks: "Shoulder pain review",
  },
  {
    id: 20,
    appointmentId: "APP020",
    patient: "Nisha",
    doctor: "Dr. David",
    department: "Dermatology",
    date: "27/05/2026",
    time: "03:15 PM",
    status: "Pending",
    remarks: "Eczema consultation",
  },
  {
    id: 21,
    appointmentId: "APP021",
    patient: "Manoj",
    doctor: "Dr. John",
    department: "General Medicine",
    date: "28/05/2026",
    time: "09:30 AM",
    status: "Confirmed",
    remarks: "Annual health checkup",
  },
  {
    id: 22,
    appointmentId: "APP022",
    patient: "Gayathri",
    doctor: "Dr. Sarah",
    department: "Cardiology",
    date: "28/05/2026",
    time: "11:00 AM",
    status: "Completed",
    remarks: "Stress test review",
  },
  {
    id: 23,
    appointmentId: "APP023",
    patient: "Rohit",
    doctor: "Dr. Ram",
    department: "Pediatrics",
    date: "28/05/2026",
    time: "01:30 PM",
    status: "Confirmed",
    remarks: "Immunization schedule",
  },
  {
    id: 24,
    appointmentId: "APP024",
    patient: "Swathi",
    doctor: "Dr. Meera",
    department: "Orthopedics",
    date: "28/05/2026",
    time: "04:00 PM",
    status: "Pending",
    remarks: "Joint pain evaluation",
  },
  {
    id: 25,
    appointmentId: "APP025",
    patient: "Vikram",
    doctor: "Dr. David",
    department: "Dermatology",
    date: "29/05/2026",
    time: "10:15 AM",
    status: "Confirmed",
    remarks: "Hair loss treatment",
  },
  {
    id: 26,
    appointmentId: "APP026",
    patient: "Pooja",
    doctor: "Dr. John",
    department: "General Medicine",
    date: "29/05/2026",
    time: "12:00 PM",
    status: "Completed",
    remarks: "Migraine management",
  },
  {
    id: 27,
    appointmentId: "APP027",
    patient: "Deepak",
    doctor: "Dr. Sarah",
    department: "Cardiology",
    date: "29/05/2026",
    time: "02:30 PM",
    status: "Cancelled",
    remarks: "Cardiac screening",
  },
  {
    id: 28,
    appointmentId: "APP028",
    patient: "Shalini",
    doctor: "Dr. Ram",
    department: "Pediatrics",
    date: "30/05/2026",
    time: "09:00 AM",
    status: "Confirmed",
    remarks: "Routine vaccination",
  },
  {
    id: 29,
    appointmentId: "APP029",
    patient: "Kishore",
    doctor: "Dr. Meera",
    department: "Orthopedics",
    date: "30/05/2026",
    time: "11:30 AM",
    status: "Pending",
    remarks: "Sports injury follow-up",
  },
  {
    id: 30,
    appointmentId: "APP030",
    patient: "Meena",
    doctor: "Dr. David",
    department: "Dermatology",
    date: "30/05/2026",
    time: "03:00 PM",
    status: "Confirmed",
    remarks: "Skin rash diagnosis",
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
              Appointment ID
            </th>

            <th className="p-4 text-left">
              Patient
            </th>

            <th className="p-4 text-left">
              Doctor
            </th>

            <th className="p-4 text-left">
              Department
            </th>

            <th className="p-4 text-left">
              Date
            </th>

            <th className="p-4 text-left">
              Time
            </th>

            <th className="p-4 text-left">
              Status
            </th>

            <th className="p-4 text-left">
              Remarks
            </th>

          </tr>

        </thead>

        <tbody>

          {appointments.map((appointment) => (

            <tr
              key={appointment.id}
              className="border-t"
            >

              <td className="p-4">
                {appointment.appointmentId}
              </td>

              <td className="p-4">
                {appointment.patient}
              </td>

              <td className="p-4">
                {appointment.doctor}
              </td>

              <td className="p-4">
                {appointment.department}
              </td>

              <td className="p-4">
                {appointment.date}
              </td>

              <td className="p-4">
                {appointment.time}
              </td>

              <td className="p-4">
                {appointment.status}
              </td>

              <td className="p-4">
                {appointment.remarks}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}