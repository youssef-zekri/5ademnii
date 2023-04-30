import * as React from 'react';
import notification from '../../assets/svgs/notification.svg'
import { useState } from 'react';

export default function Menu() {
    const [Notification , setNotification] = useState(false)
  return (
    <div className='Menu'>
    <div className='Menu_labels'>
        <p className='Menu_title'>Menu</p>
        <input type='text' className='Menu_input'/>
    </div>
    <div className='Menu_Options'>
   <img src={notification} alt="notif" className='Menu_Options-icon' onClick={()=>setNotification(!Notification)} />
    </div>
    { Notification?   <div className='Menu_Notifications'>
        <p className='Menu_Notifications-title'>notifications</p>
</div>
:null
    }

    </div>
  )
}
