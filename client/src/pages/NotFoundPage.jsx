import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center">
      <div className="inline-flex items-center gap-2.5 rounded-full border border-black/10 bg-black/[.04] px-4 py-2 font-mono text-xs uppercase tracking-wider text-ink mb-6">
        <span>404 ERROR</span>
        <span>·</span>
        <span>PAGE NOT FOUND</span>
      </div>

      <h1 className="font-display text-6xl sm:text-8xl font-black text-ink uppercase tracking-tight">
        LOST IN THE
        <br />
        <span className="text-orange">BLUEPRINTS?</span>
      </h1>

      <p className="mt-6 max-w-md font-serif text-xl text-ink/80 leading-relaxed">
        The page you are looking for doesn't exist or has been moved.
      </p>

      <div className="mt-8">
        <Link
          to="/"
          className="inline-flex items-center gap-3 rounded-full border border-ink bg-lemon px-7 py-3.5 font-mono text-xs font-bold text-ink shadow-hard transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-hard-sm uppercase"
        >
          <ArrowLeft size={16} />
          BACK TO DISCOVERY
        </Link>
      </div>
    </div>
  );
}
