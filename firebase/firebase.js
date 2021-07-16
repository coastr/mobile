import firebase from "firebase/app";
import "@firebase/auth";
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

firebase.initializeApp(firebaseConfig);

// firebase.auth().onAuthStateChanged(async (user) => {
//   console.log("onAuthStateChanged", user);
//   const idToken = await user?.getIdToken();
//   console.log("idToken", idToken);
//   axios.defaults.headers.common = {
//     Authorization: `Bearer ${idToken}`,
//   };
// });

// firebase.analytics();

export default firebase;
