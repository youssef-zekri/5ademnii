import { TextField } from '@mui/material'
import React from 'react'
interface props {
    icon : any,
    text : string
}
export default function ContactOption(props : props) {
  return (
    <article className='contacts_option'>
    <img src={props.icon} alt="git" className='contacts_option-icon' />
            <TextField   size="small" id="outlined-basic" label={props.text} variant="outlined" />
            </article>
       
  )
}
