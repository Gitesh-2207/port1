import React, { useState } from "react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { sendContactMessage } from "../../services/contactService";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "info", message: "Sending your message…" });

    const result = await sendContactMessage(form);
    setStatus({
      type: result.success ? "success" : "error",
      message: result.message,
    });
    setIsSubmitting(false);

    if (result.success) {
      setForm({ name: "", email: "", message: "" });
    }
  }

  return (
    <section
      id="contact"
      className="bg-ink px-6 pt-20 text-white sm:px-12 lg:px-20 scroll-mt-28"
    >
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 pb-16">
        <div className="reveal-on-scroll reveal-fade-right">
          <p className="font-mono text-xs tracking-[.16em] text-white/60">
            04 / LET'S CONNECT
          </p>

          <h2 className="mt-5 font-display text-4xl sm:text-6xl lg:text-7xl font-black leading-[.95]">
            HAVE A GOOD
            <br />
            PROJECT IDEA?
          </h2>

          <p className="mt-6 max-w-md text-[15px] sm:text-lg leading-relaxed text-white/65">
            Have an opportunity, collaboration or interesting problem? Send me a
            message.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              aria-label="GitHub profile"
              href="https://github.com/Gitesh-2207"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 p-3 hover:bg-white/10 transition hover:-translate-y-0.5"
            >
              <Github />
            </a>

            <a
              aria-label="LinkedIn profile"
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 p-3 hover:bg-white/10 transition hover:-translate-y-0.5"
            >
              <Linkedin />
            </a>

            <a
              aria-label="Send email directly"
              href="mailto:giteshpatidar2207@gmail.com"
              className="rounded-full border border-white/20 p-3 hover:bg-white/10 transition hover:-translate-y-0.5"
            >
              <Mail />
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="reveal-on-scroll reveal-fade-left delay-150 space-y-4"
        >
          <label className="block font-mono text-xs">
            YOUR NAME
            <input
              required
              maxLength={100}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="mt-2 w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 font-sans text-base outline-none focus:border-lemon transition"
              placeholder="Your name"
            />
          </label>

          <label className="block font-mono text-xs">
            EMAIL ADDRESS
            <input
              required
              type="email"
              maxLength={254}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="mt-2 w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 font-sans text-base outline-none focus:border-lemon transition"
              placeholder="you@example.com"
            />
          </label>

          <label className="block font-mono text-xs">
            MESSAGE
            <textarea
              required
              rows="4"
              maxLength={5000}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="mt-2 w-full resize-y rounded-xl border border-white/20 bg-white/5 px-4 py-3 font-sans text-base outline-none focus:border-lemon transition"
              placeholder="Tell me a little about it…"
            />
          </label>

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex items-center gap-4 rounded-full bg-lemon px-7 py-4 font-mono text-xs font-bold text-ink transition hover:translate-x-1 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "SENDING…" : "SEND MESSAGE"}
            <ArrowRight size={16} />
          </button>

          {status.message && (
            <div
              role="status"
              aria-live="polite"
              className={`text-xs font-mono p-3.5 rounded-xl border transition-all ${status.type === "success"
                  ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-300"
                  : status.type === "error"
                    ? "border-rose-500/40 bg-rose-500/10 text-rose-300"
                    : "border-white/20 bg-white/10 text-white/90"
                }`}
            >
              {status.message}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
