"use client";

import { useEffect, useRef } from "react";
import Icon, { PlayIcon } from "@/components/shared/Icon";
import { SITE } from "@/constants";

const PARTICLES = [
  { id: 0, left: "3%", size: "3px", delay: "0s", dur: "13s", cls: "p-ga" },
  { id: 1, left: "9%", size: "2px", delay: "2.1s", dur: "11s", cls: "p-wa" },
  { id: 2, left: "16%", size: "4px", delay: "0.7s", dur: "15s", cls: "p-gb" },
  { id: 3, left: "22%", size: "2px", delay: "4.3s", dur: "12s", cls: "p-gc" },
  { id: 4, left: "29%", size: "3px", delay: "1.8s", dur: "14s", cls: "p-wb" },
  { id: 5, left: "36%", size: "2px", delay: "6.5s", dur: "10s", cls: "p-ga" },
  { id: 6, left: "43%", size: "4px", delay: "3.2s", dur: "16s", cls: "p-gb" },
  { id: 7, left: "50%", size: "2px", delay: "0.4s", dur: "11s", cls: "p-wc" },
  { id: 8, left: "56%", size: "3px", delay: "5.1s", dur: "13s", cls: "p-ga" },
  { id: 9, left: "62%", size: "2px", delay: "1.3s", dur: "12s", cls: "p-wa" },
  { id: 10, left: "68%", size: "4px", delay: "7.8s", dur: "15s", cls: "p-gc" },
  { id: 11, left: "74%", size: "2px", delay: "2.9s", dur: "10s", cls: "p-gb" },
  { id: 12, left: "80%", size: "3px", delay: "4.6s", dur: "14s", cls: "p-wc" },
  { id: 13, left: "86%", size: "2px", delay: "0.9s", dur: "13s", cls: "p-ga" },
  { id: 14, left: "92%", size: "4px", delay: "6.1s", dur: "11s", cls: "p-gb" },
  { id: 15, left: "97%", size: "2px", delay: "3.7s", dur: "16s", cls: "p-wa" },
  { id: 16, left: "13%", size: "3px", delay: "8.4s", dur: "12s", cls: "p-wc" },
  { id: 17, left: "46%", size: "2px", delay: "5.7s", dur: "15s", cls: "p-gb" },
  { id: 18, left: "71%", size: "4px", delay: "2.3s", dur: "14s", cls: "p-gc" },
  { id: 19, left: "88%", size: "3px", delay: "9.2s", dur: "13s", cls: "p-wa" },
];

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = bgRef.current;
    if (!el) return;
    const onScroll = () => {
      const y = window.scrollY;
      if (y < window.innerHeight)
        el.style.transform = `translateY(${y * 0.35}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="hero" id="top">
      {/* ── animated background ── */}
      <div className="hero-bg" ref={bgRef}>
        <div className="hero-grad" />
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="orb orb-4" />
        <div className="orb orb-5" />
        <div className="orb orb-6" />
        <svg
          className="arch"
          viewBox="0 0 400 600"
          preserveAspectRatio="xMidYMin slice"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="ag" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#e6c873" />
              <stop offset="1" stopColor="#e6c873" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M40 600V230a160 160 0 01320 0v370"
            fill="none"
            stroke="url(#ag)"
            strokeWidth="1.5"
          />
          <path
            d="M90 600V250a110 110 0 01220 0v350"
            fill="none"
            stroke="url(#ag)"
            strokeWidth="1"
          />
          <path
            d="M140 600V275a60 60 0 01120 0v325"
            fill="none"
            stroke="url(#ag)"
            strokeWidth="1"
          />
        </svg>
        <svg
          className="rays"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="r" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#e6c873" stopOpacity=".5" />
              <stop offset="1" stopColor="#e6c873" stopOpacity="0" />
            </linearGradient>
          </defs>
          <g transform="translate(900 -100)">
            <path
              d="M0 0L-200 900"
              stroke="url(#r)"
              strokeWidth="60"
              opacity=".4"
            />
            <path
              d="M0 0L100 900"
              stroke="url(#r)"
              strokeWidth="40"
              opacity=".3"
            />
            <path
              d="M0 0L-450 900"
              stroke="url(#r)"
              strokeWidth="50"
              opacity=".3"
            />
          </g>
        </svg>
        <div className="grain" />
        <div className="hero-vignette" />
        <div className="hero-particles" aria-hidden="true">
          {PARTICLES.map((p) => (
            <span
              key={p.id}
              className={`ptcl ${p.cls}`}
              style={{
                left: p.left,
                width: p.size,
                height: p.size,
                animationDelay: p.delay,
                animationDuration: p.dur,
              }}
            />
          ))}
        </div>
      </div>

      {/* ── centred hero body ── */}
      <div className="wrap hero-inner">
        {/* decorative gold line */}
        <div className="hero-deco-line" aria-hidden="true">
          <span className="deco-dot" />
          <span className="deco-bar" />
          <span className="deco-cross">✛</span>
          <span className="deco-bar" />
          <span className="deco-dot" />
        </div>

        {/* eyebrow */}
        <span className="eyebrow center">{SITE.motto}</span>

        {/* three-part headline */}
        <h1>
          <span className="ln h-welcome">
            <i>Welcome to</i>
          </span>
          <span className="ln h-name">
            <i>
              <span className="gold-line">ECWA Gospel Church</span>
            </i>
          </span>
          <span className="ln h-location">
            <i>Pyakasa · Abuja</i>
          </span>
        </h1>

        {/* gold rule */}
        <div className="hero-rule" aria-hidden="true">
          <span className="rl" />
          <span className="rc">✛</span>
          <span className="rr" />
        </div>

        {/* lede */}
        <p className="lede">
          Wherever you are on your journey of faith, there is a place for you
          here. Come as you are and encounter the living God among a family that
          loves Him — and loves you.
        </p>

        {/* calls to action */}
        <div className="hero-cta">
          <a href="#plan" className="btn btn-gold">
            Plan Your Visit
            <Icon name="arrowRight" />
          </a>
          <a href="#sermons" className="btn btn-ghost">
            <PlayIcon />
            Watch Online
          </a>
        </div>

        {/* quick stats */}
        <div className="hero-stats">
          <div className="hstat">
            <b>23</b>
            <span>Years of Ministry</span>
          </div>
          <span className="hstat-div" aria-hidden="true" />
          <div className="hstat">
            <b>2,500+</b>
            <span>Active Members</span>
          </div>
          <span className="hstat-div" aria-hidden="true" />
          <div className="hstat">
            <b>14</b>
            <span>Ministries</span>
          </div>
        </div>
      </div>

      {/* ── frosted service-times bar ── */}
      <div className="hero-meta">
        <div className="wrap">
          <div className="hmeta-item">
            <span className="hmeta-label">Sunday</span>
            <span>8:00 AM · 10:30 AM</span>
          </div>
          <span className="hmeta-sep" aria-hidden="true" />
          <div className="hmeta-item">
            <span className="hmeta-label">Tuesday</span>
            <span>Bible Study · 6:00 PM</span>
          </div>
          <span className="hmeta-sep" aria-hidden="true" />
          <div className="hmeta-item">
            <span className="hmeta-label">Location</span>
            <span>Pyakasa, Lugbe · Abuja</span>
          </div>
        </div>
      </div>

      <div className="scrollcue">
        <span>Scroll</span>
        <span className="bar" />
      </div>
    </section>
  );
}
