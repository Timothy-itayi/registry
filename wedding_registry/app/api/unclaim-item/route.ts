import { NextRequest, NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase-server";

interface UnclaimRequestBody {
  id: number;
  claimedByEmail: string;
  claimedByName: string;
}

export async function POST(request: NextRequest) {
  const supabase = supabaseServer();

  try {
    const body: UnclaimRequestBody = await request.json();
    const { id, claimedByEmail, claimedByName } = body;

    if (!id || !claimedByEmail || !claimedByName) {
      return NextResponse.json(
        { error: "Missing id, claimedByEmail, or claimedByName" },
        { status: 400 }
      );
    }

    const requestEmail = claimedByEmail.toLowerCase();
    const requestName = claimedByName.trim().toLowerCase();

    // Fetch claimed item to verify both email and name
    const { data: item, error: fetchError } = await supabase
      .from("registry_items")
      .select("claimed_by_email, claimed_by_name, claimed")
      .eq("id", id)
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

    const storedEmail = item.claimed_by_email?.toLowerCase();
    const storedName = item.claimed_by_name?.trim().toLowerCase();

    if (storedEmail !== requestEmail || storedName !== requestName) {
      return NextResponse.json(
        { error: "Unauthorized: Name or Email does not match claim record" },
        { status: 403 }
      );
    }

    // Unclaim item
    const { data: updatedItem, error: updateError } = await supabase
      .from("registry_items")
      .update({
        claimed: false,
        claimed_by_email: null,
        claimed_by_name: null,
      })
      .eq("id", id)
      .select("id, name, category, claimed")
      .maybeSingle();

    if (updateError) {
      console.error("❌ Supabase update error:", updateError);
      return NextResponse.json({ error: updateError.message }, { status: 500 });
    }

    console.log("✅ Item successfully unclaimed:", updatedItem);
    return NextResponse.json({ success: true, item: updatedItem });

  } catch (error) {
    console.error("❗️Unexpected error:", error);
    return NextResponse.json({ error: "Invalid request format" }, { status: 400 });
  }
}
