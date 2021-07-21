import axios from "../axios";

const getMenu = async (id: string) => {
  return axios.get(`/restaurant/${id}/menu`).catch((err) => {
    console.log("err", err);
    console.log(err);
  });
};

export default {
  getMenu,
};
