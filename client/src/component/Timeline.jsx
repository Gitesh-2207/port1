

const milestones = [
    {
        date: "2019–2020",
        title: "Secondary Education",
        description:
            "Completed my secondary education at Adarsh Academy, Dhamnod, building a strong academic foundation.",
        color: "yellow",
    },
    {
        date: "2021–2022",
        title: "Higher Secondary",
        description:
            "Completed my higher secondary education at Adarsh Academy, Dhamnod, and prepared for my engineering journey.",
        color: "white",
    },
    {
        date: "2022–2026",
        title: "B.Tech in Computer Science",
        description:
            "Pursued Bachelor of Technology in Computer Science & Engineering at Sushila Devi Bansal College of Technology, Indore.",
        color: "yellow",
    },
    {
        date: "2023–2026",
        title: "Full-Stack Development",
        description:
            "Built practical web development skills using React, Node.js, Express.js, MongoDB, and Tailwind CSS.",
        color: "white",
    },
    {
        date: "Projects",
        title: "My Work",
        description:
            "Developed projects including MediBook, SparkFresh, FitFlow, and restaurant management applications.",
        color: "yellow",
    },
];

export default function Timeline() {
    return (
        <section id="journey" className="timeline-section">
            <div className="timeline-string" />

            <div className="timeline-cards">
                {milestones.map((item, index) => (
                    <article
                        key={item.date}
                        className={`timeline-card ${item.color} card-${index + 1}`}
                    >
                        <span className="timeline-pin" />

                        <p className="timeline-date">{item.date}</p>

                        <h2>{item.title}</h2>

                        <p className="timeline-description">
                            {item.description}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    );
}
