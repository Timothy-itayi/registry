import { NextRequest, NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase-server";

export async function POST(request: NextRequest) {
  const supabase = supabaseServer();
  const { id, claimedByEmail, claimedByName } = await request.json();

  if (!id || !claimedByEmail || !claimedByName) {
    return NextResponse.json(
      { error: "Missing required fields: id, claimedByEmail or claimedByName" },
      { status: 400 }
    );
  }

  const { data, error } = await supabase
    .from("registry_items")
    .update({
      claimed: true,
      claimed_by_email: claimedByEmail.toLowerCase(),
      claimed_by_name: claimedByName.trim(),
    })
    .eq("id", id)
    .eq("claimed", false) // Prevent double claim
    .select("id, name, category, claimed, claimed_by_email, claimed_by_name")
    .maybeSingle();

  if (error || !data) {
    return NextResponse.json(
      { error: error?.message || "Item already claimed or update failed" },
      { status: 500 }
    );
  }

  return NextResponse.json({ item: data });
}
