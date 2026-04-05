/* ═══════════════════════════════════════════
   sNibaStudy — Firebase Configuration
   Uses compat SDK (loaded via CDN script tags)
   ═══════════════════════════════════════════ */

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBxnwNdQuNHxiVdXtjJRWk_5zZ72Y-1nQQ",
  authDomain: "snibastudy.firebaseapp.com",
  projectId: "snibastudy",
  storageBucket: "snibastudy.firebasestorage.app",
  messagingSenderId: "834620713070",
  appId: "1:834620713070:web:d0c7ac12c79e72d19d1e7f",
  measurementId: "G-XCFCZW8XTK"
};

firebase.initializeApp(FIREBASE_CONFIG);

const AUTH = firebase.auth();
const DB = firebase.firestore();

DB.enablePersistence({ synchronizeTabs: true }).catch(err => {
  if (err.code === 'failed-precondition') {
    console.warn('[Firebase] Multiple tabs, persistence in one tab only.');
  } else if (err.code === 'unimplemented') {
    console.warn('[Firebase] Browser doesn\'t support persistence.');
  }
});
