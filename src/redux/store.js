import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import infoReducer from "./reducers/infoReducer";

const store = configureStore({
  reducer: { info: infoReducer },
  middleware: getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
