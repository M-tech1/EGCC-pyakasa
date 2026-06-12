"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Reveal from "@/components/shared/Reveal";
import Icon from "@/components/shared/Icon";
import { MINISTRIES } from "@/data/site";
import type { Ministry } from "@/types";

/* ── shared: renders either a real photo or the gradient placeholder ── */
function FeatureImage({
  ministry,
  className,
}: {
  ministry: Ministry;
  className?: string;
}) {
  if (ministry.image) {
    return (
      <Image
        src={ministry.image}
        alt={ministry.title}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className={className ?? ""}
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
    );
  }
  return (
    <div className="min-feat-grad" style={{ background: ministry.gradient }} />
  );
}

/* ── Ministry Modal ─────────────────────────────── */
function MinistryModal({
  ministry,
  onClose,
}: {
  ministry: Ministry;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <motion.div
      className="mmin-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={ministry.title}
    >
      <motion.div
        className="mmin-panel"
        initial={{ opacity: 0, y: 36, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Header: feature image or gradient ── */}
        <div className="mmin-header">
          <FeatureImage ministry={ministry} className="mmin-img" />
          {/* dark scrim so icon + close button always read clearly */}
          <div className="mmin-scrim" />
          <Icon name={ministry.icon} className="mmin-icon" />
          <button
            className="mmin-close"
            onClick={onClose}
            aria-label="Close modal"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* ── Body ── */}
        <div className="mmin-body">
          <h3 className="mmin-title">{ministry.title}</h3>

          {(ministry.leader || ministry.meetingTime) && (
            <div className="mmin-meta">
              {ministry.leader && (
                <span className="mmin-badge">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="8" r="4" />
                    <path d="M6 20c0-3 3-5 6-5s6 2 6 5" />
                  </svg>
                  {ministry.leader}
                </span>
              )}
              {ministry.meetingTime && (
                <span className="mmin-badge">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 8v4l3 2" />
                  </svg>
                  {ministry.meetingTime}
                </span>
              )}
            </div>
          )}

          <p className="mmin-desc">{ministry.details}</p>

          <a
            href="#prayer"
            className="btn btn-royal mmin-cta"
            onClick={onClose}
          >
            Get Involved
            <Icon name="arrowRight" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Ministries Section ─────────────────────────── */
export default function Ministries() {
  const [active, setActive] = useState<Ministry | null>(null);
  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <>
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
              Every age and season has a home at ECWA Gospel Church. Discover
              where you belong and how you can grow and serve.
            </p>
          </Reveal>
        </div>

        <div className="wrap">
          <div className="min-grid">
            {MINISTRIES.map((m, i) => (
              <Reveal key={m.title} delay={(i % 3) * 0.1}>
                <button className="min-card" onClick={() => setActive(m)}>
                  {/* Feature image area */}
                  <div className="min-cimg">
                    <FeatureImage ministry={m} className="min-cimg-img" />
                    {/* bottom-fade overlay (same whether photo or gradient) */}
                    <div className="min-cimg-scrim" />
                    <Icon name={m.icon} className="mic" />
                  </div>
                  {/* Card body */}
                  <div className="min-cbody">
                    <h3>{m.title}</h3>
                    <p>{m.description}</p>
                    <span className="arrow">
                      Learn more
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </span>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {active && <MinistryModal ministry={active} onClose={close} />}
      </AnimatePresence>
    </>
  );
}
