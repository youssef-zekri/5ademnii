import React from 'react'
import github from '../../../../assets/images/github.png'
import dn from '../../../../assets/images/dn.png'
import twiter from '../../../../assets/images/twiter.png'
import ContactOption from './ContactOption'
export default function Contact() {
  return (
    <div className='contacts'>
  <ContactOption icon={github} text='git'/>
  <ContactOption icon={dn} text="Linked in"/>
  <ContactOption icon={twiter} text='Twiter'/>
   
    </div>
  )
}
