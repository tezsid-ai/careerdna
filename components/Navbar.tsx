import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 w-full"
      role="navigation"
      aria-label="Main navigation"
    >
      <div
        className="border-b border-gray-200/40 bg-background/70 backdrop-blur-lg"
        style={{
          boxShadow: "0 1px 8px rgba(79, 59, 139, 0.04)",
        }}
      >
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:h-16 sm:px-6">
          {/* Left — Brand */}
          <Link
            href="/"
            className="flex items-center gap-1.5 transition-opacity duration-200 hover:opacity-80"
          >
            <span className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
              Career
              <span className="bg-gradient-to-r from-primary to-primary-deep bg-clip-text text-transparent">
                DNA
              </span>
            </span>
          </Link>

          {/* Right — Beta badge */}
          <div
            className="inline-flex items-center rounded-full border border-gold/20
              bg-gold/5 px-3 py-1 text-[10px] font-semibold uppercase
              tracking-widest text-gold sm:px-3.5 sm:text-[11px]"
            style={{ animation: "shimmer 4s ease-in-out infinite" }}
          >
            Beta Version
          </div>
        </div>
      </div>
    </nav>
  );
}
