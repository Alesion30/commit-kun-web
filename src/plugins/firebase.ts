import { initializeApp } from "firebase/app";
import {
  getAuth,
  GithubAuthProvider,
  signInWithRedirect,
  signOut as fbSignOut,
  onAuthStateChanged as fbOnAuthStateChanged,
  User as FirebaseUser,
  NextOrObserver,
  CompleteFn,
} from "firebase/auth";

/** Firebase Setting Info */
export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

/** Firebase App */
const firebaseApp = initializeApp(firebaseConfig);

/** Firebase Authentication */
const firebaseAuth = getAuth(firebaseApp);

/** Github プロバイダ */
const githubProvider = new GithubAuthProvider();

/** Githubログイン */
export const signInGithub = () =>
  signInWithRedirect(firebaseAuth, githubProvider);

/** ログアウト */
export const signOut = () => fbSignOut(firebaseAuth);

/** 認証状態変更時のイベント */
export const onAuthStateChanged = (
  nextOrObserver: NextOrObserver<User>,
  completed?: CompleteFn
) => fbOnAuthStateChanged(firebaseAuth, nextOrObserver, completed);

/** ユーザー型 */
export type User = FirebaseUser;
