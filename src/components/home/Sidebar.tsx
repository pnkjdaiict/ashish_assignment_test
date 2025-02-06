// /components/Sidebar.tsx
"use client";

import { useRouter } from "next/navigation";

interface SidebarProps {
  isOpen: boolean;
}

export default function Sidebar({ isOpen }: SidebarProps) {
  const router = useRouter();
  return (
    <div className="re">
      <aside
        className={`fixed   h-full left-0 z-20 w-64 bg-gray-800 text-white transform transition-transform

      ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:relative md:translate-x-0`}
      >
        <div></div>
        <div className="p-4">
          <h2 className="text-xl font-bold">Dashboard</h2>
        </div>
        <nav className="mt-4">
          <ul>
            <li
              onClick={() => router.push("/")}
              className="py-2  border-b px-3 hover:bg-blue-500  uppercase cursor-pointer"
            >
              Dashboard
            </li>
            <li
              onClick={() => router.push("/")}
              className="py-2 px-3 hover:bg-blue-500  uppercase cursor-pointer"
            >
              settings
            </li>
            <li
              onClick={() => router.push("/")}
              className="py-2 px-3 hover:bg-blue-500  uppercase cursor-pointer"
            >
              users
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
}
