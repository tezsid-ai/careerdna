import HeroBackground from "./HeroBackground";
import HeroBadge from "./HeroBadge";
import HeroContent from "./HeroContent";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-background px-6 py-20"
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
