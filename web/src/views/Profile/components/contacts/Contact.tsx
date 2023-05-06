import React from 'react'
import github from '../../../../assets/images/github.png'
import dn from '../../../../assets/images/dn.png'
import twiter from '../../../../assets/images/twiter.png'
import ContactOption from './ContactOption'
import instagram from '../../../../assets/images/insta.png'
import facebook from '../../../../assets/images/Facebook-Logo.png'
export default function Contact() {
  return (
    <div className='contacts'>
  <ContactOption icon={github} text='git'/>
  <ContactOption icon={dn} text="linked in"/>
  <ContactOption icon={twiter} text='twiter'/>
  <ContactOption icon={instagram} text='instagram'/>
  <ContactOption icon={facebook} text='facebook'/>
    </div>
  )
}
