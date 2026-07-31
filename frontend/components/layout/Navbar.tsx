"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#how" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/30 backdrop-blur-xl"
    >
      <Container className="flex h-20 items-center justify-between">

        <Link href="/" className="text-3xl font-bold tracking-tight">
          <span className="text-white">Zenith</span>
          <span className="text-cyan-400"> AI</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-gray-300 transition hover:text-cyan-400"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button
          className="rounded-xl bg-cyan-500 px-6 text-black hover:bg-cyan-400"
        >
          Get Started
        </Button>

      </Container>
    </motion.header>
  );
}