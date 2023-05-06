import { configureStore } from "@reduxjs/toolkit";
import popup from "../Reducers/popup";
import Info from "../Reducers/Info";
import jobs from "../Reducers/jobs";
import userProfile from "../Reducers/userProfile";

const store = configureStore({
  reducer: {
    popup,
    Info ,
    jobs,
    userProfile,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
