"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  useEvents,
  addEvent,
  deleteEvent,
  uploadFlier,
} from "@/services/events";

const MONTHS = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

function fmtDate(dateISO: string) {
  const [, m, d] = dateISO.split("-");
  return `${MONTHS[parseInt(m, 10) - 1]} ${parseInt(d, 10)}`;
}

const EMPTY = {
  title: "",
  dateISO: "",
  time: "",
  location: "",
  description: "",
  featured: false,
};

export default function AdminEventsPage() {
  const { events } = useEvents();
  const [form, setForm] = useState(EMPTY);
  const [flierFile, setFlierFile] = useState<File | null>(null);
  const [flierPreview, setFlierPreview] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  function set<K extends keyof typeof EMPTY>(k: K, v: (typeof EMPTY)[K]) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] ?? null;
    setFlierFile(file);
    setFlierPreview(file ? URL.createObjectURL(file) : null);
  }

  function clearFlier() {
    setFlierFile(null);
    setFlierPreview(null);
    if (fileRef.current) fileRef.current.value = "";
  }

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    let flierUrl: string | undefined;
    if (flierFile) {
      flierUrl = await uploadFlier(flierFile);
    }
    await addEvent({ ...form, ...(flierUrl ? { flierUrl } : {}) });
    setForm(EMPTY);
    clearFlier();
    setSaving(false);
  }

  return (
    <div className="admin-page">
      <header className="admin-header">
        <h1>Manage Events</h1>
        <div className="admin-header-right">
          <Link href="/admin" className="btn-ghost">
            ← Dashboard
          </Link>
        </div>
      </header>

      <main className="admin-main" style={{ maxWidth: 860 }}>
        {/* Add form */}
        <div className="admin-card" style={{ marginBottom: "1.5rem" }}>
          <h3 style={{ marginBottom: "1.25rem" }}>Add Event</h3>
          <form onSubmit={handleAdd}>
            <div className="admin-form-grid">
              <label>
                Title *
                <input
                  value={form.title}
                  onChange={(e) => set("title", e.target.value)}
                  required
                  placeholder="e.g. Annual Convention 2026"
                />
              </label>
              <label>
                Date *
                <input
                  type="date"
                  value={form.dateISO}
                  onChange={(e) => set("dateISO", e.target.value)}
                  required
                />
              </label>
              <label>
                Time
                <input
                  value={form.time}
                  onChange={(e) => set("time", e.target.value)}
                  placeholder="e.g. 9:00 AM"
                />
              </label>
              <label>
                Location
                <input
                  value={form.location}
                  onChange={(e) => set("location", e.target.value)}
                  placeholder="e.g. Main Auditorium"
                />
              </label>
            </div>

            <label style={{ marginBottom: "1rem" }}>
              Description
              <textarea
                value={form.description}
                onChange={(e) => set("description", e.target.value)}
                placeholder="Optional short description"
              />
            </label>

            {/* Flier upload */}
            <div className="admin-flier-upload">
              <label>
                Event Flier{" "}
                <span
                  style={{ fontWeight: 400, color: "var(--charcoal-soft)" }}
                >
                  (optional)
                </span>
                <input
                  ref={fileRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  style={{ marginTop: "0.35rem" }}
                />
              </label>
              {flierPreview && (
                <div className="admin-flier-preview">
                  <Image
                    src={flierPreview}
                    alt="Flier preview"
                    width={160}
                    height={200}
                    style={{ objectFit: "cover", borderRadius: 6 }}
                  />
                  <button
                    type="button"
                    className="btn-danger btn-sm"
                    onClick={clearFlier}
                  >
                    Remove
                  </button>
                </div>
              )}
            </div>

            <label
              className="admin-checkbox-label"
              style={{ marginTop: "0.75rem" }}
            >
              <input
                type="checkbox"
                checked={form.featured}
                onChange={(e) => set("featured", e.target.checked)}
              />
              Mark as featured event
            </label>

            <button
              type="submit"
              className="btn btn-gold btn-sm"
              style={{ marginTop: "1rem" }}
              disabled={saving}
            >
              {saving ? "Uploading & saving…" : "Add Event"}
            </button>
          </form>
        </div>

        {/* List */}
        <h3 className="admin-list-heading">All Events ({events.length})</h3>
        {events.length === 0 ? (
          <p className="admin-empty">No events yet — add one above.</p>
        ) : (
          <div className="admin-list">
            {events.map((e) => (
              <div key={e.id} className="admin-list-item">
                {e.flierUrl && (
                  <a
                    href={e.flierUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={e.flierUrl}
                      alt="flier"
                      width={48}
                      height={60}
                      style={{
                        objectFit: "cover",
                        borderRadius: 4,
                        flexShrink: 0,
                      }}
                    />
                  </a>
                )}
                <div className="admin-list-item-body">
                  <h4>
                    {e.featured && (
                      <span className="admin-badge">Featured</span>
                    )}
                    {e.title}
                  </h4>
                  <small>
                    {fmtDate(e.dateISO)}
                    {e.time ? ` · ${e.time}` : ""}
                    {e.location ? ` · ${e.location}` : ""}
                  </small>
                  {e.description && (
                    <p className="admin-item-desc">{e.description}</p>
                  )}
                </div>
                <div className="admin-list-actions">
                  <button
                    type="button"
                    className="px-3 py-1.5 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    onClick={() => deleteEvent(e.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
