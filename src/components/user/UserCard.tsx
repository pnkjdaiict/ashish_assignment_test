"use client";
import React from "react";
import { Mail, Phone, Globe, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";

export default function UserCard({ user }: any) {
  const route = useRouter();
  return (
    <div
      onClick={() => route.push(`/users/${user.id}`)}
      className="w-full max-w-sm mx-auto bg-white border border-gray-200 shadow-lg rounded-xl transition-transform transform hover:scale-105 hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 overflow-hidden"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-5 text-white rounded-t-xl">
        <h2 className="text-lg font-semibold">{user.name}</h2>
        <p className="text-sm opacity-90">@{user.username}</p>
      </div>

      {/* User Details */}
      <div className="px-6 py-4 space-y-4">
        <div className="flex items-start gap-3">
          <Mail className="text-blue-500" />
          <div>
            <p className="text-sm text-gray-500 font-semibold">Email</p>
            <p className="text-gray-800">{user.email}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Phone className="text-green-500" />
          <div>
            <p className="text-sm text-gray-500 font-semibold">Phone</p>
            <p className="text-gray-800">{user.phone}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Globe className="text-indigo-500" />
          <div>
            <p className="text-sm text-gray-500 font-semibold">Website</p>
            <a
              href={`http://${user.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {user.website}
            </a>
          </div>
        </div>
      </div>

      {/* Address */}
      <div className="px-6 py-4 border-t">
        <div className="flex items-start gap-3">
          <MapPin className="text-red-500 mt-1" />
          <div>
            <h3 className="text-gray-800 font-semibold mb-1">Address</h3>
            <p className="text-gray-700 text-sm">
              {user.address.street}, {user.address.suite}
            </p>
            <p className="text-gray-700 text-sm">
              {user.address.city}, {user.address.zipcode}
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-100 px-6 py-3 text-center border-t">
        <p className="text-sm text-gray-500">
          User ID:{" "}
          <span className="font-semibold text-gray-800">{user.id}</span>
        </p>
      </div>
    </div>
  );
}
