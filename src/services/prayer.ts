import type { PrayerRequest } from "@/types";

/**
 * Prayer request service abstraction.
 *
 * Today this resolves locally (front-end demo). To go live, swap the body for
 * a Firestore write — the call sites never change:
 *
 *   import { firebaseApp } from "@/lib/firebase";
 *   import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
 *   const db = getFirestore(firebaseApp);
 *   await addDoc(collection(db, "prayerRequests"), { ...data, createdAt: serverTimestamp() });
 */
export async function submitPrayerRequest(data: PrayerRequest): Promise<{ ok: boolean }> {
  await new Promise((r) => setTimeout(r, 600));
  if (typeof window !== "undefined") {
    // eslint-disable-next-line no-console
    console.info("[prayer] received (demo):", data);
  }
  return { ok: true };
}
