import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";

export const getMenuByRestaurantId = createAsyncThunk(
  "restaurant/getMenuByRestaurantId",
  async (restaurantId: string) => {
    const { data: menu } = await api.restaurant.getMenu(
      "232d03a0-2001-4a1d-8d07-cbeaaf0ca99a"
    );
    return menu;
  }
);

export const getRestaurantById = createAsyncThunk(
  "restaurant/getRestaurantById",
  async (restaurantId: string) => {
    const { data: menu } = await api.restaurant.getMenu(
      "232d03a0-2001-4a1d-8d07-cbeaaf0ca99a"
    );
    return menu;
  }
);

export const restaurantSlice = createSlice({
  name: "order",
  initialState: {
    status: "idle",
    error: null,
    menu: [],
  },
  reducers: {},
  extraReducers: {
    [getMenuByRestaurantId.fulfilled]: (state, action) => {
      state.menu = action.payload;
    },
  },
});

export default restaurantSlice.reducer;
