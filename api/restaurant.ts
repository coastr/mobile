import axios from "axios";
import { COASTR_URL } from "@env";

axios.defaults.baseURL = `${COASTR_URL}`;

const getMenu = (id: string) => {
  console.log("id", id);
  console.log("COASTR_URL", COASTR_URL);
  return axios.get(`/restaurant/${id}/menu`).catch((err) => {
    console.log("err", err);
  });
};

export default {
  getMenu,
};
