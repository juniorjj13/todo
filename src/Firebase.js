import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { FirebaseError, initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAMeTAk55JevwDgZU5HhZF88LcLeiNluE0",
  authDomain: "todo-84455.firebaseapp.com",
  projectId: "todo-84455",
  storageBucket: "todo-84455.appspot.com",
  messagingSenderId: "327952307825",
  appId: "1:327952307825:web:f21daa153f521972de6dd0",
};

initializeApp(firebaseConfig);

export default firebase;
