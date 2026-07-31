"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          <span className="text-white">Zenith</span>{" "}
          <span className="text-cyan-400">AI</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="#" className="text-gray-300 hover:text-white">
            Features
          </Link>

          <Link href="#" className="text-gray-300 hover:text-white">
            About
          </Link>

          <Link href="#" className="text-gray-300 hover:text-white">
            Pricing
          </Link>

          <Link href="#" className="text-gray-300 hover:text-white">
            Contact
          </Link>
        </nav>

        <button className="rounded-xl bg-cyan-500 px-5 py-2 font-medium text-black transition hover:bg-cyan-400">
          Get Started
        </button>
      </div>
    </header>
  );
}