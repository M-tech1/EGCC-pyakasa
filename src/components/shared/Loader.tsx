"use client";

import { useState, useEffect } from "react";
import Crest from "./Crest";

export default function Loader() {
  const [phase, setPhase] = useState<"in" | "out" | "done">("in");

  useEffect(() => {
    if (sessionStorage.getItem("egcc-loaded")) {
      setPhase("done");
      return;
    }
    sessionStorage.setItem("egcc-loaded", "1");
    const t1 = setTimeout(() => setPhase("out"), 2400);
    const t2 = setTimeout(() => setPhase("done"), 3050);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div className={`ldr${phase === "out" ? " ldr-out" : ""}`} aria-hidden="true">
      {/* Background */}
      <div className="ldr-bg" />
      <div className="ldr-grain" />

      {/* Decorative arch */}
      <svg className="ldr-arch" viewBox="0 0 400 600" preserveAspectRatio="xMidYMin slice">
        <defs>
          <linearGradient id="ldrg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#e6c873" />
            <stop offset="1" stopColor="#e6c873" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M40 600V230a160 160 0 01320 0v370" fill="none" stroke="url(#ldrg)" strokeWidth="1.4" />
        <path d="M90 600V250a110 110 0 01220 0v350" fill="none" stroke="url(#ldrg)" strokeWidth="1" />
        <path d="M140 600V275a60 60 0 01120 0v325" fill="none" stroke="url(#ldrg)" strokeWidth="1" />
      </svg>

      {/* Gold radial glow */}
      <div className="ldr-glow" />

      {/* Content */}
      <div className="ldr-body">
        {/* Church crest */}
        <div className="ldr-crest">
          <Crest className="ldr-crest-img" />
        </div>

        {/* Decorative line */}
        <div className="ldr-deco">
          <span className="ldr-deco-bar" />
          <span className="ldr-deco-cross">✛</span>
          <span className="ldr-deco-bar" />
        </div>

        {/* Text */}
        <p className="ldr-welcome">Welcome to</p>
        <h1 className="ldr-name">EGCC Pyakasa</h1>

        {/* Progress bar */}
        <div className="ldr-track">
          <div className="ldr-fill" />
        </div>
      </div>

      {/* Footer */}
      <p className="ldr-powered">
        Powered by: <span>Mitcrux</span>
      </p>
    </div>
  );
}
