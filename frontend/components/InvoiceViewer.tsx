"use client";

import { useEffect, useState } from "react";
import { payInvoiceContract } from "@/lib/contract";

interface Props {
  invoiceId: string;
}

export default function InvoiceViewer({ invoiceId }: Props) {
  const [loading, setLoading] = useState(false);

  const handlePay = async () => {
    setLoading(true);
    await payInvoiceContract(invoiceId);
    alert("Payment Successful!");
    setLoading(false);
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6">Invoice #{invoiceId}</h2>
      <button onClick={handlePay} disabled={loading}
        className="w-full bg-green-600 text-white py-3 rounded-2xl hover:bg-green-700">
        {loading ? "Processing..." : "Pay Invoice"}
      </button>
    </div>
  );
}