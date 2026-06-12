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
import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";

export type SermonPlatform = "youtube" | "facebook" | "other";

export type FirestoreSermon = {
  id: string;
  title: string;
  series?: string;
  speaker: string;
  date: string;
  url: string;
  platform: SermonPlatform;
  duration?: string;
  createdAt?: Timestamp;
};

export function detectPlatform(url: string): SermonPlatform {
  if (/youtube\.com|youtu\.be/.test(url)) return "youtube";
  if (/facebook\.com|fb\.watch/.test(url)) return "facebook";
  return "other";
}

export function getYouTubeId(url: string): string | null {
  const m = url.match(
    /(?:youtube\.com\/(?:watch\?v=|live\/|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  return m?.[1] ?? null;
}

export async function addSermon(
  data: Omit<FirestoreSermon, "id" | "createdAt">
) {
  return addDoc(collection(db, "sermons"), {
    ...data,
    createdAt: serverTimestamp(),
  });
}

export async function deleteSermon(id: string) {
  return deleteDoc(doc(db, "sermons", id));
}

export function useSermons() {
  const [sermons, setSermons] = useState<FirestoreSermon[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, "sermons"), orderBy("createdAt", "desc"));
    return onSnapshot(q, (snap) => {
      setSermons(
        snap.docs.map((d) => ({
          id: d.id,
          ...(d.data() as Omit<FirestoreSermon, "id">),
        }))
      );
      setLoading(false);
    });
  }, []);

  return { sermons, loading };
}
