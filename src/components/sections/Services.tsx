import Reveal from "@/components/shared/Reveal";
import Icon from "@/components/shared/Icon";
import { SERVICES } from "@/data/site";

export default function Services() {
  return (
    <section className="services pad" id="services">
      <div className="wrap center">
        <Reveal>
          <span className="eyebrow center">Gather With Us</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="sec-title">Service Times</h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="sec-sub">
            There&apos;s a seat reserved for you. Join us in person or online as we worship, pray, and grow in the Word
            together.
          </p>
        </Reveal>
      </div>
      <div className="wrap">
        <div className="svc-grid">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1} className="svc-card">
              <Icon name={s.icon} className="ic" />
              <h3>{s.title}</h3>
              <div className="day">{s.day}</div>
              <div className="time">{s.time}</div>
              <p>{s.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
