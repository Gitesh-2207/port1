import React from "react";
import AboutHeroStory from "../components/sections/about/AboutHeroStory";
import AboutFindings from "../components/sections/about/AboutFindings";
import AboutQualities from "../components/sections/about/AboutQualities";
import PageBadge from "../components/ui/PageBadge";
import LetsConnect from "../components/sections/LetsConnect";

export default function AboutPage() {
  return (
    <div className="w-full flex-1 flex flex-col bg-[#f8f6f0]">
      <div
        id="about"
        className="scroll-mt-28 overflow-hidden px-4 sm:px-8 lg:px-8 py-10 sm:py-14 text-[#201d1c]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(53, 123, 180, 0.10) 1px, transparent 1px),
            linear-gradient(90deg, rgba(53, 123, 180, 0.10) 1px, transparent 1px)
          `,
          backgroundSize: "43px 43px",
        }}
      >
        <div className="mx-auto max-w-[1260px] w-full">
          {/* Section badge */}
          <PageBadge number="02" text="ME & MY PERSPECTIVE" />

          {/* Main heading */}
          <section className="mt-8 sm:mt-12 lg:mt-14">
            <h1 className="reveal-on-scroll reveal-fade-up delay-100 font-display text-[clamp(3.8rem,9.4vw,9rem)] font-black leading-[0.91] tracking-[-0.075em]">
              <span className="block">The person</span>
              <span className="block">behind</span>
              <span className="block">the process.</span>
            </h1>

            <p className="reveal-on-scroll reveal-fade-up delay-200 mt-8 font-serif text-[15px] leading-relaxed sm:text-2xl lg:text-[28px]">
              A little about my journey, my approach, and what keeps me curious.
            </p>
          </section>

          {/* Story sections */}
          <AboutHeroStory />
          <AboutFindings />
          <AboutQualities />
        </div>
      </div>

      {/* Connect section below about content */}
      <LetsConnect />
    </div>
  );
}
