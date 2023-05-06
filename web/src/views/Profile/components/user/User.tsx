import React, { useState } from "react";
import Profile from "../../../../assets/images/profile.png";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../data/Store/Store";
import { setProfile } from "../../../../data/Reducers/userProfile";

export default function User() {
   const [img , setImg] = useState(Profile)
   const dispatch = useDispatch<AppDispatch>()
   const [timer, setTimer] = useState(0);
   const UpdateProfileInformation=(name : string)=>{
     const Payload : any = {name :'job' ,value : name}
     dispatch(setProfile(Payload))
   }
   const UpdateProfilImg=(Img : string)=>{
    const Payload : any = {name :'Photo' ,value : Img}
    dispatch(setProfile(Payload))
  }
   const inputChanged = (name: string) => {
     clearTimeout(timer);
 
     const newTimer: any = setTimeout(() => {
       UpdateProfileInformation(name)
     }, 500);
 
     setTimer(newTimer);
   };
  return (
    <div className="User">
        <div className="User-avatar">
        <img src={img} alt="user" className="User-avatar-img"/>
        <div className="User-avatar-upload">
        <input type="file" id="upload"  name="avatar" 
        accept="image/png , image/jpeg" hidden onChange={(e)=>{
          const Img = URL.createObjectURL( e.target.files[0])
          setImg(Img);
          UpdateProfilImg(Img);
          }}/>
        <label htmlFor="upload" id='upload-file'>Choose file</label>
        </div>
        </div>
      <input type="text" defaultValue={'Full Stack Developer'} className="User-job" onChange={(e)=>inputChanged(e.target.value)} />
    </div>
  );
}
