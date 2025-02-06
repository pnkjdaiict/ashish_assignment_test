'use client';

export default function Error( ) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6">
      <div className="max-w-sm w-full bg-white shadow-md rounded-lg p-6 text-center border border-gray-200">
        <h2 className="text-2xl font-semibold text-red-500 mb-4">Something went wrong!</h2>
        <p className="text-gray-600 mb-6">
          We encountered an error. Please try again or contact support if the issue persists.
        </p>
        
      </div>
    </div>
  );
}
