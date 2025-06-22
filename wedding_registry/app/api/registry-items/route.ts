import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase-server";

export async function GET() {
  const supabase = supabaseServer();

  const { data, error } = await supabase
    .from("registry_items")
    .select("id, name, category, claimed, claimed_by_email, claimed_by_name")
    .order("id", { ascending: true });

  if (error) {
    console.error("❌ Supabase error:", error.message);
    return NextResponse.json({ error: "Failed to fetch registry items" }, { status: 500 });
  }

  // Map fields to match your frontend's expected interface naming
  const items = (data || []).map((item) => ({
    id: item.id,
    name: item.name,
    category: item.category,
    claimed: item.claimed,
    claimedByEmail: item.claimed_by_email,
    claimedByName: item.claimed_by_name,
  }));

  return NextResponse.json({ items });
}
