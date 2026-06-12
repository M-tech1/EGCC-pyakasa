"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/lib/auth";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const isLoginPage = pathname === "/admin/login";

  useEffect(() => {
    if (!loading && !user && !isLoginPage) {
      router.replace("/admin/login");
    }
  }, [user, loading, router, isLoginPage]);

  if (!isLoginPage && loading) {
    return (
      <div className="admin-loading">
        <span>Loading…</span>
      </div>
    );
  }

  if (!isLoginPage && !loading && !user) return null;

  return <>{children}</>;
}
