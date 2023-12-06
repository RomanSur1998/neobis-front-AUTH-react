import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/api";

const initialState = {};

const registrUser = createAsyncThunk("user/registrUser", async () => {
  const response = await api.registration();
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.username = action.payload.username;
      state.password = action.payload.password;
    },
    setToken(state, action) {
      state.token = action.payload.token;
    },
    setLogin(state, action) {
      state.username = action.payload.username;
      state.password = action.payload.password;
    },
  },
});

export const { setUser, setToken, setLogin } = userSlice.actions;
export default userSlice.reducer;
