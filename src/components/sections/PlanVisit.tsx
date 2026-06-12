import Reveal from "@/components/shared/Reveal";

export default function PlanVisit() {
  return (
    <section className="counters pad" id="plan" style={{ textAlign: "center" }}>
      <div className="wrap" style={{ position: "relative" }}>
        <Reveal>
          <span className="eyebrow center">First Time?</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="sec-title" style={{ color: "#fff" }}>
            Plan Your Visit
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="sec-sub" style={{ color: "rgba(255,255,255,.78)" }}>
            Free parking, a warm welcome team, and a secure children&apos;s
            check-in. Come exactly as you are, we&apos;ll take care of the rest.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div
            style={{
              marginTop: "2.4rem",
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a href="#services" className="btn btn-gold">
              See Service Times
            </a>
            <a href="#location" className="btn btn-ghost">
              Get Directions
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
