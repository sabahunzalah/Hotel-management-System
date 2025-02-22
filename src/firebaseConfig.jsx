import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBfj5rTDKv8xveKsuDYLSGpTKbCUk0AeOc",
  authDomain: "hackathon-fa055.firebaseapp.com",
  projectId: "hackathon-fa055",
  storageBucket: "hackathon-fa055.firebasestorage.app",
  messagingSenderId: "862309672220",
  appId: "1:862309672220:web:0be820dee36f1e0d0646d9"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export {
    auth
    ,db
}
