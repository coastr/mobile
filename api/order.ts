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
      console.error(err);
    });
};

const updateItemInOrder = ({
  orderId,
  orderItemId,
  quantity,
  optionValues,
}) => {
  return axios
    .put(`/order/${orderId}/item/${orderItemId}`, {
      quantity,
      optionValues,
    })
    .catch((err) => {
      console.error(err);
    });
};

const deleteItem = ({ orderId, orderItemId }) => {
  return axios.delete(`/order/${orderId}/item/${orderItemId}`).catch((err) => {
    console.error(err);
  });
};

export default {
  addItemToOrder,
  getActiveOrder,
  updateItemInOrder,
  deleteItem,
};
