import React from "react";
import { Link } from "react-router-dom";

export default function AboutStory() {
  return (
    <section
      id="story"
      className="mx-auto max-w-[1260px] w-[calc(100%-32px)] sm:w-[calc(100%-48px)] py-16 sm:py-24 scroll-mt-28"
    >
      {/* Section Kicker */}
      <div className="reveal-on-scroll reveal-fade-up flex items-center gap-4 mb-12 font-mono text-[10px] font-semibold tracking-[0.18em] uppercase text-ink">
        <span>MY JOURNEY</span>
        <span className="w-16 sm:w-28 h-[1px] bg-ink" />
        <span>HOW I GOT HERE</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-24 items-end">
        <div className="reveal-on-scroll reveal-fade-right delay-100">
          <p className="font-handwritten text-2xl sm:text-3xl font-semibold text-pen -rotate-2 mb-3">
            A career built by following curiosity
          </p>

          <h2 className="font-display text-[clamp(34px,5.5vw,72px)] font-black leading-[1.02] tracking-[-0.06em] text-ink uppercase">
            From coding
            <br />
            projects
            <br />
            to building
            <br />
            digital systems.
          </h2>
        </div>

        <div className="reveal-on-scroll reveal-fade-left delay-200 space-y-6 font-serif text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.8] text-ink/90">
          <p>
            My journey began with genuine curiosity about how software and the web
            operate under the hood. From building small utilities to engineering full-fledged
            web applications, I've always been driven by the desire to build things that solve
            real-world problems.
          </p>

          <p>
            Today, as a full-stack developer with a strong foundation in Computer Science,
            I specialize in the MERN stack—crafting clean, accessible user interfaces in React,
            building reliable REST APIs in Node and Express, and architecting efficient schemas
            in MongoDB.
          </p>

          <div className="pt-2">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 border-b border-ink pb-1 font-mono text-[11px] font-bold text-ink uppercase hover:text-orange transition-colors"
            >
              THE FULL STORY <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
