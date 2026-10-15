
const stats = [
    {
        number: "20+",
        label: "WEBSITE DESIGNED",
        caption: "“okayyy”",
    },
    {
        number: "10+",
        label: "WEBSITE DESIGNED",
        caption: "still asking “why?”",
    },
    {
        number: "∞",
        label: "ALWAYS",
        caption: "Learning & Improving",
    },
];

export default function StatsSection() {
    return (
        <section className="stats-section">
            <h2 className="stats-heading">Instead of fake statistics:</h2>

            <div className="stats-grid">
                {stats.map((stat) => (
                    <div className="stat-item" key={stat.label}>
                        <div className="stat-circle">
                            <span>{stat.number}</span>
                        </div>

                        <p className="stat-label">{stat.label}</p>

                        <p className="stat-caption">{stat.caption}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
