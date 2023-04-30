import { createSlice } from "@reduxjs/toolkit";
export const Reducer = createSlice({
  name: "jobs",
  initialState: {
data : {
    company : 'eaasyy',
    img : 'youssef.essedik.zekri@gmail.com',
    description : "we need a software developer " ,
    requirements : ["ts" , "react" , "+ 2 years of experience"],


}
  },
  reducers: {
  },
});
export const {} = Reducer.actions;
export default Reducer.reducer;
