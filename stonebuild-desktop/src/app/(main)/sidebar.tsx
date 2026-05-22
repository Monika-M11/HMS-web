

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {  Users,
  Package,
  ShoppingCart,
  Receipt,
  BarChart3,UsersRound,
  CalendarCheck,Stethoscope} from 'lucide-react';

import { theme } from '@/theme';
interface SidebarProps {
  onMenuChange?: (menu: string) => void;
}


const menuMap: Record<string, string> = {
  '/contacts': 'Contacts',
  '/items': 'Items',
  '/purchase': 'Purchase',
  '/sales': 'Sales',
  '/reports': 'Reports',
  '/staffs' : 'Staffs',
  '/bookings' :'Bookings',
  '/consultation' :'consultation'
};

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  route: string;
  active: boolean;

  onClick: (label: string) => void;
}

function MenuItem({
  icon,
  label,
  route,
  active,
  onClick,
}: MenuItemProps) {
  return (
    <Link href={route}>
      <div
        onClick={() => onClick(label)}
        className="
          flex items-center gap-3
          px-4 py-3
          rounded-2xl
          transition-all duration-300
          cursor-pointer
        "
        style={{
          backgroundColor: active
            ? theme.primary
            : 'transparent',

          color: active
            ? theme.textInverse
            : theme.textPrimary,
        }}
      >
        {icon}

        <span className="font-medium">
          {label}
        </span>
      </div>
    </Link>
  );
}

export default function Sidebar({
  onMenuChange,
}: SidebarProps) {
  const pathname = usePathname();

  const activeMenu =
    menuMap[pathname] || 'Items';

  return (
    <div
  className="
    h-screen
    overflow-y-auto
    scrollbar-hide
  "
>
    <aside
      className="
        w-[270px]
        h-screen
        px-5 py-6
        border-r
        flex flex-col
      "
      style={{
        background: `linear-gradient(to bottom, ${theme.backgroundSoft}, ${theme.background})`,
        borderColor: theme.border,
      }}
    >
      {/* Logo */}
      <div className="mb-4">
        <h1
          className="
            text-3xl
            font-bold
            pb-5
            border-b
          "
          style={{
            color: theme.primaryDark,
            borderColor: theme.border,
          }}
        >
          HMS
        </h1>

        <p
          className="text-sm mt-2"
          style={{
            color: theme.textSecondary,
          }}
        >
          Contact Management
        </p>
      </div>

      {/* Navigation */}
    
<nav className="space-y-4">

  {/* CONTACT BUTTON */}
  <div className="space-y-2">
    <MenuItem
      icon={<Users size={20} />}
      label="Contacts"
      route="/contacts"
      active={activeMenu === 'Contacts'}
      onClick={() => {}}
    />
  </div>

  {/* PHARMACY SECTION */}
<div className="space-y-2">

    {/* Heading */}
 <div className="px-1 pt-1">
  <p
    className="font-medium text-sm"
    style={{
      color: theme.textSecondary,
    }}
  >
    Pharmacy Management
  </p>
</div>

    {/* Menu Buttons */}
    <MenuItem
      icon={<Package size={20} />}
      label="Items"
      route="/items"
      active={activeMenu === 'Items'}
      onClick={() => {}}
    />

    <MenuItem
      icon={<ShoppingCart size={20} />}
      label="Purchase"
      route="/purchase"
      active={activeMenu === 'Purchase'}
      onClick={() => {}}
    />

    <MenuItem
      icon={<Receipt size={20} />}
      label="Sales"
      route="/sales"
      active={activeMenu === 'Sales'}
      onClick={() => {}}
    />

    <MenuItem
      icon={<BarChart3 size={20} />}
      label="Reports"
      route="/reports"
      active={activeMenu === 'Reports'}
      onClick={() => {}}
    />
  </div>

  







  
  {/* Hospital SECTION */}
<div className="space-y-2">

    {/* Heading */}
 <div className="px-1 pt-1">
  <p
    className="font-medium text-sm"
    style={{
      color: theme.textSecondary,
    }}
  >
    Hospital Management
  </p>
</div>

    {/* Menu Buttons */}
    <MenuItem
      icon={<UsersRound size={20} />}
      label="Staffs"
      route="/staffs"
      active={activeMenu === 'Staffs'}
      onClick={() => {}}
    />


      <MenuItem
      icon={<CalendarCheck size={20} />}
      label="Bookings"
      route="/bookings"
      active={activeMenu === 'Bookings'}
      onClick={() => {}}
    />


       <MenuItem
      icon={<Stethoscope size={20} />}
      label="Consultation"
      route="/consultation"
      active={activeMenu === 'Consultation'}
      onClick={() => {}}
    />



    
  </div>
</nav>
    </aside>
    </div>
  );
}