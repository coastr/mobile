import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const accountSlice = createSlice({
  name: "account",
  initialState: {
    status: "idle",
    error: null,
    token: "",
    isAnonymous: true,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setAnonymous: (state, action) => {
      state.isAnonymous = action.payload;
    },
  },
});

export const { setToken, setAnonymous } = accountSlice.actions;

export default accountSlice.reducer;
