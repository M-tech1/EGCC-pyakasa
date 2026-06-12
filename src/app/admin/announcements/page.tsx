"use client";

import { useState } from "react";
import Link from "next/link";
import {
  useAnnouncements,
  addAnnouncement,
  deleteAnnouncement,
} from "@/services/events";

const EMPTY = { title: "", body: "", pinned: false };

export default function AdminAnnouncementsPage() {
  const { announcements } = useAnnouncements();
  const [form, setForm] = useState(EMPTY);
  const [saving, setSaving] = useState(false);

  function set<K extends keyof typeof EMPTY>(k: K, v: (typeof EMPTY)[K]) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    await addAnnouncement(form);
    setForm(EMPTY);
    setSaving(false);
  }

  return (
    <div className="admin-page">
      <header className="admin-header">
        <h1>Manage Announcements</h1>
        <div className="admin-header-right">
          <Link href="/admin" className="btn-ghost">
            ← Dashboard
          </Link>
        </div>
      </header>

      <main className="admin-main" style={{ maxWidth: 860 }}>
        {/* Add form */}
        <div className="admin-card" style={{ marginBottom: "1.5rem" }}>
          <h3 style={{ marginBottom: "1.25rem" }}>Add Announcement</h3>
          <form onSubmit={handleAdd}>
            <label style={{ marginBottom: "1rem" }}>
              Title *
              <input
                value={form.title}
                onChange={(e) => set("title", e.target.value)}
                required
                placeholder="e.g. Church Picnic — Save the Date"
              />
            </label>
            <label style={{ marginBottom: "1rem" }}>
              Body *
              <textarea
                value={form.body}
                onChange={(e) => set("body", e.target.value)}
                required
                placeholder="Full announcement text…"
                style={{ minHeight: 100 }}
              />
            </label>
            <label className="admin-checkbox-label">
              <input
                type="checkbox"
                checked={form.pinned}
                onChange={(e) => set("pinned", e.target.checked)}
              />
              Pin to top of announcements
            </label>
            <button
              type="submit"
              className="btn btn-gold btn-sm"
              style={{ marginTop: "1rem" }}
              disabled={saving}
            >
              {saving ? "Saving…" : "Post Announcement"}
            </button>
          </form>
        </div>

        {/* List */}
        <h3 className="admin-list-heading">
          All Announcements ({announcements.length})
        </h3>
        {announcements.length === 0 ? (
          <p className="admin-empty">No announcements yet — add one above.</p>
        ) : (
          <div className="admin-list">
            {announcements.map((a) => (
              <div key={a.id} className="admin-list-item">
                <div className="admin-list-item-body">
                  <h4>
                    {a.pinned && <span className="admin-badge">Pinned</span>}
                    {a.title}
                  </h4>
                  <small>{a.body}</small>
                </div>
                <div className="admin-list-actions">
                  <button
                    type="button"
                    className="px-3 py-1.5 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    onClick={() => deleteAnnouncement(a.id)}
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
