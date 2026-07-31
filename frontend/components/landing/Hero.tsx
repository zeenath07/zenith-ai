"use client";

import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0B1120] px-6 text-white">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
          🚀 Powered by Agentic AI
        </span>

        <h1 className="mt-8 text-5xl font-extrabold leading-tight md:text-7xl">
          Your Intelligent
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 bg-clip-text text-transparent">
            Personal Operating System
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg text-gray-400 md:text-xl">
          Zenith AI helps you think faster, organize your life, automate your
          work, and achieve more with a team of intelligent AI agents.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
          <button className="flex items-center gap-2 rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-black transition hover:bg-cyan-400">
            Launch App
            <ArrowRight size={18} />
          </button>

          <button className="rounded-xl border border-white/10 px-8 py-4 font-semibold transition hover:border-cyan-400 hover:text-cyan-300">
            View Demo
          </button>
        </div>

        <div className="mt-20 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl">
          <p className="text-left font-mono text-green-400">
            {">"} Create an Amazon interview roadmap
          </p>

          <div className="mt-6 space-y-4 text-left text-gray-300">
            <p>✅ Building personalized roadmap...</p>
            <p>✅ Scheduling interview preparation...</p>
            <p>✅ Generating DSA practice...</p>
            <p>✅ Creating revision notes...</p>
            <p>✅ Tracking daily progress...</p>
          </div>
        </div>
      </div>
    </section>
  );
}