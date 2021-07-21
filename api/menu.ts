import axios from "../axios";
import { COASTR_URL } from "@env";

const getItemOptions = (id: string) => {
  return axios.get(`/menu/item/${id}/options`).catch((err) => {
    console.log("err", err);
  });
};

export default {
  getItemOptions,
};
