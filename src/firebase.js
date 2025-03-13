import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore";  // Import Firestore correctly
import { getStorage } from "firebase/storage";  // Import Storage correctly

const firebaseConfig = {
  apiKey: "AIzaSyBt2TLzxlmTSk-zYJ4BTVuLejVFhEcYhxc",
  authDomain: "drive-clone-waleedhbb.firebaseapp.com",
  projectId: "drive-clone-waleedhbb",
  storageBucket: "drive-clone-waleedhbb.firebasestorage.app",
  messagingSenderId: "671050175914",
  appId: "1:671050175914:web:f08e45725e64d34f7687d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);   // Get Firebase Auth
const provider = new GoogleAuthProvider(); // Google Auth provider for login
const db = getFirestore(app);  // Get Firestore
const storage = getStorage(app); // Get Firebase Storage

export { auth, provider, db, storage };
