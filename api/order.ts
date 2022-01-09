
import axios from '../axios';

const getSquareOrder = (orderId: string) => {
  console.log("orderId--", orderId);
  return axios.get(`/order/square/${orderId}`).catch((err) => {
    console.error(err);
  });
};

export default {
  getSquareOrder,
}; 
