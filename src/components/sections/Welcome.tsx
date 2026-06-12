import Image from "next/image";
import Reveal from "@/components/shared/Reveal";
import pastorImg from "../../../public/assets/pastor_img.jpeg";
import Theme from "../../../public/assets/theme.jpeg";
// When the real theme banner image is ready, swap themeCardBg:

export default function Welcome() {
  return (
    <section className="welcome pad" id="welcome">
      <div className="wrap welcome-grid">
        {/* ── Pastor photo ── */}
        <Reveal className="welcome-visual">
          <Image
            src={pastorImg}
            fill
            style={{ objectFit: "cover", objectPosition: "center top" }}
            alt="Senior Pastor"
            sizes="(max-width: 680px) 100vw, (max-width: 1024px) 50vw, 28vw"
            priority
          />
          <div className="frame" />
          <div className="pastor-badge">
            <span>Senior Pastor</span>
            <b>Rev. Daniel Makadi</b>
          </div>
        </Reveal>

        {/* ── Welcome copy ── */}
        <div className="welcome-copy">
          <Reveal>
            <span className="eyebrow">A Word of Welcome</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2>
              More than a church
              <br />a family on mission.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p>
              For over two decades, ECWA Gospel Church Pyakasa has been a home
              where lives are transformed by the Word of God and the power of
              His Spirit. We are an Evangelical Church Winning All, reaching our
              community, raising disciples, and lifting the name of Jesus.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p>
              Whether you are exploring faith for the first time or returning to
              the family of God, you will find genuine warmth, sound teaching,
              and a place to grow and serve. We can&apos;t wait to meet you.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="sig">
              Rev. Daniel Makadi
              <small>Senior Pastor</small>
            </div>
          </Reveal>
        </div>

        {/* ── Yearly Theme Card ── */}
        <Reveal delay={0.25} className="welcome-theme-col">
          <div className="welcome-theme-card">
            {/* Full-bleed background image */}
            <Image
              src={Theme}
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              alt="2026 Church Theme"
              sizes="(max-width: 680px) 100vw, (max-width: 1024px) 100vw, 28vw"
            />

            {/* Dark-to-darker overlay for legibility */}
            <div className="wtc-overlay" aria-hidden="true" />

            {/* Gold top strip */}
            <div className="wtc-strip" aria-hidden="true" />

            {/* Year badge — top-left */}
            <div className="wtc-year-badge">
              <span className="wtc-year-label">Church Theme</span>
              <b className="wtc-year">2026</b>
            </div>

            {/* Main text — bottom */}
            <div className="wtc-body">
              <div className="wtc-deco" aria-hidden="true">
                <span className="wtc-deco-bar" />
                <span className="wtc-deco-cross">✝</span>
                <span className="wtc-deco-bar" />
              </div>
              {/* <h3 className="wtc-title">What Shall It Profit a Man</h3> */}
              <p className="wtc-verse">
                &ldquo;Scripture verse supporting the annual theme goes
                here.&rdquo;
              </p>
              <span className="wtc-ref">— Scripture Reference</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
