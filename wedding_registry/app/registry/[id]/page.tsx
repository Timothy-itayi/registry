import { notFound } from "next/navigation";
import { supabaseServer } from "@/lib/supabase-server";
import { Gift } from "lucide-react";

export default async function RegistryItemDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
 
  const { id: idParam } = await params;
  const id = Number(idParam);

  if (isNaN(id)) {
    return notFound();
  }

  const supabase = supabaseServer();

  const { data: item, error } = await supabase
    .from("registry_items")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error || !item) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-[#f6f2ec] font-serif text-[#4b2e0d] p-8 max-w-4xl mx-auto flex flex-col items-center">
      <h1 className="text-3xl font-semibold mb-4">{item.name}</h1>
      <p className="mb-6 max-w-xl text-center">{item.description}</p>
      {item.imageUrl && (
        <img
          src={item.imageUrl}
          alt={item.name}
          className="w-full max-w-md rounded-lg mb-6 object-cover"
        />
      )}

      <div className="bg-white bg-opacity-90 border border-[#d4af37] rounded-lg p-6 shadow-md w-full max-w-sm text-center">
        {item.claimed ? (
          <p className="text-green-700 font-semibold mb-4">
            ✅ Claimed by: {item.claimed_by || "Someone"}
          </p>
        ) : (
          <button
            className="bg-gradient-to-r from-[#8a0303] to-[#d4af37] text-white px-6 py-2 rounded-md hover:from-[#700202] hover:to-[#bfa63d] inline-flex items-center mx-auto"
           
          >
            <Gift className="w-5 h-5 mr-2" />
            Claim This Gift
          </button>
        )}
        <a
          href="/registry"
          className="block mt-6 text-sm underline text-[#4b2e0d] hover:text-[#8a0303]"
        >
          ← Back to Registry
        </a>
      </div>
    </div>
  );
}