
import { ArrowRight } from "lucide-react";

const projects = [
    {
        number: "01",
        category: "MERN STACK · HEALTHCARE",
        year: "2026",
        title: "MediBook",
        description:
            "A doctor appointment booking platform with secure authentication, specialty-based search, appointment history, and QR-enabled receipts.",
        note: "Making appointment booking simpler and more convenient.",
        stamp: "BUILT WITH PURPOSE",
        theme: "note-yellow",
        url: "https://github.com/",
    },
    {
        number: "02",
        category: "SAAS · RESTAURANT MANAGEMENT",
        year: "2026",
        title: "DineHub",
        description:
            "A restaurant management system built around operational workflows, role-based access, and API-driven tools.",
        note: "Helping restaurant teams organize daily operations.",
        stamp: "WORKFLOW FOCUSED",
        theme: "note-blue",
        url: "https://github.com/",
    },
    {
        number: "03",
        category: "WEB DEVELOPMENT · BOOKING",
        year: "2025",
        title: "SparkFresh",
        description:
            "A laundry booking website designed to make service discovery and booking simple across desktop and mobile.",
        note: "A straightforward experience from service selection to booking.",
        stamp: "USER FIRST",
        theme: "note-pink",
        url: "https://github.com/",
    },
];

export default function ProjectsPage() {
    return (
        <main className="works-page" id="works">
            <section className="works-heading">
                <div className="works-eyebrow">
                    <span>EVIDENCE</span>
                    <span className="works-eyebrow-line" />
                    <span>LATEST WORKS</span>
                </div>

                <div className="works-title-row">
                    <h1>
                        A few problems
                        <br />
                        worth solving.
                    </h1>

                    <a href="#all-projects" className="works-all-button">
                        VIEW ALL WORK <ArrowRight size={18} />
                    </a>
                </div>
            </section>

            <section className="works-list" id="all-projects">
                {projects.map((project) => (
                    <article className="work-project" key={project.number}>
                        <span className="work-number">{project.number}</span>

                        <div className="work-main">
                            <p className="work-meta">
                                {project.category} <span>·</span> {project.year}
                            </p>

                            <h2>{project.title}</h2>

                            <p className="work-description">
                                {project.description}
                            </p>

                            <a
                                className="work-mobile-link"
                                href={project.url}
                                target="_blank"
                                rel="noreferrer"
                            >
                                VIEW PROJECT <ArrowRight size={18} />
                            </a>
                        </div>

                        <div className="work-aside">
                            <span className="appreciation-stamp">
                                {project.stamp}
                            </span>

                            <p>{project.description}</p>

                            <a
                                className="work-arrow"
                                href={project.url}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={`View ${project.title}`}
                            >
                                <ArrowRight size={25} />
                            </a>
                        </div>

                        <div className={`work-sticky-note ${project.theme}`}>
                            {project.note}
                        </div>

                        <span className="work-fold" />
                    </article>
                ))}
            </section>
        </main>
    );
}
