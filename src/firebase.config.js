// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6aeg63XeiqUXowfT83wrttOJdRnWKi4M",
  authDomain: "yt-b96b3.firebaseapp.com",
  projectId: "yt-b96b3",
  storageBucket: "yt-b96b3.firebasestorage.app",
  messagingSenderId: "501078845883",
  appId: "1:501078845883:web:a496745b69b4b6123b7c9e",
  measurementId: "G-ELTQZTB2SQ"
}; 

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export default firebaseConfig
// const analytics = getAnalytics(app);