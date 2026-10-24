import React from "react";

const items = [
  "AI WORKFLOWS",
  "FULL-STACK DEVELOPMENT",
  "MERN STACK",
  "PROTOTYPING",
  "REST APIS",
  "DATABASE ARCHITECTURE",
  "FRONTEND ENGINEERING",
  "SYSTEM DESIGN",
];

export default function MovingText() {
  return (
    <div
      className="relative w-full overflow-hidden select-none bg-ink py-4 sm:py-5 text-white border-y border-ink"
      role="region"
      aria-label="Skills ticker"
    >
      <div className="flex w-max marquee-track pointer-events-none">
        {/* Render four sets grouped in two identical 50% halves for flawless infinite looping */}
        {[0, 1].map((halfIndex) => (
          <div
            key={halfIndex}
            className="flex shrink-0 items-center"
            aria-hidden={halfIndex === 1}
          >
            {[...items, ...items].map((item, idx) => (
              <div
                key={`${halfIndex}-${idx}`}
                className="flex items-center gap-6 sm:gap-8 pr-6 sm:pr-8 font-display text-sm sm:text-base md:text-lg font-normal tracking-wider text-white uppercase"
              >
                <span>{item}</span>
                <span
                  className="text-lemon text-base sm:text-lg select-none"
                  aria-hidden="true"
                >
                  ✦
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
