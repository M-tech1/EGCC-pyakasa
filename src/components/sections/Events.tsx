"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/shared/Reveal";
import { useEvents, useAnnouncements } from "@/services/events";

const MONTHS = [
  "JAN","FEB","MAR","APR","MAY","JUN",
  "JUL","AUG","SEP","OCT","NOV","DEC",
];

function parseDate(dateISO: string) {
  const [, m, d] = dateISO.split("-");
  return {
    day: String(parseInt(d, 10)),
    month: MONTHS[parseInt(m, 10) - 1] ?? "",
  };
}

export default function Events() {
  const { events, loading: evLoading } = useEvents();
  const { announcements, loading: annLoading } = useAnnouncements();
  const [lightbox, setLightbox] = useState<string | null>(null);

  const sortedAnn = [...announcements].sort(
    (a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0)
  );

  return (
    <>
      <section className="events pad" id="events">
        <div className="wrap center">
          <Reveal>
            <span className="eyebrow center">Mark Your Calendar</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="sec-title">What&apos;s On</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="sec-sub">
              Stay up to date with upcoming events and announcements from the
              church family.
            </p>
          </Reveal>
        </div>

        <div className="wrap">
          <div className="ev-split">
            {/* ── Left: Upcoming Events ── */}
            <div className="ev-events-col">
              <h3 className="ev-col-title">Upcoming Events</h3>

              {evLoading ? (
                <div className="ev-loading">Loading events…</div>
              ) : events.length === 0 ? (
                <p className="ev-empty">No upcoming events. Check back soon.</p>
              ) : (
                <div className="ev-cards">
                  {events.map((e, i) => {
                    const { day, month } = parseDate(e.dateISO);
                    return (
                      <Reveal key={e.id} delay={i * 0.07} className="ev-card">
                        <div className="ev-card-date">
                          <b>{day}</b>
                          <span>{month}</span>
                        </div>
                        <div className="ev-card-body">
                          <h4>{e.title}</h4>
                          <div className="ev-card-meta">
                            {e.time && <span>{e.time}</span>}
                            {e.location && <span>{e.location}</span>}
                          </div>
                          {e.description && (
                            <p className="ev-card-desc">{e.description}</p>
                          )}
                          {e.flierUrl && (
                            <button
                              className="ev-flier-btn"
                              onClick={() => setLightbox(e.flierUrl!)}
                            >
                              View Flier
                            </button>
                          )}
                        </div>
                      </Reveal>
                    );
                  })}
                </div>
              )}
            </div>

            {/* ── Right: Announcements ── */}
            <div className="ev-ann-col">
              <h3 className="ev-col-title">Announcements</h3>

              {annLoading ? (
                <div className="ev-loading">Loading…</div>
              ) : sortedAnn.length === 0 ? (
                <p className="ev-empty">No announcements at this time.</p>
              ) : (
                <div className="ann-list">
                  {sortedAnn.map((a, i) => (
                    <Reveal key={a.id} delay={i * 0.07} className="ann-item">
                      {a.pinned && <span className="ann-pinned">Pinned</span>}
                      <h4>{a.title}</h4>
                      <p>{a.body}</p>
                    </Reveal>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Flier lightbox */}
      {lightbox && (
        <div className="ev-lightbox" onClick={() => setLightbox(null)}>
          <div
            className="ev-lightbox-inner"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="ev-lightbox-close"
              onClick={() => setLightbox(null)}
              aria-label="Close"
            >
              ✕
            </button>
            <Image
              src={lightbox}
              alt="Event flier"
              width={600}
              height={800}
              style={{ objectFit: "contain", width: "100%", height: "auto" }}
            />
          </div>
        </div>
      )}
    </>
  );
}
