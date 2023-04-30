import React from "react";
import Profile from "../../../../assets/images/profile.png";

export default function User() {
    const setImg=(e)=>{
        console.log(e.value)
    }
  return (
    <div className="User">
        <div className="User-avatar">
        <img src={Profile} alt="user" className="User-avatar-img"/>
        <input type="file" id="upload" className="User-avatar-upload" name="avatar" 
        accept="image/png , image/jpeg" hidden onChange={(e)=>setImg(e)}/>
        <label htmlFor="upload">Choose file</label>
        </div>
      <p className="User-job">Full Stack Developer</p>
      <p className="User-location">tunisie sfax</p>
    </div>
  );
}
