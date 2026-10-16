
import React from "react";

const qualities = [
    { label: "CREATIVITY", value: 100, emoji: "🎨" },
    { label: "RESEARCH", value: 85, emoji: "🔎" },
    { label: "DETAIL ORIENTATION", value: 90, emoji: "👁️" },
    { label: "COLLABORATION", value: 100, emoji: "🤝" },
];

export default function Story4() {
    return (
        <section className="story4-section">
            <div className="story4-left">
                <p className="story4-subtitle">
                    A very unofficial readout
                </p>

                <h2>
                    Always
                    <br />
                    learning.
                    <br />
                    Naturally
                    <br />
                    curious.
                </h2>
            </div>

            <div className="story4-right">
                {qualities.map((item, index) => (
                    <div
                        className="story4-skill"
                        key={item.label}
                        style={{ "--skill-delay": `${index * 150}ms` }}
                    >
                        <div className="story4-skill-label">
                            <span>{item.label}</span>
                            <span className="story4-emoji">{item.emoji}</span>
                        </div>

                        <div className="story4-track">
                            <div
                                className="story4-progress"
                                style={{ "--progress": `${item.value}%` }}
                            >
                                <span className="story4-dot" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
