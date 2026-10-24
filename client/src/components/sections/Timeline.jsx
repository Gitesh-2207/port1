import React from "react";
import { MILESTONES } from "../../constants/milestones";
import TimelineCard from "./TimelineCard";

export default function Timeline() {
  return (
    <section
      id="journey"
      className="mx-auto max-w-[1260px] w-full px-4 sm:px-8 py-14 sm:py-20 overflow-x-clip scroll-mt-28"
    >
      {/* Section Eyebrow */}
      <div className="reveal-on-scroll reveal-fade-up flex items-center gap-4 mb-10 font-mono text-[10px] font-semibold tracking-[0.18em] uppercase text-ink">
        <span>02 / THE JOURNEY</span>
        <span className="w-16 sm:w-28 h-[1px] bg-ink" />
        <span>MILESTONES &amp; PROGRESS</span>
      </div>

      <div className="relative pt-4 sm:pt-10 pb-6">
        {/* Hanging Textured String (Desktop / Tablet) */}
        <div
          className="reveal-on-scroll reveal-scale delay-75 hidden sm:block absolute top-[68px] lg:top-[74px] left-[-2vw] right-[-2vw] h-[4px] rounded-[2px] shadow-[0_4px_6px_rgba(0,0,0,0.15)] -rotate-[0.4deg] z-0 origin-left transition-transform duration-1000"
          style={{
            background:
              "repeating-linear-gradient(135deg, #5b4f41, #5b4f41 2px, #82725d 2px, #82725d 4px)",
          }}
          aria-hidden="true"
        />

        {/* Mobile Vertical Progress Track */}
        <div
          className="sm:hidden absolute top-6 bottom-6 left-5 w-[2px] bg-ink/20 z-0"
          aria-hidden="true"
        />

        {/* Milestone Cards */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-7 sm:gap-6 lg:gap-3.5 pl-6 sm:pl-0">
          {MILESTONES.map((item, index) => (
            <TimelineCard key={item.date} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
