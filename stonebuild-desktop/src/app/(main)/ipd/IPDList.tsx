"use client";

import { theme } from "@/theme";

const admissions = [
  {
    id: 1,
    admission_no: "IPD001",
    patient: "Sharma",
    ward: "General",
    room: "101",
    bed: "A1",
    doctor: "Dr. John",
    admission_date: "05/06/2026",
    discharge_date: "",
    status: "Admitted",
  },
  {
    id: 2,
    admission_no: "IPD002",
    patient: "Rahul Verma",
    ward: "Surgical",
    room: "205",
    bed: "B3",
    doctor: "Dr. Ram",
    admission_date: "03/06/2026",
    discharge_date: "08/06/2026",
    status: "Discharged",
  },
  {
    id: 3,
    admission_no: "IPD003",
    patient: "Anu",
    ward: "ICU",
    room: "301",
    bed: "C1",
    doctor: "Dr. Sarah",
    admission_date: "07/06/2026",
    discharge_date: "",
    status: "Admitted",
  },
  {
    id: 4,
    admission_no: "IPD004",
    patient: "Priya Sharma",
    ward: "Maternity",
    room: "402",
    bed: "D2",
    doctor: "Dr. Meera",
    admission_date: "01/06/2026",
    discharge_date: "06/06/2026",
    status: "Discharged",
  },
  {
    id: 5,
    admission_no: "IPD005",
    patient: "Karthik",
    ward: "General",
    room: "103",
    bed: "A3",
    doctor: "Dr. John",
    admission_date: "08/06/2026",
    discharge_date: "",
    status: "Admitted",
  },
  {
    id: 6,
    admission_no: "IPD006",
    patient: "Sneha",
    ward: "Cardiology",
    room: "210",
    bed: "B1",
    doctor: "Dr. David",
    admission_date: "04/06/2026",
    discharge_date: "",
    status: "Admitted",
  },
  {
    id: 7,
    admission_no: "IPD007",
    patient: "Arun Kumar",
    ward: "Orthopedic",
    room: "220",
    bed: "B4",
    doctor: "Dr. Arun",
    admission_date: "02/06/2026",
    discharge_date: "07/06/2026",
    status: "Discharged",
  },
  {
    id: 8,
    admission_no: "IPD008",
    patient: "Divya",
    ward: "Pediatric",
    room: "115",
    bed: "A2",
    doctor: "Dr. Ram",
    admission_date: "06/06/2026",
    discharge_date: "",
    status: "Admitted",
  },
  {
    id: 9,
    admission_no: "IPD009",
    patient: "Rahul",
    ward: "General",
    room: "104",
    bed: "A4",
    doctor: "Dr. John",
    admission_date: "05/06/2026",
    discharge_date: "",
    status: "Admitted",
  },
  {
    id: 10,
    admission_no: "IPD010",
    patient: "Lakshmi",
    ward: "Neurology",
    room: "315",
    bed: "C3",
    doctor: "Dr. Ravi",
    admission_date: "01/06/2026",
    discharge_date: "05/06/2026",
    status: "Discharged",
  },
  {
    id: 11,
    admission_no: "IPD011",
    patient: "Ajay",
    ward: "ICU",
    room: "302",
    bed: "C2",
    doctor: "Dr. Sarah",
    admission_date: "07/06/2026",
    discharge_date: "",
    status: "Admitted",
  },
  {
    id: 12,
    admission_no: "IPD012",
    patient: "Keerthi",
    ward: "General",
    room: "105",
    bed: "A5",
    doctor: "Dr. David",
    admission_date: "03/06/2026",
    discharge_date: "",
    status: "Admitted",
  },
  {
    id: 13,
    admission_no: "IPD013",
    patient: "Naveen",
    ward: "Surgical",
    room: "207",
    bed: "B5",
    doctor: "Dr. Arun",
    admission_date: "02/06/2026",
    discharge_date: "09/06/2026",
    status: "Discharged",
  },
  {
    id: 14,
    admission_no: "IPD014",
    patient: "Harini",
    ward: "Maternity",
    room: "404",
    bed: "D4",
    doctor: "Dr. Meera",
    admission_date: "08/06/2026",
    discharge_date: "",
    status: "Admitted",
  },
  {
    id: 15,
    admission_no: "IPD015",
    patient: "Suresh",
    ward: "Cardiology",
    room: "211",
    bed: "B2",
    doctor: "Dr. David",
    admission_date: "06/06/2026",
    discharge_date: "",
    status: "Admitted",
  },
  {
    id: 16,
    admission_no: "IPD016",
    patient: "Rani",
    ward: "Pediatric",
    room: "116",
    bed: "A6",
    doctor: "Dr. Ram",
    admission_date: "05/06/2026",
    discharge_date: "",
    status: "Admitted",
  },
  {
    id: 17,
    admission_no: "IPD017",
    patient: "Kumar",
    ward: "Orthopedic",
    room: "221",
    bed: "B6",
    doctor: "Dr. Arun",
    admission_date: "01/06/2026",
    discharge_date: "08/06/2026",
    status: "Discharged",
  },
  {
    id: 18,
    admission_no: "IPD018",
    patient: "Aishwarya",
    ward: "General",
    room: "106",
    bed: "A7",
    doctor: "Dr. John",
    admission_date: "07/06/2026",
    discharge_date: "",
    status: "Admitted",
  },
  {
    id: 19,
    admission_no: "IPD019",
    patient: "Bharath",
    ward: "Neurology",
    room: "316",
    bed: "C4",
    doctor: "Dr. Ravi",
    admission_date: "04/06/2026",
    discharge_date: "",
    status: "Admitted",
  },
  {
    id: 20,
    admission_no: "IPD020",
    patient: "Nisha",
    ward: "ICU",
    room: "303",
    bed: "C5",
    doctor: "Dr. Sarah",
    admission_date: "08/06/2026",
    discharge_date: "",
    status: "Admitted",
  },
  {
    id: 21,
    admission_no: "IPD021",
    patient: "Manoj",
    ward: "Surgical",
    room: "208",
    bed: "B7",
    doctor: "Dr. Arun",
    admission_date: "06/06/2026",
    discharge_date: "",
    status: "Admitted",
  },
  {
    id: 22,
    admission_no: "IPD022",
    patient: "Gayathri",
    ward: "Maternity",
    room: "405",
    bed: "D5",
    doctor: "Dr. Meera",
    admission_date: "03/06/2026",
    discharge_date: "07/06/2026",
    status: "Discharged",
  },
  {
    id: 23,
    admission_no: "IPD023",
    patient: "Rohit",
    ward: "General",
    room: "107",
    bed: "A8",
    doctor: "Dr. John",
    admission_date: "05/06/2026",
    discharge_date: "",
    status: "Admitted",
  },
  {
    id: 24,
    admission_no: "IPD024",
    patient: "Swathi",
    ward: "Cardiology",
    room: "212",
    bed: "B8",
    doctor: "Dr. David",
    admission_date: "07/06/2026",
    discharge_date: "",
    status: "Admitted",
  },
  {
    id: 25,
    admission_no: "IPD025",
    patient: "Vikram",
    ward: "Orthopedic",
    room: "222",
    bed: "B9",
    doctor: "Dr. Arun",
    admission_date: "02/06/2026",
    discharge_date: "06/06/2026",
    status: "Discharged",
  },
  {
    id: 26,
    admission_no: "IPD026",
    patient: "Pooja",
    ward: "Pediatric",
    room: "117",
    bed: "A9",
    doctor: "Dr. Ram",
    admission_date: "08/06/2026",
    discharge_date: "",
    status: "Admitted",
  },
  {
    id: 27,
    admission_no: "IPD027",
    patient: "Deepak",
    ward: "Neurology",
    room: "317",
    bed: "C6",
    doctor: "Dr. Ravi",
    admission_date: "04/06/2026",
    discharge_date: "",
    status: "Admitted",
  },
  {
    id: 28,
    admission_no: "IPD028",
    patient: "Meena",
    ward: "General",
    room: "108",
    bed: "A10",
    doctor: "Dr. John",
    admission_date: "06/06/2026",
    discharge_date: "",
    status: "Admitted",
  },
  {
    id: 29,
    admission_no: "IPD029",
    patient: "Kishore",
    ward: "ICU",
    room: "304",
    bed: "C7",
    doctor: "Dr. Sarah",
    admission_date: "07/06/2026",
    discharge_date: "",
    status: "Admitted",
  },
  {
    id: 30,
    admission_no: "IPD030",
    patient: "Shalini",
    ward: "Maternity",
    room: "406",
    bed: "D6",
    doctor: "Dr. Meera",
    admission_date: "08/06/2026",
    discharge_date: "",
    status: "Admitted",
  },
];

export default function IPDList() {
  return (
    <div className="mt-6 border rounded-2xl overflow-hidden" style={{ borderColor: theme.border }}>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1100px]">
          <thead style={{ background: theme.primaryLight }}>
            <tr>
              <th className="p-4 text-left whitespace-nowrap">Admission No</th>
              <th className="p-4 text-left whitespace-nowrap">Patient</th>
              <th className="p-4 text-left whitespace-nowrap">Ward</th>
              <th className="p-4 text-left whitespace-nowrap">Room</th>
              <th className="p-4 text-left whitespace-nowrap">Bed</th>
              <th className="p-4 text-left whitespace-nowrap">Doctor</th>
              <th className="p-4 text-left whitespace-nowrap">Admission Date</th>
              <th className="p-4 text-left whitespace-nowrap">Discharge Date</th>
              <th className="p-4 text-left whitespace-nowrap">Status</th>
            </tr>
          </thead>
          <tbody>
            {admissions.map((admission) => (
              <tr key={admission.id} className="border-t hover:bg-gray-50">
                <td className="p-4 whitespace-nowrap">{admission.admission_no}</td>
                <td className="p-4 whitespace-nowrap">{admission.patient}</td>
                <td className="p-4 whitespace-nowrap">{admission.ward}</td>
                <td className="p-4 whitespace-nowrap">{admission.room}</td>
                <td className="p-4 whitespace-nowrap">{admission.bed}</td>
                <td className="p-4 whitespace-nowrap">{admission.doctor}</td>
                <td className="p-4 whitespace-nowrap">{admission.admission_date}</td>
                <td className="p-4 whitespace-nowrap">{admission.discharge_date || "-"}</td>
                <td className="p-4 whitespace-nowrap">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    admission.status === "Discharged" 
                      ? "bg-green-100 text-green-700" 
                      : "bg-blue-100 text-blue-700"
                  }`}>
                    {admission.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}