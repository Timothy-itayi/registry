import { NextRequest, NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase-server";

interface ClaimRequestBody {
  id: number;
  claimedBy: string;
}

export async function POST(request: NextRequest) {
  const supabase = supabaseServer();

  try {
    const body: ClaimRequestBody = await request.json();
    console.log("📦 Request body:", body);
    

    if (!body.id || !body.claimedBy) {
      return NextResponse.json({ error: "Missing id or claimedBy" }, { status: 400 });
    }

    // Update claim status, return only needed fields
    const { data, error } = await supabase
      .from("registry_items")
      .update({ claimed: true, claimed_by: body.claimedBy })
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
    console.log("Supabase update result:", { data, error });


    return NextResponse.json({ success: true, item: data });
    
  } catch (error) {
    console.error("❗️Unexpected error:", error);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
