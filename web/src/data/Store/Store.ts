import { configureStore } from "@reduxjs/toolkit";
import popup from "../Reducers/popup";

const store = configureStore({
  reducer: {
    popup,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
