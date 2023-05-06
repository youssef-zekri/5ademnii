import { TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../../../data/Store/Store'
import { setProfile } from '../../../../data/Reducers/userProfile'
interface props {
    icon : any,
    text : string
}
export default function ContactOption(props : props) {
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
    <article className='contacts_option'>
    <img src={props.icon} alt="git" className='contacts_option-icon' />
            <TextField   size="small" id="outlined-basic" label={props.text} variant="outlined" onChange={(e)=>inputChanged(e.target.value)}/>
            </article>
       
  )
}
