
import React from "react";
import Storys from "../component/Storys";
export default function About() {
    return (
        <main
            id="about"
            className="min-h-screen overflow-hidden bg-[#f8f6f0] px-6 py-12 text-[#201d1c] sm:px-10 sm:py-12 lg:px-[3.2%]"
            style={{
                backgroundImage: `
          linear-gradient(rgba(53, 123, 180, 0.10) 1px, transparent 1px),
          linear-gradient(90deg, rgba(53, 123, 180, 0.10) 1px, transparent 1px)
        `,
                backgroundSize: "43px 43px",
            }}
        >
            {/* Section badge */}
            <div className="inline-flex items-center gap-4 rounded-full border border-black/10 bg-black/[0.035] py-2 pl-3 pr-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#201d1c] font-mono text-sm font-bold text-white">
                    02
                </span>

                <span className="font-mono text-xs tracking-[0.12em] sm:text-sm">
                    ME &amp; MY PERSPECTIVE
                </span>
            </div>

            {/* Main heading */}
            <section className="mt-16 sm:mt-20 lg:mt-[65px]">
                <h1 className="font-display text-[clamp(3.8rem,9.4vw,9rem)] font-black leading-[0.91] tracking-[-0.075em]">
                    <span className="block">The person</span>
                    <span className="block">behind</span>
                    <span className="block">the process.</span>
                </h1>

                <p className="mt-8 font-serif text-lg leading-relaxed sm:text-2xl lg:text-[28px]">
                    A little about my journey, my approach, and what keeps me curious.
                </p>
            </section>

            {/* Story section */}
            <Storys />
        </main>
    );
}
