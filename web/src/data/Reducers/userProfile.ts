import { createSlice } from "@reduxjs/toolkit";

export const Reducer = createSlice({
  name: "user",
  initialState: {
data : {
    Photo : '',
    job : '',
    Name : '',
    Email : '',
    Phone : '',
    Adress : '',
    University : '',
    work : '',
    Age : '0',
    skills : '',
    git : '',
    facebook : '',
    instagram : '',
    twiter : '',
    linkdin : '',


}
  },
  reducers: {
    setProfile : (state , {payload} :any)=>{
        console.log(payload)
        const arr =JSON.parse(JSON.stringify(state.data))
        payload.name === 'Photo'?
        arr.Photo= payload.value :
        payload.name === 'job'?
       arr.job = payload.value :
        payload.name === 'Name'?
       arr.Name = payload.value :
        payload.name ==='Email'?
       arr.Email = payload.value :
        payload.name === 'Phone'?
       arr.Phone = payload.value :
        payload.name === 'Address'?
       arr.Adress = payload.value :
        payload.name === 'University'?
       arr.University = payload.value :
        payload.name === 'work'?
       arr.work = payload.value :
        payload.name === 'age'?
       arr.Age = payload.value :
        payload.name === 'skills'?
       arr.skills = payload.value :
        payload.name === 'git'?
       arr.git = payload.git :
        payload.name === 'facebook'?
       arr.facebook = payload.value :
        payload.name === 'instagram'?
       arr.instagram = payload.value :
        payload.name === 'twiter'?
       arr.twiter = payload.value:
        payload.name === 'linked in'?
       arr.linkdin = payload.value :
        console.log('type not allowed')
    state.data = arr;
    console.log(arr)

    }
  },
});
export const {setProfile} = Reducer.actions;
export default Reducer.reducer;
