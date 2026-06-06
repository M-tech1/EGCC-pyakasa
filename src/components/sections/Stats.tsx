import Reveal from "@/components/shared/Reveal";
import Counter from "@/components/shared/Counter";
import { STATS } from "@/data/site";

export default function Stats() {
  return (
    <section className="counters pad">
      <div className="wrap counters-grid">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.1} className="stat">
            <Counter value={s.value} suffix={s.suffix} />
            <div className="lbl">{s.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
