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
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
