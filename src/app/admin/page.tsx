"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth";
import { signOut } from "@/lib/auth";

const MODULES = [
  {
    href: "/admin/events",
    title: "Events",
    desc: "Add and manage upcoming church events.",
    live: true,
  },
  {
    href: "/admin/announcements",
    title: "Announcements",
    desc: "Post and manage church announcements.",
    live: true,
  },
  {
    href: "/admin/prayer",
    title: "Prayer Requests",
    desc: "View and manage submitted prayer requests.",
    live: true,
  },
  {
    href: "#",
    title: "Newsletter",
    desc: "View email subscribers.",
    live: false,
  },
  {
    href: "/admin/sermons",
    title: "Sermons",
    desc: "Add and manage sermon links from YouTube or Facebook.",
    live: true,
  },
];

export default function AdminPage() {
  const { user } = useAuth();
  const router = useRouter();

  async function handleSignOut() {
    await signOut();
    router.replace("/admin/login");
  }

  return (
    <div className="admin-page">
      <header className="admin-header">
        <h1>Admin Dashboard</h1>
        <div className="admin-header-right">
          <span>{user?.email}</span>
          <button className="btn-ghost" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      </header>

      <main className="admin-main">
        <div className="admin-grid">
          {MODULES.map((m) =>
            m.live ? (
              <Link key={m.title} href={m.href} className="admin-card admin-card-link">
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
              </Link>
            ) : (
              <div key={m.title} className="admin-card admin-card-disabled">
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
                <span className="admin-coming-soon">Coming soon</span>
              </div>
            )
          )}
        </div>
      </main>
    </div>
  );
}
