import firebase from "./firebase";

const getCurrentUser = () => {
  return firebase.auth().currentUser;
};

const getCurrentUserIdTokenAsync = () => {
  return getCurrentUser()?.getIdToken();
};

export default {
  getCurrentUser,
  getCurrentUserIdTokenAsync,
};
