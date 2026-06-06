"use client";

import { useState } from "react";
import Reveal from "@/components/shared/Reveal";
import Icon from "@/components/shared/Icon";
import { GIVING_ACCOUNT } from "@/data/site";

/* 21×21 QR matrix — 1 = dark module, 0 = light */
const QR_MATRIX = [
  [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
  [1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
  [0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
  [1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0],
  [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
  [1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0],
  [1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0],
  [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1],
];

export default function Giving() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(GIVING_ACCOUNT.accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section className="giving pad" id="giving">
      <div className="wrap giving-grid">
        {/* ── left: copy ── */}
        <div>
          <Reveal>
            <span className="eyebrow">Generosity</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2>Give &amp; Build the Kingdom</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="verse">
              &ldquo;Each of you should give what you have decided in your heart
              to give… for God loves a cheerful giver.&rdquo; — 2 Corinthians
              9:7
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p>
              Your generosity fuels the mission — sustaining worship,
              discipleship, missions, and compassion to our community in Pyakasa
              and beyond. Every gift is stewarded with integrity and
              transparency.
            </p>
          </Reveal>
        </div>

        {/* ── right: account details + QR ── */}
        <Reveal delay={0.2}>
          <div className="give-panel">
            <h3>Give Directly</h3>

            <div className="acct-bank">
              <span className="acct-bank-name">{GIVING_ACCOUNT.bankName}</span>
            </div>

            <div className="acct-details">
              <div className="acct-row">
                <span className="acct-label">Account Name</span>
                <span className="acct-val">{GIVING_ACCOUNT.accountName}</span>
              </div>
              <div className="acct-row">
                <span className="acct-label">Account Number</span>
                <span className="acct-num">{GIVING_ACCOUNT.accountNumber}</span>
              </div>
              <button
                className={`acct-copy${copied ? " copied" : ""}`}
                onClick={handleCopy}
              >
                {copied ? "✓ Copied!" : "Copy Account Number"}
              </button>
            </div>

            <div className="qr-divider">
              <span />
              <span>or scan to pay</span>
              <span />
            </div>

            <div className="qr-wrap">
              <svg
                className="qr-svg"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Payment QR code"
              >
                <rect width="200" height="200" fill="#ffffff" rx="8" />
                {QR_MATRIX.map((row, r) =>
                  row.map((v, c) =>
                    v ? (
                      <rect
                        key={`${r}-${c}`}
                        x={16 + c * 8}
                        y={16 + r * 8}
                        width={8}
                        height={8}
                        fill="#0a1c52"
                      />
                    ) : null,
                  ),
                )}
                {/* branded cross watermark in centre */}
                <rect x="86" y="86" width="28" height="28" fill="#fff" rx="4" />
                <rect
                  x="90"
                  y="94"
                  width="20"
                  height="5"
                  fill="#c9a23f"
                  rx="1"
                />
                <rect
                  x="97"
                  y="88"
                  width="6"
                  height="17"
                  fill="#c9a23f"
                  rx="1"
                />
              </svg>
              <p className="qr-hint">Scan with your banking app</p>
            </div>

            <div className="secure">
              <Icon name="lock" />
              Tithes · Offerings · Missions · Building Fund
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
