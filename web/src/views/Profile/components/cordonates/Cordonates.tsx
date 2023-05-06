import React from 'react'
import CordonatesOption from './CordonatesOption'
import { useSelector } from 'react-redux'
export default function Cordonates() {
  const data = useSelector((state : any)=>state?.Info.data)
  return (
    <div className='Cordonates'>
        <CordonatesOption text={'Name'} icon={"fa-solid fa-user"}/>
        <CordonatesOption text={'Email'} icon={"fa-regular fa-envelope"} type='email'/>
        <CordonatesOption text={'Phone'} type={'tel'} icon={"fa-solid fa-phone-volume"}/>
        <CordonatesOption text={'Address'}  icon={"fa-solid fa-location-dot"}/>
        
    </div>
  )
}
