import React from "react";

const steps = [
  {
    number: "01",
    title: "Discover",
    items: [
      "Understand Requirements",
      "User Flows & Wireframes",
      "System Architecture Specs",
      "Define Project Scope",
    ],
    theme: "approach-discover",
  },
  {
    number: "02",
    title: "Architecture",
    items: [
      "MongoDB Schema Design",
      "RESTful API Planning",
      "State Management Strategy",
      "Authentication & Security",
    ],
    theme: "approach-design",
  },
  {
    number: "03",
    title: "Development",
    items: [
      "Modular React Components",
      "Tailwind CSS Styling",
      "Node & Express Backend",
      "Clean Code & Git Workflow",
    ],
    theme: "approach-develop",
  },
  {
    number: "04",
    title: "Deliver",
    items: [
      "Testing & Debugging",
      "Lighthouse Performance",
      "CI/CD & Cloud Deploy",
      "Production Monitoring",
    ],
    theme: "approach-deliver",
  },
];

export default function MyApproach() {
  return (
    <section
      id="approach"
      className="approach-section mx-auto max-w-[1260px] w-full scroll-mt-28"
    >
      <div className="reveal-on-scroll reveal-fade-up approach-topline">
        <span>03 / HOW I WORK</span>
        <span className="approach-rule" />
        <span>FROM CONCEPT TO PRODUCTION</span>
      </div>

      <div className="approach-intro">
        <div className="reveal-on-scroll reveal-fade-right delay-100">
          <p className="approach-script">
            From static concepts to live applications
          </p>

          <h2 className="approach-heading">
            From rough ideas
            <br />
            to real-world
            <br />
            applications.
          </h2>
        </div>

        <div className="reveal-on-scroll reveal-fade-left delay-200 approach-copy">
          <p>
            I start by understanding user needs, planning clean data flows, and
            designing interfaces that feel intuitive and refined.
          </p>

          <p>
            Then I engineer scalable solutions using React, Node.js, Express,
            and MongoDB—turning complex workflows into clean, performant
            full-stack products.
          </p>
        </div>
      </div>

      <div className="approach-cards">
        {steps.map((step, index) => {
          const delays = ["delay-100", "delay-200", "delay-300", "delay-400"];
          return (
            <article
              key={step.number}
              className={`reveal-on-scroll reveal-fade-up ${
                delays[index] || "delay-100"
              } approach-card ${step.theme}`}
            >
              <span className="approach-number">{step.number}</span>

              {step.number === "04" && (
                <span className="window-dots">
                  <i />
                  <i />
                  <i />
                </span>
              )}

              <div className="approach-card-content">
                <h3>{step.title}</h3>

                <ul>
                  {step.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
