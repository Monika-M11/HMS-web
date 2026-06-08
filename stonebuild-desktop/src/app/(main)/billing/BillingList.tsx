"use client";

import { theme } from "@/theme";


const invoices = [
  {
    id: 1,
    invoice_no: "INV001",
    patient: "Sharma",
    service: "OPD Consultation + Lab Test",
    amount: "1250",
    tax: "100",
    discount: "50",
    payment_mode: "Cash",
    payment_status: "Paid",
  },
  {
    id: 2,
    invoice_no: "INV002",
    patient: "Rahul Verma",
    service: "IPD Admission (2 days)",
    amount: "8500",
    tax: "680",
    discount: "0",
    payment_mode: "UPI",
    payment_status: "Pending",
  },
  {
    id: 3,
    invoice_no: "INV003",
    patient: "Monika",
    service: "Cardiology Consultation",
    amount: "2000",
    tax: "160",
    discount: "100",
    payment_mode: "Card",
    payment_status: "Paid",
  },
  {
    id: 4,
    invoice_no: "INV004",
    patient: "Anu",
    service: "Pediatric Checkup",
    amount: "900",
    tax: "72",
    discount: "0",
    payment_mode: "Cash",
    payment_status: "Paid",
  },
  {
    id: 5,
    invoice_no: "INV005",
    patient: "Karthik",
    service: "MRI Scan",
    amount: "4500",
    tax: "360",
    discount: "200",
    payment_mode: "UPI",
    payment_status: "Pending",
  },
  {
    id: 6,
    invoice_no: "INV006",
    patient: "Priya",
    service: "Blood Test Package",
    amount: "1800",
    tax: "144",
    discount: "50",
    payment_mode: "Cash",
    payment_status: "Paid",
  },
  {
    id: 7,
    invoice_no: "INV007",
    patient: "Arun",
    service: "Orthopedic Consultation",
    amount: "1500",
    tax: "120",
    discount: "100",
    payment_mode: "Card",
    payment_status: "Paid",
  },
  {
    id: 8,
    invoice_no: "INV008",
    patient: "Divya",
    service: "Dental Cleaning",
    amount: "2200",
    tax: "176",
    discount: "0",
    payment_mode: "UPI",
    payment_status: "Pending",
  },
  {
    id: 9,
    invoice_no: "INV009",
    patient: "Rahul",
    service: "X-Ray + Consultation",
    amount: "1300",
    tax: "104",
    discount: "0",
    payment_mode: "Cash",
    payment_status: "Paid",
  },
  {
    id: 10,
    invoice_no: "INV010",
    patient: "Sneha",
    service: "Skin Treatment",
    amount: "2800",
    tax: "224",
    discount: "150",
    payment_mode: "Card",
    payment_status: "Paid",
  },
  {
    id: 11,
    invoice_no: "INV011",
    patient: "Vignesh",
    service: "Physiotherapy Session",
    amount: "1000",
    tax: "80",
    discount: "0",
    payment_mode: "Cash",
    payment_status: "Pending",
  },
  {
    id: 12,
    invoice_no: "INV012",
    patient: "Lakshmi",
    service: "Gynecology Consultation",
    amount: "1700",
    tax: "136",
    discount: "50",
    payment_mode: "UPI",
    payment_status: "Paid",
  },
  {
    id: 13,
    invoice_no: "INV013",
    patient: "Ajay",
    service: "CT Scan",
    amount: "5200",
    tax: "416",
    discount: "300",
    payment_mode: "Card",
    payment_status: "Pending",
  },
  {
    id: 14,
    invoice_no: "INV014",
    patient: "Keerthi",
    service: "Eye Examination",
    amount: "1100",
    tax: "88",
    discount: "0",
    payment_mode: "Cash",
    payment_status: "Paid",
  },
  {
    id: 15,
    invoice_no: "INV015",
    patient: "Naveen",
    service: "Health Checkup Package",
    amount: "3500",
    tax: "280",
    discount: "200",
    payment_mode: "UPI",
    payment_status: "Paid",
  },
  {
    id: 16,
    invoice_no: "INV016",
    patient: "Harini",
    service: "ENT Consultation",
    amount: "900",
    tax: "72",
    discount: "0",
    payment_mode: "Cash",
    payment_status: "Pending",
  },
  {
    id: 17,
    invoice_no: "INV017",
    patient: "Suresh",
    service: "Dermatology Treatment",
    amount: "2600",
    tax: "208",
    discount: "100",
    payment_mode: "Card",
    payment_status: "Paid",
  },
  {
    id: 18,
    invoice_no: "INV018",
    patient: "Rani",
    service: "ECG + Consultation",
    amount: "1800",
    tax: "144",
    discount: "0",
    payment_mode: "UPI",
    payment_status: "Paid",
  },
  {
    id: 19,
    invoice_no: "INV019",
    patient: "Kumar",
    service: "Emergency Treatment",
    amount: "7200",
    tax: "576",
    discount: "300",
    payment_mode: "Cash",
    payment_status: "Pending",
  },
  {
    id: 20,
    invoice_no: "INV020",
    patient: "Aishwarya",
    service: "Vaccination Package",
    amount: "1400",
    tax: "112",
    discount: "50",
    payment_mode: "UPI",
    payment_status: "Paid",
  },
  {
    id: 21,
    invoice_no: "INV021",
    patient: "Bharath",
    service: "Neurology Consultation",
    amount: "2500",
    tax: "200",
    discount: "100",
    payment_mode: "Card",
    payment_status: "Paid",
  },
  {
    id: 22,
    invoice_no: "INV022",
    patient: "Nisha",
    service: "Ultrasound Scan",
    amount: "1900",
    tax: "152",
    discount: "0",
    payment_mode: "Cash",
    payment_status: "Pending",
  },
  {
    id: 23,
    invoice_no: "INV023",
    patient: "Manoj",
    service: "General Consultation",
    amount: "800",
    tax: "64",
    discount: "0",
    payment_mode: "UPI",
    payment_status: "Paid",
  },
  {
    id: 24,
    invoice_no: "INV024",
    patient: "Gayathri",
    service: "Cardiac Screening",
    amount: "4000",
    tax: "320",
    discount: "200",
    payment_mode: "Card",
    payment_status: "Paid",
  },
  {
    id: 25,
    invoice_no: "INV025",
    patient: "Rohit",
    service: "Dental Extraction",
    amount: "3000",
    tax: "240",
    discount: "150",
    payment_mode: "Cash",
    payment_status: "Pending",
  },
  {
    id: 26,
    invoice_no: "INV026",
    patient: "Swathi",
    service: "Maternity Consultation",
    amount: "2200",
    tax: "176",
    discount: "100",
    payment_mode: "UPI",
    payment_status: "Paid",
  },
  {
    id: 27,
    invoice_no: "INV027",
    patient: "Vikram",
    service: "Physiotherapy Package",
    amount: "2800",
    tax: "224",
    discount: "200",
    payment_mode: "Card",
    payment_status: "Paid",
  },
  {
    id: 28,
    invoice_no: "INV028",
    patient: "Pooja",
    service: "Eye Surgery Consultation",
    amount: "3500",
    tax: "280",
    discount: "250",
    payment_mode: "Cash",
    payment_status: "Pending",
  },
  {
    id: 29,
    invoice_no: "INV029",
    patient: "Deepak",
    service: "Lab Test Package",
    amount: "1600",
    tax: "128",
    discount: "50",
    payment_mode: "UPI",
    payment_status: "Paid",
  },
  {
    id: 30,
    invoice_no: "INV030",
    patient: "Meena",
    service: "Orthopedic Follow-up",
    amount: "1200",
    tax: "96",
    discount: "0",
    payment_mode: "Card",
    payment_status: "Paid",
  },
];


export default function BillingList() {
  return (
    <div className="mt-6 border rounded-2xl overflow-hidden" style={{ borderColor: theme.border }}>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1100px]">
          <thead style={{ background: theme.primaryLight }}>
            <tr>
              <th className="p-4 text-left whitespace-nowrap">Invoice No</th>
              <th className="p-4 text-left whitespace-nowrap">Patient</th>
              <th className="p-4 text-left whitespace-nowrap">Service</th>
              <th className="p-4 text-left whitespace-nowrap">Amount</th>
              <th className="p-4 text-left whitespace-nowrap">Tax</th>
              <th className="p-4 text-left whitespace-nowrap">Discount</th>
              <th className="p-4 text-left whitespace-nowrap">Payment Mode</th>
              <th className="p-4 text-left whitespace-nowrap">Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((inv) => (
              <tr key={inv.id} className="border-t hover:bg-gray-50">
                <td className="p-4 whitespace-nowrap">{inv.invoice_no}</td>
                <td className="p-4 whitespace-nowrap">{inv.patient}</td>
                <td className="p-4">{inv.service}</td>
                <td className="p-4 whitespace-nowrap">₹{inv.amount}</td>
                <td className="p-4 whitespace-nowrap">₹{inv.tax}</td>
                <td className="p-4 whitespace-nowrap">₹{inv.discount}</td>
                <td className="p-4 whitespace-nowrap">{inv.payment_mode}</td>
                <td className="p-4 whitespace-nowrap">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    inv.payment_status === "Paid" 
                      ? "bg-green-100 text-green-700" 
                      : "bg-yellow-100 text-yellow-700"
                  }`}>
                    {inv.payment_status}
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