import { useRouter } from "next/router";
import InvoiceViewer from "@/components/InvoiceViewer";

export default function InvoicePage() {
  const router = useRouter();
  const { id } = router.query;

  if (!id) return <p>Loading...</p>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <InvoiceViewer invoiceId={id as string} />
    </div>
  );
}