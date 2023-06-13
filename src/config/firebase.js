// Import the functions you need from the SDKs you need
import { deleteApp,initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgj1gQsKR9nAdlWYTr3OVYOzOJ6cv8f1s",
  authDomain: "planner-2023-6288f.firebaseapp.com",
  projectId: "planner-2023-6288f",
  storageBucket: "planner-2023-6288f.appspot.com",
  messagingSenderId: "646963552044",
  appId: "1:646963552044:web:ab62f9e2c4f5735e6b1689"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;