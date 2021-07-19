import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";

export const accountSlice = createSlice({
  name: "account",
  initialState: {
    status: "idle",
    error: null,
    token: "",
  },
  reducers: {
    setToken: (state, action) => {
      console.log("=======================action.payload", action.payload);
      state.token = action.payload;
    },
  },
});

export const { setToken } = accountSlice.actions;

export default accountSlice.reducer;
