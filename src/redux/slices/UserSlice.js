import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.login = action.payload.login;
      state.password = action.payload.password;
      state.confirm = action.payload.confirm;
    },
    setToken(state, action) {
      state.token = action.payload.token;
    },
  },
});

export const { setUser, setToken } = userSlice.actions;
export default userSlice.reducer;
