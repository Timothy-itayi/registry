import { supabaseServer } from "@/lib/supabase-server";

export async function verifyGuestSession(token: string) {
  const supabase = supabaseServer();

  const { data, error } = await supabase
    .from("guest_sessions")
    .select("email, name, expires_at")
    .eq("token", token)
    .maybeSingle();

  if (error || !data) return null;

  // Always extend session by 30 days from now
  const newExpiry = new Date();
  newExpiry.setDate(newExpiry.getDate() + 30);

  await supabase
    .from("guest_sessions")
    .update({ expires_at: newExpiry.toISOString() })
    .eq("token", token);

  return { email: data.email, name: data.name };
}
