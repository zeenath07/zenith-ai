"use client";

import { motion } from "framer-motion";
import { MessageSquare, BrainCircuit, Sparkles } from "lucide-react";
import Container from "@/components/shared/Container";

const steps = [
  {
    icon: MessageSquare,
    title: "Tell Zenith Your Goal",
    description:
      "Describe what you want to accomplish using natural language.",
  },
  {
    icon: BrainCircuit,
    title: "AI Agent Planning",
    description:
      "Zenith coordinates specialized AI agents to plan and solve your request.",
  },
  {
    icon: Sparkles,
    title: "Smart Execution",
    description:
      "Receive personalized results, tasks, notes, schedules and insights instantly.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how"
      className="bg-[#050816] py-28 text-white"
    >
      <Container>

        <div className="mb-20 text-center">
          <h2 className="text-5xl font-bold">
            How Zenith AI Works
          </h2>

          <p className="mt-5 text-gray-400">
            Three simple steps to supercharge your productivity.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-3">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
              >
                <div className="mb-8 inline-flex rounded-2xl bg-cyan-500/20 p-5">
                  <Icon className="h-10 w-10 text-cyan-400" />
                </div>

                <h3 className="mb-5 text-2xl font-semibold">
                  {step.title}
                </h3>

                <p className="leading-8 text-gray-400">
                  {step.description}
                </p>
              </motion.div>
            );
          })}

        </div>

      </Container>
    </section>
  );
}