import firebase from "firebase"
import "firebase/auth"
import "firebase/firebase"
import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyA1ZbrxJufXKmfa9zageEF4WVjfgqSij1g",
  authDomain: "olxclone-7409f.firebaseapp.com",
  projectId: "olxclone-7409f",
  storageBucket: "olxclone-7409f.appspot.com",
  messagingSenderId: "699058857155",
  appId: "1:699058857155:web:b379f7438ddcc1dd60ee76",
  measurementId: "G-X8GSZT1Z13"
};



export const Firebase = firebase.initializeApp(firebaseConfig);