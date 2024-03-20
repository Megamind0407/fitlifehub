// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjfdnUZhX8TvmsFvf9kalnsn9-oY-AA0k",
  authDomain: "fitlifehub-32cf6.firebaseapp.com",
  projectId: "fitlifehub-32cf6",
  storageBucket: "fitlifehub-32cf6.appspot.com",
  messagingSenderId: "329733784934",
  appId: "1:329733784934:web:0c9e50ef37fe44c30634a7",
  measurementId: "G-HH7WYE4EFN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export default { auth };
