import HeroBackground from "./HeroBackground";
import HeroBadge from "./HeroBadge";
import HeroContent from "./HeroContent";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100vh-64px)] items-center justify-center overflow-hidden px-6 py-16 md:py-24"
      // style={{ backgroundColor: "#F0EEF8" }}
    >
      {/* Animated background layer */}
      <HeroBackground />

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        <HeroBadge />
        <HeroContent />
      </div>
    </section>
  );
}
