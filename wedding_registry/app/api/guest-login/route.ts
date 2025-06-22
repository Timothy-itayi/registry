// /app/api/guest-login/route.ts
import { NextRequest, NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase-server";
import crypto from "crypto";

export async function POST(request: NextRequest) {
  const supabase = supabaseServer();
  const { email, name } = await request.json();

  if (!email || !name) {
    return NextResponse.json({ error: "Missing email or name" }, { status: 400 });
  }

  const token = crypto.randomBytes(32).toString("hex");
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString();

  const { data, error } = await supabase
    .from("guest_sessions")
    .upsert(
      {
        email: email.toLowerCase(),
        name: name.trim(),
        token,
        expires_at: expiresAt,
      },
      { onConflict: "email" }
    )
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ token, guest: { email: data.email, name: data.name } });
}
