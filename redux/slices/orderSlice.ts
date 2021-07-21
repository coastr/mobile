import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
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

export const updateItemInOrder = createAsyncThunk(
  "order/updateItemInOrder",
  async ({ orderId, orderItemId, quantity, optionValues }, thunkAPI) => {
    await api.order.updateItemInOrder({
      orderId,
      orderItemId,
      quantity,
      optionValues,
    });
    thunkAPI.dispatch(getActiveOrder());
  }
);

export const deleteItemFromOrder = createAsyncThunk(
  "order/updateItemInOrder",
  async ({ orderId, orderItemId }, thunkAPI) => {
    await api.order.deleteItem({
      orderId,
      orderItemId,
    });
    thunkAPI.dispatch(getActiveOrder());
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
    currentItem: {},
  },
  reducers: {
    setCurrentItem: (state, action: PayloadAction) => {
      state.currentItem = action.payload;
    },
  },
  extraReducers: {
    [getActiveOrder.fulfilled]: (state, action) => {
      state.activeOrder = action.payload;
    },
    [addItemToOrder.fulfilled]: (state, action) => {
      state.activeOrder.orderId = action.payload;
    },
  },
});

export const { setCurrentItem } = orderSlice.actions;

export default orderSlice.reducer;
