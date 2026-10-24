import React from "react";
import { FINDINGS } from "../../../constants/aboutData";

export default function AboutFindings() {
  return (
    <section className="story2-section">
      <div className="reveal-on-scroll reveal-fade-up story2-eyebrow">
        <span>RESEARCH FINDINGS</span>
        <span className="story2-line" />
        <span>WHAT I BELIEVE</span>
      </div>

      <div className="story2-grid">
        {FINDINGS.map((item, index) => {
          const delays = ["delay-100", "delay-200", "delay-300", "delay-400"];
          return (
            <article
              key={item.number}
              className={`reveal-on-scroll reveal-fade-up ${
                delays[index] || "delay-100"
              } story2-card ${item.dark ? "story2-dark" : "story2-yellow"}`}
              style={{ "--delay": `${index * 100}ms` }}
            >
              <span className="story2-number">FINDING {item.number}</span>

              <div className="story2-content">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
