"use client";

import React from "react";
import { Mail, Phone, Globe, MapPin, Building } from "lucide-react";

export default function UserDetail({ user, posts }: any) {
  return (
    <div className="w-full mx-auto p-6 space-y-8">
      {/* User Info Section */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
          <h2 className="text-3xl font-bold">{user.name}</h2>
          <p className="text-sm opacity-90">@{user.username}</p>
        </div>
        <div className="px-6 py-4 space-y-4">
          <div className="flex items-center gap-3">
            <Mail className="text-blue-500" />
            <div>
              <p className="text-sm text-gray-500 font-semibold">Email</p>
              <p className="text-gray-800">{user.email}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="text-green-500" />
            <div>
              <p className="text-sm text-gray-500 font-semibold">Phone</p>
              <p className="text-gray-800">{user.phone}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
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
          <div className="flex items-start gap-3">
            <Building className="text-yellow-500 mt-1" />
            <div>
              <h3 className="text-gray-800 font-semibold mb-1">Company</h3>
              <p className="text-gray-700">{user.company.name}</p>
              <p className="text-gray-500 text-sm italic">
                {user.company.catchPhrase}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* User Posts Section */}
      <div>
        <h3 className="text-3xl font-bold text-gray-800 mb-6">Posts</h3>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          {posts.map((post: any) => (
            <div
              key={post.id}
              className="bg-white shadow-md rounded-xl p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1"
            >
              <h4 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                {post.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                {post.body}
              </p>
              <button className="mt-4 inline-block text-sm font-medium text-blue-600 hover:text-blue-800">
                Read More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
