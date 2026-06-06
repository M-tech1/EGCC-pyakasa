"use client";

import { useEffect, useRef } from "react";
import Crest from "@/components/shared/Crest";
import Icon, { PlayIcon } from "@/components/shared/Icon";
import { SITE } from "@/constants";

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = bgRef.current;
    if (!el) return;
    const onScroll = () => {
      const y = window.scrollY;
      if (y < window.innerHeight) el.style.transform = `translateY(${y * 0.35}px)`;
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
        <svg className="arch" viewBox="0 0 400 600" preserveAspectRatio="xMidYMin slice" aria-hidden="true">
          <defs>
            <linearGradient id="ag" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#e6c873" />
              <stop offset="1" stopColor="#e6c873" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M40 600V230a160 160 0 01320 0v370" fill="none" stroke="url(#ag)" strokeWidth="1.5" />
          <path d="M90 600V250a110 110 0 01220 0v350" fill="none" stroke="url(#ag)" strokeWidth="1" />
          <path d="M140 600V275a60 60 0 01120 0v325" fill="none" stroke="url(#ag)" strokeWidth="1" />
        </svg>
        <svg className="rays" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <defs>
            <linearGradient id="r" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#e6c873" stopOpacity=".5" />
              <stop offset="1" stopColor="#e6c873" stopOpacity="0" />
            </linearGradient>
          </defs>
          <g transform="translate(900 -100)">
            <path d="M0 0L-200 900" stroke="url(#r)" strokeWidth="60" opacity=".4" />
            <path d="M0 0L100 900" stroke="url(#r)" strokeWidth="40" opacity=".3" />
            <path d="M0 0L-450 900" stroke="url(#r)" strokeWidth="50" opacity=".3" />
          </g>
        </svg>
        <div className="grain" />
        <div className="hero-vignette" />
      </div>

      {/* ── centred hero body ── */}
      <div className="wrap hero-inner">

        {/* floating crest */}
        <div className="hero-crest-wrap">
          <Crest className="hero-crest" />
        </div>

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
            <i><span className="gold-line">ECWA Gospel Church</span></i>
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
          Wherever you are on your journey of faith, there is a place for you here.
          Come as you are and encounter the living God among a family that loves Him — and loves you.
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
            <span>7:30 AM · 9:30 AM</span>
          </div>
          <span className="hmeta-sep" aria-hidden="true" />
          <div className="hmeta-item">
            <span className="hmeta-label">Wednesday</span>
            <span>Bible Study · 5:30 PM</span>
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
