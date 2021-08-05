import axios from "../axios";
import { user } from "../firebase";

const getAccount = () => {
  return axios.get(`/account`, {}).catch((err) => {
    console.log("err", err);
  });
};

const createAccount = ({ name, email }) => {
  console.log("data", data);
  return axios.post(`/account/new/`, { name, email }).catch((err) => {
    console.log("err", err);
  });
};

export default {
  createAccount,
  getAccount,
};
