
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAVGTv7LeY_nOod0tAGpTFFAW2HeUqnQ4I",
  authDomain: "shovongraphy-6a565.firebaseapp.com",
  projectId: "shovongraphy-6a565",
  storageBucket: "shovongraphy-6a565.firebasestorage.app",
  messagingSenderId: "598435709785",
  appId: "1:598435709785:web:8fef7ccd5a7a57f2d98248",
  measurementId: "G-MFEK8VR9BC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app)

export default auth;