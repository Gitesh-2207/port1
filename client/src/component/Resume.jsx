
import React from "react";
import { ArrowDown } from "lucide-react";

export default function Resume() {
    const handleViewResume = () => {
        const resume = document.getElementById("resume-details");
        resume?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <section className="resume-hero">
                <div className="resume-badge">
                    <span className="resume-badge-circle">CV</span>
                    <span>REVIEWING MY JOURNEY</span>
                </div>

                <h1 className="resume-heading">
                    My experience,
                    <br />
                    skills &amp; impact.
                </h1>

                <div className="resume-bottom">
                    <p>
                        A quick look at my development journey, projects,
                        technical skills, and the tools I use.
                    </p>

                    <button
                        className="resume-look-button"
                        onClick={handleViewResume}
                    >
                        look closer <ArrowDown size={20} />
                    </button>
                </div>
            </section>

            <section className="resume-details" id="resume-details">
                <div className="resume-details-header">
                    <span>01 — EXPERIENCE</span>
                    <span>02 — EDUCATION</span>
                    <span>03 — SKILLS</span>
                </div>

                <div className="resume-details-grid">
                    <article className="resume-detail-card">
                        <span>01 / PROJECTS</span>
                        <h2>Building digital experiences.</h2>
                        <p>
                            Developed full-stack applications using React,
                            Node.js, Express, and MongoDB, focusing on
                            practical features and responsive interfaces.
                        </p>
                    </article>

                    <article className="resume-detail-card resume-detail-yellow">
                        <span>02 / EDUCATION</span>
                        <h2>Computer Science &amp; Engineering.</h2>
                        <p>
                            B.Tech — Sushila Devi Bansal College of
                            Technology, Indore.
                            <br />
                            2022–2026
                        </p>
                    </article>

                    <article className="resume-detail-card resume-detail-yellow">
                        <span>03 / TECH STACK</span>
                        <h2>Tools I work with.</h2>
                        <p>
                            React.js · JavaScript · Node.js · Express.js
                            · MongoDB · Tailwind CSS · Git · Docker
                        </p>
                    </article>

                    <article className="resume-detail-card">
                        <span>04 / APPROACH</span>
                        <h2>Learn, build, improve.</h2>
                        <p>
                            I enjoy solving problems, learning new
                            technologies, collaborating with teams, and
                            building useful software.
                        </p>
                    </article>
                </div>
            </section>
        </>
    );
}
