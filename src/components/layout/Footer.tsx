"use client";

import { useState } from "react";
import Crest from "@/components/shared/Crest";
import Icon from "@/components/shared/Icon";
import { NAV_LINKS } from "@/data/site";
import { SITE, LOCATION, SOCIALS } from "@/constants";
import { subscribeToNewsletter } from "@/services/newsletter";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const handleSubscribe = async () => {
    const res = await subscribeToNewsletter(email);
    if (res.ok) {
      setEmail("");
      setDone(true);
    }
  };

  return (
    <footer className="site-footer">
      <div className="foot-news">
        <div className="wrap">
          <div>
            <h3>Stay Connected</h3>
            <p>Devotionals, event updates, and encouragement in your inbox.</p>
          </div>
          <div className="news-form">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={
                done
                  ? "✓ Subscribed — welcome to the family!"
                  : "Enter your email address"
              }
            />
            <button className="btn btn-gold" onClick={handleSubscribe}>
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="foot-main">
        <div className="wrap foot-grid">
          <div className="foot-brand">
            <a className="brand" href="#top">
              <Crest className="crest" />
              <span className="bt">
                <b style={{ color: "#fff" }}>{SITE.shortName}</b>
                <span>{SITE.district}</span>
              </span>
            </a>
            <p>
              An {SITE.motto} <br /> A Spirit-filled family in {SITE.district},
              Abuja, reaching our world with the love and truth of Jesus Christ.
            </p>
            <div className="socials">
              <a href={SOCIALS.facebook} aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 9h3V6h-3c-2 0-3 1-3 3v2H9v3h2v7h3v-7h2.5l.5-3H14V9z" />
                </svg>
              </a>
              {/* <a href={SOCIALS.instagram} aria-label="Instagram">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.6}
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </a> */}
              <a href={SOCIALS.youtube} aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12s0-3.5-.4-5c-.3-1-1-1.7-2-2C17.8 4.5 12 4.5 12 4.5s-5.8 0-7.6.5c-1 .3-1.7 1-2 2C2 8.5 2 12 2 12s0 3.5.4 5c.3 1 1 1.7 2 2 1.8.5 7.6.5 7.6.5s5.8 0 7.6-.5c1-.3 1.7-1 2-2 .4-1.5.4-5 .4-5zM10 15V9l5 3-5 3z" />
                </svg>
              </a>
              <a
                href="https://chat.whatsapp.com/FCg9DQjAROvG3o6Iph4M6W"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.559 4.14 1.535 5.876L0 24l6.29-1.51A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.37l-.36-.213-3.733.897.938-3.63-.234-.373A9.818 9.818 0 1112 21.818z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="foot-col">
            <h4>Explore</h4>
            <ul>
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>
                    {l.label === "About" ? "About Us" : l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="foot-col">
            <h4>Services</h4>
            <ul>
              <li>
                <a href="#services">Sunday · 8:00 &amp; 10:30 AM</a>
              </li>
              <li>
                <a href="#services">Tuesday · 6:00 PM</a>
              </li>
              <li>
                <a href="#services">Thursday Prayer · 6:00 PM</a>
              </li>
              <li>
                <a href="#giving">Give Online</a>
              </li>
              <li>
                <a href="#prayer">Prayer Requests</a>
              </li>
            </ul>
          </div>

          <div className="foot-col">
            <h4>Visit Us</h4>
            <div className="info">
              <Icon name="pin" />
              <span>
                {LOCATION.address},<br />
                {LOCATION.area}
              </span>
            </div>
            <div className="info">
              <Icon name="phone" />
              <span>{SITE.phone}</span>
            </div>
            <div className="info">
              <Icon name="mail" />
              <span>{SITE.email}</span>
            </div>
            <div className="info">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="16"
                height="16"
                style={{ flexShrink: 0 }}
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.559 4.14 1.535 5.876L0 24l6.29-1.51A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.37l-.36-.213-3.733.897.938-3.63-.234-.373A9.818 9.818 0 1112 21.818z" />
              </svg>
              <a
                href="https://chat.whatsapp.com/FCg9DQjAROvG3o6Iph4M6W"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join our WhatsApp Group
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="foot-bottom">
        <div className="wrap">
          <span>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </span>
          <span>
            {SITE.motto} · {SITE.tagline}
          </span>
          <span>
            Powered by{" "}
            <a
              href="https://mitcrux.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mitcrux-link"
            >
              MitCrux Limited
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
