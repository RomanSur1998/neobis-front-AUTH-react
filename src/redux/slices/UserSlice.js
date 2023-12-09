import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/api";

const initialState = {
  user: {},
  token: "",
  error: false,
  status: null,
};

export const registrUser = createAsyncThunk(
  "user/registrUser",
  async ({ code, navigate }, { rejectWithValue }) => {
    try {
      console.log("Проходит запрос", code);
      const response = await api.confirmRegistr(code, navigate);
      let data = JSON.parse(localStorage.getItem("tokens"));
      data = response.data;
      localStorage.setItem("tokens", JSON.stringify(data));
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.detail);
    }
  }
);
export const signUpUser = createAsyncThunk(
  "user/signUpUser",
  async ({ data, navigate }, { rejectWithValue, dispatch }) => {
    try {
      console.log("Проходит запрос", data);
      const response = await api.registration(data, navigate);
      console.log("Пришел response", response);
      dispatch(setUser(data));
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.detail);
    }
  }
);

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
      state.token = action.payload;
    },
    setLogin(state, action) {
      state.user = {
        email: action.payload.email,
        password: action.payload.password,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registrUser.pending, (state, action) => {
      state.status = "Loading";
    });
    builder.addCase(registrUser.fulfilled, (state, action) => {
      state.token = action.payload;
      state.status = null;
    });

    builder.addCase(registrUser.rejected, (state, action) => {
      console.log("rejected", action.payload);
      state.error = action.payload;
      state.status = null;
    });
  },
});

export const { setUser, setToken, setLogin } = userSlice.actions;
export default userSlice.reducer;
