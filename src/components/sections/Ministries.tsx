import Reveal from "@/components/shared/Reveal";
import Icon from "@/components/shared/Icon";
import { MINISTRIES } from "@/data/site";

export default function Ministries() {
  return (
    <section className="ministries pad" id="ministries">
      <div className="wrap center">
        <Reveal>
          <span className="eyebrow center">Find Your Place</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="sec-title">Our Ministries</h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="sec-sub">
            Every age and season has a home at ECWA Gospel Church. Discover where you belong and how you can grow and
            serve.
          </p>
        </Reveal>
      </div>
      <div className="wrap">
        <div className="min-grid">
          {MINISTRIES.map((m, i) => (
            <Reveal key={m.title} delay={(i % 3) * 0.1}>
              <a className="min-card" href={m.href}>
                <div className="mg" />
                <Icon name={m.icon} className="mic" />
                <h3>{m.title}</h3>
                <p>{m.description}</p>
                <span className="arrow">Learn more →</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
