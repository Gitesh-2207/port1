import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Universal performant scroll reveal hook.
 * Uses IntersectionObserver to trigger smooth entry animations
 * for elements with `.reveal-on-scroll`.
 *
 * Guarantees elements are visible by default and will never remain hidden
 * if an animation fails or if reduced motion is requested.
 */
export default function useScrollReveal() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Mark HTML as animation-ready
    document.documentElement.classList.add("reveal-ready");

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      // Reveal everything immediately
      document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
        el.classList.add("is-revealed");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    // Scan DOM after render
    const timeoutId = setTimeout(() => {
      const elements = document.querySelectorAll(
        ".reveal-on-scroll:not(.is-revealed)"
      );
      elements.forEach((el) => observer.observe(el));
    }, 60);

    // Fail-safe: ensure anything in viewport or stuck gets revealed after 2.5s
    const fallbackTimeoutId = setTimeout(() => {
      document
        .querySelectorAll(".reveal-on-scroll:not(.is-revealed)")
        .forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight) {
            el.classList.add("is-revealed");
          }
        });
    }, 2500);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(fallbackTimeoutId);
      observer.disconnect();
    };
  }, [location.pathname]);
}
