// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5kMvAoxyDRkv3kCuaKgVcWnPNQSFSEAc",
  authDomain: "fir-test-f5355.firebaseapp.com",
  projectId: "fir-test-f5355",
  storageBucket: "fir-test-f5355.firebasestorage.app",
  messagingSenderId: "301609122199",
  appId: "1:301609122199:web:bfc31fd30dd031aff22cd2",
  measurementId: "G-S2RXN8Z8WH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);