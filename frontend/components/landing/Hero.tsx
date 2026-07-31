"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#050816] pt-36 pb-28 text-white">

      <div className="absolute left-1/2 top-40 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[140px]" />

      <Container>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mx-auto max-w-5xl text-center"
        >

          <div className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300">
            ✨ AI Powered Productivity Platform
          </div>

          <h1 className="mt-8 text-6xl font-extrabold leading-tight md:text-8xl">
            Work Smarter
            <br />

            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 bg-clip-text text-transparent">
              with Zenith AI
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-400">
            Zenith AI is your intelligent operating system that helps you
            study, code, organize, automate tasks, remember everything and
            achieve more with powerful AI agents.
          </p>

          <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">

            <Button
              size="lg"
              className="bg-cyan-500 text-black hover:bg-cyan-400"
            >
              Launch App
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              size="lg"
            >
              Watch Demo
            </Button>

          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="mx-auto mt-24 max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl"
          >

            <div className="space-y-4 text-left">

              <p className="font-mono text-cyan-400">
                {">"} Prepare me for Amazon SDE Interview
              </p>

              <p className="text-gray-300">
                ✅ Building roadmap...
              </p>

              <p className="text-gray-300">
                ✅ Creating DSA plan...
              </p>

              <p className="text-gray-300">
                ✅ Scheduling revision...
              </p>

              <p className="text-gray-300">
                ✅ Tracking progress...
              </p>

            </div>

          </motion.div>

        </motion.div>

      </Container>

    </section>
  );
}