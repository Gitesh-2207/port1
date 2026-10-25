import React from "react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export default function LetsConnect({ className = "" }) {
  return (
    <section
      id="contact"
      className={`relative w-full bg-ink px-6 py-20 text-white sm:px-12 sm:py-24 lg:px-20 lg:py-28 border-t border-white/10 scroll-mt-28 ${className}`}
      aria-label="Let's Connect"
    >
      <div className="mx-auto max-w-6xl">
        <div className="reveal-on-scroll reveal-fade-up">
          {/* Eyebrow Label matching ContactSection */}
          <p className="font-mono text-xs tracking-[.16em] uppercase text-white/60">
            04 / LET'S CONNECT
          </p>

          {/* User's statement matching the 'HAVE A GOOD PROJECT IDEA?' bold display typography */}
          <h2 className="mt-5 font-display text-3xl sm:text-5xl lg:text-6xl font-black uppercase leading-[1.02] tracking-tight text-white max-w-5xl">
            I turn ideas into modern, user-friendly web experiences.
          </h2>

          {/* Minimalist Action Buttons & Social Icons */}
          <div className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href="mailto:giteshpatidar2207@gmail.com"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 font-mono text-xs font-bold text-ink transition hover:bg-white/90 hover:translate-x-0.5 hover:translate-y-0.5 uppercase shadow-hard-sm cursor-pointer"
            >
              GET IN TOUCH
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            <a
              aria-label="GitHub profile"
              href="https://github.com/Gitesh-2207"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 p-3.5 hover:bg-white/10 transition hover:-translate-y-0.5 text-white"
            >
              <Github size={18} />
            </a>

            <a
              aria-label="Send email directly"
              href="mailto:giteshpatidar2207@gmail.com"
              className="rounded-full border border-white/20 p-3.5 hover:bg-white/10 transition hover:-translate-y-0.5 text-white"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
