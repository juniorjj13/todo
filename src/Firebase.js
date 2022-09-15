import { collection, getDocs, doc, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

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
const app = initializeApp(firebaseConfig);
const db = getFirestore();

//Referencing the whole todo collection of todo, with the Method collection(db, and path of collection). In the case of a document it needs the document path.
const todoCollectionRef = collection(db, "todo");

getDocs(todoCollectionRef)
  .then((snapshopt) => {
    let todo = [];
    snapshopt.docs.forEach((doc) => {
      todo.push({ ...doc.data(), id: doc.id });
    });
    console.log("uno dos", todo);
  })
  .catch((err) => console.log(err));

const todoDocumentRef = doc(db, "todo/todo");

export default { db, todoCollectionRef, todoDocumentRef };
