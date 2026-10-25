import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { NAV_LINKS } from "../../constants/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const currentPage = location.pathname;

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-4 z-50 mx-auto max-w-[1200px] w-[calc(100%-32px)] rounded-xl bg-[rgba(20,18,17,0.94)] px-5 py-3.5 text-white shadow-[0_24px_80px_rgba(28,25,23,0.18)] backdrop-blur-xl border border-white/10">
      <div className="flex items-center justify-between gap-4">
        {/* Brand Link */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex min-w-0 items-center gap-3 group"
          aria-label="Gitesh Patidar — Full-Stack Developer Home"
        >
          <div className="grid h-[38px] w-[38px] shrink-0 place-items-center rounded-[10px] bg-ink border border-white/20 text-lg transition-transform duration-300 group-hover:scale-105 select-none">
            👨🏻‍💻
          </div>

          <div className="min-w-0">
            <div className="truncate font-mono text-sm font-semibold tracking-tight text-white">
              Gitesh Patidar
            </div>
            <div className="text-[9px] font-mono tracking-[0.06em] text-white/70 uppercase">
              FULL-STACK DEVELOPER
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-2 md:flex" aria-label="Main Navigation">
          {NAV_LINKS.map(({ label, path }) => (
            <Link
              key={label}
              to={path}
              className={`rounded-full border border-white/15 px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-wider transition hover:bg-white/15 ${
                currentPage === path ? "bg-white/15 text-white" : "text-white/85"
              }`}
            >
              {label}
            </Link>
          ))}

          <Link
            to="/resume"
            className={`ml-1 flex items-center gap-2 rounded-full px-5 py-2 font-mono text-[11px] font-semibold transition hover:-translate-y-0.5 ${
              currentPage === "/resume"
                ? "bg-white text-ink shadow-sm"
                : "bg-lemon text-ink hover:bg-orange"
            }`}
          >
            RESUME <ArrowUpRight size={13} />
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center md:hidden">
          <button
            type="button"
            className="flex items-center justify-center p-2 text-white hover:text-lemon transition cursor-pointer rounded-lg hover:bg-white/10"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {menuOpen && (
        <nav
          className="mt-4 flex flex-col gap-2 border-t border-white/10 pt-4 md:hidden"
          aria-label="Mobile Navigation"
        >
          {NAV_LINKS.map(({ label, path }) => (
            <Link
              key={label}
              to={path}
              onClick={closeMenu}
              className={`rounded-xl border border-white/15 px-4 py-3 font-mono text-xs uppercase tracking-wider transition hover:bg-white/10 ${
                currentPage === path
                  ? "bg-white/15 font-bold text-white"
                  : "text-white/85"
              }`}
            >
              {label}
            </Link>
          ))}

          <Link
            to="/resume"
            onClick={closeMenu}
            className={`flex items-center justify-between rounded-xl px-4 py-3 font-mono text-xs uppercase tracking-wider font-bold text-ink transition hover:bg-orange ${
              currentPage === "/resume" ? "bg-white" : "bg-lemon"
            }`}
          >
            <span>RESUME</span>
            <ArrowUpRight size={15} />
          </Link>
        </nav>
      )}
    </header>
  );
}
