import axios from "../axios";

const getActiveOrder = (restaurantId: string) => {
  return axios.get(`/order/restaurant/${restaurantId}/active`).catch((err) => {
    console.error(err);
  });
};

const addItemToOrder = ({
  orderId,
  restaurantId,
  menuItemId,
  quantity,
  optionValues,
}) => {
  return axios
    .post(`/order/${orderId}/item`, {
      restaurantId,
      menuItemId,
      quantity,
      optionValues,
    })
    .catch((err) => {
      console.error("err", err);
    });
};

export default {
  addItemToOrder,
  getActiveOrder,
};
