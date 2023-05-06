import React, { useState } from 'react'
import ProgressBar from 'react-customizable-progressbar'
import CordonatesOption from '../cordonates/CordonatesOption'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../../data/Store/Store'
import { setProfile } from '../../../../data/Reducers/userProfile'

export default function Skills() {
  const dispatch = useDispatch<AppDispatch>()
  const [timer, setTimer] = useState(0);
  const UpdateProfileInformation=(name : string)=>{
    console.log(name)
    const Payload : any = {name :'skills' ,value : name}
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
<div className="progress__container">
      <CordonatesOption text={'University'}  icon={"fa-solid fa-building-columns"}/>
      <CordonatesOption text={'work'}  icon={"fa-solid fa-briefcase"}/>
      <CordonatesOption text={'age'}  icon={"fa-solid fa-hashtag"} type='number'/>
      <input type='text' className='progress__container_skills' placeholder='skills' onChange={(e)=>inputChanged(e.target.value)}/>
    </div>
  )
}
