"use client";

import { theme } from "@/theme";

const medicines = [
  {
    id: 1,
    medicine_code: "MED001",
    medicine_name: "Paracetamol 500mg",
    category: "Tablet",
    batch_no: "BATCH2026",
    expiry_date: "2027-12-31",
    stock: "450",
    purchase_price: "8",
    selling_price: "15",
  },
  {
    id: 2,
    medicine_code: "MED002",
    medicine_name: "Amoxicillin 250mg",
    category: "Capsule",
    batch_no: "AMX456",
    expiry_date: "2026-08-15",
    stock: "120",
    purchase_price: "25",
    selling_price: "45",
  },
  {
    id: 3,
    medicine_code: "MED003",
    medicine_name: "Azithromycin 500mg",
    category: "Tablet",
    batch_no: "AZT789",
    expiry_date: "2027-05-20",
    stock: "200",
    purchase_price: "35",
    selling_price: "60",
  },
  {
    id: 4,
    medicine_code: "MED004",
    medicine_name: "Cetirizine 10mg",
    category: "Tablet",
    batch_no: "CTZ321",
    expiry_date: "2028-01-15",
    stock: "350",
    purchase_price: "5",
    selling_price: "12",
  },
  {
    id: 5,
    medicine_code: "MED005",
    medicine_name: "Omeprazole 20mg",
    category: "Capsule",
    batch_no: "OMP654",
    expiry_date: "2027-10-10",
    stock: "180",
    purchase_price: "12",
    selling_price: "25",
  },
  {
    id: 6,
    medicine_code: "MED006",
    medicine_name: "Ibuprofen 400mg",
    category: "Tablet",
    batch_no: "IBU111",
    expiry_date: "2027-07-30",
    stock: "275",
    purchase_price: "10",
    selling_price: "18",
  },
  {
    id: 7,
    medicine_code: "MED007",
    medicine_name: "Vitamin D3",
    category: "Tablet",
    batch_no: "VIT222",
    expiry_date: "2028-04-25",
    stock: "150",
    purchase_price: "18",
    selling_price: "35",
  },
  {
    id: 8,
    medicine_code: "MED008",
    medicine_name: "Cough Syrup",
    category: "Syrup",
    batch_no: "CS333",
    expiry_date: "2027-11-05",
    stock: "90",
    purchase_price: "45",
    selling_price: "75",
  },
  {
    id: 9,
    medicine_code: "MED009",
    medicine_name: "Insulin Injection",
    category: "Injection",
    batch_no: "INS444",
    expiry_date: "2026-12-20",
    stock: "60",
    purchase_price: "180",
    selling_price: "250",
  },
  {
    id: 10,
    medicine_code: "MED010",
    medicine_name: "Diclofenac Gel",
    category: "Ointment",
    batch_no: "DIC555",
    expiry_date: "2027-09-12",
    stock: "110",
    purchase_price: "55",
    selling_price: "90",
  },
  {
    id: 11,
    medicine_code: "MED011",
    medicine_name: "Metformin 500mg",
    category: "Tablet",
    batch_no: "MET666",
    expiry_date: "2028-02-18",
    stock: "320",
    purchase_price: "7",
    selling_price: "15",
  },
  {
    id: 12,
    medicine_code: "MED012",
    medicine_name: "Amlodipine 5mg",
    category: "Tablet",
    batch_no: "AML777",
    expiry_date: "2027-06-15",
    stock: "240",
    purchase_price: "9",
    selling_price: "18",
  },
  {
    id: 13,
    medicine_code: "MED013",
    medicine_name: "ORS Powder",
    category: "Powder",
    batch_no: "ORS888",
    expiry_date: "2028-03-01",
    stock: "500",
    purchase_price: "4",
    selling_price: "10",
  },
  {
    id: 14,
    medicine_code: "MED014",
    medicine_name: "Salbutamol Inhaler",
    category: "Inhaler",
    batch_no: "SAL999",
    expiry_date: "2027-08-08",
    stock: "75",
    purchase_price: "120",
    selling_price: "180",
  },
  {
    id: 15,
    medicine_code: "MED015",
    medicine_name: "Pantoprazole 40mg",
    category: "Tablet",
    batch_no: "PAN101",
    expiry_date: "2028-01-10",
    stock: "210",
    purchase_price: "14",
    selling_price: "28",
  },
];

export default function MedicineList() {
  return (
    <div className="mt-6 border rounded-2xl overflow-hidden" style={{ borderColor: theme.border }}>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1100px]">
          <thead style={{ background: theme.primaryLight }}>
            <tr>
              <th className="p-4 text-left whitespace-nowrap">Medicine Code</th>
              <th className="p-4 text-left whitespace-nowrap">Medicine Name</th>
              <th className="p-4 text-left whitespace-nowrap">Category</th>
              <th className="p-4 text-left whitespace-nowrap">Batch No</th>
              <th className="p-4 text-left whitespace-nowrap">Expiry Date</th>
              <th className="p-4 text-left whitespace-nowrap">Stock</th>
              <th className="p-4 text-left whitespace-nowrap">Purchase Price</th>
              <th className="p-4 text-left whitespace-nowrap">Selling Price</th>
            </tr>
          </thead>
          <tbody>
            {medicines.map((med) => (
              <tr key={med.id} className="border-t hover:bg-gray-50">
                <td className="p-4 whitespace-nowrap">{med.medicine_code}</td>
                <td className="p-4 whitespace-nowrap">{med.medicine_name}</td>
                <td className="p-4 whitespace-nowrap">{med.category}</td>
                <td className="p-4 whitespace-nowrap">{med.batch_no}</td>
                <td className="p-4 whitespace-nowrap">{med.expiry_date}</td>
                <td className="p-4 whitespace-nowrap">{med.stock}</td>
                <td className="p-4 whitespace-nowrap">₹{med.purchase_price}</td>
                <td className="p-4 whitespace-nowrap">₹{med.selling_price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}