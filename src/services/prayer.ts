import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  onSnapshot,
  updateDoc,
  serverTimestamp,
  type Timestamp,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import type { PrayerRequest } from "@/types";

export type FirestorePrayerRequest = {
  id: string;
  name?: string;
  contact?: string;
  request: string;
  isPrivate: boolean;
  read: boolean;
  createdAt?: Timestamp;
};

export async function submitPrayerRequest(
  data: PrayerRequest
): Promise<{ ok: boolean }> {
  try {
    await addDoc(collection(db, "prayerRequests"), {
      ...data,
      read: false,
      createdAt: serverTimestamp(),
    });
    return { ok: true };
  } catch {
    return { ok: false };
  }
}

export async function markPrayerRead(id: string, read: boolean) {
  return updateDoc(doc(db, "prayerRequests", id), { read });
}

export async function deletePrayerRequest(id: string) {
  return deleteDoc(doc(db, "prayerRequests", id));
}

export function usePrayerRequests() {
  const [requests, setRequests] = useState<FirestorePrayerRequest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(
      collection(db, "prayerRequests"),
      orderBy("createdAt", "desc")
    );
    return onSnapshot(q, (snap) => {
      setRequests(
        snap.docs.map((d) => ({
          id: d.id,
          ...(d.data() as Omit<FirestorePrayerRequest, "id">),
        }))
      );
      setLoading(false);
    });
  }, []);

  return { requests, loading };
}
