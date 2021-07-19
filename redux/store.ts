import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import order from "./slices/orderSlice";
import account from "./slices/accountSlice";
import restaurant from "./slices/restaurantSlice";
import menu from "./slices/menuSlice";

const reducer = combineReducers({
  order,
  account,
  restaurant,
  menu,
});
const store = configureStore({
  reducer,
});
export default store;
