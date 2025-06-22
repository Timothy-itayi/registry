import { supabaseServer } from "@/lib/supabase-server";

export async function verifyGuestSession(token: string) {
  const supabase = supabaseServer();

  const { data, error } = await supabase
    .from("guest_sessions")
    .select("email, name, expires_at")
    .eq("token", token)
    .maybeSingle();

  if (error || !data) return null;

  if (new Date(data.expires_at) < new Date()) return null;

  return { email: data.email, name: data.name };
}
