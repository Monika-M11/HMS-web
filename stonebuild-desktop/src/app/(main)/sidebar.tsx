'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Users, UsersRound,
  Package, ShoppingCart, Receipt, BarChart3,
  CalendarCheck, Stethoscope, 
  UserCheck, Hospital, 
  TestTube, FileText, ShieldCheck, Boxes 
} from 'lucide-react';

import { theme } from '@/theme';

interface SidebarProps {
  onMenuChange?: (menu: string) => void;
}

const menuMap: Record<string, string> = {
  '/patients': 'Patients',
  '/doctors': 'Doctors',
  '/nurses-staff': 'Nurses & Staff',
  '/appointment': 'Appointments',
  '/consultation': 'Consultation',
  '/opd': 'OPD',
  '/ipd': 'IPD',
  '/pharmacy': 'Pharmacy',
  '/laboratory': 'Laboratory',
  '/billing': 'Billing',
  '/insurance': 'Insurance',
  '/inventory': 'Inventory',
  '/items': 'Items',
  '/purchase': 'Purchase',
  '/sales': 'Sales',
  '/reports': 'Reports',
};

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  route: string;
  active: boolean;
  onClick: (label: string) => void;
}

function MenuItem({ icon, label, route, active, onClick }: MenuItemProps) {
  return (
    <Link href={route}>
      <div
        onClick={() => onClick(label)}
        className="flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 cursor-pointer"
        style={{
          backgroundColor: active ? theme.primary : 'transparent',
          color: active ? theme.textInverse : theme.textPrimary,
        }}
      >
        {icon}
        <span className="font-medium">{label}</span>
      </div>
    </Link>
  );
}

export default function Sidebar({ onMenuChange }: SidebarProps) {
  const pathname = usePathname();
  const activeMenu = menuMap[pathname] || 'Patients';

  return (
    <div className="h-screen overflow-y-auto scrollbar-hide">
      <aside
        className="w-[270px] h-screen px-5 py-6 border-r flex flex-col"
        style={{
          // Improved smooth gradient from top to bottom
          background: `linear-gradient(to bottom, 
            ${theme.backgroundSoft} 0%, 
            #f8fafc 35%, 
            #f1f5f9 65%, 
            ${theme.background} 100%)`,
          borderColor: theme.border,
        }}
      >
        {/* Logo */}
        <div className="mb-6">
          <h1
            className="text-3xl font-bold pb-5 border-b"
            style={{ color: theme.primaryDark, borderColor: theme.border }}
          >
            HMS
          </h1>
          <p className="text-sm mt-2" style={{ color: theme.textSecondary }}>
            Hospital Management System
          </p>
        </div>

        <nav className="space-y-4 flex-1">
          {/* Patient Management */}
          <div className="space-y-2">
            <div className="px-1 pt-1">
              <p className="font-medium text-sm" style={{ color: theme.textSecondary }}>
                Patient Management
              </p>
            </div>
            <MenuItem icon={<Users size={20} />} label="Patients" route="/patients" active={activeMenu === 'Patients'} onClick={() => {}} />
          </div>

          {/* Staff Management */}
          <div className="space-y-2">
            <div className="px-1 pt-1">
              <p className="font-medium text-sm" style={{ color: theme.textSecondary }}>
                Staff Management
              </p>
            </div>
            <MenuItem icon={<UserCheck size={20} />} label="Doctors" route="/doctors" active={activeMenu === 'Doctors'} onClick={() => {}} />
            <MenuItem icon={<UsersRound size={20} />} label="Nurses & Staff" route="/nurses-staff" active={activeMenu === 'Nurses & Staff'} onClick={() => {}} />
          </div>

          {/* Pharmacy Management */}
          <div className="space-y-2">
            <div className="px-1 pt-1">
              <p className="font-medium text-sm" style={{ color: theme.textSecondary }}>
                Pharmacy Management
              </p>
            </div>
            <MenuItem icon={<Package size={20} />} label="Pharmacy" route="/pharmacy" active={activeMenu === 'Pharmacy'} onClick={() => {}} />
          </div>

          {/* Hospital Management */}
          <div className="space-y-2">
            <div className="px-1 pt-1">
              <p className="font-medium text-sm" style={{ color: theme.textSecondary }}>
                Hospital Management
              </p>
            </div>
            <MenuItem icon={<CalendarCheck size={20} />} label="Appointments" route="/appointment" active={activeMenu === 'Appointments'} onClick={() => {}} />
            <MenuItem icon={<UserCheck size={20} />} label="OPD" route="/opd" active={activeMenu === 'OPD'} onClick={() => {}} />
            <MenuItem icon={<Hospital size={20} />} label="IPD" route="/ipd" active={activeMenu === 'IPD'} onClick={() => {}} />
          </div>

          {/* Diagnostics & Billing */}
          <div className="space-y-2">
            <div className="px-1 pt-1">
              <p className="font-medium text-sm" style={{ color: theme.textSecondary }}>
                Diagnostics & Billing
              </p>
            </div>
            <MenuItem icon={<TestTube size={20} />} label="Laboratory" route="/laboratory" active={activeMenu === 'Laboratory'} onClick={() => {}} />
            <MenuItem icon={<FileText size={20} />} label="Billing" route="/billing" active={activeMenu === 'Billing'} onClick={() => {}} />
            <MenuItem icon={<ShieldCheck size={20} />} label="Insurance" route="/insurance" active={activeMenu === 'Insurance'} onClick={() => {}} />
          </div>

          {/* Inventory */}
          {/* <div className="space-y-2">
            <div className="px-1 pt-1">
              <p className="font-medium text-sm" style={{ color: theme.textSecondary }}>
                Inventory
              </p>
            </div>
            <MenuItem icon={<Boxes size={20} />} label="Inventory" route="/inventory" active={activeMenu === 'Inventory'} onClick={() => {}} />
          </div> */}
        </nav>
      </aside>
    </div>
  );
}