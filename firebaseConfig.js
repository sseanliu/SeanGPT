import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCp46iXPUc6i1K-AgRYQlBQB9ZryWE_msg",
    authDomain: "graphite-post-379412.firebaseapp.com",
    databaseURL: "https://graphite-post-379412-default-rtdb.firebaseio.com",
    projectId: "graphite-post-379412",
    storageBucket: "graphite-post-379412.appspot.com",
    messagingSenderId: "440254768570",
    appId: "1:440254768570:web:0620322d14fe47c7c72983",
    measurementId: "G-5BQ31V0BZX"
  };

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { db };
