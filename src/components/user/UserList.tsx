"use client";

import React, { useState } from "react";
import UserCard from "./UserCard";
import { useRouter } from "next/navigation";

export default function UserList({ data }: any) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("");
  const router = useRouter();

  // Filter and Sort Logic
  const filteredData = data
    .filter(
      (user: any) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a: any, b: any) => {
      if (sortOption === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortOption === "company") {
        return a.company.name.localeCompare(b.company.name);
      }
      return 0;
    });

  return (
    <div>
      {/* Search and Sort Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name or email"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full md:w-1/3 px-4 py-2   rounded-lg border-2 shadow-sm text-gray-700  "
        />
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="w-full md:w-1/3 px-4 py-2 border rounded-lg shadow-sm  text-gray-700  "
        >
          <option value="">Sort By</option>
          <option value="name">Name</option>
          <option value="company">Company</option>
        </select>
      </div>

      {/* User List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredData.map((user: any) => (
          <div
            key={user.id}
            onClick={() => router.push(`/users/${user.id}`)}
            className="cursor-pointer"
          >
            <UserCard user={user} />
          </div>
        ))}
      </div>
    </div>
  );
}
