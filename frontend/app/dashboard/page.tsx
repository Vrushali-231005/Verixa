import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { connection } from "next/server";
import { Suspense } from "react";
import { SignOutButton } from "@/components/auth/sign-out-button";
import { Brand } from "@/components/ui/brand";
import { createClient } from "@/lib/supabase/server";

export const metadata: Metadata = { title: "Dashboard – VERIXA" };

export default function DashboardPage() {
  return (
    <div className="dashboard-screen">
      <Suspense fallback={<DashboardHeader />}>
        <DashboardContent />
      </Suspense>
    </div>
  );
}

function DashboardHeader({ firstName }: { firstName?: string }) {
  return (
    <header className="dash-header shell">
      <Brand />
      {firstName && (
        <div className="dash-user">
          <span className="dash-greeting">Hi, {firstName}</span>
          <span className="dash-avatar" aria-hidden="true">
            {firstName.charAt(0).toUpperCase()}
          </span>
          <SignOutButton />
        </div>
      )}
    </header>
  );
}

// Depends on the signed-in user, so it renders at request time (inside <Suspense>).
async function DashboardContent() {
  await connection();

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const fullName = (user.user_metadata?.full_name as string | undefined)?.trim();
  const firstName = fullName ? fullName.split(/\s+/)[0] : (user.email?.split("@")[0] ?? "there");

  return (
    <>
      <DashboardHeader firstName={firstName} />
      <main className="shell dashboard-main" />
    </>
  );
}
