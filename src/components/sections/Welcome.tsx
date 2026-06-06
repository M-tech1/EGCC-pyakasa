import Reveal from "@/components/shared/Reveal";
import Icon from "@/components/shared/Icon";

export default function Welcome() {
  return (
    <section className="welcome pad" id="welcome">
      <div className="wrap welcome-grid">
        <Reveal className="welcome-visual">
          <div className="ph">
            <Icon name="shield" />
            <span className="tag">Senior Pastor · Photo</span>
          </div>
          <div className="frame" />
          <div className="pastor-badge">
            <span>Senior Pastor</span>
            <b>Rev. [Pastor&apos;s Name]</b>
          </div>
        </Reveal>

        <div className="welcome-copy">
          <Reveal>
            <span className="eyebrow">A Word of Welcome</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2>
              More than a church —<br />a family on mission.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p>
              For over two decades, ECWA Gospel Church Pyakasa has been a home where lives are transformed by the Word
              of God and the power of His Spirit. We are an Evangelical Church Winning All — reaching our community,
              raising disciples, and lifting the name of Jesus.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p>
              Whether you are exploring faith for the first time or returning to the family of God, you will find genuine
              warmth, sound teaching, and a place to grow and serve. We can&apos;t wait to meet you.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="sig">
              Rev. [Pastor&apos;s Name]
              <small>Senior Pastor</small>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
