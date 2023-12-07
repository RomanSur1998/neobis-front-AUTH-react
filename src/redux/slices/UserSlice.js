import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/api";

const initialState = {
  user: {},
  token: "",
  error: false,
};

const registrUser = createAsyncThunk("user/registrUser", async () => {
  const response = await api.registration();
  return response;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = {
        email: action.payload.email,
        username: action.payload.username,
        password: action.payload.password,
      };
    },
    setToken(state, action) {
      state.token = action.payload.token;
    },
    setLogin(state, action) {
      state.user = {
        email: action.payload.email,
        password: action.payload.password,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registrUser.fulfilled, (state) => {
      state.token = action.payload.token;
    });

    builder.addCase(registrUser.rejected, (state) => {
      state.error = action.payload.error;
    });
  },
});

export const { setUser, setToken, setLogin } = userSlice.actions;
export default userSlice.reducer;
