// app/registry/[id]/page.tsx
import { notFound } from "next/navigation";
import { supabaseServer } from "@/lib/supabase-server";
import Nav from "@/components/nav";
import ClaimButton from "@/components/claim-button";

interface RegistryItem {
  id: number;
  name: string;
  description?: string;
  imageUrl?: string;
  claimed: boolean;
  claimed_by_email?: string | null;
  claimed_by_name?: string | null;
  category?: string;
}

interface Props {
  params: Promise<{ id: string }>;
}

export default async function RegistryItemDetail({ params }: Props) {
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
    <>
      <Nav />
      <main className="min-h-screen bg-[#f6f2ec] font-serif text-[#4b2e0d] p-8 max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="text-3xl font-semibold mb-4">{item.name}</h1>
        <p className="mb-6 max-w-xl text-center">{item.description || "No description available."}</p>
        {item.imageUrl && (
          <img
            src={item.imageUrl}
            alt={item.name}
            className="w-full max-w-md rounded-lg mb-6 object-cover"
          />
        )}

        <ClaimButton item={item} />

        <a
          href="/registry"
          className="block mt-6 text-sm underline text-[#4b2e0d] hover:text-[#8a0303]"
        >
          ← Back to Registry
        </a>
      </main>
    </>
  );
}
