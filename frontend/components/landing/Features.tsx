"use client";

import { motion } from "framer-motion";
import {
  Brain,
  FileText,
  CalendarDays,
  Bot,
  CheckSquare,
  ShieldCheck,
} from "lucide-react";
import Container from "@/components/shared/Container";

const features = [
  {
    title: "AI Chat",
    description:
      "Chat with multiple AI models including GPT, Gemini and Claude.",
    icon: Bot,
  },
  {
    title: "Document Intelligence",
    description:
      "Upload PDFs and documents to summarize, search and analyze instantly.",
    icon: FileText,
  },
  {
    title: "Smart Planner",
    description:
      "Automatically create study plans, schedules and productivity workflows.",
    icon: CalendarDays,
  },
  {
    title: "Task Manager",
    description:
      "Track daily goals, AI-generated tasks and project milestones.",
    icon: CheckSquare,
  },
  {
    title: "Persistent Memory",
    description:
      "Zenith remembers your conversations and preferences securely.",
    icon: Brain,
  },
  {
    title: "Enterprise Security",
    description:
      "Secure authentication and encrypted storage designed for modern AI apps.",
    icon: ShieldCheck,
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="bg-[#050816] py-24 text-white"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl font-bold">
            Everything you need in one AI workspace
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Zenith AI combines productivity, automation, planning,
            document analysis and intelligent assistants into one platform.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-cyan-500/20 p-4">
                  <Icon className="h-7 w-7 text-cyan-400" />
                </div>

                <h3 className="mb-4 text-2xl font-semibold">
                  {feature.title}
                </h3>

                <p className="leading-8 text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}