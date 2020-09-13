import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAffT6Q-7e_xRoECgzpkfi9agbfausT2cQ",
  authDomain: "clone-68ca0.firebaseapp.com",
  databaseURL: "https://clone-68ca0.firebaseio.com",
  projectId: "clone-68ca0",
  storageBucket: "clone-68ca0.appspot.com",
  messagingSenderId: "681092878553",
  appId: "1:681092878553:web:249087cc3ed6ee86302ec8",
  measurementId: "G-QZSL02BVD8",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
