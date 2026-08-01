"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import Container from "@/components/shared/Container";

const stats = [
  {
    value: 50,
    suffix: "+",
    label: "AI Tools Unified",
  },
  {
    value: 10000,
    suffix: "+",
    label: "Tasks Automated",
  },
  {
    value: 99,
    suffix: "%",
    label: "Productivity Boost",
  },
  {
    value: 24,
    suffix: "/7",
    label: "AI Availability",
  },
];

export default function Stats() {
  return (
    <section className="bg-[#050816] py-24">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl"
            >
              <h2 className="text-5xl font-bold text-cyan-400">
                <CountUp
                  end={stat.value}
                  duration={2}
                />
                {stat.suffix}
              </h2>

              <p className="mt-4 text-gray-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}