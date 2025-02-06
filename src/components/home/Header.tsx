// /components/Header.tsx
"use client";

interface HeaderProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

export default function Header({ isSidebarOpen, toggleSidebar }: HeaderProps) {
  return (
    <header className="bg-white shadow-md sticky top-0 z-30">
      <div className="flex items-center justify-between px-4 py-3">
        <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
        <button
          className="block md:hidden text-blue-600 focus:outline-none"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? "Close" : "Menu"}
        </button>
      </div>
    </header>
  );
}
