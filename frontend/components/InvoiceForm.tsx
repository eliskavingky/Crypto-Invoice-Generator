"use client";

import { useState } from "react";
import { createInvoiceContract } from "@/lib/contract";

export default function InvoiceForm() {
  const [payer, setPayer] = useState("");
  const [payee, setPayee] = useState("");
  const [token, setToken] = useState("");
  const [amount, setAmount] = useState("");

  const handleCreate = async () => {
    const id = await createInvoiceContract(payer, payee, token, amount);
    alert(`Invoice created! Link: /invoice/${id}`);
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6">Create Invoice</h2>
      <input type="text" placeholder="Payer Address" value={payer} onChange={(e) => setPayer(e.target.value)}
        className="w-full p-3 mb-4 border rounded-xl" />
      <input type="text" placeholder="Payee Address" value={payee} onChange={(e) => setPayee(e.target.value)}
        className="w-full p-3 mb-4 border rounded-xl" />
      <input type="text" placeholder="Token Address (USDC)" value={token} onChange={(e) => setToken(e.target.value)}
        className="w-full p-3 mb-4 border rounded-xl" />
      <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)}
        className="w-full p-3 mb-6 border rounded-xl" />
      <button onClick={handleCreate} className="w-full bg-blue-600 text-white py-3 rounded-2xl hover:bg-blue-700">
        Create Invoice
      </button>
    </div>
  );
}