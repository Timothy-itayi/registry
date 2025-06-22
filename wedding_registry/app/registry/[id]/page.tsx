import { notFound } from "next/navigation";
import { supabaseServer } from "@/lib/supabase-server";
import Nav from "@/components/nav";
import ClaimButton from "@/components/claim-button";
import { registryItemsData, RegistryItem } from "@/components/data/registry-data";

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

  if (error || !item) return notFound();

  const localItem = registryItemsData.find((entry) => entry.id === item.id);

  const imageUrl = localItem?.imageUrl || "/registry-items/placeholder.jpg";
  const description = localItem?.description || "No description available.";
  const vendorLinks = localItem?.vendorLinks || [];

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-[#f6f2ec] font-serif text-[#4b2e0d] p-8 max-w-4xl mx-auto flex flex-col items-center">
        <div className="w-full bg-white rounded-lg shadow-lg p-6 max-w-3xl">
          <h1 className="text-3xl font-semibold mb-4 text-center">{item.name}</h1>
          <img
            src={imageUrl}
            alt={item.name}
            className="w-full max-w-sm rounded-md mb-4 object-cover mx-auto"
          />
          <p className="mb-6 text-center text-[#6b5840]">{description}</p>

          <div className="flex justify-center">
            <ClaimButton item={item} />
          </div>

          

          {vendorLinks.length > 0 && (
            <div className="mt-10 max-w-md mx-auto text-center">
              <p className="mb-3 italic text-sm text-[#5a4630]">
                Here are a few places to look:
              </p>
              <ul className="list-disc list-inside text-[#6b5840] text-left space-y-1">
            {vendorLinks.map(({ name, url }, idx) => (
  <li key={idx}>
    <a href={url} target="_blank" rel="noopener noreferrer" className="underline hover:text-[#8a0303]">
      {name}
    </a>
  </li>
))}

              </ul>
            </div>
          )}

          <a
            href="/registry"
            className="block mt-10 text-sm underline text-[#4b2e0d] hover:text-[#8a0303] text-center"
          >
            ← Back to Registry
          </a>
        </div>
      </main>
    </>
  );
}
