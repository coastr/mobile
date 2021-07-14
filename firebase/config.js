import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";
import { FIREBASE_API_KEY, FIREBASE_PROJECT_ID } from "@env";

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "your-auth-domain-b1234.firebaseapp.com",
  databaseURL: "https://your-database-name.firebaseio.com",
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: "your-project-id-1234.appspot.com",
  messagingSenderId: "12345-insert-yourse",
  appId: "insert yours: 1:1234:web:ee873bd1234c0deb7eba61ce",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
