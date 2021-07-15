import axios from "axios";
import { firebase, user } from "../firebase";

// axios.interceptors.request.use(async (config) => {
//   const idToken = await user.getCurrentUser()?.accessToken;
//   console.log("idToken", idToken);
//   config.headers.Authorization = `Bearer ${idToken}`;
//   return config;
// });

firebase.auth().onAuthStateChanged(async (user) => {
  // console.log("onAuthStateChanged", user);
  const idToken = await user?.getIdToken();
  // const idToken = user.stsTokenManager?.accessToken;
  console.log("idToken", idToken);
  axios.defaults.headers.common = {
    Authorization: `Bearer ${idToken}`,
  };
});

export default axios;
