/**
 * Scrolls smoothly to an element by its ID if it exists.
 * @param {string} id
 */
export function scrollToElement(id) {
  if (typeof document === "undefined") return;
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

/**
 * Scrolls smoothly to top of window.
 */
export function scrollToTop() {
  if (typeof window === "undefined") return;
  window.scrollTo({ top: 0, behavior: "smooth" });
}
