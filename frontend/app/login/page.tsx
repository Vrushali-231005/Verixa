import type { Metadata } from "next";
import { Suspense } from "react";
import { AuthShell } from "@/components/auth/auth-shell";
import { LoginForm } from "@/components/auth/login-form";

export const metadata: Metadata = { title: "Sign in – VERIXA" };

type SearchParams = Promise<{ error?: string }>;

export default function LoginPage({ searchParams }: { searchParams: SearchParams }) {
  return (
    <AuthShell>
      {/* searchParams is request-time data, so it is read inside <Suspense> */}
      <Suspense fallback={<LoginForm />}>
        <LoginWithParams searchParams={searchParams} />
      </Suspense>
    </AuthShell>
  );
}

async function LoginWithParams({ searchParams }: { searchParams: SearchParams }) {
  const { error } = await searchParams;
  return <LoginForm callbackError={error === "auth"} />;
}
