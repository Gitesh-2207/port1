import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PROJECTS, PROJECT_CATEGORIES } from "../../constants/projects";

export default function WorksSection({ isPage = false }) {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const filteredProjects =
    selectedCategory === "ALL"
      ? PROJECTS
      : PROJECTS.filter((p) => p.type === selectedCategory);

  return (
    <section className="works-page scroll-mt-28" id="works">
      <div className="works-heading max-w-[1260px] mx-auto">
        <div className="reveal-on-scroll reveal-fade-up works-eyebrow">
          <span>EVIDENCE</span>
          <span className="works-eyebrow-line" />
          <span>LATEST WORKS</span>
        </div>

        <div className="works-title-row">
          <h2 className="reveal-on-scroll reveal-fade-right delay-100 font-display text-[clamp(2.5rem,5.5vw,5.5rem)] font-black leading-[0.95] uppercase">
            A few problems
            <br />
            worth solving.
          </h2>

          {!isPage ? (
            <Link
              to="/works"
              className="reveal-on-scroll reveal-fade-left delay-150 works-all-button"
            >
              VIEW ALL WORK <ArrowRight size={18} />
            </Link>
          ) : (
            <div className="reveal-on-scroll reveal-fade-left delay-150 flex flex-wrap items-center gap-2 mt-4">
              {PROJECT_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full font-mono text-xs font-bold transition uppercase cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-ink text-white shadow-sm"
                      : "bg-white/80 text-ink border border-ink/20 hover:bg-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="works-list max-w-[1260px] mx-auto" id="all-projects">
        {filteredProjects.map((project, index) => {
          const delays = ["delay-100", "delay-200", "delay-300"];
          return (
            <article
              className={`reveal-on-scroll reveal-fade-up ${
                delays[index] || "delay-100"
              } work-project group`}
              key={project.number}
            >
              <span className="work-number">{project.number}</span>

              <div className="work-main">
                <p className="work-meta">
                  {project.category} <span>·</span> {project.year}
                </p>

                <h2 className="font-display font-black tracking-tight text-ink">{project.title}</h2>

                <p className="work-description">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.techList?.map((t) => (
                    <span
                      key={t}
                      className="inline-block rounded-md border border-ink/15 bg-white/60 px-2.5 py-1 font-mono text-[11px] font-semibold text-ink/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="work-aside">
                <span className="appreciation-stamp">{project.stamp}</span>

                <p className="text-xs font-mono text-ink/80">{project.tech}</p>

                {project.url ? (
                  <a
                    className="work-arrow"
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    title={`View ${project.title} on GitHub`}
                  >
                    <ArrowRight size={24} />
                  </a>
                ) : (
                  <span className="work-arrow opacity-50 cursor-not-allowed">
                    <ArrowRight size={24} />
                  </span>
                )}
              </div>

              <div className={`work-sticky-note ${project.theme}`}>
                {project.note}
              </div>

              <span className="work-fold" />
            </article>
          );
        })}
      </div>
    </section>
  );
}
