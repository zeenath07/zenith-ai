import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/landing/Hero";
import TrustedBy from "@/components/landing/TrustedBy";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import WorkspacePreview from "@/components/landing/WorkspacePreview";
import Stats from "@/components/landing/Stats";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedBy />
      <Features />
      <HowItWorks />
      <WorkspacePreview />
      <Stats />
      <CTA />
      <Footer />
    </>
  );
}