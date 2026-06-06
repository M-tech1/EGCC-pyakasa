import Reveal from "@/components/shared/Reveal";
import Icon, { PlayIcon } from "@/components/shared/Icon";
import { SERMONS } from "@/data/site";

export default function Sermons() {
  return (
    <section className="sermons pad" id="sermons">
      <div className="wrap center">
        <Reveal>
          <span className="eyebrow center">The Word, Anytime</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="sec-title">Latest Sermons</h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="sec-sub">
            Missed a service or want to revisit a message? Watch and listen to recent teachings on demand.
          </p>
        </Reveal>
      </div>
      <div className="wrap">
        <div className="ser-grid">
          {SERMONS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1} className="ser-card">
              <div className="ser-thumb">
                <div className="play">
                  <PlayIcon />
                </div>
                <span className="dur">{s.duration}</span>
              </div>
              <div className="ser-body">
                <div className="ser-series">{s.series}</div>
                <h3>{s.title}</h3>
                <div className="by">
                  {s.speaker} · {s.date}
                </div>
                <div className="ser-actions">
                  <a href="#">
                    <PlayIcon />
                    Watch
                  </a>
                  <a href="#">
                    <Icon name="listen" />
                    Listen
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="center" delay={0.1}>
          <div style={{ marginTop: "3rem" }}>
            <a href="#" className="btn btn-gold">
              Browse Sermon Archive
              <Icon name="arrowRight" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
