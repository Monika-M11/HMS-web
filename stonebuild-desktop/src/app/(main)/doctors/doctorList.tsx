"use client";

import { theme } from "@/theme";

const doctors = [
  {
    id: 1,
    doctor_id: "DOC001",
    name: "Dr. John Mathews",
    specialization: "Cardiology",
    phone: "9876543210",
    email: "john.mathews@email.com",
    qualification: "MBBS, MD",
    consultation_fee: "800",
    availability: "Available",
  },
  {
    id: 2,
    doctor_id: "DOC002",
    name: "Dr. Priya Sharma",
    specialization: "Pediatrics",
    phone: "9123456789",
    email: "priya.sharma@email.com",
    qualification: "MBBS, DCH",
    consultation_fee: "600",
    availability: "On Leave",
  },
  {
    id: 3,
    doctor_id: "DOC003",
    name: "Dr. Arun Kumar",
    specialization: "Orthopedics",
    phone: "9012345678",
    email: "arun.kumar@email.com",
    qualification: "MBBS, MS",
    consultation_fee: "900",
    availability: "Available",
  },
  {
    id: 4,
    doctor_id: "DOC004",
    name: "Dr. Meera Nair",
    specialization: "Dermatology",
    phone: "9098765432",
    email: "meera.nair@email.com",
    qualification: "MBBS, MD",
    consultation_fee: "700",
    availability: "Available",
  },
  {
    id: 5,
    doctor_id: "DOC005",
    name: "Dr. Ravi Shankar",
    specialization: "Neurology",
    phone: "9345678901",
    email: "ravi.shankar@email.com",
    qualification: "MBBS, DM",
    consultation_fee: "1200",
    availability: "Busy",
  },
  {
    id: 6,
    doctor_id: "DOC006",
    name: "Dr. Sneha Reddy",
    specialization: "Gynecology",
    phone: "9871234567",
    email: "sneha.reddy@email.com",
    qualification: "MBBS, DGO",
    consultation_fee: "850",
    availability: "Available",
  },
  {
    id: 7,
    doctor_id: "DOC007",
    name: "Dr. Vignesh Kumar",
    specialization: "ENT",
    phone: "9988776655",
    email: "vignesh.kumar@email.com",
    qualification: "MBBS, MS",
    consultation_fee: "650",
    availability: "Available",
  },
  {
    id: 8,
    doctor_id: "DOC008",
    name: "Dr. Lakshmi Devi",
    specialization: "Ophthalmology",
    phone: "9876541203",
    email: "lakshmi.devi@email.com",
    qualification: "MBBS, MS",
    consultation_fee: "750",
    availability: "On Leave",
  },
  {
    id: 9,
    doctor_id: "DOC009",
    name: "Dr. Karthik Raj",
    specialization: "General Medicine",
    phone: "9786543210",
    email: "karthik.raj@email.com",
    qualification: "MBBS, MD",
    consultation_fee: "500",
    availability: "Available",
  },
  {
    id: 10,
    doctor_id: "DOC010",
    name: "Dr. Divya Menon",
    specialization: "Psychiatry",
    phone: "9567890123",
    email: "divya.menon@email.com",
    qualification: "MBBS, MD",
    consultation_fee: "1000",
    availability: "Busy",
  },
  {
    id: 11,
    doctor_id: "DOC011",
    name: "Dr. Harish Patel",
    specialization: "Urology",
    phone: "9876512340",
    email: "harish.patel@email.com",
    qualification: "MBBS, MCh",
    consultation_fee: "1100",
    availability: "Available",
  },
  {
    id: 12,
    doctor_id: "DOC012",
    name: "Dr. Asha Gupta",
    specialization: "Oncology",
    phone: "9011223344",
    email: "asha.gupta@email.com",
    qualification: "MBBS, DM",
    consultation_fee: "1500",
    availability: "Available",
  },
  {
    id: 13,
    doctor_id: "DOC013",
    name: "Dr. Rohit Verma",
    specialization: "Radiology",
    phone: "9887766554",
    email: "rohit.verma@email.com",
    qualification: "MBBS, MD",
    consultation_fee: "900",
    availability: "Busy",
  },
  {
    id: 14,
    doctor_id: "DOC014",
    name: "Dr. Nisha Rao",
    specialization: "Pediatrics",
    phone: "9776655443",
    email: "nisha.rao@email.com",
    qualification: "MBBS, DCH",
    consultation_fee: "650",
    availability: "Available",
  },
  {
    id: 15,
    doctor_id: "DOC015",
    name: "Dr. Bharath Singh",
    specialization: "Cardiology",
    phone: "9665544332",
    email: "bharath.singh@email.com",
    qualification: "MBBS, DM",
    consultation_fee: "1300",
    availability: "Available",
  },
  {
    id: 16,
    doctor_id: "DOC016",
    name: "Dr. Pooja Sharma",
    specialization: "Dermatology",
    phone: "9554433221",
    email: "pooja.sharma@email.com",
    qualification: "MBBS, MD",
    consultation_fee: "700",
    availability: "On Leave",
  },
  {
    id: 17,
    doctor_id: "DOC017",
    name: "Dr. Manoj Kumar",
    specialization: "Orthopedics",
    phone: "9443322110",
    email: "manoj.kumar@email.com",
    qualification: "MBBS, MS",
    consultation_fee: "950",
    availability: "Available",
  },
  {
    id: 18,
    doctor_id: "DOC018",
    name: "Dr. Gayathri Nair",
    specialization: "Gynecology",
    phone: "9332211009",
    email: "gayathri.nair@email.com",
    qualification: "MBBS, MS",
    consultation_fee: "850",
    availability: "Busy",
  },
  {
    id: 19,
    doctor_id: "DOC019",
    name: "Dr. Ajay Sharma",
    specialization: "Neurology",
    phone: "9221100998",
    email: "ajay.sharma@email.com",
    qualification: "MBBS, DM",
    consultation_fee: "1400",
    availability: "Available",
  },
  {
    id: 20,
    doctor_id: "DOC020",
    name: "Dr. Keerthi Raj",
    specialization: "ENT",
    phone: "9110099887",
    email: "keerthi.raj@email.com",
    qualification: "MBBS, MS",
    consultation_fee: "650",
    availability: "Available",
  },
  {
    id: 21,
    doctor_id: "DOC021",
    name: "Dr. Suresh Babu",
    specialization: "General Medicine",
    phone: "9009988776",
    email: "suresh.babu@email.com",
    qualification: "MBBS, MD",
    consultation_fee: "500",
    availability: "Available",
  },
  {
    id: 22,
    doctor_id: "DOC022",
    name: "Dr. Anitha Devi",
    specialization: "Psychiatry",
    phone: "9898877665",
    email: "anitha.devi@email.com",
    qualification: "MBBS, MD",
    consultation_fee: "1000",
    availability: "Busy",
  },
  {
    id: 23,
    doctor_id: "DOC023",
    name: "Dr. Naveen Kumar",
    specialization: "Urology",
    phone: "9787766554",
    email: "naveen.kumar@email.com",
    qualification: "MBBS, MCh",
    consultation_fee: "1100",
    availability: "Available",
  },
  {
    id: 24,
    doctor_id: "DOC024",
    name: "Dr. Swathi Rao",
    specialization: "Oncology",
    phone: "9676655443",
    email: "swathi.rao@email.com",
    qualification: "MBBS, DM",
    consultation_fee: "1500",
    availability: "Available",
  },
  {
    id: 25,
    doctor_id: "DOC025",
    name: "Dr. Vikram Patel",
    specialization: "Radiology",
    phone: "9565544332",
    email: "vikram.patel@email.com",
    qualification: "MBBS, MD",
    consultation_fee: "900",
    availability: "On Leave",
  },
  {
    id: 26,
    doctor_id: "DOC026",
    name: "Dr. Deepak Verma",
    specialization: "Cardiology",
    phone: "9454433221",
    email: "deepak.verma@email.com",
    qualification: "MBBS, DM",
    consultation_fee: "1300",
    availability: "Available",
  },
  {
    id: 27,
    doctor_id: "DOC027",
    name: "Dr. Meena Krishnan",
    specialization: "Pediatrics",
    phone: "9343322110",
    email: "meena.krishnan@email.com",
    qualification: "MBBS, DCH",
    consultation_fee: "600",
    availability: "Available",
  },
  {
    id: 28,
    doctor_id: "DOC028",
    name: "Dr. Harini Menon",
    specialization: "Dermatology",
    phone: "9232211009",
    email: "harini.menon@email.com",
    qualification: "MBBS, MD",
    consultation_fee: "750",
    availability: "Busy",
  },
  {
    id: 29,
    doctor_id: "DOC029",
    name: "Dr. Kishore Rao",
    specialization: "Orthopedics",
    phone: "9121100998",
    email: "kishore.rao@email.com",
    qualification: "MBBS, MS",
    consultation_fee: "950",
    availability: "Available",
  },
  {
    id: 30,
    doctor_id: "DOC030",
    name: "Dr. Shalini Gupta",
    specialization: "Gynecology",
    phone: "9010099887",
    email: "shalini.gupta@email.com",
    qualification: "MBBS, DGO",
    consultation_fee: "850",
    availability: "Available",
  },
];

export default function DoctorList() {
  return (
    <div className="mt-6 border rounded-2xl overflow-hidden" style={{ borderColor: theme.border }}>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1100px]">
          <thead style={{ background: theme.primaryLight }}>
            <tr>
              <th className="p-4 text-left whitespace-nowrap">Doctor ID</th>
              <th className="p-4 text-left whitespace-nowrap">Name</th>
              <th className="p-4 text-left whitespace-nowrap">Specialization</th>
              <th className="p-4 text-left whitespace-nowrap">Phone</th>
              <th className="p-4 text-left whitespace-nowrap">Email</th>
              <th className="p-4 text-left whitespace-nowrap">Qualification</th>
              <th className="p-4 text-left whitespace-nowrap">Consultation Fee</th>
              <th className="p-4 text-left whitespace-nowrap">Availability</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor) => (
              <tr key={doctor.id} className="border-t hover:bg-gray-50">
                <td className="p-4 whitespace-nowrap">{doctor.doctor_id}</td>
                <td className="p-4 whitespace-nowrap">{doctor.name}</td>
                <td className="p-4 whitespace-nowrap">{doctor.specialization}</td>
                <td className="p-4 whitespace-nowrap">{doctor.phone}</td>
                <td className="p-4">{doctor.email}</td>
                <td className="p-4 whitespace-nowrap">{doctor.qualification}</td>
                <td className="p-4 whitespace-nowrap">₹{doctor.consultation_fee}</td>
                <td className="p-4 whitespace-nowrap">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    doctor.availability === "Available" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"
                  }`}>
                    {doctor.availability}
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