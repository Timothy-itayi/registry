import { NextRequest, NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase-server";

interface UnclaimRequestBody {
  id: number;
  claimedByEmail: string;
}

export async function POST(request: NextRequest) {
  const supabase = supabaseServer();

  try {
    const body: UnclaimRequestBody = await request.json();
    console.log("📦 Unclaim Request body:", body);

    if (!body.id || !body.claimedByEmail) {
      return NextResponse.json({ error: "Missing id or claimedByEmail" }, { status: 400 });
    }

    // Fetch the claimed item to verify owner email
    const { data: item, error: fetchError } = await supabase
      .from("registry_items")
      .select("claimed_by_email, claimed")
      .eq("id", body.id)
      .maybeSingle();

    if (fetchError) {
      console.error("❌ Supabase fetch error:", fetchError);
      return NextResponse.json({ error: fetchError.message }, { status: 500 });
    }

    if (!item) {
      return NextResponse.json({ error: "Item not found" }, { status: 404 });
    }

    if (!item.claimed) {
      return NextResponse.json({ error: "Item is not claimed" }, { status: 400 });
    }

    // Check if the requester owns this claim
    if (item.claimed_by_email !== body.claimedByEmail) {
      return NextResponse.json({ error: "Unauthorized to unclaim this item" }, { status: 403 });
    }

    // Proceed to unclaim
    const { data, error } = await supabase
      .from("registry_items")
      .update({ claimed: false, claimed_by_email: null, claimed_by_name: null })
      .eq("id", body.id)
      .select("id, name, claimed, claimed_by_email")
      .maybeSingle();

    if (error) {
      console.error("❌ Supabase update error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    console.log("✅ Item unclaimed:", data);
    return NextResponse.json({ success: true, item: data });

  } catch (error) {
    console.error("❗️Unexpected error:", error);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
