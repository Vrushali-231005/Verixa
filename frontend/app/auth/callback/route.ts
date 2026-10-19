import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

// Supabase email-confirmation links land here with ?code=...
export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const nextParam = searchParams.get("next") ?? "/dashboard";
  // Only allow relative paths to avoid open redirects.
  const next = nextParam.startsWith("/") && !nextParam.startsWith("//") ? nextParam : "/dashboard";

  const supabase = await createClient();

  if (code) {
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) return NextResponse.redirect(`${origin}${next}`);
  }

  // A confirmation code works only once. If the link was opened twice (email
  // scanners and browsers sometimes pre-open links), the second attempt fails
  // even though the first one signed the user in. Check for that case.
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (user) return NextResponse.redirect(`${origin}${next}`);

  return NextResponse.redirect(`${origin}/login?error=auth`);
}
