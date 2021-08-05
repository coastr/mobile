import firebase from "firebase/app";
import "@firebase/auth";
import store from "../redux/store";
import api from "../api";
// import "firebase/analytics";

import {
  FIREBASE_API_KEY,
  FIREBASE_PROJECT_ID,
  FIREBASE_APP_ID,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_MEASUREMENT_ID,
} from "@env";

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: `${FIREBASE_PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${FIREBASE_PROJECT_ID}.firebaseio.com`,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: `${FIREBASE_PROJECT_ID}.appspot.com`,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
  measurementId: FIREBASE_MEASUREMENT_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

firebase.auth().onAuthStateChanged(async (user) => {
  console.log("=====FIREBASE USER", user);

  if (user) {
    console.log("Token exists, setting redux account token");
    const token = await user?.getIdToken();
    if (token) {
      console.log("=====FIREBASE TOKEN", token);
      store.dispatch({ type: "account/setToken", payload: token });
    }
    store.dispatch({ type: "account/setAnonymous", payload: user.isAnonymous });
  } else {
    console.log("Token does NOT exist, signing in anonymously");
    firebase.auth().signInAnonymously();
  }
});
export default firebase;
