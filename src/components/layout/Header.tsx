"use client";

import { useEffect, useState } from "react";
import Crest from "@/components/shared/Crest";
import Icon from "@/components/shared/Icon";
import { NAV_LINKS } from "@/data/site";
import { SITE } from "@/constants";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className={`site-header${scrolled ? " scrolled" : ""}`}>
        <div className="wrap">
          <nav>
            <a className="brand" href="#top" aria-label={SITE.name}>
              <Crest className="crest" />
              <span className="bt">
                <b>{SITE.shortName}</b>
                <span>{SITE.district}</span>
              </span>
            </a>

            <ul className="nav-links">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>

            <div className="nav-cta">
              <a href="#giving" className="btn btn-ghost">
                Give
              </a>
              <a href="#plan" className="btn btn-gold">
                Visit Us
              </a>
            </div>

            <button
              className="menu-btn"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="13" x2="21" y2="13" />
                <line x1="3" y1="19" x2="14" y2="19" />
              </svg>
            </button>
          </nav>
        </div>
      </header>

      <div className={`mnav${menuOpen ? " open" : ""}`}>
        <div className="top">
          <span className="brand">
            <span className="bt">
              <b style={{ color: "#fff" }}>{SITE.shortName}</b>
              <span>{SITE.district}</span>
            </span>
          </span>
          <button aria-label="Close menu" onClick={() => setMenuOpen(false)}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </svg>
          </button>
        </div>
        {NAV_LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
            {l.label}
          </a>
        ))}
        <a href="#giving" onClick={() => setMenuOpen(false)}>
          Give
        </a>
        <a
          href="#plan"
          className="btn btn-gold"
          style={{ fontSize: ".9rem" }}
          onClick={() => setMenuOpen(false)}
        >
          Visit Us
          <Icon name="arrowRight" />
        </a>
      </div>
    </>
  );
}
