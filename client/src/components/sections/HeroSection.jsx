import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import DraggableStickyNotes from "../ui/DraggableStickyNotes";
import PageBadge from "../ui/PageBadge";
import { scrollToElement } from "../../utils/scroll";

export default function HeroSection() {
  const heroContainerRef = useRef(null);

  return (
    <section
      id="discover"
      className="relative mx-auto max-w-[1260px] px-4 sm:px-8 lg:px-8 pb-16 pt-7 sm:pt-8 lg:pt-8 lg:min-h-[720px] scroll-mt-28"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.18fr)_minmax(400px,0.82fr)] items-start lg:items-start gap-8 lg:gap-4">
        {/* Left Intro Column */}
        <div className="relative z-10 max-w-[680px]">

          <PageBadge number="01" text="DISCOVERY STARTS HERE" />

          <div className="relative mt-8 sm:mt-12 lg:mt-14">
            <p className="reveal-on-scroll reveal-fade-left delay-75 absolute -top-8 sm:-top-9 left-1 z-10 -rotate-3 font-handwritten text-3xl sm:text-4xl italic text-pen select-none">
              Hello, I'm
            </p>

            <h1 className="reveal-on-scroll reveal-fade-up delay-150 font-display text-[clamp(4.2rem,10.5vw,10.5rem)] font-black uppercase leading-[0.83] tracking-[-0.08em] text-ink">
              <span className="block whitespace-nowrap">GITESH</span>
              <span className="mt-1 sm:mt-2 block text-orange">PATIDAR</span>
            </h1>

            <svg
              className="reveal-on-scroll reveal-fade-up delay-200 mt-3 sm:mt-4 h-8 w-full max-w-[560px]"
              viewBox="0 0 790 32"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 23C145 -3 266 37 411 14S623 3 787 19"
                stroke="#1565c0"
                strokeWidth="3.5"
                strokeLinecap="round"
                className="hero-curved-line"
              />
            </svg>
          </div>

          <p className="reveal-on-scroll reveal-fade-up delay-250 mt-6 max-w-[580px] font-serif text-[17px] sm:text-xl lg:text-[22px] leading-snug sm:leading-relaxed text-[#2b2725]">
            I build digital products that solve real problems—
            <br className="hidden sm:block" /> not just beautiful screens.
          </p>

          <div className="reveal-on-scroll reveal-fade-up delay-300 mt-8 flex flex-wrap items-center gap-5 sm:gap-6">
            <Link
              to="/works"
              className="group inline-flex items-center gap-4 rounded-full border border-ink bg-lemon px-7 py-4 font-mono text-[11px] font-bold text-ink shadow-hard transition hover:translate-x-1 hover:translate-y-1 hover:shadow-hard-sm uppercase"
            >
              EXPLORE SELECTED WORK
              <ArrowRight
                size={16}
                className="transition group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/about"
              className="border-b border-ink pb-1 font-mono text-[11px] font-bold text-ink uppercase hover:text-orange transition-colors"
            >
              A LITTLE ABOUT ME ↗
            </Link>
          </div>

          {/* Scroll Cue */}
          <button
            type="button"
            onClick={() => scrollToElement("story")}
            className="reveal-on-scroll reveal-fade-up delay-350 hidden sm:flex items-center gap-3 font-mono text-[10px] font-semibold tracking-[0.16em] uppercase text-ink/75 mt-12 select-none hover:text-orange transition-colors cursor-pointer group"
            aria-label="Scroll down to investigate journey"
          >
            <span className="w-[1.5px] h-9 bg-ink animate-pulse group-hover:bg-orange transition-colors" />
            SCROLL TO INVESTIGATE
          </button>
        </div>

        {/* Right Column: Hero Draggable Sticky Notes */}
        <div
          ref={heroContainerRef}
          className="reveal-on-scroll reveal-fade-right delay-200 relative z-20 w-full h-[430px] sm:h-[450px] lg:h-[515px] max-w-[480px] lg:max-w-[530px] mx-auto lg:mx-0 mt-6 lg:mt-1"
        >
          <DraggableStickyNotes containerRef={heroContainerRef} />
        </div>
      </div>
    </section>
  );
}
