import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBMbXYKbl8138DJxyiPX6YeS2YLJ7AM-g0",
  authDomain: "airgram-6c443.firebaseapp.com",
  projectId: "airgram-6c443",
  databaseURL: "https://airgram-6c443.firebaseio.com",
  storageBucket: "airgram-6c443.appspot.com",
  messagingSenderId: "720093157210",
  appId: "1:720093157210:web:c9204e3c01d9f03f6e0563",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };
