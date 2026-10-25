import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function NextPhase() {
  return (
    <section className="relative overflow-hidden bg-[#fff36b] px-6 py-16 text-[#211e1d] sm:px-10 md:px-12 md:py-20 lg:py-24 xl:py-28">
      {/* Large decorative circular outline */}
      <div
        className="pointer-events-none absolute -right-[220px] sm:-right-[160px] md:-right-[100px] lg:-right-[60px] top-1/2 -translate-y-1/2 h-[400px] w-[400px] sm:h-[480px] sm:w-[480px] md:h-[560px] md:w-[560px] lg:h-[680px] lg:w-[680px] rounded-full border-[3px] border-[#211e1d] opacity-15 sm:opacity-25 md:opacity-40 lg:opacity-100"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1260px] w-full">



        {/* Content row: headline on left, CTA button on right */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 md:gap-8 lg:gap-14">
          {/* Main heading */}
          <h2 className="reveal-on-scroll reveal-fade-right delay-100 max-w-[380px] sm:max-w-[620px] md:max-w-[600px] lg:max-w-[780px] xl:max-w-[920px] font-display text-[clamp(2.2rem,6vw,3.2rem)] sm:text-[clamp(2.8rem,5.5vw,4rem)] md:text-[clamp(3.5rem,5.2vw,4.8rem)] lg:text-[clamp(4rem,5.5vw,6rem)] xl:text-[clamp(4.5rem,5.5vw,7rem)] font-black leading-[1.04] tracking-[-0.035em] text-[#211e1d]">
            Great products <br />begin <br />
            with understanding people — not pixels
          </h2>
          {/* Circular CTA Button */}
          <div className="reveal-on-scroll reveal-scale delay-200 shrink-0 self-start md:self-center">
            <Link
              to="/works"
              className="group flex h-[150px] w-[150px] sm:h-[170px] sm:w-[170px] md:h-[190px] md:w-[190px] lg:h-[230px] lg:w-[230px] xl:h-[250px] xl:w-[250px] items-center justify-center rounded-full border-2 border-[#211e1d] bg-[#fff36b] shadow-[5px_6px_0_#211e1d] transition-all duration-300 hover:scale-105 hover:shadow-[7px_8px_0_#211e1d] active:scale-95"
            >
              <span className="flex items-center gap-2 sm:gap-2.5 lg:gap-3 font-mono text-[11px] sm:text-xs lg:text-sm font-bold tracking-wider text-[#211e1d]">
                CHECK MY WORKS
                <ArrowRight
                  size={18}
                  className="shrink-0 transition-transform duration-300 group-hover:translate-x-1.5"
                />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
