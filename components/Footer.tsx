import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="relative z-10 w-full border-t border-gray-200/50 bg-background/60 backdrop-blur-sm"
      role="contentinfo"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-6 sm:flex-row sm:justify-between sm:px-6 sm:py-5">
        {/* Company info */}
        <p className="text-center text-xs font-light text-muted sm:text-left">
          CareerDNA{" "}
          <span className="mx-1 text-gray-300" aria-hidden="true">
            ·
          </span>{" "}
          Built by Tezsid Designs Pvt Ltd.
        </p>

        {/* Links */}
        <div className="flex items-center gap-4 sm:gap-5">
          <Link
            href="/disclaimer"
            className="text-xs font-light text-muted transition-colors duration-200 hover:text-primary"
          >
            Disclaimer
          </Link>
          <span className="text-gray-300" aria-hidden="true">
            ·
          </span>
          <Link
            href="/privacy"
            className="text-xs font-light text-muted transition-colors duration-200 hover:text-primary"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
