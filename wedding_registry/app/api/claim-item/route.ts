import { NextRequest, NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase-server";
import { verifyGuestSession } from "@/lib/verify-session";

export async function POST(request: NextRequest) {
  const supabase = supabaseServer();
  const { id, token } = await request.json();

  if (!id || !token) {
    return NextResponse.json({ error: "Missing item ID or token" }, { status: 400 });
  }

  const guest = await verifyGuestSession(token);
  if (!guest) {
    return NextResponse.json({ error: "Invalid or expired token" }, { status: 401 });
  }

  const { email: claimedByEmail, name: claimedByName } = guest;

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

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  if (!data) {
    return NextResponse.json({ error: "Item already claimed" }, { status: 409 });
  }

  return NextResponse.json({ item: data });
}
