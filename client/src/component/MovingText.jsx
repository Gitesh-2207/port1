
const items = [
  "FRONTEND DEVELOPMENT",
  "UI/UX DESIGN",
  "PRODUCT DESIGN",
  "DB DESIGN",
  "API DESIGN",
  "CODE & CREATE",
  "FULL STACK",

];

export default function MovingText() {
  return (
    <div className="marquee-container">
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <div className="marquee-group" key={copy} aria-hidden={copy === 1}>
            {items.map((item, index) => (
              <div className="marquee-item" key={`${item}-${index}`}>
                <span>{item}</span>
                <span className="marquee-star">✦</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
