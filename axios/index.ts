import axios from "axios";
import { user } from "../firebase";

axios.interceptors.request.use(async (config) => {
  const idToken = await user.getCurrentUserIdTokenAsync();
  console.log("idToken", idToken);
  if (idToken) config.headers.Authorization = `Bearer ${idToken}`;
  return config;
});

export default axios;
