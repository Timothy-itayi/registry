import { NextRequest, NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase-server";

interface ClaimRequestBody {
  id: number;
  claimedByEmail: string;
}

export async function POST(request: NextRequest) {
  const supabase = supabaseServer();

  try {
    const body: ClaimRequestBody = await request.json();
    if (!body.id || !body.claimedByEmail) {
      return NextResponse.json({ error: "Missing id or claimedByEmail" }, { status: 400 });
    }

    const { data, error } = await supabase
      .from("registry_items")
      .update({ claimed: true, claimed_by: body.claimedByEmail })
      .eq("id", body.id)
      .select("id, name, claimed, claimed_by")
      .maybeSingle();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    if (!data) {
      return NextResponse.json({ error: "Item not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, item: data });
  } catch (error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
