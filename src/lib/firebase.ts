/**
 * Firebase initialization (lazy, optional).
 *
 * The app runs fully without Firebase. When you're ready to add a backend,
 * fill in .env (see .env.example) and `npm i firebase`, then uncomment below.
 * All feature code talks to the service abstractions in `src/services/*`,
 * so wiring Firebase here requires no changes elsewhere.
 */

// import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";
//
// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// };
//
// export const firebaseApp: FirebaseApp =
//   getApps().length ? getApp() : initializeApp(firebaseConfig);

export const isFirebaseConfigured = Boolean(
  process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
);
