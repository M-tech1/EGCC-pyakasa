"use client";

import { useState } from "react";
import Link from "next/link";
import {
  useSermons,
  addSermon,
  deleteSermon,
  detectPlatform,
  getYouTubeId,
} from "@/services/sermons";
import type { SermonPlatform } from "@/services/sermons";

const EMPTY = {
  url: "",
  title: "",
  series: "",
  speaker: "",
  date: "",
  duration: "",
};

const PLATFORM_LABEL: Record<SermonPlatform, string> = {
  youtube: "YouTube",
  facebook: "Facebook",
  other: "Other",
};

export default function AdminSermonsPage() {
  const { sermons } = useSermons();
  const [form, setForm] = useState(EMPTY);
  const [platform, setPlatform] = useState<SermonPlatform>("other");
  const [saving, setSaving] = useState(false);

  const ytId = platform === "youtube" ? getYouTubeId(form.url) : null;

  function set(k: keyof typeof EMPTY, v: string) {
    setForm((f) => ({ ...f, [k]: v }));
    if (k === "url") {
      setPlatform(detectPlatform(v));
    }
  }

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    await addSermon({
      url: form.url,
      title: form.title,
      series: form.series || undefined,
      speaker: form.speaker,
      date: form.date,
      duration: form.duration || undefined,
      platform,
    });
    setForm(EMPTY);
    setPlatform("other");
    setSaving(false);
  }

  return (
    <div className="admin-page">
      <header className="admin-header">
        <h1>Manage Sermons</h1>
        <div className="admin-header-right">
          <Link href="/admin" className="btn-ghost">
            ← Dashboard
          </Link>
        </div>
      </header>

      <main className="admin-main" style={{ maxWidth: 860 }}>
        <div className="admin-card" style={{ marginBottom: "1.5rem" }}>
          <h3 style={{ marginBottom: "1.25rem" }}>Add Sermon</h3>

          <form onSubmit={handleAdd}>
            {/* URL first — drives everything else */}
            <label style={{ marginBottom: "1rem" }}>
              Video URL * — Facebook or YouTube
              <input
                value={form.url}
                onChange={(e) => set("url", e.target.value)}
                required
                placeholder="https://www.youtube.com/watch?v=… or https://web.facebook.com/…"
              />
            </label>

            {/* Platform indicator + YouTube preview */}
            {form.url && (
              <div className="ser-admin-preview">
                <span
                  className={`ser-platform-tag ser-platform-tag--${platform}`}
                >
                  {PLATFORM_LABEL[platform]}
                </span>
                {ytId && (
                  <div className="ser-yt-preview">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://img.youtube.com/vi/${ytId}/mqdefault.jpg`}
                      alt="YouTube thumbnail preview"
                    />
                  </div>
                )}
              </div>
            )}

            <div className="admin-form-grid">
              <label>
                Title *
                <input
                  value={form.title}
                  onChange={(e) => set("title", e.target.value)}
                  required
                  placeholder="e.g. The Sufficiency of Grace"
                />
              </label>
              <label>
                Speaker *
                <input
                  value={form.speaker}
                  onChange={(e) => set("speaker", e.target.value)}
                  required
                  placeholder="e.g. Rev. [Pastor's Name]"
                />
              </label>
              <label>
                Date *
                <input
                  value={form.date}
                  onChange={(e) => set("date", e.target.value)}
                  required
                  placeholder="e.g. June 1, 2026"
                />
              </label>
              <label>
                Duration
                <input
                  value={form.duration}
                  onChange={(e) => set("duration", e.target.value)}
                  placeholder="e.g. 42:18"
                />
              </label>
            </div>

            <label style={{ marginBottom: "1rem" }}>
              Series / Tag
              <input
                value={form.series}
                onChange={(e) => set("series", e.target.value)}
                placeholder="e.g. Series · Kingdom Living"
              />
            </label>

            <button
              type="submit"
              className="btn btn-gold btn-sm"
              disabled={saving}
            >
              {saving ? "Saving…" : "Add Sermon"}
            </button>
          </form>
        </div>

        {/* List */}
        <h3 className="admin-list-heading">All Sermons ({sermons.length})</h3>
        {sermons.length === 0 ? (
          <p className="admin-empty">No sermons yet — add one above.</p>
        ) : (
          <div className="admin-list">
            {sermons.map((s) => {
              const ytThumb =
                s.platform === "youtube" ? getYouTubeId(s.url) : null;
              return (
                <div key={s.id} className="admin-list-item">
                  {ytThumb ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={`https://img.youtube.com/vi/${ytThumb}/default.jpg`}
                      alt=""
                      className="ser-admin-thumb"
                    />
                  ) : (
                    <div
                      className={`ser-admin-thumb ser-admin-thumb--${s.platform}`}
                    />
                  )}
                  <div className="admin-list-item-body">
                    <h4>
                      <span
                        className={`ser-platform-tag ser-platform-tag--${s.platform}`}
                        style={{ marginRight: "0.5rem" }}
                      >
                        {PLATFORM_LABEL[s.platform]}
                      </span>
                      {s.title}
                    </h4>
                    <small>
                      {s.speaker} · {s.date}
                      {s.duration ? ` · ${s.duration}` : ""}
                    </small>
                    {s.series && <p className="admin-item-desc">{s.series}</p>}
                  </div>
                  <div className="admin-list-actions">
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline btn-sm"
                    >
                      View
                    </a>
                    <button
                      className="mx-5 px-3 py-1.5 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                      onClick={() => deleteSermon(s.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
