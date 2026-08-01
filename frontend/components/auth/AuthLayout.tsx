"use client";

import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050816] px-6">

      {/* Background Glow */}
      <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-2xl">

        {children}

      </div>

    </main>
  );
}