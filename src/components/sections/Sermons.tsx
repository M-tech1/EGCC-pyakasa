"use client";

import Reveal from "@/components/shared/Reveal";
import Icon, { PlayIcon } from "@/components/shared/Icon";
import { useSermons, getYouTubeId } from "@/services/sermons";
import type { FirestoreSermon } from "@/services/sermons";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="36" height="36">
      <path d="M14 9h3V6h-3c-2 0-3 1-3 3v2H9v3h2v7h3v-7h2.5l.5-3H14V9z" />
    </svg>
  );
}

function SermonThumb({ sermon }: { sermon: FirestoreSermon }) {
  const ytId = sermon.platform === "youtube" ? getYouTubeId(sermon.url) : null;

  if (ytId) {
    return (
      <div className="ser-thumb ser-thumb--yt">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://img.youtube.com/vi/${ytId}/mqdefault.jpg`}
          alt=""
          className="ser-thumb-img"
        />
        <div className="ser-thumb-overlay" />
        <div className="play">
          <PlayIcon />
        </div>
        {sermon.duration && <span className="dur">{sermon.duration}</span>}
      </div>
    );
  }

  if (sermon.platform === "facebook") {
    return (
      <div className="ser-thumb ser-thumb--fb">
        <div className="ser-thumb-platform-icon">
          <FacebookIcon />
        </div>
        <div className="play">
          <PlayIcon />
        </div>
        {sermon.duration && <span className="dur">{sermon.duration}</span>}
      </div>
    );
  }

  return (
    <div className="ser-thumb">
      <div className="play">
        <PlayIcon />
      </div>
      {sermon.duration && <span className="dur">{sermon.duration}</span>}
    </div>
  );
}

export default function Sermons() {
  const { sermons, loading } = useSermons();

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
            Missed a service or want to revisit a message? Watch recent
            teachings on demand.
          </p>
        </Reveal>
      </div>

      <div className="wrap">
        {loading ? (
          <p className="ser-empty">Loading sermons…</p>
        ) : sermons.length === 0 ? (
          <p className="ser-empty">No sermons uploaded yet. Check back soon.</p>
        ) : (
          <div className="ser-grid">
            {sermons.map((s, i) => (
              <Reveal key={s.id} delay={i * 0.1} className="ser-card">
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ser-thumb-link"
                  aria-label={`Watch ${s.title}`}
                >
                  <SermonThumb sermon={s} />
                </a>
                <div className="ser-body">
                  {s.series && (
                    <div className="ser-series">{s.series}</div>
                  )}
                  <h3>{s.title}</h3>
                  <div className="by">
                    {s.speaker} · {s.date}
                  </div>
                  <div className="ser-actions">
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <PlayIcon />
                      {s.platform === "facebook" ? "Watch on Facebook" : "Watch"}
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
