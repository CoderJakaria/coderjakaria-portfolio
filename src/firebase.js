import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCBjYYCPcVNDO39jbwSzaAiyEIj_C-M9Xc",
  authDomain: "coderjakaria.firebaseapp.com",
  projectId: "coderjakaria",
  storageBucket: "coderjakaria.appspot.com",
  messagingSenderId: "937555725847",
  appId: "1:937555725847:web:60f7f35bbc22b70ad8d652",
  measurementId: "G-0NT62VVZTZ",
});

export const db = firebaseApp.firestore();
