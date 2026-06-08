"use client";

import { theme } from "@/theme";

const opdVisits = [
  {
    id: 1,
    visit_number: "OPD001",
    patient: "Sharma",
    doctor: "Dr. John",
    symptoms: "Fever, Cough",
    diagnosis: "Viral Infection",
    prescription: "Paracetamol, Rest",
    follow_up_date: "15/06/2026",
    status: "Completed",
  },
  {
    id: 2,
    visit_number: "OPD002",
    patient: "Rahul Verma",
    doctor: "Dr. Ram",
    symptoms: "Headache",
    diagnosis: "Migraine",
    prescription: "Painkillers",
    follow_up_date: "20/06/2026",
    status: "Pending",
  },
  {
    id: 3,
    visit_number: "OPD003",
    patient: "Monika",
    doctor: "Dr. Sarah",
    symptoms: "Chest Pain",
    diagnosis: "Mild Angina",
    prescription: "Aspirin, ECG Review",
    follow_up_date: "18/06/2026",
    status: "Completed",
  },
  {
    id: 4,
    visit_number: "OPD004",
    patient: "Priya Sharma",
    doctor: "Dr. Meera",
    symptoms: "Skin Rash",
    diagnosis: "Allergic Dermatitis",
    prescription: "Antihistamine Cream",
    follow_up_date: "22/06/2026",
    status: "Pending",
  },
  {
    id: 5,
    visit_number: "OPD005",
    patient: "Karthik",
    doctor: "Dr. Arun",
    symptoms: "Knee Pain",
    diagnosis: "Ligament Strain",
    prescription: "Physiotherapy",
    follow_up_date: "25/06/2026",
    status: "Completed",
  },
  {
    id: 6,
    visit_number: "OPD006",
    patient: "Sneha",
    doctor: "Dr. David",
    symptoms: "High Blood Pressure",
    diagnosis: "Hypertension",
    prescription: "Amlodipine",
    follow_up_date: "19/06/2026",
    status: "Completed",
  },
  {
    id: 7,
    visit_number: "OPD007",
    patient: "Arun Kumar",
    doctor: "Dr. Ram",
    symptoms: "Sore Throat",
    diagnosis: "Tonsillitis",
    prescription: "Antibiotics",
    follow_up_date: "17/06/2026",
    status: "Completed",
  },
  {
    id: 8,
    visit_number: "OPD008",
    patient: "Divya",
    doctor: "Dr. John",
    symptoms: "Body Pain",
    diagnosis: "Viral Fever",
    prescription: "Paracetamol",
    follow_up_date: "16/06/2026",
    status: "Pending",
  },
  {
    id: 9,
    visit_number: "OPD009",
    patient: "Rahul",
    doctor: "Dr. Sarah",
    symptoms: "Palpitations",
    diagnosis: "Arrhythmia",
    prescription: "Cardiac Monitoring",
    follow_up_date: "24/06/2026",
    status: "Completed",
  },
  {
    id: 10,
    visit_number: "OPD010",
    patient: "Lakshmi",
    doctor: "Dr. Meera",
    symptoms: "Hair Loss",
    diagnosis: "Alopecia",
    prescription: "Minoxidil",
    follow_up_date: "28/06/2026",
    status: "Pending",
  },
  {
    id: 11,
    visit_number: "OPD011",
    patient: "Ajay",
    doctor: "Dr. Ravi",
    symptoms: "Dizziness",
    diagnosis: "Vertigo",
    prescription: "Betahistine",
    follow_up_date: "23/06/2026",
    status: "Completed",
  },
  {
    id: 12,
    visit_number: "OPD012",
    patient: "Keerthi",
    doctor: "Dr. Meera",
    symptoms: "Acne",
    diagnosis: "Hormonal Acne",
    prescription: "Topical Gel",
    follow_up_date: "27/06/2026",
    status: "Pending",
  },
  {
    id: 13,
    visit_number: "OPD013",
    patient: "Naveen",
    doctor: "Dr. Arun",
    symptoms: "Back Pain",
    diagnosis: "Muscle Strain",
    prescription: "Pain Relief Spray",
    follow_up_date: "21/06/2026",
    status: "Completed",
  },
  {
    id: 14,
    visit_number: "OPD014",
    patient: "Harini",
    doctor: "Dr. John",
    symptoms: "Cold, Sneezing",
    diagnosis: "Seasonal Allergy",
    prescription: "Cetirizine",
    follow_up_date: "18/06/2026",
    status: "Completed",
  },
  {
    id: 15,
    visit_number: "OPD015",
    patient: "Suresh",
    doctor: "Dr. David",
    symptoms: "Shortness of Breath",
    diagnosis: "Asthma",
    prescription: "Inhaler",
    follow_up_date: "30/06/2026",
    status: "Pending",
  },
  {
    id: 16,
    visit_number: "OPD005",
    patient: "Karthik",
    doctor: "Dr. Arun",
    symptoms: "Knee Pain",
    diagnosis: "Ligament Strain",
    prescription: "Physiotherapy",
    follow_up_date: "25/06/2026",
    status: "Completed",
  },
  {
    id: 17,
    visit_number: "OPD006",
    patient: "Sneha",
    doctor: "Dr. David",
    symptoms: "High Blood Pressure",
    diagnosis: "Hypertension",
    prescription: "Amlodipine",
    follow_up_date: "19/06/2026",
    status: "Completed",
  },
  {
    id: 18,
    visit_number: "OPD007",
    patient: "Arun Kumar",
    doctor: "Dr. Ram",
    symptoms: "Sore Throat",
    diagnosis: "Tonsillitis",
    prescription: "Antibiotics",
    follow_up_date: "17/06/2026",
    status: "Completed",
  },
  {
    id: 19,
    visit_number: "OPD008",
    patient: "Divya",
    doctor: "Dr. John",
    symptoms: "Body Pain",
    diagnosis: "Viral Fever",
    prescription: "Paracetamol",
    follow_up_date: "16/06/2026",
    status: "Pending",
  },
  {
    id: 20,
    visit_number: "OPD009",
    patient: "Rahul",
    doctor: "Dr. Sarah",
    symptoms: "Palpitations",
    diagnosis: "Arrhythmia",
    prescription: "Cardiac Monitoring",
    follow_up_date: "24/06/2026",
    status: "Completed",
  },
  {
    id:21,
    visit_number: "OPD010",
    patient: "Lakshmi",
    doctor: "Dr. Meera",
    symptoms: "Hair Loss",
    diagnosis: "Alopecia",
    prescription: "Minoxidil",
    follow_up_date: "28/06/2026",
    status: "Pending",
  },
  {
    id: 22,
    visit_number: "OPD011",
    patient: "Ajay",
    doctor: "Dr. Ravi",
    symptoms: "Dizziness",
    diagnosis: "Vertigo",
    prescription: "Betahistine",
    follow_up_date: "23/06/2026",
    status: "Completed",
  },
  {
    id: 23,
    visit_number: "OPD012",
    patient: "Keerthi",
    doctor: "Dr. Meera",
    symptoms: "Acne",
    diagnosis: "Hormonal Acne",
    prescription: "Topical Gel",
    follow_up_date: "27/06/2026",
    status: "Pending",
  },
  {
    id: 24,
    visit_number: "OPD013",
    patient: "Naveen",
    doctor: "Dr. Arun",
    symptoms: "Back Pain",
    diagnosis: "Muscle Strain",
    prescription: "Pain Relief Spray",
    follow_up_date: "21/06/2026",
    status: "Completed",
  },
];
export default function OPDList() {
  return (
    <div className="mt-6 border rounded-2xl overflow-hidden" style={{ borderColor: theme.border }}>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1100px]">
          <thead style={{ background: theme.primaryLight }}>
            <tr>
              <th className="p-4 text-left whitespace-nowrap">Visit Number</th>
              <th className="p-4 text-left whitespace-nowrap">Patient</th>
              <th className="p-4 text-left whitespace-nowrap">Doctor</th>
              <th className="p-4 text-left whitespace-nowrap">Symptoms</th>
              <th className="p-4 text-left whitespace-nowrap">Diagnosis</th>
              <th className="p-4 text-left whitespace-nowrap">Prescription</th>
              <th className="p-4 text-left whitespace-nowrap">Follow-up Date</th>
              <th className="p-4 text-left whitespace-nowrap">Status</th>
            </tr>
          </thead>
          <tbody>
            {opdVisits.map((visit) => (
              <tr key={visit.id} className="border-t hover:bg-gray-50">
                <td className="p-4 whitespace-nowrap">{visit.visit_number}</td>
                <td className="p-4 whitespace-nowrap">{visit.patient}</td>
                <td className="p-4 whitespace-nowrap">{visit.doctor}</td>
                <td className="p-4 max-w-xs truncate">{visit.symptoms}</td>
                <td className="p-4 max-w-xs truncate">{visit.diagnosis}</td>
                <td className="p-4 max-w-xs truncate">{visit.prescription}</td>
                <td className="p-4 whitespace-nowrap">{visit.follow_up_date}</td>
                <td className="p-4 whitespace-nowrap">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${visit.status === "Completed" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
                    {visit.status}
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