import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const accountSlice = createSlice({
  name: "account",
  initialState: {
    status: "idle",
    error: null,
    token: "",
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setToken } = accountSlice.actions;

export default accountSlice.reducer;
