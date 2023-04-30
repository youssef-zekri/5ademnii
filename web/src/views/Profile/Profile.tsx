import React from 'react'
import User from './components/user/User'
import Contact from './components/contacts/Contact'
import Cordonates from './components/cordonates/Cordonates'
import Skills from './components/skills/Skills'
export default function Profile() {
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
<button className='Profile_button inherit-btn'>inherit <i className="fa-regular fa-star"></i></button>
    </div>
    </div>
  )
}
