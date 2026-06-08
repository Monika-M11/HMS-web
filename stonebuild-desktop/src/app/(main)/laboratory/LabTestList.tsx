"use client";

import { theme } from "@/theme";

const labTests = [
  {
    id: 1,
    test_id: "LAB001",
    patient: "Sharma",
    test_name: "Complete Blood Count",
    sample_type: "Blood",
    result: "Normal",
    technician: "Ramesh Kumar",
    report_date: "08/06/2026",
    status: "Completed",
  },
  {
    id: 2,
    test_id: "LAB002",
    patient: "Rahul Verma",
    test_name: "Blood Sugar Fasting",
    sample_type: "Blood",
    result: "110 mg/dL",
    technician: "Anita Rao",
    report_date: "09/06/2026",
    status: "Completed",
  },
  {
    id: 3,
    test_id: "LAB003",
    patient: "Monika",
    test_name: "Lipid Profile",
    sample_type: "Blood",
    result: "Borderline High Cholesterol",
    technician: "Suresh Babu",
    report_date: "09/06/2026",
    status: "Completed",
  },
  {
    id: 4,
    test_id: "LAB004",
    patient: "Priya Sharma",
    test_name: "Urine Routine",
    sample_type: "Urine",
    result: "Normal",
    technician: "Anita Rao",
    report_date: "08/06/2026",
    status: "Completed",
  },
  {
    id: 5,
    test_id: "LAB005",
    patient: "Karthik",
    test_name: "Thyroid Profile",
    sample_type: "Blood",
    result: "TSH Elevated",
    technician: "Ramesh Kumar",
    report_date: "09/06/2026",
    status: "Completed",
  },
  {
    id: 6,
    test_id: "LAB006",
    patient: "Sneha",
    test_name: "Vitamin D Test",
    sample_type: "Blood",
    result: "Deficient",
    technician: "Meena Devi",
    report_date: "10/06/2026",
    status: "Completed",
  },
  {
    id: 7,
    test_id: "LAB007",
    patient: "Arun Kumar",
    test_name: "Dengue Test",
    sample_type: "Blood",
    result: "Negative",
    technician: "Vikram Singh",
    report_date: "10/06/2026",
    status: "Completed",
  },
  {
    id: 8,
    test_id: "LAB008",
    patient: "Divya",
    test_name: "COVID-19 RT-PCR",
    sample_type: "Swab",
    result: "Negative",
    technician: "Anita Rao",
    report_date: "10/06/2026",
    status: "Completed",
  },
  {
    id: 9,
    test_id: "LAB009",
    patient: "Rahul",
    test_name: "Liver Function Test",
    sample_type: "Blood",
    result: "Normal",
    technician: "Suresh Babu",
    report_date: "11/06/2026",
    status: "Completed",
  },
  {
    id: 10,
    test_id: "LAB010",
    patient: "Lakshmi",
    test_name: "Kidney Function Test",
    sample_type: "Blood",
    result: "Normal",
    technician: "Meena Devi",
    report_date: "11/06/2026",
    status: "Completed",
  },
  {
    id: 11,
    test_id: "LAB011",
    patient: "Ajay",
    test_name: "HbA1c",
    sample_type: "Blood",
    result: "6.8%",
    technician: "Ramesh Kumar",
    report_date: "11/06/2026",
    status: "Completed",
  },
  {
    id: 12,
    test_id: "LAB012",
    patient: "Keerthi",
    test_name: "Pregnancy Test",
    sample_type: "Urine",
    result: "Positive",
    technician: "Anita Rao",
    report_date: "12/06/2026",
    status: "Completed",
  },
  {
    id: 13,
    test_id: "LAB013",
    patient: "Naveen",
    test_name: "Malaria Test",
    sample_type: "Blood",
    result: "Negative",
    technician: "Vikram Singh",
    report_date: "12/06/2026",
    status: "Completed",
  },
  {
    id: 14,
    test_id: "LAB014",
    patient: "Harini",
    test_name: "Electrolyte Panel",
    sample_type: "Blood",
    result: "Normal",
    technician: "Suresh Babu",
    report_date: "12/06/2026",
    status: "Pending",
  },
  {
    id: 15,
    test_id: "LAB015",
    patient: "Suresh",
    test_name: "Blood Culture",
    sample_type: "Blood",
    result: "Processing",
    technician: "Meena Devi",
    report_date: "13/06/2026",
    status: "Pending",
  },
];

export default function LabTestList() {
  return (
    <div className="mt-6 border rounded-2xl overflow-hidden" style={{ borderColor: theme.border }}>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1100px]">
          <thead style={{ background: theme.primaryLight }}>
            <tr>
              <th className="p-4 text-left whitespace-nowrap">Test ID</th>
              <th className="p-4 text-left whitespace-nowrap">Patient</th>
              <th className="p-4 text-left whitespace-nowrap">Test Name</th>
              <th className="p-4 text-left whitespace-nowrap">Sample Type</th>
              <th className="p-4 text-left whitespace-nowrap">Result</th>
              <th className="p-4 text-left whitespace-nowrap">Technician</th>
              <th className="p-4 text-left whitespace-nowrap">Report Date</th>
              <th className="p-4 text-left whitespace-nowrap">Status</th>
            </tr>
          </thead>
          <tbody>
            {labTests.map((test) => (
              <tr key={test.id} className="border-t hover:bg-gray-50">
                <td className="p-4 whitespace-nowrap">{test.test_id}</td>
                <td className="p-4 whitespace-nowrap">{test.patient}</td>
                <td className="p-4 whitespace-nowrap">{test.test_name}</td>
                <td className="p-4 whitespace-nowrap">{test.sample_type}</td>
                <td className="p-4">{test.result}</td>
                <td className="p-4 whitespace-nowrap">{test.technician}</td>
                <td className="p-4 whitespace-nowrap">{test.report_date}</td>
                <td className="p-4 whitespace-nowrap">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                    {test.status}
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