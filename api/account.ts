import axios from "../axios";
import { user } from "../firebase";
import { COASTR_URL } from "@env";

axios.defaults.baseURL = `${COASTR_URL}`;

const getAccount = () => {
  return axios.get(`/account`, {}).catch((err) => {
    console.log("err", err);
  });
};

const createAccount = (data) => {
  console.log("data", data);
  return axios.post(`/account/new/`, data).catch((err) => {
    console.log("err", err);
  });
};

export default {
  createAccount,
  getAccount,
};
