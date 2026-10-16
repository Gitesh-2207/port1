
import React from "react";

const findings = [
    {
        number: "01",
        title: "Design should solve, not decorate.",
        description:
            "Every visual decision should help users accomplish something with less effort.",
        dark: true,
    },
    {
        number: "02",
        title: "Curiosity drives better products.",
        description:
            "The best ideas come from asking questions before jumping into solutions.",
        dark: false,
    },
    {
        number: "03",
        title: "Build with developers, not for them.",
        description:
            "Understanding code helps me design experiences that are realistic, scalable, and easier to ship.",
        dark: false,
    },
    {
        number: "04",
        title: "Keep learning. Keep improving.",
        description:
            "Every project, every user, and every mistake is another opportunity to become a better developer.",
        dark: true,
    },
];

export default function Story2() {
    return (
        <section className="story2-section">
            <div className="story2-eyebrow">
                <span>RESEARCH FINDINGS</span>
                <span className="story2-line" />
                <span>WHAT I BELIEVE</span>
            </div>

            <div className="story2-grid">
                {findings.map((item, index) => (
                    <article
                        key={item.number}
                        className={`story2-card ${item.dark ? "story2-dark" : "story2-yellow"
                            }`}
                        style={{ "--delay": `${index * 100}ms` }}
                    >
                        <span className="story2-number">
                            FINDING {item.number}
                        </span>

                        <div className="story2-content">
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
