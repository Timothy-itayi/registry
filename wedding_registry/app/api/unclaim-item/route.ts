import { NextRequest, NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase-server";

interface UnclaimRequestBody {
  id: number;
}

export async function POST(request: NextRequest) {
  const supabase = supabaseServer();

  try {
    const body: UnclaimRequestBody = await request.json();
    console.log("📦 Unclaim Request body:", body);

    if (!body.id) {
      return NextResponse.json({ error: "Missing id" }, { status: 400 });
    }

    // Update claim status to unclaimed
    const { data, error } = await supabase
      .from("registry_items")
      .update({ claimed: false, claimed_by: null })
      .eq("id", body.id)
      .select("id, name, claimed, claimed_by")
      .maybeSingle();

    if (error) {
      console.error("❌ Supabase error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    if (!data) {
      return NextResponse.json({ error: "Item not found" }, { status: 404 });
    }

    console.log("✅ Item unclaimed:", data);
    return NextResponse.json({ success: true, item: data });

  } catch (error) {
    console.error("❗️Unexpected error:", error);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
