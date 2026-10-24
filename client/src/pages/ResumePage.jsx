import React from "react";
import { ArrowDown, Download, ExternalLink, FileText } from "lucide-react";
import PageBadge from "../components/ui/PageBadge";
import LetsConnect from "../components/sections/LetsConnect";
import { scrollToElement } from "../utils/scroll";

export default function ResumePage() {
  const handleScrollToDetails = () => {
    scrollToElement("resume-details");
  };

  const resumePdfPath = "/Gitesh_Resume.pdf";
  const resumeDownloadName = "Gitesh_Resume.pdf";

  return (
    <div className="w-full flex-1 flex flex-col">
      {/* Resume Hero Section */}
      <section className="relative min-h-[600px] overflow-hidden bg-[#f7f5ef] px-6 py-12 text-[#191715] sm:px-10 lg:px-[3.85vw]">
        {/* Background Grid */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(83,143,190,0.13) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(83,143,190,0.13) 1px, transparent 1px)
            `,
            backgroundSize: "42px 42px",
          }}
          aria-hidden="true"
        />

        {/* Top Badge & Download Button Row */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4">
          <PageBadge number="CV" text="REVIEWING MY JOURNEY" />


        </div>

        {/* Main Heading */}
        <div className="relative z-10 mt-8 sm:mt-12 lg:mt-14">
          <h1 className="reveal-on-scroll reveal-fade-up delay-100 font-display text-[clamp(3.8rem,9.4vw,9rem)] font-black leading-[0.91] tracking-[-0.075em]">
            <span className="block">My experience,</span>
            <span className="mt-[0.12em] block">skills &amp; impact.</span>
          </h1>
        </div>

        {/* Bottom Description & Look Closer Button */}
        <div className="relative z-10 mt-10 flex flex-col justify-between gap-8 sm:mt-12 lg:mt-14 lg:flex-row lg:items-end">
          <p className="max-w-[920px] font-serif text-[15px] leading-[1.6] tracking-[-0.02em] sm:text-2xl lg:text-[1.75rem]">
            A quick look at my development journey, projects, technical skills,
            <br className="hidden lg:block" /> and the tools I use.
          </p>

          <button
            type="button"
            onClick={handleScrollToDetails}
            className="group flex w-fit shrink-0 items-center gap-2 self-end pb-1 font-serif text-xl italic text-[#0867c8] transition-all duration-300 hover:gap-4 sm:text-2xl cursor-pointer"
          >
            <span className="rotate-[-5deg]">look closer</span>

            <ArrowDown
              size={23}
              strokeWidth={1.8}
              className="transition-transform duration-300 group-hover:translate-y-1"
            />
          </button>
        </div>
      </section>

      {/* Embedded Resume PDF Viewer Section */}
      <section
        id="resume-details"
        className="relative scroll-mt-28 bg-[#1c1917] px-4 py-14 sm:px-8 sm:py-20 text-white"
      >
        <div className="mx-auto max-w-[1140px] w-full">
          {/* Eyebrow & Toolbar Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/15 pb-6 font-mono text-xs uppercase tracking-widest text-white/70">
            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-lemon animate-pulse" />
              <span className="font-bold text-white tracking-[0.18em]">
                OFFICIAL RESUME · GITESH PATIDAR
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href={resumePdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-xs font-bold text-white/80 transition-colors hover:text-lemon"
                title="Open resume in full window or new tab"
              >
                <ExternalLink size={14} />
                <span className="hidden sm:inline">FULLSCREEN / NEW TAB</span>
                <span className="sm:hidden">EXPAND</span>
              </a>

              <a
                href={resumePdfPath}
                download={resumeDownloadName}
                className="inline-flex items-center gap-2 rounded-full border border-ink bg-lemon px-4 py-2 font-mono text-[11px] font-bold text-ink shadow-hard-sm transition hover:translate-x-0.5 hover:translate-y-0.5"
              >
                <Download size={13} />
                <span>DOWNLOAD RESUME</span>
              </a>
            </div>
          </div>

          {/* PDF Viewer Frame Container */}
          <div className="relative mt-8 w-full rounded-2xl border-2 border-white/15 bg-[#252220] p-2 sm:p-4 shadow-[0_24px_60px_rgba(0,0,0,0.55)]">
            {/* Titlebar mimic */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 mb-3 text-xs font-mono text-white/60">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ef4444]/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#eab308]/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#22c55e]/80 inline-block" />
                <span className="ml-2 font-mono text-[11px] text-white/80 font-bold truncate">
                  Gitesh_Resume.pdf
                </span>
              </div>

              <div className="flex items-center gap-3 text-[11px]">
                <span className="hidden md:inline text-white/50">
                  Interactive Viewer · Scroll &amp; Zoom
                </span>
                <span className="bg-white/10 px-2 py-0.5 rounded text-[10px] text-lemon font-bold tracking-wider uppercase">
                  PDF
                </span>
              </div>
            </div>

            {/* Embedded PDF iframe with responsive height and native browser viewer */}
            <div className="relative w-full overflow-hidden rounded-xl bg-white shadow-inner">
              <iframe
                src={`${resumePdfPath}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`}
                title="Gitesh Patidar Resume"
                className="w-full h-[640px] sm:h-[840px] lg:h-[1020px] border-0 block bg-white"
              >
                <div className="flex flex-col items-center justify-center p-8 sm:p-12 text-center text-ink min-h-[420px] bg-[#fbf8f2]">
                  <FileText size={48} className="text-orange mb-4" />
                  <h3 className="font-display text-2xl font-black uppercase text-ink">
                    Gitesh Patidar — Resume
                  </h3>
                  <p className="mt-2 max-w-md font-serif text-[15px] text-ink/75 leading-relaxed">
                    Your device or browser does not support embedded PDF preview. You can open or download the complete resume directly below:
                  </p>
                  <div className="mt-6 flex flex-wrap gap-4 justify-center">
                    <a
                      href={resumePdfPath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-ink bg-lemon px-6 py-3 font-mono text-xs font-bold text-ink shadow-hard transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-hard-sm"
                    >
                      <ExternalLink size={15} />
                      OPEN IN NEW TAB
                    </a>
                    <a
                      href={resumePdfPath}
                      download={resumeDownloadName}
                      className="inline-flex items-center gap-2 rounded-full border border-ink bg-white px-6 py-3 font-mono text-xs font-bold text-ink shadow-hard transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-hard-sm"
                    >
                      <Download size={15} />
                      DOWNLOAD RESUME (PDF)
                    </a>
                  </div>
                </div>
              </iframe>
            </div>

            {/* Viewer Bottom Info Bar */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-4 px-2 py-1 font-mono text-xs text-white/60">
              <div className="flex items-center gap-2.5">
                <FileText size={15} className="text-lemon" />
                <span>Gitesh Patidar · B.Tech CSE (2022–2026) · MERN Stack Developer</span>
              </div>

              <a
                href={resumePdfPath}
                download={resumeDownloadName}
                className="text-lemon hover:underline flex items-center gap-1.5 font-bold tracking-wider uppercase text-[11px]"
              >
                <Download size={13} />
                Download PDF Copy
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Connect section below resume details */}
      <LetsConnect />
    </div>
  );
}
