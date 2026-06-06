"use client";

import { useEffect, useState } from "react";
import { TESTIMONIALS } from "@/data/site";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % TESTIMONIALS.length), 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="testi pad">
      <div className="quote-mark">&rdquo;</div>
      <div className="wrap center">
        <span className="eyebrow center">Stories of Grace</span>
        <h2 className="sec-title">Lives Transformed</h2>
      </div>
      <div className="wrap">
        <div className="testi-track">
          {TESTIMONIALS.map((t, i) => (
            <div key={t.name} className={`testi-slide${i === active ? " active" : ""}`}>
              <blockquote>{t.quote}</blockquote>
              <div className="who">
                <b>{t.name}</b>
                <span>{t.role}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="testi-dots">
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.name}
              className={i === active ? "active" : ""}
              aria-label={`Testimony ${i + 1}`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
