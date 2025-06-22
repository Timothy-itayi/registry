// /app/api/claim-item/route.ts
import { NextRequest, NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase-server";

export async function POST(request: NextRequest) {
  const supabase = supabaseServer();
  const { id, claimedByEmail, claimedByName } = await request.json();

  if (!id || !claimedByEmail || !claimedByName) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("registry_items")
    .update({
      claimed: true,
      claimed_by_email: claimedByEmail,
      claimed_by_name: claimedByName,
    })
    .eq("id", id)
    .eq("claimed", false) // Prevent double claim
    .select("id, name, claimed, claimed_by_email, claimed_by_name")
    .maybeSingle();

  if (error || !data) {
    return NextResponse.json({ error: error?.message || "Item already claimed" }, { status: 500 });
  }

  return NextResponse.json({ item: data });
}
