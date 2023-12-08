import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./slices/UserSlice";
// import { curryGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";

export const store = configureStore({
  reducer: {
    user: UserSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
