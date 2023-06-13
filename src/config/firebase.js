// Import the functions you need from the SDKs you need
import { deleteApp,initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbfnHwXd-L0BH6wiH7IUe8NppOqRRPPdQ",
  authDomain: "aplicativoprojeto-43ca8.firebaseapp.com",
  projectId: "aplicativoprojeto-43ca8",
  storageBucket: "aplicativoprojeto-43ca8.appspot.com",
  messagingSenderId: "746014857875",
  appId: "1:746014857875:web:d1dd70f70c297714b7cb66"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;