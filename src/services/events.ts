import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
  type Timestamp,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useEffect, useState } from "react";
import { db, storage } from "@/lib/firebase";

export type FirestoreEvent = {
  id: string;
  title: string;
  dateISO: string; // YYYY-MM-DD — used for sorting and display
  time: string;
  location: string;
  description?: string;
  featured?: boolean;
  flierUrl?: string;
  createdAt?: Timestamp;
};

export async function uploadFlier(file: File): Promise<string> {
  const storageRef = ref(storage, `event-fliers/${Date.now()}-${file.name}`);
  await uploadBytes(storageRef, file);
  return getDownloadURL(storageRef);
}

export type Announcement = {
  id: string;
  title: string;
  body: string;
  pinned?: boolean;
  createdAt?: Timestamp;
};

// ── Events ──────────────────────────────────────────────────────────────────

export async function addEvent(
  data: Omit<FirestoreEvent, "id" | "createdAt">
) {
  return addDoc(collection(db, "events"), {
    ...data,
    createdAt: serverTimestamp(),
  });
}

export async function deleteEvent(id: string) {
  return deleteDoc(doc(db, "events", id));
}

export function useEvents() {
  const [events, setEvents] = useState<FirestoreEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, "events"), orderBy("dateISO", "asc"));
    return onSnapshot(q, (snap) => {
      setEvents(
        snap.docs.map((d) => ({
          id: d.id,
          ...(d.data() as Omit<FirestoreEvent, "id">),
        }))
      );
      setLoading(false);
    });
  }, []);

  return { events, loading };
}

// ── Announcements ────────────────────────────────────────────────────────────

export async function addAnnouncement(
  data: Omit<Announcement, "id" | "createdAt">
) {
  return addDoc(collection(db, "announcements"), {
    ...data,
    createdAt: serverTimestamp(),
  });
}

export async function deleteAnnouncement(id: string) {
  return deleteDoc(doc(db, "announcements", id));
}

export function useAnnouncements() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(
      collection(db, "announcements"),
      orderBy("createdAt", "desc")
    );
    return onSnapshot(q, (snap) => {
      setAnnouncements(
        snap.docs.map((d) => ({
          id: d.id,
          ...(d.data() as Omit<Announcement, "id">),
        }))
      );
      setLoading(false);
    });
  }, []);

  return { announcements, loading };
}
