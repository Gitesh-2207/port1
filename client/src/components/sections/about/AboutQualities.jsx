import React, { useState } from "react";
import { QUALITIES } from "../../../constants/aboutData";

export default function AboutQualities() {
  const [values, setValues] = useState(() =>
    QUALITIES.reduce(
      (acc, item) => ({ ...acc, [item.label]: item.initialValue }),
      {}
    )
  );

  const handleSliderChange = (label, newValue) => {
    setValues((prev) => ({
      ...prev,
      [label]: Math.max(10, Math.min(100, Number(newValue))),
    }));
  };

  return (
    <section className="mt-24 mb-20 grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.25fr] lg:gap-16 xl:gap-20 items-center">
      <div className="reveal-on-scroll reveal-fade-right min-w-0">
        <p className="font-handwritten text-3xl sm:text-4xl italic text-pen -rotate-2">
          A very unofficial readout
        </p>

        <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tight leading-[0.95] text-ink">
          Always
          <br />
          learning.
          <br />
          Naturally
          <br />
          curious.
        </h2>
      </div>

      <div className="reveal-on-scroll reveal-fade-left delay-150 min-w-0 space-y-10 py-4">
        {QUALITIES.map((item) => {
          const val = values[item.label];
          return (
            <div key={item.label} className="relative">
              <div className="flex items-center justify-between font-mono text-xs font-bold tracking-wider text-ink mb-3">
                <span>{item.label}</span>
                <span className="text-sm font-mono text-ink/70">{val}%</span>
              </div>

              {/* Slider track with orange circular knob */}
              <div className="relative h-6 flex items-center group">
                <input
                  type="range"
                  min="10"
                  max="100"
                  value={val}
                  onChange={(e) =>
                    handleSliderChange(item.label, e.target.value)
                  }
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                  aria-label={`${item.label} level`}
                />
                <div className="h-[2px] w-full bg-ink/20 relative">
                  <div
                    className="h-full bg-orange transition-all duration-75"
                    style={{ width: `${val}%` }}
                  />
                </div>
                <div
                  className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none transition-transform duration-100 group-hover:scale-110"
                  style={{ left: `${val}%` }}
                >
                  <span className="absolute -top-7 text-lg select-none transition-transform duration-200">
                    {item.emoji}
                  </span>
                  <div className="h-4 w-4 rounded-full bg-orange border-2 border-ink shadow-sm" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
