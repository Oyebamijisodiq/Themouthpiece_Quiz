import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const {
  NEXT_APP_API_KEY,
  NEXT_APP_AUTH_DOMAIN,
  NEXT_APP_PROJECT_ID,
  NEXT_APP_STORAGE_BUCKET,
  NEXT_APP_MEASUREMENT_ID,
  NEXT_APP_MESSAGING_SENDER_ID,
  NEXT_APP_APP_ID,
} = process.env;

const firebaseConfig = {
  apiKey: NEXT_APP_API_KEY || "abc",
  authDomain: NEXT_APP_AUTH_DOMAIN,
  projectId: NEXT_APP_PROJECT_ID,
  storageBucket: NEXT_APP_STORAGE_BUCKET,
  messagingSenderId: NEXT_APP_MESSAGING_SENDER_ID,
  appId: NEXT_APP_APP_ID,
  measurementId: NEXT_APP_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
