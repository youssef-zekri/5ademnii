import { TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../data/Store/Store';
import { setProfile } from '../../../../data/Reducers/userProfile';
interface props {
text : string ;
value? : string;
type? : string,
icon?: string
}
export default function CordonatesOption(props:props) {
  const dispatch = useDispatch<AppDispatch>()
  const [timer, setTimer] = useState(0);
  const UpdateProfileInformation=(name : string)=>{
    console.log(name)
    const Payload : any = {name :props.text ,value : name}
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
        <div className="input-icons">
                <i className={`${props.icon} icons`}>
              </i>
                <input className="input-field" 
                       type={props.type}
                       placeholder={props.text} 
                       onChange={(e)=>inputChanged(e.target.value)}/>
    </div>
           
      )
}
