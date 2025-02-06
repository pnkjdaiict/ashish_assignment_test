'use client';

import { useRouter } from "next/navigation";

export default function Error( ) {
  const router = useRouter()
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6">
      <div className="max-w-sm w-full bg-white shadow-md rounded-lg p-6 text-center border border-gray-200">
        <h2 className="text-2xl font-semibold text-red-500 mb-4">Something went wrong!</h2>
        <p className="text-gray-600 mb-6">
          We encountered an error. Please try again or contact support if the issue persists.
        </p>
        <button  onClick={()=> router.refresh()}
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg shadow-md transition-all"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
