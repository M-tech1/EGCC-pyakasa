"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Reveal from "@/components/shared/Reveal";
import Icon from "@/components/shared/Icon";
import slide2 from "../../../public/assets/slide-2.jpg";
import slide3 from "../../../public/assets/slide-3.jpg";

import galary1 from "../../../public/assets/gallery-1.jpeg";
import galary2 from "../../../public/assets/gallery-2.jpeg";
import galary3 from "../../../public/assets/gallery-3.jpeg";
import galary4 from "../../../public/assets/gallery-4.jpeg";
import galary5 from "../../../public/assets/gallery-5.jpeg";

const SLIDES = [
  {
    src: "https://picsum.photos/seed/egcc-s5/1920/1080",
    // src: slide1,
    label: "Our Sanctuary",
    caption: "A house of prayer for all nations",
  },
  {
    // src: "https://picsum.photos/seed/egcc-s2/1920/1080",
    src: slide2,
    label: "Sunday Worship",
    caption: "Gathering together in His name",
  },
  {
    src: slide3,
    label: "Community Life",
    caption: "Growing together in fellowship",
  },
  {
    src: "https://picsum.photos/seed/egcc-s4/1920/1080",
    label: "Youth & Children",
    caption: "Raising the next generation for Christ",
  },
  {
    src: "https://picsum.photos/seed/egcc-s1/1920/1080",
    label: "Outreach Ministry",
    caption: "Taking the Gospel beyond our walls",
  },
];

const GALLERY = [
  {
    // src: "https://picsum.photos/seed/egcc-g1/800/600",
    src: galary1,
    label: "Word Teachings",
  },
  { src: galary2, label: "Worship Moments" },
  {
    src: galary3,
    label: "Zumuta Mata",
  },
  {
    // src: "https://picsum.photos/seed/egcc-g4/800/600",
    src: galary4,
    label: "Youth Fellowship",
  },
  {
    src: galary5,
    label: "Praise & Worship",
  },
  { src: "https://picsum.photos/seed/egcc-g6/800/600", label: "Church Family" },
];

const PILLARS = [
  {
    icon: "shield",
    title: "Our Mission",
    body: "ECWA exists to glorify God by reaching out to humanity through evangelism, discipleship, church planting, and social services”d",
  },
  {
    icon: "outreach",
    title: "Our Vision",
    body: "A global dynamic Christ-centred church with a wholistic mandate in a society where everyone is saved and flourishing.",
  },
  {
    icon: "book",
    title: "Identity Statement",
    body: "ECWA is an Evangelical community of believers, founded through the work of SIM missionaries. We believe in the sixty-six (66) books of the Holy Scriptures as inspired, and we exist to bring glory to God.",
  },
];

export default function About() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setActive((a) => (a + 1) % SLIDES.length), []);
  const prev = useCallback(
    () => setActive((a) => (a - 1 + SLIDES.length) % SLIDES.length),
    [],
  );

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 2000);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <section className="about" id="about">
      {/* ── Section header ── */}
      <div className="wrap about-header">
        <Reveal>
          <span className="eyebrow center">Our Story</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="sec-title center">
            Rooted in Faith,
            <br />
            Growing in Grace
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="sec-sub center">
            For over two decades, ECWA Gospel Church Pyakasa has been a beacon
            of hope, sound teaching, and transformational community in the heart
            of Abuja — and we are just getting started.
          </p>
        </Reveal>
      </div>

      {/* ── Image Slideshow ── */}
      <Reveal delay={0.15} y={24}>
        <div
          className="about-show"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Slides */}
          {SLIDES.map((s, i) => (
            <div
              key={i}
              className={`about-slide${i === active ? " active" : ""}`}
            >
              <Image
                src={s.src}
                fill
                style={{ objectFit: "cover" }}
                alt={s.label}
                priority={i === 0}
                sizes="100vw"
              />
              <div className="about-slide-scrim" />

              {/* Decorative arch lines — mirrors the hero aesthetic */}
              <svg
                className="about-arch"
                viewBox="0 0 400 560"
                preserveAspectRatio="xMidYMin slice"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id={`slg${i}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#e6c873" />
                    <stop offset="1" stopColor="#e6c873" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M40 560V230a160 160 0 01320 0v330"
                  fill="none"
                  stroke={`url(#slg${i})`}
                  strokeWidth="1.2"
                />
                <path
                  d="M90 560V250a110 110 0 01220 0v310"
                  fill="none"
                  stroke={`url(#slg${i})`}
                  strokeWidth="0.8"
                />
                <path
                  d="M140 560V275a60 60 0 01120 0v285"
                  fill="none"
                  stroke={`url(#slg${i})`}
                  strokeWidth="0.8"
                />
              </svg>
            </div>
          ))}

          {/* Caption bar */}
          <div className="about-caption">
            <span className="about-cap-eyebrow">{SLIDES[active].label}</span>
            <span className="about-cap-text">{SLIDES[active].caption}</span>
          </div>

          {/* Slide counter */}
          <div className="about-counter" aria-live="polite" aria-atomic="true">
            <b>{String(active + 1).padStart(2, "0")}</b>
            <span className="about-counter-sep" />
            <span>{String(SLIDES.length).padStart(2, "0")}</span>
          </div>

          {/* Prev / Next arrows */}
          <button
            className="about-arr about-arr-p"
            onClick={prev}
            aria-label="Previous slide"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            className="about-arr about-arr-n"
            onClick={next}
            aria-label="Next slide"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Dot navigation */}
          <div
            className="about-dots"
            role="tablist"
            aria-label="Slide navigation"
          >
            {SLIDES.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === active}
                className={`about-dot${i === active ? " active" : ""}`}
                onClick={() => setActive(i)}
                aria-label={`Go to slide ${i + 1}: ${SLIDES[i].label}`}
              />
            ))}
          </div>
        </div>
      </Reveal>

      {/* ── Mission / Vision / Values ── */}
      <div className="wrap about-body">
        <div className="about-pillars">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.12}>
              <div className="about-pillar">
                <div className="about-pillar-ic">
                  <Icon name={p.icon} />
                </div>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ── Photo Gallery ── */}
        <Reveal delay={0.1}>
          <div className="about-gal-head">
            <span className="eyebrow center">Church Life</span>
            <h3 className="about-gal-title">Moments That Define Us</h3>
          </div>
        </Reveal>

        <div className="about-gallery">
          {GALLERY.map((g, i) => (
            <Reveal key={i} delay={i * 0.07} className="about-gcell">
              <div className="about-gitem">
                <Image
                  src={g.src}
                  fill
                  style={{ objectFit: "cover" }}
                  alt={g.label}
                  sizes="(max-width: 680px) 50vw, 33vw"
                />
                <div className="about-gitem-scrim" />
                <span className="about-gitem-lbl">{g.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
