import React from 'react'
import User from './components/user/User'
import Contact from './components/contacts/Contact'
import Cordonates from './components/cordonates/Cordonates'
import Skills from './components/skills/Skills'
import { useNavigate } from 'react-router-dom'
export default function Profile() {
  const navigate = useNavigate()
  const Inherit = ()=>{
    navigate('/profile/12')
  }
  return (
    <div>
    <div className='Profile'>
        <User/>
        <Cordonates/>
        <Contact />
        <Skills />
    </div>
    <div className='Profile_buttons'>
<button className='Profile_button save-btn'>Save <i className="fa-solid fa-cloud-arrow-up"></i></button>
<button className='Profile_button inherit-btn' onClick={()=>Inherit()}>inherit <i className="fa-regular fa-star"></i></button>
    </div>
    </div>
  )
}
