import React from "react";

/**
 * Reusable, perfectly identical top label badge used across Discover, About, and Resume pages.
 * Enforces uniform pill dimensions, border radius, circular number pill, padding, and typography
 * across all responsive breakpoints regardless of label text length.
 *
 * @param {Object} props
 * @param {string} props.number - Number or short tag ("01", "02", "CV")
 * @param {string} props.text - Label text ("DISCOVERY STARTS HERE", "ME & MY PERSPECTIVE", "REVIEWING MY JOURNEY")
 * @param {string} [props.className] - Optional extra utility classes
 */
export default function PageBadge({ number, text, className = "" }) {
  return (
    <div
      className={`reveal-on-scroll reveal-fade-up select-none shrink-0 inline-flex items-center justify-start gap-2.5 sm:gap-3.5 w-[252px] sm:w-[286px] h-[40px] sm:h-[46px] rounded-full border border-black/10 bg-black/[0.04] pl-1.5 pr-4 sm:pl-2 sm:pr-5 shadow-xs transition-transform duration-300 hover:scale-[1.02] ${className}`}
      role="note"
      aria-label={`${number} - ${text}`}
    >
      {/* Circular number / CV emblem with fixed, identical dimensions */}
      <span className="grid h-7 w-7 sm:h-8 sm:w-8 shrink-0 place-items-center rounded-full bg-ink font-mono text-[11px] sm:text-xs font-bold text-white shadow-xs">
        {number}
      </span>

      {/* Label text centered vertically with fixed, consistent typographic scale */}
      <span className="truncate font-mono text-[10px] sm:text-[11.5px] font-bold uppercase tracking-[0.10em] sm:tracking-[0.14em] text-ink">
        {text}
      </span>
    </div>
  );
}
