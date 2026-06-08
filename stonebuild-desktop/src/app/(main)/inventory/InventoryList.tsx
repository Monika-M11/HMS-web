"use client";

import { theme } from "@/theme";

const inventoryItems = [
  {
    id: 1,
    item_code: "INV001",
    item_name: "Surgical Gloves",
    category: "Surgical",
    supplier: "MediSupplies Pvt Ltd",
    quantity: "450",
    unit_cost: "12",
    reorder_level: "100",
  },
  {
    id: 2,
    item_code: "INV002",
    item_name: "Printer Paper A4",
    category: "Stationery",
    supplier: "Office World",
    quantity: "25",
    unit_cost: "180",
    reorder_level: "50",
  },
  {
    id: 3,
    item_code: "INV003",
    item_name: "Face Masks",
    category: "Safety",
    supplier: "HealthCare Traders",
    quantity: "1200",
    unit_cost: "5",
    reorder_level: "300",
  },
  {
    id: 4,
    item_code: "INV004",
    item_name: "Syringes 5ml",
    category: "Medical Consumables",
    supplier: "MediSupplies Pvt Ltd",
    quantity: "800",
    unit_cost: "8",
    reorder_level: "200",
  },
  {
    id: 5,
    item_code: "INV005",
    item_name: "Cotton Rolls",
    category: "Medical Consumables",
    supplier: "Care Medicals",
    quantity: "350",
    unit_cost: "25",
    reorder_level: "75",
  },
  {
    id: 6,
    item_code: "INV006",
    item_name: "Hand Sanitizer",
    category: "Safety",
    supplier: "CleanTech Healthcare",
    quantity: "180",
    unit_cost: "95",
    reorder_level: "50",
  },
  {
    id: 7,
    item_code: "INV007",
    item_name: "IV Fluid Set",
    category: "Medical Equipment",
    supplier: "Apollo Suppliers",
    quantity: "220",
    unit_cost: "45",
    reorder_level: "60",
  },
  {
    id: 8,
    item_code: "INV008",
    item_name: "Digital Thermometer",
    category: "Medical Equipment",
    supplier: "MedEquip India",
    quantity: "45",
    unit_cost: "350",
    reorder_level: "15",
  },
  {
    id: 9,
    item_code: "INV009",
    item_name: "Patient File Covers",
    category: "Stationery",
    supplier: "Office World",
    quantity: "150",
    unit_cost: "20",
    reorder_level: "40",
  },
  {
    id: 10,
    item_code: "INV010",
    item_name: "ECG Electrodes",
    category: "Cardiology",
    supplier: "HeartCare Supplies",
    quantity: "300",
    unit_cost: "18",
    reorder_level: "80",
  },
  {
    id: 11,
    item_code: "INV011",
    item_name: "Blood Collection Tubes",
    category: "Laboratory",
    supplier: "LabTech Solutions",
    quantity: "650",
    unit_cost: "6",
    reorder_level: "150",
  },
  {
    id: 12,
    item_code: "INV012",
    item_name: "Microscope Slides",
    category: "Laboratory",
    supplier: "LabTech Solutions",
    quantity: "500",
    unit_cost: "3",
    reorder_level: "100",
  },
  {
    id: 13,
    item_code: "INV013",
    item_name: "Wheelchair",
    category: "Medical Equipment",
    supplier: "MedEquip India",
    quantity: "12",
    unit_cost: "8500",
    reorder_level: "5",
  },
  {
    id: 14,
    item_code: "INV014",
    item_name: "Oxygen Mask",
    category: "Emergency",
    supplier: "LifeCare Medicals",
    quantity: "95",
    unit_cost: "75",
    reorder_level: "30",
  },
  {
    id: 15,
    item_code: "INV015",
    item_name: "Bandage Roll",
    category: "First Aid",
    supplier: "Care Medicals",
    quantity: "400",
    unit_cost: "15",
    reorder_level: "100",
  },
];

export default function InventoryList() {
  return (
    <div className="mt-6 border rounded-2xl overflow-hidden" style={{ borderColor: theme.border }}>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1000px]">
          <thead style={{ background: theme.primaryLight }}>
            <tr>
              <th className="p-4 text-left whitespace-nowrap">Item Code</th>
              <th className="p-4 text-left whitespace-nowrap">Item Name</th>
              <th className="p-4 text-left whitespace-nowrap">Category</th>
              <th className="p-4 text-left whitespace-nowrap">Supplier</th>
              <th className="p-4 text-left whitespace-nowrap">Quantity</th>
              <th className="p-4 text-left whitespace-nowrap">Unit Cost</th>
              <th className="p-4 text-left whitespace-nowrap">Reorder Level</th>
            </tr>
          </thead>
          <tbody>
            {inventoryItems.map((item) => (
              <tr key={item.id} className="border-t hover:bg-gray-50">
                <td className="p-4 whitespace-nowrap">{item.item_code}</td>
                <td className="p-4 whitespace-nowrap">{item.item_name}</td>
                <td className="p-4 whitespace-nowrap">{item.category}</td>
                <td className="p-4 whitespace-nowrap">{item.supplier}</td>
                <td className="p-4 whitespace-nowrap">{item.quantity}</td>
                <td className="p-4 whitespace-nowrap">₹{item.unit_cost}</td>
                <td className="p-4 whitespace-nowrap">{item.reorder_level}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}