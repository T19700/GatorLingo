import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_APP_MEASUREMENT_ID,
};
// const firebaseConfig = {
//   apiKey: "AIzaSyDO6HyFEcLwpYYcI-1d-uCTvRMst8p-J1I",
//   authDomain: "gatorlingo.firebaseapp.com",
//   projectId: "gatorlingo",
//   storageBucket: "gatorlingo.appspot.com",
//   messagingSenderId: "232175060402",
//   appId: "1:232175060402:web:ac2d2b9a036c2bc5cbd0ab",
//   measurementId: "G-5SHBSN7TXM",
// };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
