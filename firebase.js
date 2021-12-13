// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {GoogleAuthProvider, getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCV6XQkjCoj3qDsEK47V_Z2LjClSXmntiY",
  authDomain: "uber-next-clone-586d4.firebaseapp.com",
  projectId: "uber-next-clone-586d4",
  storageBucket: "uber-next-clone-586d4.appspot.com",
  messagingSenderId: "99930021199",
  appId: "1:99930021199:web:f639b54efbae675011f93a",
  measurementId: "G-G59GKH5NY2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth()

export { app, provider, auth }
