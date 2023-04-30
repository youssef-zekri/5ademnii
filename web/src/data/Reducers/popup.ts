import { createSlice } from "@reduxjs/toolkit";
export const Reducer = createSlice({
  name: "popup",
  initialState: {
    value :0
  },
  reducers: {
    hidePopUp : (state)=>{
      state.value = 0;
    },
    showPopUp : (state)=>{
      state.value = 1;
    }
  },
});
export const {hidePopUp , showPopUp} = Reducer.actions;
export default Reducer.reducer;
