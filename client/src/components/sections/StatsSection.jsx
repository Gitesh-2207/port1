import React, { useEffect, useRef, useState } from "react";
import { STATS_DATA } from "../../constants/stats";

export default function StatsSection() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState({ designed: 0, hosted: 0, repos: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setCounts({ designed: 20, hosted: 10, repos: 15 });
      setHasAnimated(true);
      return;
    }

    // Safety fallback: reveal after 3s if not already triggered
    const fallbackTimer = setTimeout(() => {
      setHasAnimated(true);
      setCounts({ designed: 20, hosted: 10, repos: 15 });
    }, 3000);

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          clearTimeout(fallbackTimer);
          setHasAnimated(true);

          const duration = 1400;
          const startTime = performance.now();

          const updateCounter = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);

            setCounts({
              designed: Math.floor(easeOut * 20),
              hosted: Math.floor(easeOut * 10),
              repos: Math.floor(easeOut * 15),
            });

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              setCounts({ designed: 20, hosted: 10, repos: 15 });
            }
          };

          requestAnimationFrame(updateCounter);
        }
      },
      { threshold: 0.2 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      clearTimeout(fallbackTimer);
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      id="stats"
      className="relative mx-auto max-w-[1260px] px-6 py-24 sm:px-12 lg:px-20 border-t border-ink/10"
    >
      <div className="reveal-on-scroll reveal-fade-up flex items-center justify-center gap-6 font-mono text-[11px] font-bold tracking-[0.22em] text-ink/80 uppercase mb-8">
        <span>HONEST NUMBERS</span>
        <span className="h-[2px] w-28 bg-ink" />
        <span>NO FLUFF</span>
      </div>

      <div className="reveal-on-scroll reveal-fade-up delay-100 text-center max-w-2xl mx-auto">
        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-ink">
          Instead of fake statistics:
        </h2>
        <p className="mt-4 font-serif text-[15px] sm:text-lg lg:text-xl text-ink/75 leading-relaxed">
          Honest milestones from late nights, curiosities, and working code.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {STATS_DATA.map((stat, idx) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center text-center p-8 rounded-3xl border-2 border-ink bg-white/70 shadow-[6px_8px_0_#201d1c] transition-transform duration-300 hover:-translate-y-1.5 ${
              hasAnimated
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{
              transitionDelay: `${idx * 120}ms`,
              transitionProperty: "opacity, transform",
            }}
          >
            {/* Stamp Circle */}
            <div
              className={`grid h-28 w-28 place-items-center rounded-full border-[2.5px] ${stat.color} shadow-inner transition-transform duration-500`}
            >
              <span className="font-display text-4xl sm:text-5xl font-black text-ink select-none">
                {stat.symbol ? (
                  <span
                    className={`inline-block transition-transform duration-700 ${
                      hasAnimated ? "scale-100 rotate-0" : "scale-50 rotate-45"
                    }`}
                  >
                    {stat.symbol}
                  </span>
                ) : (
                  `${counts[stat.id]}${stat.suffix}`
                )}
              </span>
            </div>

            {/* Label */}
            <p className="mt-6 font-mono text-xs font-bold tracking-[0.16em] text-ink">
              {stat.label}
            </p>

            {/* Caption */}
            <p className="mt-2 font-handwritten text-2xl italic text-pen sm:text-3xl">
              {stat.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
