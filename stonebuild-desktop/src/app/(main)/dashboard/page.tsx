"use client";

import { KPICard } from "./KPICard";// We'll create this reusable component
import { theme } from "@/theme";
import { CalendarCheck, UserCheck, TrendingUp, Bed, Clock, Bell } from "lucide-react";

const recentAppointments = [
  { patient: " Sharma", doctor: "Dr. John Mathews", time: "10:30 AM", status: "Completed" },
  { patient: "Rahul Verma", doctor: "Dr. Priya Sharma", time: "11:45 AM", status: "In Progress" },
  { patient: "Priya Nair", doctor: "Dr. Ram Kumar", time: "02:00 PM", status: "Scheduled" },
];

const notifications = [
  { message: "Bed #A12 in General Ward is now vacant", time: "2 min ago" },
  { message: "Dr. John requested leave for tomorrow", time: "15 min ago" },
  { message: "Lab report for patient PAT003 is ready", time: "45 min ago" },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6" style={{ background: theme.background }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
       

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <KPICard
            title="Today's Appointments"
            value="86"
            subtitle="24 Completed"
            color="blue"
            icon={<CalendarCheck size={24} />}
          />
          <KPICard
            title="Admissions"
            value="12"
            subtitle="Today"
            color="green"
            icon={<UserCheck size={24} />}
          />
          <KPICard
            title="Discharges"
            value="8"
            subtitle="Today"
            color="purple"
            icon={<TrendingUp size={24} />}
          />
          <KPICard
            title="Revenue Today"
            value="₹1,48,750"
            subtitle="+12% from yesterday"
            color="green"
            icon={<TrendingUp size={24} />}
          />
        </div>

        {/* Second Row KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <KPICard
            title="Doctor Availability"
            value="18 / 24"
            subtitle="On Duty"
            color="green"
            icon={<Clock size={24} />}
          />
          <KPICard
            title="Bed Occupancy"
            value="78%"
            subtitle="142 / 182 beds occupied"
            color="blue"
            icon={<Bed size={24} />}
          />
          <KPICard
            title="Pending Lab Reports"
            value="19"
            subtitle="Awaiting review"
            color="red"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
          {/* Recent Appointments */}
          <div className="lg:col-span-4 bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2" style={{ color: theme.primaryDark }}>
              <CalendarCheck size={22} /> Today's Appointments
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3">Patient</th>
                    <th className="text-left py-3">Doctor</th>
                    <th className="text-left py-3">Time</th>
                    <th className="text-left py-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentAppointments.map((app, idx) => (
                    <tr key={idx} className="border-b last:border-0 hover:bg-gray-50">
                      <td className="py-3">{app.patient}</td>
                      <td className="py-3">{app.doctor}</td>
                      <td className="py-3">{app.time}</td>
                      <td className="py-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          app.status === "Completed" ? "bg-green-100 text-green-700" :
                          app.status === "In Progress" ? "bg-blue-100 text-blue-700" : "bg-yellow-100 text-yellow-700"
                        }`}>
                          {app.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Notifications */}
          <div className="lg:col-span-3 bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2" style={{ color: theme.primaryDark }}>
              <Bell size={22} /> Notifications
            </h2>
            <div className="space-y-4">
              {notifications.map((notif, idx) => (
                <div key={idx} className="flex gap-3 p-3 bg-gray-50 rounded-xl">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                  <div>
                    <p className="text-sm">{notif.message}</p>
                    <p className="text-xs text-gray-500 mt-1">{notif.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}