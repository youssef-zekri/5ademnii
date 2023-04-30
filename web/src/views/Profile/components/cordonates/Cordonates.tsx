import React from 'react'
import CordonatesOption from './CordonatesOption'
import { useSelector } from 'react-redux'
export default function Cordonates() {
  const data = useSelector((state : any)=>state?.Info.data)
  return (
    <div className='Cordonates'>
        <CordonatesOption text={'Name'} value={data.Name}/>
        <CordonatesOption text={'Email'}value={data.email}/>
        <CordonatesOption text={'Phone'} type={'tel'} value={data.tel}/>
        <CordonatesOption text={'Address'} value={data.Address}/>
    </div>
  )
}
