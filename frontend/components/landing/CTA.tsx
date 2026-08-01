"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "@/components/shared/Container";

export default function CTA() {
  return (
    <section className="bg-[#050816] py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-sky-500/10 to-purple-500/10 p-16 text-center backdrop-blur-xl"
        >
          <h2 className="text-5xl font-bold text-white">
            Ready to Supercharge
            <br />
            Your Productivity?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            Experience the future of AI-powered productivity with intelligent
            agents, persistent memory and a beautiful workspace.
          </p>

          <Button
            size="lg"
            className="mt-10 bg-cyan-500 text-black hover:bg-cyan-400"
          >
            Launch Zenith AI
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}