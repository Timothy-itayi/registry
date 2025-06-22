import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase-server";

export async function GET() {
  const supabase = supabaseServer();

  const { data, error } = await supabase
    .from("registry_items")
    .select("id, name,  category, claimed, claimed_by")
    .order("id", { ascending: true });

  if (error) {
    console.error("❌ Supabase error:", error.message);
    return NextResponse.json({ error: "Failed to fetch registry items" }, { status: 500 });
  }

  // Map fields to match your RegistryItem interface naming
  const items = data.map((item) => ({
    id: item.id,
    name: item.name,
    category: item.category,
    claimed: item.claimed,
    claimedBy: item.claimed_by,
  }));

  return NextResponse.json({ items });
}
