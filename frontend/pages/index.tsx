import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">One-Time Crypto Invoice Generator</h1>
      <Link href="/create-invoice">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-2xl hover:bg-blue-700">
          Create New Invoice
        </button>
      </Link>
    </div>
  );
}