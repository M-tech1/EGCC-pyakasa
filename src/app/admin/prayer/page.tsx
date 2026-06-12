"use client";

import Link from "next/link";
import {
  usePrayerRequests,
  markPrayerRead,
  deletePrayerRequest,
} from "@/services/prayer";
import type { FirestorePrayerRequest } from "@/services/prayer";

function fmtTime(ts: { seconds: number } | undefined) {
  if (!ts) return "";
  return new Date(ts.seconds * 1000).toLocaleDateString("en-NG", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function initial(name?: string) {
  return (name?.trim()[0] ?? "?").toUpperCase();
}

function PrayerCard({ r }: { r: FirestorePrayerRequest }) {
  const ts = r.createdAt as unknown as { seconds: number } | undefined;

  return (
    <div className={`prayer-card${r.read ? "" : " prayer-card--unread"}`}>
      <div className="prayer-card-header">
        <div className={`prayer-avatar${r.read ? "" : " prayer-avatar--new"}`}>
          {initial(r.name)}
        </div>

        <div className="prayer-card-info">
          <div className="prayer-card-name-row">
            <span className="prayer-name">{r.name || "Anonymous"}</span>
            {!r.read && (
              <span className="prayer-pill prayer-pill--new">New</span>
            )}
            {r.isPrivate && (
              <span className="prayer-pill prayer-pill--private">Private</span>
            )}
          </div>
          {r.contact && <p className="prayer-contact">{r.contact}</p>}
        </div>

        {ts && <span className="prayer-time">{fmtTime(ts)}</span>}
      </div>

      <p className="prayer-text">{r.request}</p>

      <div className="prayer-card-footer">
        <button
          className="btn-outline btn-sm"
          onClick={() => markPrayerRead(r.id, !r.read)}
        >
          {r.read ? "Mark as Unread" : "Mark as Read"}
        </button>
        <button
          className="px-3 py-1.5 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          onClick={() => deletePrayerRequest(r.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default function AdminPrayerPage() {
  const { requests, loading } = usePrayerRequests();
  const unread = requests.filter((r) => !r.read).length;

  return (
    <div className="admin-page">
      <header className="admin-header">
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <h1>Prayer Requests</h1>
          {unread > 0 && (
            <span className="admin-unread-badge">{unread} new</span>
          )}
        </div>
        <div className="admin-header-right">
          <Link href="/admin" className="btn-ghost">
            ← Dashboard
          </Link>
        </div>
      </header>

      <main className="admin-main" style={{ maxWidth: 820 }}>
        {loading ? (
          <p className="admin-empty">Loading…</p>
        ) : requests.length === 0 ? (
          <div className="prayer-empty-state">
            <p>No prayer requests have been submitted yet.</p>
          </div>
        ) : (
          <>
            <p className="admin-prayer-count">
              {requests.length} total · {unread} unread
            </p>
            <div className="prayer-list">
              {requests.map((r) => (
                <PrayerCard key={r.id} r={r} />
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
