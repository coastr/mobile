import axios from "axios";
import { COASTR_URL } from "@env";
//import store from "../redux/store";

axios.defaults.baseURL = `${COASTR_URL}`;

// axios.interceptors.request.use(async (config) => {
//   const { token } = store.getState().account;
//   if (token) config.headers.Authorization = Bearer ${token};
//   return config;
// });

export default axios;