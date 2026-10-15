
export default function AboutStory() {
    return (
        <section id="about" className="story-section">
            <div className="story-left">
                <p className="story-kicker">
                    A career built by following curiosity
                </p>

                <h2 className="story-heading">
                    From coding
                    <br />
                    projects
                    <br />
                    to building
                    <br />
                    digital systems.
                </h2>
            </div>

            <div className="story-right">
                <p>
                    My journey began with curiosity about how websites
                    work. I started by building projects, experimenting
                    with layouts, and learning how technology can solve
                    everyday problems.
                </p>

                <p>
                    As I explored web development, I discovered a deeper
                    interest in full-stack development. Today, I combine
                    React, Node.js, Express, and MongoDB to build
                    responsive interfaces, reliable APIs, and useful
                    digital experiences.
                </p>

                <a href="#works" className="story-link">
                    THE FULL STORY <span>→</span>
                </a>
            </div>
        </section>
    );
}

