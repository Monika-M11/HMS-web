"use client";

import { theme } from "@/theme";

const insurancePolicies = [
  {
    id: 1,
    policy_number: "POL123456",
    provider: "Star Health",
    patient: "Sharmila",
    coverage_amount: "500000",
    claim_status: "Approved",
    approval_date: "07/06/2026",
  },
  {
    id: 2,
    policy_number: "POL789012",
    provider: "ICICI Lombard",
    patient: "Rahul Verma",
    coverage_amount: "300000",
    claim_status: "Pending",
    approval_date: "",
  },
  {
    id: 3,
    policy_number: "POL345678",
    provider: "HDFC ERGO",
    patient: "Monika",
    coverage_amount: "400000",
    claim_status: "Approved",
    approval_date: "05/06/2026",
  },
  {
    id: 4,
    policy_number: "POL456789",
    provider: "Care Health",
    patient: "Anu",
    coverage_amount: "250000",
    claim_status: "Rejected",
    approval_date: "",
  },
  {
    id: 5,
    policy_number: "POL567890",
    provider: "Niva Bupa",
    patient: "Karthik",
    coverage_amount: "600000",
    claim_status: "Approved",
    approval_date: "01/06/2026",
  },
  {
    id: 6,
    policy_number: "POL678901",
    provider: "Star Health",
    patient: "Priya",
    coverage_amount: "350000",
    claim_status: "Pending",
    approval_date: "",
  },
  {
    id: 7,
    policy_number: "POL789123",
    provider: "ICICI Lombard",
    patient: "Arun",
    coverage_amount: "450000",
    claim_status: "Approved",
    approval_date: "04/06/2026",
  },
  {
    id: 8,
    policy_number: "POL890234",
    provider: "HDFC ERGO",
    patient: "Divya",
    coverage_amount: "500000",
    claim_status: "Pending",
    approval_date: "",
  },
  {
    id: 9,
    policy_number: "POL901345",
    provider: "Care Health",
    patient: "Rahul",
    coverage_amount: "300000",
    claim_status: "Approved",
    approval_date: "28/05/2026",
  },
  {
    id: 10,
    policy_number: "POL012456",
    provider: "Niva Bupa",
    patient: "Sneha",
    coverage_amount: "700000",
    claim_status: "Approved",
    approval_date: "06/06/2026",
  },
  {
    id: 11,
    policy_number: "POL123567",
    provider: "Star Health",
    patient: "Vignesh",
    coverage_amount: "200000",
    claim_status: "Rejected",
    approval_date: "",
  },
  {
    id: 12,
    policy_number: "POL234678",
    provider: "ICICI Lombard",
    patient: "Lakshmi",
    coverage_amount: "550000",
    claim_status: "Approved",
    approval_date: "02/06/2026",
  },
  {
    id: 13,
    policy_number: "POL345789",
    provider: "HDFC ERGO",
    patient: "Ajay",
    coverage_amount: "650000",
    claim_status: "Pending",
    approval_date: "",
  },
  {
    id: 14,
    policy_number: "POL456890",
    provider: "Care Health",
    patient: "Keerthi",
    coverage_amount: "350000",
    claim_status: "Approved",
    approval_date: "30/05/2026",
  },
  {
    id: 15,
    policy_number: "POL567901",
    provider: "Niva Bupa",
    patient: "Naveen",
    coverage_amount: "450000",
    claim_status: "Approved",
    approval_date: "03/06/2026",
  },
  {
    id: 16,
    policy_number: "POL678012",
    provider: "Star Health",
    patient: "Harini",
    coverage_amount: "500000",
    claim_status: "Pending",
    approval_date: "",
  },
  {
    id: 17,
    policy_number: "POL789234",
    provider: "ICICI Lombard",
    patient: "Suresh",
    coverage_amount: "300000",
    claim_status: "Rejected",
    approval_date: "",
  },
  {
    id: 18,
    policy_number: "POL890345",
    provider: "HDFC ERGO",
    patient: "Rani",
    coverage_amount: "400000",
    claim_status: "Approved",
    approval_date: "29/05/2026",
  },
  {
    id: 19,
    policy_number: "POL901456",
    provider: "Care Health",
    patient: "Kumar",
    coverage_amount: "550000",
    claim_status: "Approved",
    approval_date: "07/06/2026",
  },
  {
    id: 20,
    policy_number: "POL012567",
    provider: "Niva Bupa",
    patient: "Aishwarya",
    coverage_amount: "250000",
    claim_status: "Pending",
    approval_date: "",
  },
  {
    id: 21,
    policy_number: "POL123678",
    provider: "Star Health",
    patient: "Bharath",
    coverage_amount: "800000",
    claim_status: "Approved",
    approval_date: "05/06/2026",
  },
  {
    id: 22,
    policy_number: "POL234789",
    provider: "ICICI Lombard",
    patient: "Nisha",
    coverage_amount: "350000",
    claim_status: "Pending",
    approval_date: "",
  },
  {
    id: 23,
    policy_number: "POL345890",
    provider: "HDFC ERGO",
    patient: "Manoj",
    coverage_amount: "500000",
    claim_status: "Approved",
    approval_date: "01/06/2026",
  },
  {
    id: 24,
    policy_number: "POL456901",
    provider: "Care Health",
    patient: "Gayathri",
    coverage_amount: "600000",
    claim_status: "Approved",
    approval_date: "02/06/2026",
  },
  {
    id: 25,
    policy_number: "POL567012",
    provider: "Niva Bupa",
    patient: "Rohit",
    coverage_amount: "300000",
    claim_status: "Rejected",
    approval_date: "",
  },
  {
    id: 26,
    policy_number: "POL678123",
    provider: "Star Health",
    patient: "Swathi",
    coverage_amount: "450000",
    claim_status: "Approved",
    approval_date: "04/06/2026",
  },
  {
    id: 27,
    policy_number: "POL789345",
    provider: "ICICI Lombard",
    patient: "Vikram",
    coverage_amount: "700000",
    claim_status: "Pending",
    approval_date: "",
  },
  {
    id: 28,
    policy_number: "POL890456",
    provider: "HDFC ERGO",
    patient: "Pooja",
    coverage_amount: "500000",
    claim_status: "Approved",
    approval_date: "06/06/2026",
  },
  {
    id: 29,
    policy_number: "POL901567",
    provider: "Care Health",
    patient: "Deepak",
    coverage_amount: "350000",
    claim_status: "Approved",
    approval_date: "03/06/2026",
  },
  {
    id: 30,
    policy_number: "POL012678",
    provider: "Niva Bupa",
    patient: "Meena",
    coverage_amount: "400000",
    claim_status: "Pending",
    approval_date: "",
  },
];

export default function InsuranceList() {
  return (
    <div className="mt-6 border rounded-2xl overflow-hidden" style={{ borderColor: theme.border }}>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1000px]">
          <thead style={{ background: theme.primaryLight }}>
            <tr>
              <th className="p-4 text-left whitespace-nowrap">Policy Number</th>
              <th className="p-4 text-left whitespace-nowrap">Provider</th>
              <th className="p-4 text-left whitespace-nowrap">Patient</th>
              <th className="p-4 text-left whitespace-nowrap">Coverage Amount</th>
              <th className="p-4 text-left whitespace-nowrap">Claim Status</th>
              <th className="p-4 text-left whitespace-nowrap">Approval Date</th>
            </tr>
          </thead>
          <tbody>
            {insurancePolicies.map((policy) => (
              <tr key={policy.id} className="border-t hover:bg-gray-50">
                <td className="p-4 whitespace-nowrap">{policy.policy_number}</td>
                <td className="p-4 whitespace-nowrap">{policy.provider}</td>
                <td className="p-4 whitespace-nowrap">{policy.patient}</td>
                <td className="p-4 whitespace-nowrap">₹{policy.coverage_amount}</td>
                <td className="p-4 whitespace-nowrap">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    policy.claim_status === "Approved" 
                      ? "bg-green-100 text-green-700" 
                      : "bg-yellow-100 text-yellow-700"
                  }`}>
                    {policy.claim_status}
                  </span>
                </td>
                <td className="p-4 whitespace-nowrap">{policy.approval_date || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}