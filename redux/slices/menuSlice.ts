import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";

export const getMenuItemOptionsById = createAsyncThunk(
  "menu/getMenuItemOptionsById",
  async (itemId: string) => {
    console.log("________MENU THUNK ID", itemId);
    const { data: itemOptionCategories } = await api.menu.getItemOptions(
      itemId
    );
    return itemOptionCategories;
  }
);

export const menuSlice = createSlice({
  name: "order",
  initialState: {
    status: "idle",
    error: null,
    itemOptionCategories: [],
  },
  reducers: {},
  extraReducers: {
    [getMenuItemOptionsById.fulfilled]: (state, action) => {
      const data = action.payload;
      const values = { quantity: 1 };
      for (const optionCategory of data) {
        for (const singleOption of optionCategory.options) {
          values[singleOption.option_id] = {
            defaultValue: singleOption.default_value,
            value: singleOption.default_value,
            selectorType: singleOption.selector_type,
          };
        }
      }

      state.itemOptionCategories = action.payload;
    },
  },
});

export default menuSlice.reducer;
