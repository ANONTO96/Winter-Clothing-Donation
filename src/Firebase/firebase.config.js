// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrNspnMepuy9MKrWYwypiAkFRqQu8eO8M",
  authDomain: "winter-clothing-donation-fd7c8.firebaseapp.com",
  projectId: "winter-clothing-donation-fd7c8",
  storageBucket: "winter-clothing-donation-fd7c8.firebasestorage.app",
  messagingSenderId: "635751409262",
  appId: "1:635751409262:web:575a4c7ce03eecd622a87f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;