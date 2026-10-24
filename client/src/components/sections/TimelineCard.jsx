import React, { useRef, useState, useEffect, useCallback } from "react";

const MAX_TILT = 3.5; // Maximum tilt angle in degrees (subtle, elegant, and professional: 3–5 deg)
const EASING_TRANSITION =
  "transform 350ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 350ms cubic-bezier(0.16, 1, 0.3, 1)";

/**
 * TimelineCard component with smooth 3D tilt hover animation.
 *
 * Requirements fulfilled:
 * - Subtle 3D tilt based on mouse position (3–4° max)
 * - Gentle cursor-following physics with perspective(1000px)
 * - Smooth translateY(-4px) lift and subtle scale(1.01) on hover
 * - Fast and responsive 350ms cubic-bezier easing
 * - Smooth return to resting position on mouse leave
 * - Preserves existing layout, fonts, colors, pins, dates, and responsive behavior
 * - Completely normal and static on touch/mobile devices and reduced-motion modes
 */
export default function TimelineCard({ item, index }) {
  const cardRef = useRef(null);
  const rafIdRef = useRef(null);
  const [isDesktopHover, setIsDesktopHover] = useState(false);

  const restingTransform = `perspective(1000px) translateY(0px) scale(1) rotate(${item.rotation}) rotateX(0deg) rotateY(0deg)`;

  useEffect(() => {
    if (typeof window === "undefined") return;

    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    const motionMedia = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateCapabilities = () => {
      setIsDesktopHover(media.matches && !motionMedia.matches);
    };

    updateCapabilities();
    media.addEventListener?.("change", updateCapabilities);
    motionMedia.addEventListener?.("change", updateCapabilities);

    return () => {
      media.removeEventListener?.("change", updateCapabilities);
      motionMedia.removeEventListener?.("change", updateCapabilities);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (!isDesktopHover || !cardRef.current) return;
    const card = cardRef.current;
    card.style.zIndex = "30";
    card.style.boxShadow = "0 16px 30px rgba(28,25,23,0.16)";
  }, [isDesktopHover]);

  const handleMouseMove = useCallback(
    (e) => {
      if (!isDesktopHover || !cardRef.current) return;

      const card = cardRef.current;
      const rect = card.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      // Normalized coordinates from -1 (top/left) to +1 (bottom/right)
      const xNorm = Math.max(-1, Math.min(1, (mouseX / rect.width) * 2 - 1));
      const yNorm = Math.max(-1, Math.min(1, (mouseY / rect.height) * 2 - 1));

      // Calculate subtle 3D tilt:
      // When cursor moves, the card surface gently follows cursor
      const rotX = (yNorm * MAX_TILT).toFixed(2);
      const rotY = (-xNorm * MAX_TILT).toFixed(2);

      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }

      rafIdRef.current = requestAnimationFrame(() => {
        if (!cardRef.current) return;
        cardRef.current.style.transform = `perspective(1000px) translateY(-4px) scale(1.01) rotate(${item.rotation}) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
      });
    },
    [isDesktopHover, item.rotation]
  );

  const handleMouseLeave = useCallback(() => {
    if (!isDesktopHover || !cardRef.current) return;

    if (rafIdRef.current) {
      cancelAnimationFrame(rafIdRef.current);
    }

    const card = cardRef.current;
    card.style.transform = restingTransform;
    card.style.boxShadow = "2px 7px 18px rgba(28,25,23,0.10)";

    setTimeout(() => {
      if (cardRef.current) {
        cardRef.current.style.zIndex = "1";
      }
    }, 350);
  }, [isDesktopHover, restingTransform]);

  return (
    <div
      className={`reveal-on-scroll reveal-fade-up ${item.delay} relative`}
      style={{
        marginTop: index % 2 === 1 ? "14px" : "0px",
      }}
    >
      <article
        ref={cardRef}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`relative min-h-[205px] p-6 pt-10 rounded-xs cursor-default group ${
          item.isYellow ? "bg-[#fff6a8]" : "bg-white"
        }`}
        style={{
          transform: isDesktopHover ? restingTransform : `rotate(${item.rotation})`,
          transition: isDesktopHover ? EASING_TRANSITION : "none",
          boxShadow: "2px 7px 18px rgba(28,25,23,0.10)",
          willChange: isDesktopHover ? "transform" : "auto",
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
        }}
      >
        {/* Metallic Pin */}
        <span
          className="absolute top-2.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[radial-gradient(circle_at_35%_35%,#aaa_0%,#333_60%,#111_100%)] shadow-[1px_4px_6px_rgba(0,0,0,0.35)] transition-transform duration-300 group-hover:scale-110"
          aria-hidden="true"
        />

        {/* Mobile Timeline Connector Dot */}
        <span
          className="sm:hidden absolute -left-8 top-10 w-4 h-4 rounded-full border-2 border-ink bg-lemon shadow-xs"
          aria-hidden="true"
        />

        <small className="block font-mono text-[10px] font-bold text-ink/75 uppercase tracking-wider">
          {item.date}
        </small>

        <strong className="block mt-2 font-display text-[18px] font-black uppercase text-ink tracking-tight">
          {item.title}
        </strong>

        <p className="mt-3 font-handwritten text-[19px] leading-snug font-semibold text-pen">
          {item.handwritten}
        </p>
      </article>
    </div>
  );
}
