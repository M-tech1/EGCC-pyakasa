"use client";

import { useState } from "react";
import Reveal from "@/components/shared/Reveal";
import Icon from "@/components/shared/Icon";
import { submitPrayerRequest } from "@/services/prayer";

export default function Prayer() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [request, setRequest] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);
  const [error, setError] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = async () => {
    if (!request.trim()) {
      setError(true);
      return;
    }
    setError(false);
    setSubmitting(true);
    const res = await submitPrayerRequest({ name, contact, request, isPrivate });
    setSubmitting(false);
    if (res.ok) setDone(true);
  };

  return (
    <section className="prayer pad" id="prayer">
      <div className="wrap prayer-grid">
        <div className="prayer-copy">
          <Reveal>
            <span className="eyebrow">We&apos;d Love to Pray</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2>Submit a Prayer Request</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p>
              You are not alone. Whatever you are facing, our prayer team would count it a privilege to stand with you in
              faith. Share your request — in confidence, if you wish.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="verse">&ldquo;Cast all your anxiety on Him because He cares for you.&rdquo; — 1 Peter 5:7</p>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          {done ? (
            <div className="form">
              <div className="form-done">
                <div className="ok">
                  <Icon name="check" />
                </div>
                <h3>Your request has been received.</h3>
                <p>Our prayer team will be standing with you in faith. May the peace of God guard your heart.</p>
              </div>
            </div>
          ) : (
            <div className="form">
              <div className="field">
                <label htmlFor="pName">Your Name</label>
                <input
                  id="pName"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Optional — leave blank to stay anonymous"
                />
              </div>
              <div className="field">
                <label htmlFor="pContact">Email or Phone</label>
                <input
                  id="pContact"
                  type="text"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="So we can follow up (optional)"
                />
              </div>
              <div className="field">
                <label htmlFor="pReq">Your Prayer Request</label>
                <textarea
                  id="pReq"
                  value={request}
                  onChange={(e) => {
                    setRequest(e.target.value);
                    if (e.target.value.trim()) setError(false);
                  }}
                  placeholder="Share what's on your heart..."
                  style={error ? { borderColor: "#c0392b" } : undefined}
                />
              </div>
              <label className="check">
                <input type="checkbox" checked={isPrivate} onChange={(e) => setIsPrivate(e.target.checked)} />
                Keep this request private to the pastoral team only
              </label>
              <button className="btn btn-royal" onClick={handleSubmit} disabled={submitting}>
                {submitting ? "Sending..." : "Send Prayer Request"}
                <Icon name="send" />
              </button>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
