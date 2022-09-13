import { FirebaseError, initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMeTAk55JevwDgZU5HhZF88LcLeiNluE0",
  authDomain: "todo-84455.firebaseapp.com",
  projectId: "todo-84455",
  storageBucket: "todo-84455.appspot.com",
  messagingSenderId: "327952307825",
  appId: "1:327952307825:web:f21daa153f521972de6dd0",
};

// Initialize Firebase
initializeApp(firebaseConfig);

// init services
const db = getFirestore();

// collection ref
const colRef = collection(db, "pins");

// get collection data
getDocs(colRef)
  .then((snapshopt) => {
    let todo = [];
    snapshopt.docs.forEach((doc) => {
      todo.push({ ...doc.data(), id: doc.id });
    });
    console.log(todo);
  })
  .catch((err) => console.log(err));
