import Container from "@/components/shared/Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050816] py-10">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          <div>
            <h3 className="text-2xl font-bold text-white">
              Zenith
              <span className="text-cyan-400"> AI</span>
            </h3>

            <p className="mt-2 text-gray-400">
              Your Intelligent Productivity Companion.
            </p>
          </div>

          <div className="text-sm text-gray-500">
            © 2026 Zenith AI. All Rights Reserved.
          </div>

        </div>
      </Container>
    </footer>
  );
}