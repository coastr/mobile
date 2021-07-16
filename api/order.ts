import axios from "axios";
import { COASTR_URL } from "@env";

axios.defaults.baseURL = `${COASTR_URL}`;

const addItemToOrder = ({
  orderId,
  restaurantId,
  price,
  menuItemId,
  numberOfItems,
  optionValues,
}) => {
  return axios
    .post(`/order/${orderId}/item`, {
      restaurantId,
      price,
      menuItemId,
      numberOfItems,
      optionValues,
    })
    .catch((err) => {
      console.log("err", err);
    });
};

export default {
  addItemToOrder,
};
