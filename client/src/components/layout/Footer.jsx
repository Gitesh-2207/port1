import React from "react";
import { ArrowUp } from "lucide-react";
import { scrollToTop } from "../../utils/scroll";

export default function Footer({ theme = "dark" }) {
  const isLight = theme === "light";

  return (
    <footer
      className={`w-full py-8 px-6 sm:px-10 lg:px-16 transition-colors ${
        isLight
          ? "bg-[#f8f6f0] text-ink border-t border-ink/10"
          : "bg-ink text-white border-t border-white/10"
      }`}
    >
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs tracking-wider">
        <span className={isLight ? "text-ink/60" : "text-white/60"}>
          BASED IN INDORE, INDIA
        </span>

        <span
          className={
            isLight ? "text-ink/80 font-medium" : "text-white/80 font-medium"
          }
        >
          © {new Date().getFullYear()} GITESH PATIDAR · FULL-STACK DEVELOPER
        </span>

        <button
          type="button"
          onClick={scrollToTop}
          className={`group inline-flex items-center gap-2 font-bold transition-colors cursor-pointer ${
            isLight
              ? "text-ink hover:text-orange"
              : "text-white hover:text-lemon"
          }`}
          aria-label="Back to top of page"
        >
          BACK TO TOP{" "}
          <ArrowUp
            size={14}
            className="transition-transform duration-200 group-hover:-translate-y-1"
          />
        </button>
      </div>
    </footer>
  );
}
