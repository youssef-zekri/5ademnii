import { createSlice } from "@reduxjs/toolkit";
export const Reducer = createSlice({
  name: "info",
  initialState: {
data : {
    Name : 'youssef zekri',
    email : 'youssef.essedik.zekri@gmail.com',
    tel : "26552074" ,
    Address : "sfax",
    git : '@youssef-zekri',

}
  },
  reducers: {
  },
});
export const {} = Reducer.actions;
export default Reducer.reducer;
