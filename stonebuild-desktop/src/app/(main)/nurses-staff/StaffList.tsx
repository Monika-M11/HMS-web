"use client";

import { theme } from "@/theme";

const staffList = [
  {
    id: 1,
    employee_id: "EMP001",
    name: "Anita Rao",
    role: "Head Nurse",
    department: "General Ward",
    shift: "Morning",
    phone: "9876543211",
    salary: "45000",
    status: "Active",
  },
  {
    id: 2,
    employee_id: "EMP002",
    name: "Ramesh Kumar",
    role: "Lab Technician",
    department: "Pathology",
    shift: "Evening",
    phone: "9123456788",
    salary: "32000",
    status: "Active",
  },
  {
    id: 3,
    employee_id: "EMP003",
    name: "Suresh Babu",
    role: "Staff Nurse",
    department: "ICU",
    shift: "Night",
    phone: "9988776655",
    salary: "38000",
    status: "Active",
  },
  {
    id: 4,
    employee_id: "EMP004",
    name: "Meena Devi",
    role: "Receptionist",
    department: "Front Desk",
    shift: "Morning",
    phone: "9876541203",
    salary: "25000",
    status: "Active",
  },
  {
    id: 5,
    employee_id: "EMP005",
    name: "Vikram Singh",
    role: "Pharmacist",
    department: "Pharmacy",
    shift: "Evening",
    phone: "9786543210",
    salary: "35000",
    status: "Active",
  },
  {
    id: 6,
    employee_id: "EMP006",
    name: "Lakshmi Priya",
    role: "Ward Assistant",
    department: "General Ward",
    shift: "Morning",
    phone: "9567890123",
    salary: "22000",
    status: "Active",
  },
  {
    id: 7,
    employee_id: "EMP007",
    name: "Arun Kumar",
    role: "Accountant",
    department: "Finance",
    shift: "Day",
    phone: "9456123789",
    salary: "42000",
    status: "Active",
  },
  {
    id: 8,
    employee_id: "EMP008",
    name: "Priya Nair",
    role: "HR Executive",
    department: "Administration",
    shift: "Day",
    phone: "9345678912",
    salary: "40000",
    status: "Active",
  },
  {
    id: 9,
    employee_id: "EMP009",
    name: "Deepak Sharma",
    role: "Security Officer",
    department: "Security",
    shift: "Night",
    phone: "9234567812",
    salary: "28000",
    status: "Active",
  },
  {
    id: 10,
    employee_id: "EMP010",
    name: "Karthik Raj",
    role: "Lab Technician",
    department: "Pathology",
    shift: "Morning",
    phone: "9123456701",
    salary: "33000",
    status: "Inactive",
  },
  {
    id: 11,
    employee_id: "EMP011",
    name: "Divya Menon",
    role: "Staff Nurse",
    department: "Pediatrics",
    shift: "Evening",
    phone: "9012345670",
    salary: "37000",
    status: "Active",
  },
  {
    id: 12,
    employee_id: "EMP012",
    name: "Rahul Verma",
    role: "Store Keeper",
    department: "Inventory",
    shift: "Day",
    phone: "9988123456",
    salary: "30000",
    status: "Active",
  },
  {
    id: 13,
    employee_id: "EMP013",
    name: "Harini Rao",
    role: "Receptionist",
    department: "Front Desk",
    shift: "Evening",
    phone: "9870012345",
    salary: "24000",
    status: "Active",
  },
  {
    id: 14,
    employee_id: "EMP014",
    name: "Ajay Kumar",
    role: "Radiology Technician",
    department: "Radiology",
    shift: "Morning",
    phone: "9765432109",
    salary: "36000",
    status: "Active",
  },
  {
    id: 15,
    employee_id: "EMP015",
    name: "Gayathri S",
    role: "Nurse",
    department: "Maternity",
    shift: "Night",
    phone: "9654321098",
    salary: "39000",
    status: "Active",
  },
  {
    id: 16,
    employee_id: "EMP001",
    name: "Anita Rao",
    role: "Head Nurse",
    department: "General Ward",
    shift: "Morning",
    phone: "9876543211",
    salary: "45000",
    status: "Active",
  },
  {
    id: 17,
    employee_id: "EMP002",
    name: "Ramesh Kumar",
    role: "Lab Technician",
    department: "Pathology",
    shift: "Evening",
    phone: "9123456788",
    salary: "32000",
    status: "Active",
  },
  {
    id: 18,
    employee_id: "EMP003",
    name: "Suresh Babu",
    role: "Staff Nurse",
    department: "ICU",
    shift: "Night",
    phone: "9988776655",
    salary: "38000",
    status: "Active",
  },
  {
    id: 19,
    employee_id: "EMP004",
    name: "Meena Devi",
    role: "Receptionist",
    department: "Front Desk",
    shift: "Morning",
    phone: "9876541203",
    salary: "25000",
    status: "Active",
  },
  {
    id: 20,
    employee_id: "EMP005",
    name: "Vikram Singh",
    role: "Pharmacist",
    department: "Pharmacy",
    shift: "Evening",
    phone: "9786543210",
    salary: "35000",
    status: "Active",
  },
  {
    id: 21,
    employee_id: "EMP006",
    name: "Lakshmi Priya",
    role: "Ward Assistant",
    department: "General Ward",
    shift: "Morning",
    phone: "9567890123",
    salary: "22000",
    status: "Active",
  },
  {
    id: 22,
    employee_id: "EMP007",
    name: "Arun Kumar",
    role: "Accountant",
    department: "Finance",
    shift: "Day",
    phone: "9456123789",
    salary: "42000",
    status: "Active",
  },
  {
    id: 23,
    employee_id: "EMP008",
    name: "Priya Nair",
    role: "HR Executive",
    department: "Administration",
    shift: "Day",
    phone: "9345678912",
    salary: "40000",
    status: "Active",
  },
  {
    id: 24,
    employee_id: "EMP009",
    name: "Deepak Sharma",
    role: "Security Officer",
    department: "Security",
    shift: "Night",
    phone: "9234567812",
    salary: "28000",
    status: "Active",
  },
  {
    id: 25,
    employee_id: "EMP010",
    name: "Karthik Raj",
    role: "Lab Technician",
    department: "Pathology",
    shift: "Morning",
    phone: "9123456701",
    salary: "33000",
    status: "Inactive",
  },
  

];

export default function StaffList() {
  return (
    <div className="mt-6 border rounded-2xl overflow-hidden" style={{ borderColor: theme.border }}>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1000px]">
          <thead style={{ background: theme.primaryLight }}>
            <tr>
              <th className="p-4 text-left whitespace-nowrap">Employee ID</th>
              <th className="p-4 text-left whitespace-nowrap">Name</th>
              <th className="p-4 text-left whitespace-nowrap">Role</th>
              <th className="p-4 text-left whitespace-nowrap">Department</th>
              <th className="p-4 text-left whitespace-nowrap">Shift</th>
              <th className="p-4 text-left whitespace-nowrap">Phone</th>
              <th className="p-4 text-left whitespace-nowrap">Salary</th>
              <th className="p-4 text-left whitespace-nowrap">Status</th>
            </tr>
          </thead>
          <tbody>
            {staffList.map((staff) => (
              <tr key={staff.id} className="border-t hover:bg-gray-50">
                <td className="p-4 whitespace-nowrap">{staff.employee_id}</td>
                <td className="p-4 whitespace-nowrap">{staff.name}</td>
                <td className="p-4 whitespace-nowrap">{staff.role}</td>
                <td className="p-4 whitespace-nowrap">{staff.department}</td>
                <td className="p-4 whitespace-nowrap">{staff.shift}</td>
                <td className="p-4 whitespace-nowrap">{staff.phone}</td>
                <td className="p-4 whitespace-nowrap">₹{staff.salary}</td>
                <td className="p-4 whitespace-nowrap">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    staff.status === "Active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"
                  }`}>
                    {staff.status}
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