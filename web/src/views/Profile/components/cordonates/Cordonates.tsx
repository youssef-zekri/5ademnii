import React from 'react'
import CordonatesOption from './CordonatesOption'

export default function Cordonates() {
  return (
    <div className='Cordonates'>
        <CordonatesOption text={'Name'}/>
        <CordonatesOption text={'Email'}/>
        <CordonatesOption text={'Phone'} type={'tel'}/>
        <CordonatesOption text={'Adress'}/>
    </div>
  )
}
