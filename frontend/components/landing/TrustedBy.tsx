"use client";

import { motion } from "framer-motion";
import Container from "@/components/shared/Container";

const technologies = [
  "Next.js",
  "React",
  "FastAPI",
  "PostgreSQL",
  "LangGraph",
  "OpenAI",
  "Gemini",
  "Docker",
];

export default function TrustedBy() {
  return (
    <section className="border-y border-white/10 bg-[#050816] py-16">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="mb-10 text-sm uppercase tracking-[0.4em] text-gray-500">
            Powered By
          </p>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-8">
            {technologies.map((tech) => (
              <div
                key={tech}
                className="rounded-2xl border border-white/10 bg-white/5 py-5 text-center text-gray-300 transition duration-300 hover:border-cyan-400 hover:text-cyan-400"
              >
                {tech}
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}