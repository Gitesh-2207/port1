
const steps = [
    {
        number: "01",
        title: "Discover",
        items: [
            "Understand Requirements",
            "User & Business Needs",
            "Research & Analysis",
            "Define Project Scope",
        ],
        theme: "approach-discover",
    },
    {
        number: "02",
        title: "Design",
        items: [
            "Wireframes & Layouts",
            "Responsive UI",
            "Component Structure",
            "Design Systems",
        ],
        theme: "approach-design",
    },
    {
        number: "03",
        title: "Develop",
        items: [
            "React Components",
            "REST API Integration",
            "Database Design",
            "Authentication & Logic",
        ],
        theme: "approach-develop",
    },
    {
        number: "04",
        title: "Deliver",
        items: [
            "Testing & Debugging",
            "Performance Improvements",
            "Deployment",
            "Continuous Learning",
        ],
        theme: "approach-deliver",
    },
];

export default function MyApproach() {
    return (
        <section id="approach" className="approach-section">
            <div className="approach-topline">
                <span>MY APPROACH</span>
                <span className="approach-rule" />
                <span>IDEA + CODE</span>
            </div>

            <div className="approach-intro">
                <div>
                    <p className="approach-script">
                        From an idea to a working product
                    </p>

                    <h2 className="approach-heading">
                        From rough ideas
                        <br />
                        to real-world
                        <br />
                        applications.
                    </h2>
                </div>

                <div className="approach-copy">
                    <p>
                        I start by understanding the problem, planning
                        a practical solution, and designing an interface
                        that feels clear and easy to use.
                    </p>

                    <p>
                        Then I build, test, and refine the experience
                        with React, Node.js, Express, and MongoDB—turning
                        concepts into reliable web applications.
                    </p>
                </div>
            </div>

            <div className="approach-cards">
                {steps.map((step) => (
                    <article
                        key={step.number}
                        className={`approach-card ${step.theme}`}
                    >
                        <span className="approach-number">
                            {step.number}
                        </span>

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
                ))}
            </div>
        </section>
    );
}
