import axios from "../axios";


const getMenu = async (id: string) => {
  console.log("===GET MENU")

  return axios.get(`/restaurant/${id}/menu`).catch((err) => {
    console.log("err", err);
    console.log(err);
  });
};

export default {
  getMenu,
};
