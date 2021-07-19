import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";

export const getActiveOrder = createAsyncThunk(
  "order/getActiveOrder",
  async () => {
    const { data: activeOrder } = await api.order.getActiveOrder(
      "232d03a0-2001-4a1d-8d07-cbeaaf0ca99a"
    );
    return activeOrder;
  }
);

export const addItemToOrder = createAsyncThunk(
  "order/addItemToOrder",
  async (
    { orderId, restaurantId, menuItemId, quantity, optionValues },
    thunkAPI
  ) => {
    const { data: id } = await api.order.addItemToOrder({
      orderId,
      restaurantId,
      menuItemId,
      quantity,
      optionValues,
    });
    thunkAPI.dispatch(getActiveOrder());
    return id;
  }
);

export const orderSlice = createSlice({
  name: "order",
  initialState: {
    status: "idle",
    error: null,
    activeOrder: {
      tip: 0,
      restaurantId: "",
      items: [],
      status: "",
      orderId: "",
    },
  },
  reducers: {},
  extraReducers: {
    [getActiveOrder.fulfilled]: (state, action) => {
      state.activeOrder = action.payload;
    },
    [addItemToOrder.fulfilled]: (state, action) => {
      state.activeOrder.orderId = action.payload;
    },
  },
});

export default orderSlice.reducer;
